import re
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path

import pytest
from docx import Document

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

import yigish as y  # noqa: E402

NAMUNA = Path(__file__).resolve().parent / "namuna"
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
M = "{http://schemas.openxmlformats.org/officeDocument/2006/math}"


@pytest.fixture(scope="module")
def chiqish(tmp_path_factory):
    ildiz = tmp_path_factory.mktemp("ildiz")
    shutil.copytree(NAMUNA, ildiz, dirs_exist_ok=True)
    docx_yoli, pdf_yoli = y.yigish(ildiz, tuzilish=False)
    return ildiz, docx_yoli, pdf_yoli


def matn_royxati(docx_yoli):
    """Asosiy matnning barcha paragraflari (formulalar matni ham kiradi)."""
    hujjat = Document(str(docx_yoli))
    natija = []
    for p in hujjat.element.body.iter(f"{W}p"):
        natija.append("".join(t.text or "" for t in p.iter(f"{W}t", f"{M}t")))
    return natija, hujjat


def test_fayllar_va_nomlari(chiqish):
    ildiz, d, p = chiqish
    assert d == ildiz / "chiqish" / "matematika-poydevori.docx" and d.exists()
    assert p == ildiz / "chiqish" / "matematika-poydevori.pdf" and p.exists()


def test_formulalar_tenglama_bo_lib_chiqadi(chiqish):
    _, d, _ = chiqish
    xml = zipfile.ZipFile(d).read("word/document.xml").decode("utf-8")
    assert "<m:oMath" in xml
    matn, _ = matn_royxati(d)
    butun = "\n".join(matn)
    # R2: xom LaTeX bo'lmasin; \$15 (valyuta) ruxsat etiladi
    assert not re.search(r"\\[A-Za-z]+|\^\{|_\{|\$[A-Za-z\\]", butun), butun
    assert "\\frac" not in butun
    assert "$15" in butun  # R2: valyuta belgisi saqlanadi


def test_javob_mashq_ostida_korinmaydi(chiqish):
    _, d, _ = chiqish
    matn, hujjat = matn_royxati(d)
    # oxirgi "Javoblar" 1-darajali sarlavha (mundarijadagi yozuv emas)
    idx = [i for i, p in enumerate(hujjat.paragraphs)
           if p.text.strip() == "Javoblar" and p.style.name == "Heading 1"]
    assert len(idx) == 1
    bosh = hujjat.paragraphs[idx[0]]._p
    # body elementlarini tartib bilan yig'amiz
    oldin, keyin, bosh_korildi = [], [], False
    for el in hujjat.element.body.iterchildren():
        if el is bosh:
            bosh_korildi = True
        txt = "".join(t.text or "" for t in el.iter(f"{W}t", f"{M}t"))
        (keyin if bosh_korildi else oldin).append(txt)
    oldin, keyin = "\n".join(oldin), "\n".join(keyin)
    for javob in ("7/12", "5/8"):
        assert javob not in oldin
        assert javob in keyin


def test_javoblar_bob_boyicha_va_label(chiqish):
    _, d, _ = chiqish
    _, hujjat = matn_royxati(d)
    matn = "\n".join(p.text for p in hujjat.paragraphs)
    # R4: m/s uchun "<bob>.<n>", d/y uchun "<n>"
    assert re.search(r"1\.1\.\s*7/12", matn)
    assert re.search(r"1\.2\.\s*5/8", matn)
    assert re.search(r"(?<![\d.])1\.\s*12", matn)  # d-1 -> "1."
    assert "C" in matn.split("Javoblar")[-1]
    # tartib: Kirish, 1-bob, Yakuniy test
    j = matn.split("\nJavoblar\n")[-1]
    assert j.index("Kirish") < j.index("Kasrlar") < j.index("Yakuniy test")


def test_mashq_raqamlash_va_misol(chiqish):
    _, d, _ = chiqish
    _, hujjat = matn_royxati(d)
    matn = "\n".join(p.text for p in hujjat.paragraphs)
    assert "1.1." in matn and "1.2." in matn  # mashq belgilari (R4)
    assert "Misol 1." in matn and "Misol 2." in matn  # R1
    assert "javob=" not in matn and "daraja" not in matn and "{.mashq" not in matn


def test_qism_sarlavhasi(chiqish):
    _, d, _ = chiqish
    _, hujjat = matn_royxati(d)
    h1 = [p.text for p in hujjat.paragraphs if p.style.name == "Heading 1"]
    assert "I qism. Sonlar va arifmetika" in h1  # R3
    assert h1.index("I qism. Sonlar va arifmetika") < h1.index("Kasrlar (namuna bob)")


def test_rasm_kiritilgan(chiqish):
    _, d, _ = chiqish
    nomlar = zipfile.ZipFile(d).namelist()
    assert any(n.startswith("word/media/") and n.endswith(".png") for n in nomlar)


def test_lugat_takrorsiz(chiqish):
    _, d, _ = chiqish
    _, hujjat = matn_royxati(d)
    sarlavhalar = [p.text for p in hujjat.paragraphs if p.style.name == "Heading 1"]
    assert "Lug'at" in sarlavhalar
    # Lug'at jadvali hujjatdagi oxirgi jadval (bob jadvallari undan oldin)
    satrlar = [[c.text for c in r.cells] for r in hujjat.tables[-1].rows]
    assert satrlar[0] == ["O'zbekcha", "English"]
    onli = [s for s in satrlar if "nli kasr" in s[0]]
    assert onli == [["o'nli kasr", "decimal fraction"]]
    assert all("\u02bb" not in c for s in satrlar for c in s)
    # alifbo tartibi: kasr, maxraj, o'nli kasr, tenglama
    birinchi = [s[0] for s in satrlar if s and s[0] in ("kasr", "maxraj", "o'nli kasr", "tenglama")]
    assert birinchi == ["kasr", "maxraj", "tenglama", "o'nli kasr"]


def pdf_matn(pdf, birinchi=None, oxirgi=None):
    buyruq = ["pdftotext", "-layout"]
    if birinchi:
        buyruq += ["-f", str(birinchi), "-l", str(oxirgi or birinchi)]
    return subprocess.run(buyruq + [str(pdf), "-"], capture_output=True, text=True, check=True).stdout


def test_muqova(chiqish):
    _, _, pdf = chiqish
    sahifa = pdf_matn(pdf, 1)
    assert "Matematika poydevori" in sahifa
    assert "Sunnatulla Xolmurodov" in sahifa
    assert "SAT'ga tayyorgarlik uchun" in sahifa


def test_pdf_mundarija_toldirilgan(chiqish):
    _, _, pdf = chiqish
    matn = pdf_matn(pdf, 1, 3)
    for nom in ("Kasrlar (namuna bob)", "Lug'at", "Javoblar", "I qism. Sonlar va arifmetika"):
        qatorlar = [q for q in matn.splitlines() if nom in q]
        assert qatorlar, f"mundarijada {nom!r} yo'q:\n{matn}"
        assert re.search(r"\d+\s*$", qatorlar[0]), f"bet raqami yo'q: {qatorlar[0]!r}"
    # bet raqami haqiqiy betga mos
    q = [q for q in matn.splitlines() if "Kasrlar (namuna bob)" in q][0]
    bet = int(re.search(r"(\d+)\s*$", q).group(1))
    jami = int(re.search(r"Pages:\s+(\d+)", subprocess.run(
        ["pdfinfo", str(pdf)], capture_output=True, text=True).stdout).group(1))
    assert 1 < bet <= jami
    assert "Kasrlar (namuna bob)" in pdf_matn(pdf, bet)


def test_bet_raqami_pastda(chiqish):
    _, _, pdf = chiqish
    sahifa = pdf_matn(pdf, 4)
    oxirgi = [q.strip() for q in sahifa.splitlines() if q.strip()][-1]
    assert re.fullmatch(r"\d+", oxirgi), oxirgi


def test_notogri_javobda_yigish_toxtaydi(tmp_path):
    shutil.copytree(NAMUNA, tmp_path, dirs_exist_ok=True)
    f = tmp_path / "boblar" / "01-namuna.md"
    f.write_text(f.read_text(encoding="utf-8").replace('javob="7/12"', 'javob="5/12"'), encoding="utf-8")
    with pytest.raises(SystemExit) as e:
        y.yigish(tmp_path, tuzilish=False)
    assert e.value.code == 1
    assert not (tmp_path / "chiqish" / "matematika-poydevori.docx").exists()


def test_tuzilish_xatosi_yigishni_toxtatadi(tmp_path):
    """Namuna bob to'liq emas (2 mashq): standart rejimda yig'ish to'xtaydi."""
    shutil.copytree(NAMUNA, tmp_path, dirs_exist_ok=True)
    with pytest.raises(SystemExit) as e:
        y.yigish(tmp_path)
    assert e.value.code == 1
    assert not (tmp_path / "chiqish" / "matematika-poydevori.docx").exists()


def test_bosh_ildiz_yigiladi(tmp_path):
    """boblar/ va javoblar/ yo'q bo'lsa ham muqova va mundarija bilan yig'iladi."""
    docx_yoli, pdf_yoli = y.yigish(tmp_path)
    assert docx_yoli.exists() and pdf_yoli.exists()
    assert "Sunnatulla Xolmurodov" in pdf_matn(pdf_yoli, 1)


def test_sat_yorligi_S_bilan(chiqish):
    """R6: SAT 'S1.1.', mashq '1.1.' (matn va Javoblarda)."""
    _, d, _ = chiqish
    _, hujjat = matn_royxati(d)
    paragraflar = [p.text for p in hujjat.paragraphs]
    j = next(i for i, p in enumerate(hujjat.paragraphs)
             if p.text.strip() == "Javoblar" and p.style.name == "Heading 1")
    tana, javoblar = paragraflar[:j], paragraflar[j:]
    assert any(t.startswith("S1.1. A notebook costs") for t in tana)
    assert any(t.startswith("1.1.") and "hisoblang" in t for t in tana)
    assert not any(t.startswith("1.1. A notebook") for t in tana)
    assert any(re.search(r"SAT ko'prigi:\s*S1\.1\.\s*C", t) for t in javoblar)
    assert any(re.search(r"Mashqlar:\s*1\.1\.\s*7/12;\s*1\.2\.\s*5/8", t) for t in javoblar)


def test_javobda_figurali_qavs_javoblarda_tenglama(tmp_path):
    """R9: \\frac{3}{4} va x^{2}+1 javoblari Javoblar bo'limida tenglama bo'lib chiqadi."""
    shutil.copytree(NAMUNA, tmp_path, dirs_exist_ok=True)
    f = tmp_path / "boblar" / "01-namuna.md"
    f.write_text(f.read_text(encoding="utf-8").replace(
        "## SAT ko'prigi",
        '::: {.mashq #m1-3 daraja="C" javob="\\frac{3}{4}"}\nBirinchi kasrni yozing.\n:::\n\n'
        '::: {.mashq #m1-4 daraja="C" javob="x^{2}+1"}\nIkkinchi ifodani yozing.\n:::\n\n'
        "## SAT ko'prigi"), encoding="utf-8")
    g = tmp_path / "javoblar" / "01.py"
    g.write_text(g.read_text(encoding="utf-8") +
                 'JAVOBLAR["m1-3"] = "\\\\frac{3}{4}"\nJAVOBLAR["m1-4"] = "x^{2}+1"\n', encoding="utf-8")
    d, _ = y.yigish(tmp_path, tuzilish=False)
    _, hujjat = matn_royxati(d)
    bosh = next(p._p for p in hujjat.paragraphs
                if p.text.strip() == "Javoblar" and p.style.name == "Heading 1")
    keyin, korildi, oldin = [], False, []
    for el in hujjat.element.body.iterchildren():
        korildi = korildi or el is bosh
        (keyin if korildi else oldin).append(el)
    tenglamalar = sum(len(list(el.iter(f"{M}oMath"))) for el in keyin)
    assert tenglamalar >= 2
    matn = "".join(t.text or "" for el in keyin for t in el.iter(f"{W}t", f"{M}t"))
    assert "\\frac" not in matn and "$" not in matn
    assert "x" in matn and "+1" in matn.replace(" ", "")
