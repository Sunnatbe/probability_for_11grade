"""Javoblar va bob tuzilishini tekshirish.

Kitobdagi har bir mashq/SAT savolining `javob` atributi `javoblar/NN.py` dagi
Python hisobi bilan solishtiriladi. Solishtirish kanonik matn (`fmt`) bo'yicha.
"""
from __future__ import annotations

import importlib.util
import math
import re
from collections import namedtuple
from decimal import Decimal
from fractions import Fraction
from pathlib import Path

Mashq = namedtuple("Mashq", "id tur daraja javob")

TALAB_QILINGAN_SARLAVHALAR = [
    "Bu bobda",
    "Yangi so'zlar",
    "Tushuntirish",
    "Ko'p uchraydigan xatolar",
    "Mashqlar",
    "SAT ko'prigi",
]
LUGAT_SARLAVHASI = "| O'zbekcha | English |"


def fmt(qiymat) -> str:
    """Qiymatni kitobda yoziladigan kanonik matnga aylantiradi."""
    if isinstance(qiymat, str):
        return qiymat
    if isinstance(qiymat, bool):
        raise TypeError("bool javob bo'la olmaydi (son yoki satr kerak)")
    if isinstance(qiymat, Fraction):
        if qiymat.denominator == 1:
            return str(qiymat.numerator)
        return f"{qiymat.numerator}/{qiymat.denominator}"
    if isinstance(qiymat, int):
        return str(qiymat)
    if isinstance(qiymat, float):
        if not math.isfinite(qiymat):
            raise ValueError(f"cheksiz yoki NaN qiymat: {qiymat!r}")
        # suzuvchi nuqta shovqinini (0.30000000000000004) olib tashlaymiz
        qiymat = Decimal(format(qiymat, ".12g"))
    if isinstance(qiymat, Decimal):
        if not qiymat.is_finite():
            raise ValueError(f"cheksiz yoki NaN qiymat: {qiymat!r}")
        matn = format(qiymat.normalize(), "f")
        return "0" if matn in ("-0", "") else matn
    raise TypeError(f"fmt: qo'llab-quvvatlanmaydigan tur {type(qiymat).__name__}")


# ---------------------------------------------------------------- mashqlar

_DIV_BOSHI = re.compile(r"^:{3,}\s*\{([^}\n]*)\}\s*$", re.MULTILINE)
_ID = re.compile(r"(?:^|\s)#([\w-]+)")
_SINF = re.compile(r"(?:^|\s)\.([\w-]+)")
_DARAJA = re.compile(r'daraja="([^"]*)"')
_JAVOB = re.compile(r'javob="((?:[^"\\]|\\.)*)"')


def _div_atributlari(md_text: str):
    """Har bir `::: {...}` qatori uchun (sinflar, atribut matni) qaytaradi."""
    for m in _DIV_BOSHI.finditer(md_text):
        atr = m.group(1)
        yield set(_SINF.findall(atr)), atr


def mashqlar(md_text: str) -> list[Mashq]:
    """`.mashq` va `.sat` div'larini hujjat tartibida qaytaradi.

    Id yoki javob yozilmagan bo'lsa mos maydon bo'sh satr bo'ladi
    (buni `tuzilishni_tekshir` xabar qiladi).
    """
    natija = []
    for sinflar, atr in _div_atributlari(md_text):
        if "mashq" in sinflar:
            tur = "mashq"
        elif "sat" in sinflar:
            tur = "sat"
        else:
            continue
        id_ = _ID.search(atr)
        daraja = _DARAJA.search(atr)
        javob = _JAVOB.search(atr)
        natija.append(Mashq(
            id_.group(1) if id_ else "",
            tur,
            daraja.group(1) if daraja else None,
            javob.group(1).replace('\\"', '"') if javob else "",
        ))
    return natija


# --------------------------------------------------------------- javoblar

def _bob_raqami(fayl: Path) -> str:
    return fayl.name.split("-")[0].split(".")[0]


def _javoblarni_yukla(fayl: Path) -> dict:
    spec = importlib.util.spec_from_file_location(f"_javoblar_{fayl.stem}", fayl)
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)
    if not hasattr(modul, "JAVOBLAR"):
        raise AttributeError("JAVOBLAR lug'ati yo'q")
    return modul.JAVOBLAR


def javoblarni_tekshir(boblar_dir: Path, javoblar_dir: Path) -> list[str]:
    """Kitobdagi javoblarni hisob bilan solishtiradi; xatolar ro'yxati (bo'sh = o'tdi)."""
    boblar_dir, javoblar_dir = Path(boblar_dir), Path(javoblar_dir)
    xatolar: list[str] = []
    korilgan: dict[str, str] = {}  # id -> birinchi uchragan fayl
    boblar = sorted(boblar_dir.glob("*.md")) if boblar_dir.is_dir() else []
    bob_raqamlari = set()

    for bob in boblar:
        raqam = _bob_raqami(bob)
        bob_raqamlari.add(raqam)
        royxat = mashqlar(bob.read_text(encoding="utf-8"))
        if not royxat:
            continue
        for m in royxat:
            if not m.id:
                xatolar.append(f"{bob.name}: idsiz {m.tur} bloki")
        javob_fayli = javoblar_dir / f"{raqam}.py"
        if not javob_fayli.exists():
            xatolar.append(f"{bob.name}: javoblar/{raqam}.py topilmadi")
            continue
        try:
            hisob = _javoblarni_yukla(javob_fayli)
        except Exception as e:  # noqa: BLE001 - foydalanuvchi kodi
            xatolar.append(f"javoblar/{raqam}.py yuklanmadi: {type(e).__name__}: {e}")
            continue

        kitob_idlari = set()
        for m in royxat:
            if not m.id:
                continue
            if m.id in korilgan:
                xatolar.append(f"{m.id}: takroriy id ({korilgan[m.id]} va {bob.name})")
                continue
            korilgan[m.id] = bob.name
            kitob_idlari.add(m.id)
            if m.id not in hisob:
                xatolar.append(f"{m.id}: hisobda yo'q (javoblar/{raqam}.py)")
                continue
            if not m.javob.strip():
                xatolar.append(f"{m.id}: javob atributi yo'q yoki bo'sh")
                continue
            try:
                kutilgan = fmt(hisob[m.id])
            except (TypeError, ValueError) as e:
                xatolar.append(
                    f"{m.id}: javob turi qo'llab-quvvatlanmaydi (javoblar/{raqam}.py): {e}")
                continue
            if m.javob.strip() != kutilgan:
                xatolar.append(f'{m.id}: kitobda "{m.javob}", hisobda "{kutilgan}"')
        for id_ in hisob:
            if id_ not in kitob_idlari:
                xatolar.append(f"{id_}: kitobda yo'q ({bob.name})")

    if javoblar_dir.is_dir():
        for f in sorted(javoblar_dir.glob("*.py")):
            if f.stem not in bob_raqamlari:
                xatolar.append(f"javoblar/{f.name}: mos bob fayli yo'q")
    return xatolar


# --------------------------------------------------------------- tuzilish

def kod_qismlarsiz(md_text: str) -> str:
    """``` bloklarini olib tashlaydi (ulardagi `#` sarlavha emas)."""
    return re.sub(r"^```.*?^```[ \t]*$", "", md_text, flags=re.MULTILINE | re.DOTALL)


def tuzilishni_tekshir(md_text: str, fayl: str) -> list[str]:
    """Bob sarlavhalari tartibi va sonlarini tekshiradi (00 va 99 o'tkazib yuboriladi)."""
    nom = Path(fayl).name
    if nom.startswith(("00", "99")):
        return []
    matn = kod_qismlarsiz(md_text)
    xatolar: list[str] = []

    h1 = re.findall(r"^# (.+)$", matn, flags=re.MULTILINE)
    if len(h1) != 1:
        xatolar.append(f"{nom}: bitta `# Bob nomi` sarlavhasi kerak, {len(h1)} ta topildi")

    h2 = [s.strip() for s in re.findall(r"^## (.+)$", matn, flags=re.MULTILINE)]
    yetishmaydi = [s for s in TALAB_QILINGAN_SARLAVHALAR if s not in h2]
    for s in yetishmaydi:
        xatolar.append(f"{nom}: sarlavha yo'q: `## {s}`")
    ortiqcha = [s for s in h2 if s not in TALAB_QILINGAN_SARLAVHALAR]
    for s in ortiqcha:
        xatolar.append(f"{nom}: ortiqcha `## {s}` sarlavhasi")
    if not yetishmaydi and not ortiqcha and h2 != TALAB_QILINGAN_SARLAVHALAR:
        xatolar.append(f"{nom}: sarlavhalar tartibi noto'g'ri: {h2}")

    if LUGAT_SARLAVHASI not in matn:
        xatolar.append(f"{nom}: `Yangi so'zlar` jadvali sarlavhasi `{LUGAT_SARLAVHASI}` yo'q")

    misollar = sum(1 for sinf, _ in _div_atributlari(matn) if "misol" in sinf)
    if not 3 <= misollar <= 5:
        xatolar.append(f"{nom}: yechilgan misol {misollar} ta, 3–5 ta kerak (`.misol`)")

    royxat = mashqlar(matn)
    bob = _bob_raqami(Path(nom)).lstrip("0")
    mashq_soni = 0
    sat_soni = 0
    darajalar = {"A": 0, "B": 0, "C": 0}
    for m in royxat:
        if not m.id:
            xatolar.append(f"{nom}: idsiz {m.tur} bloki")
            continue
        if not m.javob:
            xatolar.append(f"{nom}: {m.id}: javob atributi yo'q")
        kutilgan = re.fullmatch(rf"{'m' if m.tur == 'mashq' else 's'}{bob}-\d+", m.id)
        if not kutilgan:
            xatolar.append(
                f"{nom}: {m.id}: id formati `{'m' if m.tur == 'mashq' else 's'}{bob}-<n>` bo'lishi kerak")
        if m.tur == "mashq":
            mashq_soni += 1
            if m.daraja in darajalar:
                darajalar[m.daraja] += 1
            else:
                xatolar.append(f"{nom}: {m.id}: daraja A, B yoki C bo'lishi kerak ({m.daraja!r})")
        else:
            sat_soni += 1
    if not 20 <= mashq_soni <= 30:
        xatolar.append(f"{nom}: mashq {mashq_soni} ta, 20–30 ta kerak")
    for d, k in darajalar.items():
        if k < 5:
            xatolar.append(f"{nom}: {d} daraja {k} ta, kamida 5 ta kerak")
    if not 3 <= sat_soni <= 5:
        xatolar.append(f"{nom}: SAT ko'prigi savoli {sat_soni} ta, 3–5 ta kerak")
    return xatolar
