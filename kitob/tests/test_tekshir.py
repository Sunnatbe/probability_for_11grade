import sys
from decimal import Decimal
from fractions import Fraction as F
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

import tekshir  # noqa: E402


def test_fmt():
    assert tekshir.fmt(F(14, 24)) == "7/12"
    assert tekshir.fmt(F(-3, 4)) == "-3/4"
    assert tekshir.fmt(F(6, 3)) == "2"
    assert tekshir.fmt(Decimal("2.50")) == "2.5"
    assert tekshir.fmt(Decimal("100")) == "100"
    assert tekshir.fmt(2.5) == "2.5"
    assert tekshir.fmt(7) == "7"
    assert tekshir.fmt("C") == "C"


def test_mashqlar_parse():
    md = (
        '::: {.mashq #m3-12 daraja="B" javob="7/12"}\nsavol\n:::\n\n'
        '::: {.sat #s3-2 javob="C"}\nsavol\n:::\n'
        '::: {.misol}\nyechim\n:::\n'
    )
    assert tekshir.mashqlar(md) == [
        ("m3-12", "mashq", "B", "7/12"),
        ("s3-2", "sat", None, "C"),
    ]


def bob_yoz(boblar, javoblar, nom, mashqlar, javoblar_matn):
    """Vaqtinchalik bob va javoblar faylini yozadi."""
    boblar.mkdir(exist_ok=True)
    javoblar.mkdir(exist_ok=True)
    qismlar = ["# Bob\n"]
    for id_, javob in mashqlar:
        qismlar.append(f'::: {{.mashq #{id_} daraja="A" javob="{javob}"}}\nsavol\n:::\n')
    (boblar / f"{nom}-bob.md").write_text("\n".join(qismlar), encoding="utf-8")
    (javoblar / f"{nom}.py").write_text(javoblar_matn, encoding="utf-8")


def test_mos_kelish_xatosiz(tmp_path):
    b, j = tmp_path / "boblar", tmp_path / "javoblar"
    bob_yoz(b, j, "03", [("m3-12", "7/12")],
            "from fractions import Fraction as F\nJAVOBLAR = {'m3-12': F(1,3) + F(1,4)}\n")
    assert tekshir.javoblarni_tekshir(b, j) == []


def test_mos_kelmaslik_aniqlanadi(tmp_path):
    b, j = tmp_path / "boblar", tmp_path / "javoblar"
    bob_yoz(b, j, "03", [("m3-12", "7/12")],
            "from fractions import Fraction as F\nJAVOBLAR = {'m3-12': F(5,12)}\n")
    xatolar = tekshir.javoblarni_tekshir(b, j)
    assert len(xatolar) == 1
    for qism in ("m3-12", "7/12", "5/12"):
        assert qism in xatolar[0]


def test_format_farqi_xato(tmp_path):
    """Kanonik bo'lmagan format (0.5833, unicode minus) mos kelmagan hisoblanadi."""
    b, j = tmp_path / "boblar", tmp_path / "javoblar"
    bob_yoz(b, j, "03", [("m3-1", "0.5833"), ("m3-2", "−3/4")],
            "from fractions import Fraction as F\nJAVOBLAR = {'m3-1': F(7,12), 'm3-2': F(-3,4)}\n")
    xatolar = tekshir.javoblarni_tekshir(b, j)
    assert len(xatolar) == 2
    assert any("m3-1" in x and "0.5833" in x and "7/12" in x for x in xatolar)
    assert any("m3-2" in x and "-3/4" in x for x in xatolar)


def test_yetishmagan_va_ortiqcha(tmp_path):
    b, j = tmp_path / "boblar", tmp_path / "javoblar"
    bob_yoz(b, j, "03", [("m3-1", "1"), ("m3-2", "2")],
            "JAVOBLAR = {'m3-1': 1, 'm3-9': 9}\n")
    xatolar = tekshir.javoblarni_tekshir(b, j)
    assert any("m3-2" in x and "hisobda yo'q" in x for x in xatolar)
    assert any("m3-9" in x and "kitobda yo'q" in x for x in xatolar)
    assert len(xatolar) == 2


def test_takroriy_id(tmp_path):
    b, j = tmp_path / "boblar", tmp_path / "javoblar"
    bob_yoz(b, j, "03", [("m3-1", "1"), ("m3-1", "1")], "JAVOBLAR = {'m3-1': 1}\n")
    xatolar = tekshir.javoblarni_tekshir(b, j)
    assert any("m3-1" in x and "takroriy" in x for x in xatolar)


def to_liq_bob(misol=3, a=7, b=7, c=7, sat=3, sarlavhalar=None):
    """Tuzilishi to'g'ri (yoki berilgan sonlar bilan) bob matni."""
    sarlavhalar = sarlavhalar or [
        "Bu bobda", "Yangi so'zlar", "Tushuntirish",
        "Ko'p uchraydigan xatolar", "Mashqlar", "SAT ko'prigi",
    ]
    qism = {s: f"## {s}\n" for s in sarlavhalar}
    qism["Yangi so'zlar"] = "## Yangi so'zlar\n\n| O'zbekcha | English |\n|---|---|\n| kasr | fraction |\n"
    qism["Tushuntirish"] = "## Tushuntirish\n\n" + "".join(
        "::: {.misol}\nyechim\n:::\n\n" for _ in range(misol))
    n = 0
    mashq = "## Mashqlar\n\n"
    for d, k in (("A", a), ("B", b), ("C", c)):
        for _ in range(k):
            n += 1
            mashq += f'::: {{.mashq #m3-{n} daraja="{d}" javob="1"}}\nsavol\n:::\n\n'
    if "Mashqlar" in qism:
        qism["Mashqlar"] = mashq
    if "SAT ko'prigi" in qism:
        qism["SAT ko'prigi"] = "## SAT ko'prigi\n\n" + "".join(
            f'::: {{.sat #s3-{i + 1} javob="A"}}\nQ\n:::\n\n' for i in range(sat))
    return "# Bob nomi\n\n" + "\n".join(qism[s] for s in sarlavhalar)


def test_tuzilish():
    assert tekshir.tuzilishni_tekshir(to_liq_bob(), "03-bob.md") == []

    # sarlavha tushib qolsa
    royxat = ["Bu bobda", "Yangi so'zlar", "Tushuntirish", "Mashqlar", "SAT ko'prigi"]
    xatolar = tekshir.tuzilishni_tekshir(to_liq_bob(sarlavhalar=royxat), "03-bob.md")
    assert any("Ko'p uchraydigan xatolar" in x for x in xatolar)


def test_tuzilish_19_mashq():
    xatolar = tekshir.tuzilishni_tekshir(to_liq_bob(a=7, b=6, c=6), "03-bob.md")
    assert any("mashq" in x and "19" in x for x in xatolar)


def test_tuzilish_boshqa_xatolar():
    assert any("misol" in x for x in tekshir.tuzilishni_tekshir(to_liq_bob(misol=2), "03-bob.md"))
    assert any("misol" in x for x in tekshir.tuzilishni_tekshir(to_liq_bob(misol=6), "03-bob.md"))
    assert any("SAT" in x for x in tekshir.tuzilishni_tekshir(to_liq_bob(sat=2), "03-bob.md"))
    assert any("C daraja" in x for x in tekshir.tuzilishni_tekshir(to_liq_bob(a=10, b=10, c=4), "03-bob.md"))
    # tartib
    royxat = ["Bu bobda", "Tushuntirish", "Yangi so'zlar", "Ko'p uchraydigan xatolar", "Mashqlar", "SAT ko'prigi"]
    assert tekshir.tuzilishni_tekshir(to_liq_bob(sarlavhalar=royxat), "03-bob.md")


def test_tuzilish_00_99_otkaziladi():
    assert tekshir.tuzilishni_tekshir("# Kirish\n\nhech narsa", "00-kirish.md") == []
    assert tekshir.tuzilishni_tekshir("# Yakuniy\n", "99-yakuniy-test.md") == []
