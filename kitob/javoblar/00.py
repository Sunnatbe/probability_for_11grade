"""Kirish: diagnostik test (d-1 ... d-42) — javoblar hisobi.

Har bobdan 2 tadan savol, boblar tartibida: d-(2k-1), d-2k — k-bob.
Kanonik formatlar shu boblarning javoblar fayllaridagi yordamchilardan olinadi
(14.py: Ifoda, kopaytma; 15.py: yech; 19.py: gr; 20.py: Pi), shunda javob boblardagi
bilan bir xil ko'rinishda yoziladi.
"""
import re
import runpy
from decimal import Decimal as D
from fractions import Fraction as F
from math import gcd, isqrt
from pathlib import Path

JAVOBLAR_DIR = Path(__file__).resolve().parent
MATN = JAVOBLAR_DIR.parent / "boblar" / "00-kirish.md"


def _yukla(nom):
    return runpy.run_path(str(JAVOBLAR_DIR / nom))


_B14, _B15, _B19, _B20 = (_yukla(n) for n in ("14.py", "15.py", "19.py", "20.py"))
Ifoda, kopaytma, d = _B14["Ifoda"], _B14["kopaytma"], _B14["d"]
yech, koef = _B15["yech"], _B15["koef"]
gr = _B19["gr"]
pi = _B20["pi"]
x = Ifoda.harf("x")


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


def ekub(*sonlar):
    natija = 0
    for s in sonlar:
        natija = gcd(natija, s)
    return natija


def ekuk(*sonlar):
    natija = 1
    for s in sonlar:
        natija = natija * s // gcd(natija, s)
    return natija


# ---------------------------------------------------------------- 1-bob
d1 = -12 + 5 - (-4)
d2 = -(3 ** 2) + F(18, 3) * 2          # -3^2: daraja minusdan oldin; / va * chapdan o'ngga
assert d2 == -9 + 12

# ---------------------------------------------------------------- 2-bob
d3 = ekub(54, 90)
d4 = ekuk(8, 14)
assert d4 != 8 * 14                     # odatiy xato: ko'paytmani olish

# ---------------------------------------------------------------- 3-bob
d5 = F(7, 10) - F(4, 15)
d6 = (2 + F(1, 4)) / F(3, 8)

# ---------------------------------------------------------------- 4-bob
d7 = D("0.6") * D("0.07")
d8 = D("2.7") / D("0.09")

# ---------------------------------------------------------------- 5-bob
d9 = 420000 * F(4, 3 + 4)
d10 = F(15) * 3600 / 1000               # m/s -> km/soat

# ---------------------------------------------------------------- 6-bob
d11 = 350 * F(18, 100)
d12 = 90000 / (1 + F(25, 100))
assert d12 != 90000 * (1 - F(25, 100))  # odatiy xato: 25% ni yangi narxdan ayirish

# ---------------------------------------------------------------- 7-bob
d13 = F(3) ** 5 * F(3) ** -1 / F(3) ** 2
# sqrt(48) + sqrt(27) = 4sqrt(3) + 3sqrt(3); variantlar kvadrati bilan solishtiriladi
assert isqrt(48 // 3) ** 2 * 3 == 48 and isqrt(27 // 3) ** 2 * 3 == 27
d14_qiymat = ildizli(isqrt(48 // 3) + isqrt(27 // 3), 3)
d14 = harf([ildizli(1, 75), ildizli(7, 6), ildizli(7, 3), ildizli(12, 3)], d14_qiymat)
assert abs((48 ** 0.5 + 27 ** 0.5) ** 2 - float(d14_qiymat)) < 1e-9

# ---------------------------------------------------------------- 8-bob
a = F(-3)
d15 = a ** 2 - 4 * a + 1
d16 = d((4 * (2 * x - 3) - 3 * (x - 5)).matn())

# ---------------------------------------------------------------- 9-bob
# 5x - 7 = 2x + 17  ->  (5 - 2)x = 17 + 7
d17 = F(17 + 7, 5 - 2)
assert 5 * d17 - 7 == 2 * d17 + 17
# (2x - 1)/3 = (x + 4)/2  ->  2(2x - 1) = 3(x + 4)  ->  (4 - 3)x = 12 + 2
d18 = F(12 + 2, 4 - 3)
assert (2 * d18 - 1) / 3 == (d18 + 4) / F(2)

# ---------------------------------------------------------------- 10-bob
# 7 - 2x > 13  ->  -2x > 6  ->  x < -3 (manfiy songa bo'lganda belgi almashadi)
chegara = F(13 - 7, -2)
assert all((7 - 2 * t > 13) == (t < chegara) for t in (F(n, 4) for n in range(-40, 40)))
d19 = d(f"x < {son(chegara)}")
d20 = sum(1 for t in range(-50, 50) if -7 <= 3 * t - 1 < 8)

# ---------------------------------------------------------------- 11-bob
n = F(72 - 3, 3)                         # n + (n + 1) + (n + 2) = 72
assert n + (n + 1) + (n + 2) == 72
d21 = n + 2
t = F(38 - 3 * 6, 3 - 1)                 # 38 + t = 3(6 + t)
assert 38 + t == 3 * (6 + t)
d22 = t

# ---------------------------------------------------------------- 12-bob
d23 = F(-5 - 7, 5 - (-1))
m, (x0, y0) = 3, (2, 1)
b = y0 - m * x0
d24 = d(f"y = {(m * x + b).matn()}")

# ---------------------------------------------------------------- 13-bob
# y = 3x - 2, 2x + y = 13  ->  2x + 3x - 2 = 13
xs = F(13 + 2, 2 + 3)
ys = 3 * xs - 2
assert 2 * xs + ys == 13
d25 = d(f"({son(xs)}, {son(ys)})")
# 3d + 2r = 19000, 2d + 3r = 16000 (Kramer qoidasi bilan mustaqil hisob)
det = 3 * 3 - 2 * 2
daftar = F(19000 * 3 - 2 * 16000, det)
ruchka = F(3 * 16000 - 2 * 19000, det)
assert 3 * daftar + 2 * ruchka == 19000 and 2 * daftar + 3 * ruchka == 16000
d26 = daftar

# ---------------------------------------------------------------- 14-bob
d27 = d(((x + 4) * (x - 6)).matn())
d28 = kopaytma(x ** 2 - x - 30, 1, [x - 6, x + 5])

# ---------------------------------------------------------------- 15-bob
d29 = yech(*koef(3 * x ** 2 - 75))
d30 = yech(*koef(x ** 2 - 9 * x + 14))

# ---------------------------------------------------------------- 16-bob
tuplam = sorted([7, 3, 9, 4, 12, 6])
d31 = son(F(tuplam[2] + tuplam[3], 2))
d32 = 7 * 83 - 6 * 81

# ---------------------------------------------------------------- 17-bob
JADVAL_17 = {"9-sinf": (18, 12), "10-sinf": (21, 29)}
assert sum(JADVAL_17["9-sinf"]) == 30 and sum(JADVAL_17["10-sinf"]) == 50
assert JADVAL_17["9-sinf"][0] + JADVAL_17["10-sinf"][0] == 39
assert JADVAL_17["9-sinf"][1] + JADVAL_17["10-sinf"][1] == 41
d33 = foiz(F(JADVAL_17["10-sinf"][0], sum(JADVAL_17["10-sinf"])))
d34 = 12 * 25 - 40

# ---------------------------------------------------------------- 18-bob
d35 = F(4 + 6, 4 + 6 + 5)
d36 = F(sum(1 for i in range(1, 7) for j in range(1, 7) if i + j == 10), 36)

# ---------------------------------------------------------------- 19-bob
d37 = gr(180 - 54 - 71)
d38 = isqrt(26 ** 2 - 10 ** 2)
assert d38 ** 2 + 10 ** 2 == 26 ** 2

# ---------------------------------------------------------------- 20-bob
d39 = str(pi * F(14, 2) ** 2)
d40 = son(F(80 * 50 * 45, 1000))         # 1 l = 1000 sm^3

# ---------------------------------------------------------------- 21-bob
d41 = 90 - 38                            # sin x = cos (90 - x)
qarshi, gip = 11, 61
yopishgan = isqrt(gip ** 2 - qarshi ** 2)
assert yopishgan ** 2 + qarshi ** 2 == gip ** 2
d42 = F(qarshi, yopishgan)

JAVOBLAR = {
    "d-1": d1, "d-2": d2, "d-3": d3, "d-4": d4, "d-5": d5, "d-6": d6, "d-7": d7,
    "d-8": d8, "d-9": d9, "d-10": d10, "d-11": d11, "d-12": d12, "d-13": d13,
    "d-14": d14, "d-15": d15, "d-16": d16, "d-17": d17, "d-18": d18, "d-19": d19,
    "d-20": d20, "d-21": d21, "d-22": d22, "d-23": d23, "d-24": d24, "d-25": d25,
    "d-26": d26, "d-27": d27, "d-28": d28, "d-29": d29, "d-30": d30, "d-31": d31,
    "d-32": d32, "d-33": d33, "d-34": d34, "d-35": d35, "d-36": d36, "d-37": d37,
    "d-38": d38, "d-39": d39, "d-40": d40, "d-41": d41, "d-42": d42,
}
assert list(JAVOBLAR) == [f"d-{i}" for i in range(1, 43)]


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


# Izoh matnidagi (muallifdan so'z, yo'riqnoma, jadvallar) formulalar va namuna raqamlar
# javoblarda takrorlanmasin.
MATNDAGI = {norm(v) for v in [*_izoh_formulalari(MATN.read_text(encoding="utf-8")),
                              "3.12", "S3.2", 42, 21, 44, 70]}
for _id, _q in JAVOBLAR.items():
    assert norm(_q) not in MATNDAGI, (_id, _q)
_hammasi = [norm(v) for v in JAVOBLAR.values()]
assert len(_hammasi) == len(set(_hammasi)), "diagnostik test javoblari takrorlanmasin"
