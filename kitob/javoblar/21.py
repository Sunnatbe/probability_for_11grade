"""21-bob: Trigonometriyaga kirish — javoblar hisobi.

Butun tomonli uchburchaklarda nisbatlar Fraction. Maxsus burchaklar qiymatlari `R(k, m)` = k*sqrt(m)
(k — Fraction, m — kvadratsiz butun son) ko'rinishida aniq saqlanadi; jadval maxsus uchburchaklar
tomonlaridan hisoblanadi va kitobdagi jadval bilan solishtiriladi. Har bir to'g'ri burchakli uchburchak
Pifagor teoremasi bilan tekshiriladi. 21.2-rasm qiymatlari rasmlar/21_malumotlar.py dan olinadi.
"""
import runpy
from decimal import Decimal as D
from fractions import Fraction as F
from math import isqrt
from pathlib import Path

KITOB = Path(__file__).resolve().parent.parent
BOB = KITOB / "boblar" / "21-trigonometriya.md"
M = runpy.run_path(str(KITOB / "rasmlar" / "21_malumotlar.py"), run_name="__main__")


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


class R:
    """k * sqrt(m), m kvadratsiz."""

    def __init__(self, k, m=1):
        k, m = F(k), int(m)
        assert m >= 1
        d = max(i for i in range(1, isqrt(m) + 1) if m % (i * i) == 0)
        self.k, self.m = k * d, m // (d * d)

    def __mul__(self, o):
        o = o if isinstance(o, R) else R(o)
        return _kopaytir(self, o)

    __rmul__ = __mul__

    def __truediv__(self, o):
        o = o if isinstance(o, R) else R(o)
        # a*sqrt(m) / (b*sqrt(n)) = a/(b*n) * sqrt(m*n)
        return R(self.k / (o.k * o.m), self.m * o.m)

    def __rtruediv__(self, o):
        return R(o) / self

    def kv(self):
        return self.k ** 2 * self.m

    def __eq__(self, o):
        o = o if isinstance(o, R) else R(o)
        return (self.k, self.m) == (o.k, o.m)

    def __hash__(self):
        return hash((self.k, self.m))

    def __str__(self):
        if self.m == 1:
            return str(self.k) if self.k.denominator == 1 else f"{self.k.numerator}/{self.k.denominator}"
        p, q = self.k.numerator, self.k.denominator
        ildiz = ("" if p == 1 else str(p)) + f"\\sqrt{{{self.m}}}"
        return ildiz if q == 1 else f"\\frac{{{ildiz}}}{{{q}}}"


def _kopaytir(a, b):
    return R(a.k * b.k, a.m * b.m)


def javob(x):
    """R -> kitobdagi javob: ildizsiz bo'lsa son (Fraction/int/Decimal), aks holda matn."""
    if isinstance(x, R) and x.m == 1:
        return x.k
    return str(x)


def pifagor(a, b, c):
    assert F(a) ** 2 + F(b) ** 2 == F(c) ** 2, (a, b, c)


def katet(c, a):
    q = F(c) ** 2 - F(a) ** 2
    r = isqrt(q.numerator * 10000 // q.denominator)
    natija = F(r, 100)
    assert natija ** 2 == q, (c, a)
    return natija


def gipotenuza(a, b):
    q = F(a) ** 2 + F(b) ** 2
    natija = F(isqrt(q.numerator), isqrt(q.denominator))
    assert natija ** 2 == q, (a, b)
    return natija


# Maxsus burchaklar: 30-60-90 (x, x*sqrt3, 2x) va 45-45-90 (x, x, x*sqrt2) uchburchaklardan, x = 1
qisqa, uzun, gip = R(1), R(1, 3), R(2)
assert qisqa.kv() + uzun.kv() == gip.kv()
k45, gip45 = R(1), R(1, 2)
assert 2 * k45.kv() == gip45.kv()
SIN = {30: qisqa / gip, 45: k45 / gip45, 60: uzun / gip}
COS = {30: uzun / gip, 45: k45 / gip45, 60: qisqa / gip}
TAN = {30: qisqa / uzun, 45: k45 / k45, 60: uzun / qisqa}
for g in (30, 45, 60):
    assert SIN[g].kv() + COS[g].kv() == 1 and SIN[g] == COS[90 - g] and TAN[g] == SIN[g] / COS[g]


def jadval_katak(x):
    s = str(x)
    if "/" in s and "\\" not in s:
        p, q = s.split("/")
        s = f"\\frac{{{p}}}{{{q}}}"
    return f"${s}$"


_bob = BOB.read_text(encoding="utf-8")
for nom, T in (("sin", SIN), ("cos", COS), ("tan", TAN)):
    qator = f"| {nom} | " + " | ".join(jadval_katak(T[g]) for g in (30, 45, 60)) + " |"
    assert qator in _bob, qator

# Mashqlar 21.1-21.3 uchburchagi
BC, AC, AB = 20, 21, 29
pifagor(BC, AC, AB)
assert f"$BC = {BC}$, $AC = {AC}$, $AB = {AB}$" in _bob
# Pandus (21.2-rasm b)
PG, PB, PU = (F(M[k]) for k in ("PANDUS_GORIZONTAL", "PANDUS_BALANDLIK", "PANDUS_UZUNLIK"))
pifagor(PG, PB, PU)

# --- A
m1 = F(BC, AB)                      # sin A = qarshi / gipotenuza
m2 = F(AC, AB)                      # cos A = yopishgan / gipotenuza
m3 = F(AC, BC)                      # tan B = AC / BC
m4 = PB / PU
m5 = PB / PG
m6 = 90 - 37
m7 = javob(SIN[30] * COS[60])
m8 = javob(46 * SIN[30])

# --- B
c9 = gipotenuza(9, 40)
m9 = F(9) / c9
q10 = katet(53, 28)
m10 = q10 / 28
m11 = son(javob(7 * COS[60]))
m12 = javob(30 * SIN[45])
m13 = javob(R(9) / COS[60])
m14 = javob(55 * R(F(3, 5)))
pifagor(F(3, 5) * 55, katet(55, F(3, 5) * 55), 55)
c15 = gipotenuza(35, 12)
m15 = F(12) / c15
# m21-16: katetlar 6 va 6*sqrt3, eng kichik burchak qisqa katet qarshisida: tan = 6 / (6 sqrt3)
tan16 = R(6) / R(6, 3)
mos16 = [g for g in (30, 45, 60) if TAN[g] == tan16]
assert len(mos16) == 1
m16 = f"{mos16[0]}°"
x17 = [x for x in range(1, 90) if (2 * x + 6) + x == 90 and 0 < 2 * x + 6 < 90]
assert len(x17) == 1
m17 = x17[0]

# --- C
m18 = son(F("0.6") * 12)            # tan <= 1/12 -> gorizontal >= 12 * balandlik
m19 = javob(30 * TAN[60])
h20 = katet(F("6.1"), F("1.1"))
m20 = h20 / F("6.1")
bc21 = 45 * F("0.6")
ac21 = katet(45, bc21)
m21 = son(45 + bc21 + ac21)
m22 = javob(2 * (10 * COS[30]))     # asosning yarmi = yon tomon * cos 30
qisqa23, uzun23 = 16 * SIN[30], 16 * COS[30]
assert qisqa23.kv() + uzun23.kv() == 16 ** 2
m23 = javob(qisqa23 * uzun23)
m24 = javob(R(5) / TAN[30])         # tan 30 = 5 / soya
# m21-25: tan A = 8/15 -> tomonlar 8k, 15k, 17k; gipotenuza 51
k25 = F(51, gipotenuza(8, 15))
m25 = son(8 * k25)
pifagor(8 * k25, 15 * k25, 51)

# --- SAT
# s21-1: B to'g'ri burchak; A ning qarshi kateti BC = C ning yopishgan kateti -> cos C = sin A
s1 = F(36, 85)
pifagor(36, katet(85, 36), 85)
x2 = [x for x in range(1, 90) if (2 * x + 7) + (x + 2) == 90]
assert len(x2) == 1 and 0 < 2 * x2[0] + 7 < 90 and 0 < x2[0] + 2 < 90
s2 = x2[0]
gip3 = gipotenuza(48, 55)
s3 = harf([F(48) / gip3, F(55) / gip3, F(48, 55), F(55, 48)], F(48, 55))
s4 = harf([R(6), R(6, 3), R(12), R(12, 3)], 12 * SIN[60])
pr5 = 85 * F(8, 17)
s5 = son(katet(85, pr5))

JAVOBLAR = {
    "m21-1": m1, "m21-2": m2, "m21-3": m3, "m21-4": m4, "m21-5": m5, "m21-6": m6, "m21-7": m7,
    "m21-8": m8,
    "m21-9": m9, "m21-10": m10, "m21-11": m11, "m21-12": m12, "m21-13": m13, "m21-14": m14,
    "m21-15": m15, "m21-16": m16, "m21-17": m17,
    "m21-18": m18, "m21-19": m19, "m21-20": m20, "m21-21": m21, "m21-22": m22, "m21-23": m23,
    "m21-24": m24, "m21-25": m25,
    "s21-1": s1, "s21-2": s2, "s21-3": s3, "s21-4": s4, "s21-5": s5,
}


def norm(v):
    if isinstance(v, D):
        v = format(v.normalize(), "f")
    if isinstance(v, F):
        v = str(v.numerator) if v.denominator == 1 else f"{v.numerator}/{v.denominator}"
    return str(v).replace("°", "").strip().lower()


# Matnda chiqqan qiymatlar (jadval, misollar natijalari va o'qilgan qiymatlar, xatolardagi qiymatlar,
# format namunalari) mashq va SAT javoblarida takrorlanmasin.
NL = M["NARVON_UZUNLIGI"]
assert M["NARVON_BURCHAGI"] == 60
MATNDAGI = {norm(v) for v in [
    *SIN.values(), *COS.values(), *TAN.values(), R(1) / R(1, 3), R(1) / R(1, 2),   # jadval
    5, 12, 13, 25, 144, 169, F(5, 13), F(12, 13), F(5, 12), F(12, 5),            # Misol 1
    20, 50, 40, 100,                                                              # Misol 2
    NL, javob(NL * COS[60]), javob(NL * SIN[60]), D("6.9"), 16, 48, 64,           # Misol 3
    D("0.6"), F(3, 5), 3, 4, 9, F(4, 5), D("0.8"), F(4, 3),                       # Misol 4
    1, -3, 8, 15, 17, 289, F(15, 8), F(15, 17), F(8, 17),                         # Misol 5
    2, F(13, 5),                                                                  # xatolar
    F(8, 39), D("6.5"), "3\\sqrt{7}", 72, F(3, 11),                               # format namunalari
]}
for _id, _q in JAVOBLAR.items():
    assert norm(_q) not in MATNDAGI, (_id, _q)
_mashq = [norm(v) for k, v in JAVOBLAR.items() if k.startswith("m")]
assert len(_mashq) == len(set(_mashq)), "mashq javoblari takrorlanmasin"
