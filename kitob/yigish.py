#!/usr/bin/env python3
"""Kitobni yig'ish: tekshiruv -> rasmlar -> Pandoc (Word) -> LibreOffice (PDF).

Ishlatish:  python3 kitob/yigish.py
Chiqish:    kitob/chiqish/matematika-poydevori.docx va .pdf
"""
from __future__ import annotations

import os
import re
import shutil
import subprocess
import sys
import tempfile
import time
import unicodedata
import uuid
import zipfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import tekshir  # noqa: E402

KITOB = Path(__file__).resolve().parent
SHABLON = KITOB / "shablon"
CHIQISH_NOMI = "matematika-poydevori"

NOM = "Matematika poydevori"
KICHIK_NOM = "SAT'ga tayyorgarlik uchun"
MUALLIF = "Sunnatulla Xolmurodov"

# R3: qism sarlavhalari shu bob fayllaridan oldin qo'yiladi (fayl nomi prefiksi -> sarlavha)
QISMLAR = {
    "01": "I qism. Sonlar va arifmetika",
    "08": "II qism. Algebra asoslari",
    "16": "III qism. Ma'lumotlar va ehtimollik",
    "19": "IV qism. Geometriya",
}

# apostrofning turli ko'rinishlari -> `'`
APOSTROFLAR = "\u02bb\u02bc\u2018\u2019\u02b9\u0060\u00b4"
_APOSTROF_JADVALI = str.maketrans({c: "'" for c in APOSTROFLAR})


def apostrof(matn: str) -> str:
    return matn.translate(_APOSTROF_JADVALI)


# ------------------------------------------------------------------ lug'at

_LUGAT_BOLIMI = re.compile(
    r"^## Yangi so'zlar[ \t]*\n(.*?)(?=^#{1,2} |\Z)", re.MULTILINE | re.DOTALL)

# O'zbek lotin alifbosi (1995): a b d e f g h i j k l m n o p q r s t u v x y z oʻ gʻ sh ch
_ALIFBO = list("abdefghijklmnopqrstuvxyz") + ["o'", "g'", "sh", "ch"]


def _qator_hujayralari(qator: str) -> list[str]:
    qator = qator.strip()
    if qator.startswith("|"):
        qator = qator[1:]
    if qator.endswith("|"):
        qator = qator[:-1]
    return [h.strip() for h in qator.split("|")]


def lugat_qatorlari(md_text: str) -> list[tuple[str, str]]:
    """`## Yangi so'zlar` jadvallaridagi (o'zbekcha, inglizcha) juftliklari."""
    juftlar = []
    for bolim in _LUGAT_BOLIMI.findall(tekshir.kod_qismlarsiz(md_text)):
        for qator in bolim.splitlines():
            if not qator.strip().startswith("|"):
                continue
            h = _qator_hujayralari(qator)
            if len(h) < 2 or not h[0]:
                continue
            if re.fullmatch(r"[\s:\-|]+", qator):  # |---|---|
                continue
            if apostrof(h[0]).lower() == "o'zbekcha":  # sarlavha qatori
                continue
            juftlar.append((apostrof(h[0]), apostrof(h[1])))
    return juftlar


def _alifbo_kaliti(soz: str):
    """O'zbek alifbosi bo'yicha saralash kaliti (katta-kichik harf farqsiz)."""
    soz = unicodedata.normalize("NFC", apostrof(soz).lower())
    kalit, i = [], 0
    while i < len(soz):
        for harf in ("o'", "g'", "sh", "ch"):
            if soz.startswith(harf, i):
                kalit.append((1, _ALIFBO.index(harf)))
                i += len(harf)
                break
        else:
            c = soz[i]
            kalit.append((1, _ALIFBO.index(c)) if c in _ALIFBO else (0, ord(c)))
            i += 1
    return kalit


def _belgisiz(matn: str) -> str:
    return re.sub(r"[*_]", "", matn).strip().lower()


def lugat_markdown(boblar: list[Path]) -> str:
    korilgan = {}
    for f in boblar:
        for uz, en in lugat_qatorlari(f.read_text(encoding="utf-8")):
            korilgan.setdefault((_belgisiz(uz), _belgisiz(en)), (uz, en))
    qatorlar = sorted(korilgan.values(), key=lambda p: (_alifbo_kaliti(_belgisiz(p[0])), p[1]))
    chiqish = ["# Lug'at", "", "| O'zbekcha | English |", "|---|---|"]
    chiqish += [f"| {uz} | {en} |" for uz, en in qatorlar]
    return "\n".join(chiqish) + "\n"


# ----------------------------------------------------------------- javoblar

def _javob_matni(javob: str) -> str:
    """Javob oddiy matn: markdown belgilari qochiriladi ($ bo'lsa formula sifatida o'tadi)."""
    if "$" in javob:
        return javob
    return re.sub(r"([\\`*_{}\[\]<>#|~^])", r"\\\1", javob)


def _yorliq(id_: str) -> str:
    """R4: m/s -> '<bob>.<n>', d/y -> '<n>'."""
    m = re.fullmatch(r"[ms](\d+)-(\d+)", id_)
    if m:
        return f"{m.group(1)}.{m.group(2)}"
    m = re.fullmatch(r"[dy]-(\d+)", id_)
    return m.group(1) if m else id_


def javoblar_markdown(boblar: list[Path]) -> str:
    chiqish = ["# Javoblar", ""]
    for f in boblar:  # fayl nomi tartibi: 00, 01-21, 99
        matn = f.read_text(encoding="utf-8")
        royxat = tekshir.mashqlar(matn)
        if not royxat:
            continue
        sarlavha = re.search(r"^# (.+)$", tekshir.kod_qismlarsiz(matn), re.MULTILINE)
        chiqish += [f"## {sarlavha.group(1).strip() if sarlavha else f.stem}", ""]
        for tur, nom in (("mashq", "Mashqlar"), ("sat", "SAT ko'prigi")):
            qismlar = [f"**{_yorliq(m.id)}.** {_javob_matni(m.javob)}"
                       for m in royxat if m.tur == tur]
            if qismlar:
                chiqish += [f"*{nom}:* " + ";  ".join(qismlar), ""]
    return "\n".join(chiqish)


# ------------------------------------------------------------------ yig'ish

def bob_fayllari(ildiz: Path) -> list[Path]:
    papka = ildiz / "boblar"
    return sorted(papka.glob("*.md")) if papka.is_dir() else []


def birlashgan_markdown(ildiz: Path) -> str:
    boblar = bob_fayllari(ildiz)
    qismlar = []
    for f in boblar:
        prefiks = f.name.split("-")[0]
        if prefiks in QISMLAR:
            qismlar.append(f"# {QISMLAR[prefiks]}\n")
        qismlar.append(f.read_text(encoding="utf-8").strip() + "\n")
    qismlar.append(lugat_markdown(boblar))
    qismlar.append(javoblar_markdown(boblar))
    return "\n\n".join(qismlar)


def xato_chiqar(sarlavha: str, xatolar: list[str]) -> None:
    print(f"{sarlavha} ({len(xatolar)} ta xato):", file=sys.stderr)
    for x in xatolar:
        print(f"  - {x}", file=sys.stderr)


def rasmlarni_yarat(ildiz: Path) -> None:
    skriptlar = sorted((ildiz / "rasmlar").glob("*.py")) if (ildiz / "rasmlar").is_dir() else []
    env = dict(os.environ, MPLBACKEND="Agg")
    for s in skriptlar:
        r = subprocess.run([sys.executable, str(s)], cwd=ildiz, env=env,
                           capture_output=True, text=True)
        if r.returncode != 0:
            xato_chiqar("Rasm yaratilmadi", [f"{s.name}: {r.stderr.strip()[-600:]}"])
            raise SystemExit(1)


def pandoc_docx(ildiz: Path, md_yoli: Path, docx_yoli: Path) -> None:
    buyruq = [
        "pandoc", str(md_yoli), "-o", str(docx_yoli),
        "-f", "markdown-smart",  # smart apostrofni ’ ga aylantirib yubormasin
        f"--reference-doc={SHABLON / 'reference.docx'}",
        f"--lua-filter={SHABLON / 'filtr.lua'}",
        f"--resource-path={ildiz}",  # R5
        "--toc", "--toc-depth=1",
        "-M", f"title={NOM}", "-M", f"subtitle={KICHIK_NOM}", "-M", f"author={MUALLIF}",
        "-M", "toc-title=Mundarija",
    ]
    r = subprocess.run(buyruq, capture_output=True, text=True)
    if r.returncode != 0:
        xato_chiqar("Pandoc xatosi", [r.stderr.strip()])
        raise SystemExit(1)
    if r.stderr.strip():
        print(r.stderr.strip(), file=sys.stderr)


def docx_dan_pdf(docx_yoli: Path, pdf_yoli: Path, kutish: float = 90.0) -> None:
    """LibreOffice (UNO) orqali PDF: mundarija maydonlari yangilanib, keyin eksport qilinadi."""
    import uno  # LibreOffice Python ko'prigi (tizim python3 da)
    from com.sun.star.beans import PropertyValue
    from com.sun.star.connection import NoConnectException

    def xossa(nom, qiymat):
        p = PropertyValue()
        p.Name, p.Value = nom, qiymat
        return p

    soffice = shutil.which("soffice") or shutil.which("libreoffice")
    if not soffice:
        raise SystemExit("LibreOffice (soffice) topilmadi")
    profil = tempfile.mkdtemp(prefix="lo_profil_")
    nom = f"kitob_{uuid.uuid4().hex}"
    jarayon = subprocess.Popen(
        [soffice, "--headless", "--invisible", "--norestore", "--nologo", "--nodefault",
         f"-env:UserInstallation=file://{profil}", f"--accept=pipe,name={nom};urp;"],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    hujjat = ish_stoli = None
    try:
        lokal = uno.getComponentContext()
        resolver = lokal.ServiceManager.createInstanceWithContext(
            "com.sun.star.bridge.UnoUrlResolver", lokal)
        oxirgi = time.monotonic() + kutish
        while True:
            if jarayon.poll() is not None:
                raise RuntimeError("soffice kutilmaganda to'xtadi")
            try:
                ctx = resolver.resolve(f"uno:pipe,name={nom};urp;StarOffice.ComponentContext")
                break
            except NoConnectException:
                if time.monotonic() > oxirgi:
                    raise RuntimeError("soffice ga ulanib bo'lmadi")
                time.sleep(0.5)
        ish_stoli = ctx.ServiceManager.createInstanceWithContext("com.sun.star.frame.Desktop", ctx)
        hujjat = ish_stoli.loadComponentFromURL(
            docx_yoli.resolve().as_uri(), "_blank", 0, (xossa("Hidden", True),))
        if hujjat is None:
            raise RuntimeError(f"hujjat ochilmadi: {docx_yoli}")
        formulali = b"<m:oMath" in zipfile.ZipFile(docx_yoli).read("word/document.xml")
        if formulali and hujjat.getEmbeddedObjects().getCount() == 0:
            raise RuntimeError(
                "LibreOffice formulalarni o'qiy olmadi: libreoffice-math o'rnatilganini tekshiring "
                "(PDF'da formulalar yo'qolib qolardi)")
        # Mundarija bet raqamlari ikkinchi yangilashda barqaror bo'ladi
        for _ in range(2):
            indekslar = hujjat.getDocumentIndexes()
            for i in range(indekslar.getCount()):
                indekslar.getByIndex(i).update()
        hujjat.storeToURL(pdf_yoli.resolve().as_uri(), (xossa("FilterName", "writer_pdf_Export"),))
    finally:
        try:
            if hujjat is not None:
                hujjat.close(True)
        except Exception:  # noqa: BLE001
            pass
        try:
            if ish_stoli is not None:
                ish_stoli.terminate()
        except Exception:  # noqa: BLE001
            pass
        try:
            jarayon.wait(timeout=10)
        except subprocess.TimeoutExpired:
            jarayon.kill()
            jarayon.wait()
        shutil.rmtree(profil, ignore_errors=True)


def yigish(ildiz: Path, tuzilish: bool = True) -> tuple[Path, Path]:
    """Kitobni yig'adi va (docx, pdf) yo'llarini qaytaradi.

    Tekshiruv xatosi bo'lsa xatolarni chiqarib `SystemExit(1)` beradi (fayl yaratilmaydi).
    `tuzilish=False` faqat javoblarni tekshiradi (bob tuzilishi/sonlari tekshirilmaydi).
    """
    ildiz = Path(ildiz).resolve()
    xatolar = tekshir.javoblarni_tekshir(ildiz / "boblar", ildiz / "javoblar")
    if tuzilish:
        for f in bob_fayllari(ildiz):
            xatolar += tekshir.tuzilishni_tekshir(f.read_text(encoding="utf-8"), f.name)
    if xatolar:
        xato_chiqar("Tekshiruvdan o'tmadi", xatolar)
        raise SystemExit(1)

    rasmlarni_yarat(ildiz)

    chiqish = ildiz / "chiqish"
    chiqish.mkdir(exist_ok=True)
    md_yoli = chiqish / f"{CHIQISH_NOMI}.md"
    docx_yoli = chiqish / f"{CHIQISH_NOMI}.docx"
    pdf_yoli = chiqish / f"{CHIQISH_NOMI}.pdf"
    md_yoli.write_text(birlashgan_markdown(ildiz), encoding="utf-8")
    pandoc_docx(ildiz, md_yoli, docx_yoli)
    docx_dan_pdf(docx_yoli, pdf_yoli)
    return docx_yoli, pdf_yoli


if __name__ == "__main__":
    d, p = yigish(KITOB)
    print(f"Tayyor:\n  {d}\n  {p}")
