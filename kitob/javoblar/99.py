"""Yakuniy test (y-1 ... y-40) — javoblar hisobi.

Bo'limlar: I (1–7-boblar) y-1..y-12, II (8–15) y-13..y-26, III (16–18) y-27..y-33,
IV (19–21) y-34..y-40. Kanonik formatlar boblarning javoblar fayllaridagi yordamchilardan
olinadi (14.py: Ifoda; 15.py: yech, nuqta, uchi; 19.py: gr; 20.py: Pi).
"""
import re
import runpy
from functools import lru_cache
from decimal import ROUND_HALF_UP
from decimal import Decimal as D
from fractions import Fraction as F
from math import gcd, isqrt
from pathlib import Path

JAVOBLAR_DIR = Path(__file__).resolve().parent
MATN = JAVOBLAR_DIR.parent / "boblar" / "99-yakuniy-test.md"


def _yukla(nom):
    return runpy.run_path(str(JAVOBLAR_DIR / nom))


_B14, _B15, _B19, _B20 = (_yukla(n) for n in ("14.py", "15.py", "19.py", "20.py"))
Ifoda, d = _B14["Ifoda"], _B14["d"]
yech, koef, nuqta, uchi = _B15["yech"], _B15["koef"], _B15["nuqta"], _B15["uchi"]
gr = _B19["gr"]
pi, Pi = _B20["pi"], _B20["Pi"]
x, a_, b_ = Ifoda.harf("x"), Ifoda.harf("a"), Ifoda.harf("b")


def harf(variantlar, togri):
    """To'g'ri qiymatni variantlar orasidan topib, harfini qaytaradi (yagona bo'lishi shart)."""
    mos = [i for i, v in enumerate(variantlar) if v == togri]
    assert len(mos) == 1, (variantlar, togri)
    return "ABCD"[mos[0]]


def son(q):
    """Fraction -> butun bo'lsa int, aks holda chekli o'nli kasr (Decimal)."""
    q = F(q)
    if q.denominator == 1:
        return q.numerator
    natija = D(q.numerator) / D(q.denominator)
    assert F(natija) == q, f"chekli o'nli kasr emas: {q}"
    return natija


def foiz(q):
    return f"{son(F(q) * 100)}%"


def ildizli(k, m):
    """k*sqrt(m) ning kvadrati (musbat sonlarni solishtirish uchun)."""
    return F(k) ** 2 * m


def ekuk(*sonlar):
    natija = 1
    for s in sonlar:
        natija = natija * s // gcd(natija, s)
    return natija


# ============================================================ I bo'lim (1–7-boblar)
# y-1 (1-bob)
y1_qiymat = -2 * (5 - 3 * (4 - 6)) + 4 ** 2
y1 = harf([-38, -6, 24, 38], y1_qiymat)

# y-2 (2-bob): 18:00 dan keyin EKUK(15, 20, 25) minut
minut = 18 * 60 + ekuk(15, 20, 25)
assert minut < 24 * 60
y2 = f"soat {minut // 60}:{minut % 60:02d}"

# y-3 (3-bob): bug'doy 2/7, qolganining 3/5 qismi paxta, oxirgi 12 ga
qolgan = 1 - F(2, 7)
sabzavot_ulushi = qolgan - F(3, 5) * qolgan
y3 = 12 / sabzavot_ulushi
assert y3 * F(2, 7) + F(3, 5) * (y3 - y3 * F(2, 7)) + 12 == y3

# y-4 (3-bob)
variantlar4 = [F(7, 12), F(1, 2), F(11, 16), F(5, 8)]
y4 = harf([F(3, 5) < v < F(2, 3) for v in variantlar4], True)

# y-5 (4-bob)
y5 = D("2.35") * D("3.8")

# y-6 (4-bob): mingdan birgacha yaxlitlash
y6 = (D(5) / D(7)).quantize(D("0.001"), rounding=ROUND_HALF_UP)

# y-7 (5-bob)
litr = F(350, 100) * 8
y7 = litr * 12500

# y-8 (5-bob): m/s -> km/soat
y8 = son(F(6) * 3600 / 1000)

# y-9 (6-bob): ketma-ket o'zgarish
kopaytuvchi = (1 + F(20, 100)) * (1 - F(25, 100))
y9 = foiz(1 - kopaytuvchi)

# y-10 (6-bob)
y10 = son(102 / (1 - F(15, 100)))

# y-11 (7-bob)
y11 = F(2) ** 10 * F(4) ** -3 / F(8) ** -1

# y-12 (7-bob): sqrt(80) - sqrt(20) = 4sqrt(5) - 2sqrt(5)
assert 4 ** 2 * 5 == 80 and 2 ** 2 * 5 == 20
y12_qiymat = ildizli(4 - 2, 5)
y12 = harf([ildizli(2, 5), ildizli(1, 60), ildizli(6, 5), ildizli(5, 2)], y12_qiymat)
assert abs((80 ** 0.5 - 20 ** 0.5) ** 2 - float(y12_qiymat)) < 1e-9

# ============================================================ II bo'lim (8–15-boblar)
# y-13 (8-bob)
y13 = d((3 * (2 * a_ - b_) - 2 * (a_ - 4 * b_) + a_).matn())

# y-14 (9-bob): 3x - 1 = 4(x - 4)  ->  (3 - 4)x = -16 + 1
y14 = F(-16 + 1, 3 - 4)
assert (3 * y14 - 1) / 4 == y14 - 4

# y-15 (9-bob): (4 + k)x - 8 = 3x + 5 yechimsiz <=> x koeffitsiyentlari teng, ozod hadlar har xil
y15 = 3 - 4                       # 4 + k = 3
_k = Ifoda({(): y15})
_tenglama = 4 * (x - 2) + _k * x - (3 * x + 5)
assert _tenglama.koef("x") == 0 and _tenglama.ozod() != 0   # 0x = 13 — yechim yo'q

# y-16 (10-bob): 20 + 0.05t <= 32
y16 = max(t for t in range(0, 1000) if 20 + D("0.05") * t <= 32)

# y-17 (11-bob): s/72 - s/90 = 1
s17 = 1 / (F(1, 72) - F(1, 90))
y17 = s17
assert s17 / 72 - s17 / 90 == 1

# y-18 (11-bob): Lena = 3b - 7 va Lena = b + 15  ->  3b - 7 = b + 15
uka = F(15 + 7, 3 - 1)
y18 = uka + 15
assert y18 == 3 * uka - 7

# y-19 (12-bob)
k19 = F(-3 - 9, 3 - (-1))
b19 = 9 - k19 * (-1)
assert k19 * 3 + b19 == -3
y19 = nuqta(-b19 / k19, 0)

# y-20 (12-bob): V = 450 - 15t. Variantlar (tur, son) juftligi bilan kodlanadi:
# A) boshlang'ich hajm 15; B) bo'shash vaqti 15; C) minutiga kamayish 15; D) minutiga kamayish 450.
V = lambda t: 450 - 15 * t  # noqa: E731
boshlangich = V(0)
bo_shash = next(t for t in range(10_000) if V(t) == 0)
kamayish = V(0) - V(1)                          # burchak koeffitsiyenti -15 => har minutda 15 l kamayadi
assert all(V(t) - V(t + 1) == kamayish for t in range(bo_shash))
variantlar20 = [("boshlang'ich", 15), ("bo'shash", 15), ("kamayish", 15), ("kamayish", 450)]
haqiqiy = {("boshlang'ich", boshlangich), ("bo'shash", bo_shash), ("kamayish", kamayish)}
assert [v in haqiqiy for v in variantlar20].count(True) == 1
y20 = harf(variantlar20, ("kamayish", kamayish))

# y-21 (13-bob): 2m + 3c = 9.50, 4m + c = 10.50 (Kramer)
det = 2 * 1 - 3 * 4
m21 = (F("9.50") * 1 - 3 * F("10.50")) / det
c21 = (2 * F("10.50") - 4 * F("9.50")) / det
assert 2 * m21 + 3 * c21 == F("9.50") and 4 * m21 + c21 == F("10.50")
y21 = son(m21)

# y-22 (13-bob): 3x - 2y = 7, ax + 4y = 1 parallel: a/3 = 4/(-2), ozod hadlar mos emas
a22 = F(3 * 4, -2)
assert F(7 * 4, -2) != 1          # ikkinchi tenglama birinchisining karrali emas
y22 = a22

# y-23 (14-bob)
y23 = d(((2 * x - 3) ** 2 - (x + 1) * (x - 1)).matn())

# y-24 (14-bob): px + q ko'paytuvchi <=> -q/p ildiz
kp24 = 2 * x ** 2 + x - 15
variantlar24 = [x - 3, x + 3, 2 * x + 5, 2 * x - 3]
y24 = harf([kp24.qiymat(x=-v.ozod() / v.koef("x")) == 0 for v in variantlar24], True)
assert (2 * x - 5) * (x + 3) == kp24

# y-25 (15-bob)
y25 = yech(*koef(x ** 2 + 2 * x - 7))

# y-26 (15-bob)
y26 = uchi(1, -10, 16)[1]

# ============================================================ III bo'lim (16–18-boblar)
# y-27 (16-bob)
y27 = F(30 * 81 - 12 * 84, 30 - 12)          # o'g'il bolalar: yig'indi / soni

# y-28 (16-bob): chastotalar jadvali
CHASTOTA = {1: 1, 2: 3, 3: 6, 4: 8, 5: 6}
assert sum(CHASTOTA.values()) == 24
y28 = son(F(sum(k * n for k, n in CHASTOTA.items()), 24))

# y-29 (17-bob)
JADVAL_29 = {"10-sinf": (28, 36), "11-sinf": (42, 14)}
assert sum(JADVAL_29["10-sinf"]) == 64 and sum(JADVAL_29["11-sinf"]) == 56
kitob = JADVAL_29["10-sinf"][0] + JADVAL_29["11-sinf"][0]
assert kitob == 70 and JADVAL_29["10-sinf"][1] + JADVAL_29["11-sinf"][1] == 50
y29 = foiz(F(JADVAL_29["11-sinf"][0], kitob))

# y-30 (17-bob)
bashorat = D("6.5") * 10 + 4
y30 = son(bashorat - 57)

# y-31 (18-bob): qaytarmasdan
y31 = F(5, 8) * F(5 - 1, 8 - 1)

# y-32 (18-bob)
JADVAL_32 = {"9": (24, 46), "10": (36, 44)}    # (chaladi, chalmaydi)
assert sum(JADVAL_32["9"]) == 70 and sum(JADVAL_32["10"]) == 80
chalmaydi = JADVAL_32["9"][1] + JADVAL_32["10"][1]
assert chalmaydi == 90 and JADVAL_32["9"][0] + JADVAL_32["10"][0] == 60
y32 = F(JADVAL_32["9"][1], chalmaydi)

# y-33 (18-bob): mustaqil hodisalar; tub sonlar 2, 3, 5
tub = [k for k in range(1, 7) if k > 1 and all(k % p for p in range(2, k))]
y33_qiymat = F(1, 4) * F(len(tub), 6)
y33 = harf([F(1, 24), F(1, 6), F(3, 4), F(1, 8)], y33_qiymat)

# ============================================================ IV bo'lim (19–21-boblar)
# y-34 (19-bob): u + 2u + 2u = 180
y34 = gr(F(180, 1 + 2 + 2))

# y-35 (19-, 20-bob): 45-45-90: kvadrat tomoni a, diagonal a*sqrt(2) = 14 => a^2 = 14^2 / 2
diag = 14
yuz35 = F(diag ** 2, 2)
assert yuz35 + yuz35 == diag ** 2                # Pifagor: a^2 + a^2 = d^2
# variantlar kvadratlari bilan solishtiriladi: 98, 49, 196, 98*sqrt(2)
y35 = harf([ildizli(98, 1), ildizli(49, 1), ildizli(196, 1), ildizli(98, 2)], ildizli(yuz35, 1))

# y-36 (20-bob)
y36 = str(20 * 14 - pi * 3 ** 2)

# y-37 (20-bob): yoy uzunligi
y37_qiymat = F(75, 360) * 2 * pi * 12
assert F(75, 360) * pi * 12 ** 2 == Pi(0, 30)    # B — sektor yuzi (odatiy xato)
y37 = harf([Pi(0, F(5, 2)), Pi(0, 30), Pi(0, 5), Pi(0, 24)], y37_qiymat)

# y-38 (20-bob): V = pi r^2 h
y38 = F(99) / 3 ** 2
assert pi * 3 ** 2 * y38 == Pi(0, 99)

# y-39 (21-bob): tan A = 39/80 -> tomonlar 39k, 80k, 89k
gip39 = isqrt(39 ** 2 + 80 ** 2)
assert gip39 ** 2 == 39 ** 2 + 80 ** 2
k39 = F(178, gip39)
y39 = 39 * k39

# y-40 (21-bob): cos B = BC/AB = 63/65, AC = 16, tan A = BC/AC
BC, AB = 63, 65
AC40 = isqrt(AB ** 2 - BC ** 2)
assert AC40 ** 2 + BC ** 2 == AB ** 2
y40 = F(BC, AC40)

JAVOBLAR = {f"y-{i}": globals()[f"y{i}"] for i in range(1, 41)}

INGLIZCHA = {1, 4, 5, 8, 10, 12, 14, 16, 18, 20, 21, 24, 26, 28, 30, 32, 33, 35, 37, 40}
assert len(INGLIZCHA) == 20
BOLIMLAR = {"I": range(1, 13), "II": range(13, 27), "III": range(27, 34), "IV": range(34, 41)}
assert [len(r) for r in BOLIMLAR.values()] == [12, 14, 7, 7]


# ------------------------------------------------------------ himoya
def norm(v):
    if isinstance(v, D):
        v = format(v.normalize(), "f")
    if isinstance(v, F):
        v = str(v.numerator) if v.denominator == 1 else f"{v.numerator}/{v.denominator}"
    return re.sub(r"\s+", "", str(v).replace("$", "").replace("°", "").replace("^\\circ", "")).lower()


def _izoh_formulalari(matn):
    """Savollardan tashqaridagi matndagi barcha $...$ formulalar."""
    izoh = re.sub(r"^::: \{\.mashq.*?^:::$", "", matn, flags=re.MULTILINE | re.DOTALL)
    return re.findall(r"\$([^$]+)\$", izoh)


_md = MATN.read_text(encoding="utf-8")
# test tuzilishi: inglizcha savollar (variantli/variantsiz) matnda ham ro'yxatdagi kabi
for _n in range(1, 41):
    _blok = re.search(rf"^::: \{{\.mashq #y-{_n} [^\n]*\n(.*?)^:::$", _md, re.MULTILINE | re.DOTALL)
    assert _blok, _n
    _ingliz = bool(re.search(r"\b(what|which|how)\b", _blok.group(1), re.IGNORECASE))
    assert _ingliz == (_n in INGLIZCHA), (_n, _blok.group(1)[:40])

# Izoh matnidagi formulalar va raqamlar (vaqt, savollar soni) javoblarda takrorlanmasin.
MATNDAGI = {norm(v) for v in [*_izoh_formulalari(_md), 40, 65, D("1.5"), 20]}
for _id, _q in JAVOBLAR.items():
    assert norm(_q) not in MATNDAGI, (_id, _q)
# diagnostik test javoblari bilan ham takrorlanmasin (bir xil savol bo'lmasin)
_DIAG = {norm(v) for v in _yukla("00.py")["JAVOBLAR"].values() if not re.fullmatch(r"[A-D]", str(v))}
_raqamli = {k: norm(v) for k, v in JAVOBLAR.items() if not re.fullmatch(r"[A-D]", str(v))}
assert not set(_raqamli.values()) & _DIAG, set(_raqamli.values()) & _DIAG
assert len(_raqamli) == len(set(_raqamli.values())), "yakuniy test javoblari takrorlanmasin"


# ------------------------------------------------ boblar bilan solishtirish
_DIV = re.compile(r"^::: \{\.(misol|mashq|sat)([^\n]*)\}\n(.*?)^:::$", re.MULTILINE | re.DOTALL)


def _sonlar(matn):
    """Blokdagi 10 dan katta sonlar (sinf raqamlari va minglik bo'shliqlarsiz)."""
    matn = re.sub(r"(?i)\d+-sinf|grade \d+", "", matn.replace("\\,", "").replace("\\ ", ""))
    return {s for s in re.findall(r"\d+(?:\.\d+)?", matn) if float(s) >= 10}


def _bloklar(matn):
    for m in _DIV.finditer(matn):
        id_ = re.search(r"#([\w-]+)", m.group(2))
        javob = re.search(r'javob="([^"]*)"', m.group(2))
        yield (id_.group(1) if id_ else "misol"), _sonlar(m.group(3) + " " + (javob.group(1) if javob else "")), m.group(3)


def _misol_javoblari(matn):
    """Misollardagi "*Javob:*" qatorlaridagi formulalar (\\frac{a}{b} -> a/b)."""
    natija = set()
    for _, _, ichi in _bloklar(matn):
        for qator in re.findall(r"\*Javob:\*(.*)", ichi):
            for f in re.findall(r"\$([^$]+)\$", qator):
                natija.add(norm(re.sub(r"\\frac\{(-?\d+)\}\{(\d+)\}", r"\1/\2", f)))
    return natija


@lru_cache(maxsize=None)
def _bob(bob):
    """(bob matni, bobdagi mashq/SAT javoblari) — harfli javoblarsiz."""
    matn = next((JAVOBLAR_DIR.parent / "boblar").glob(f"{bob:02d}-*.md")).read_text(encoding="utf-8")
    javoblar = {norm(v) for v in _yukla(f"{bob:02d}.py")["JAVOBLAR"].values() if not re.fullmatch(r"[A-D]", str(v))}
    return matn, javoblar


def boblar_bilan_solishtir(md_matn, bobi):
    """Har bir d/y savol o'z bobi bilan solishtiriladi:
    1) javobi shu bobdagi mashq/SAT javobiga yoki misol javobiga teng emas;
    2) shu bobdagi biror blokning son qolipini takrorlamaydi: blokdagi (kamida 2 ta) sonlarning
       hammasi savolda (javobi bilan) bor bo'lsa yoki kamida 3 ta umumiy son bo'lib, ulardan
       kamida 2 tasi 10 ga karrali bo'lmasa — xato."""
    xatolar = []
    for id_, sonlar, _ in _bloklar(md_matn):
        bob = bobi[id_]
        bob_md, bob_javoblari = _bob(bob)
        javob = norm(JAVOBLAR[id_])
        if not re.fullmatch(r"[a-d]", javob):
            if javob in bob_javoblari:
                xatolar.append((id_, javob, "bobdagi mashq/SAT javobi"))
            if javob in _misol_javoblari(bob_md):
                xatolar.append((id_, javob, "bobdagi misol javobi"))
        for b_id, b_sonlar, _ in _bloklar(bob_md):
            umumiy = sonlar & b_sonlar
            qolip = len(b_sonlar) >= 2 and b_sonlar <= sonlar
            kop = len(umumiy) >= 3 and sum(1 for s in umumiy if float(s) % 10) >= 2
            if qolip or kop:
                xatolar.append((id_, bob, b_id, sorted(umumiy)))
    assert not xatolar, xatolar


# y-savol -> bob (md dagi "Qaysi savol qaysi bobga tegishli" jadvali bilan bir xil bo'lishi shart)
BOBI = {f"y-{n}": b for b, savollar in {
    1: [1], 2: [2], 3: [3, 4], 4: [5, 6], 5: [7, 8], 6: [9, 10], 7: [11, 12], 8: [13], 9: [14, 15],
    10: [16], 11: [17, 18], 12: [19, 20], 13: [21, 22], 14: [23, 24], 15: [25, 26], 16: [27, 28],
    17: [29, 30], 18: [31, 32, 33], 19: [34, 35], 20: [36, 37, 38], 21: [39, 40]}.items() for n in savollar}
_jadval = {f"y-{n.strip()}": int(b) for b, _, ns in re.findall(r"^\| (\d+) \| ([^|]+) \| ([\d, ]+) \|$", _md, re.MULTILINE)
           for n in ns.split(",")}
assert _jadval == BOBI and sorted(BOBI) == sorted(JAVOBLAR)
assert all(BOBI[f"y-{n}"] <= 7 for n in BOLIMLAR["I"]) and all(16 <= BOBI[f"y-{n}"] <= 18 for n in BOLIMLAR["III"])
boblar_bilan_solishtir(_md, BOBI)
