"""20-bob: Perimetr, yuz, hajm, aylana — javoblar hisobi.

pi li javoblar `Pi(a, b)` = a + b*pi ko'rinishida aniq (Fraction) saqlanadi va kanonik matnga
aylantiriladi: "14\\pi", "\\frac{225}{8}\\pi", "60 + 20\\pi", "144 - 36\\pi" (son oldin, pi li had keyin).
"pi ≈ 3.14" deyilgan savollarda pi o'rniga Fraction("3.14") qo'yiladi.
20.1-rasm b) va S20.2 chizmasiga oid javoblar rasmlar/20_malumotlar.py dan hisoblanadi.
"""
import runpy
from decimal import Decimal as D
from fractions import Fraction as F
from pathlib import Path

KITOB = Path(__file__).resolve().parent.parent
M = runpy.run_path(str(KITOB / "rasmlar" / "20_malumotlar.py"), run_name="__main__")
PI = F("3.14")


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


class Pi:
    """a + b*pi (a, b — Fraction)."""

    def __init__(self, a=0, b=0):
        self.a, self.b = F(a), F(b)

    def __add__(self, o):
        o = o if isinstance(o, Pi) else Pi(o)
        return Pi(self.a + o.a, self.b + o.b)

    __radd__ = __add__

    def __sub__(self, o):
        o = o if isinstance(o, Pi) else Pi(o)
        return Pi(self.a - o.a, self.b - o.b)

    def __rsub__(self, o):
        return Pi(o) - self

    def __mul__(self, k):
        assert not isinstance(k, Pi), "pi^2 kerak emas"
        return Pi(self.a * F(k), self.b * F(k))

    __rmul__ = __mul__

    def __truediv__(self, k):
        return self * (1 / F(k))

    def __eq__(self, o):
        o = o if isinstance(o, Pi) else Pi(o)
        return (self.a, self.b) == (o.a, o.b)

    def __hash__(self):
        return hash((self.a, self.b))

    def taxminiy(self):
        return son(self.a + self.b * PI)

    def __str__(self):
        assert self.b != 0
        b = abs(self.b)
        if b == 1:
            koef = ""
        elif b.denominator == 1:
            koef = str(b.numerator)
        else:
            koef = f"\\frac{{{b.numerator}}}{{{b.denominator}}}"
        pi_had = koef + "\\pi"
        if self.a == 0:
            assert self.b > 0
            return pi_had
        a = son(self.a)
        return f"{a} {'+' if self.b > 0 else '-'} {pi_had}"


pi = Pi(0, 1)


def aylana_uzunligi(r):
    return 2 * pi * r


def doira_yuzi(r):
    return pi * F(r) ** 2


def yoy(theta, r):
    return F(theta, 360) * aylana_uzunligi(r)


def sektor(theta, r):
    return F(theta, 360) * doira_yuzi(r)


def trapetsiya(a, b, h):
    return F(1, 2) * (a + b) * h


# --- A
m1 = 2 * (15 + 8)
m2 = 13 * 7
m3 = son(F(1, 2) * 14 * 9)
m4 = 12 * 7
m5 = son(trapetsiya(9, 15, 6))
m6 = str(aylana_uzunligi(7))
m7 = str(doira_yuzi(11))
m8 = 7 * 4 * 5

# --- B
m9 = str(doira_yuzi(F(26, 2)))
r10 = F(30, 2)                          # 2*pi*r = 30*pi
assert aylana_uzunligi(r10) == 30 * pi
m10 = str(doira_yuzi(r10))
m11 = str(yoy(45, 12))
m12 = str(sektor(80, 9))
m13 = str(doira_yuzi(3) * 10)
m14 = son(F("2.5") * 100 * 100)
m15 = son((F(36) / 4) ** 2)
uzun16 = F(96, 6)
m16 = son(2 * (6 + uzun16))
m17 = aylana_uzunligi(5).taxminiy()
L, W = M["STADION_UZUNLIK"], M["STADION_ENI"]
stadion_P = 2 * L + aylana_uzunligi(F(W, 2))          # ikki yarim aylana = bitta aylana
stadion_S = L * W + doira_yuzi(F(W, 2))               # ikki yarim doira = bitta doira
m18 = str(stadion_P)

# --- C
m19 = stadion_S.taxminiy()
pol = 5 * 100 * 4 * 100                                # sm^2
assert (5 * 100) % 20 == 0 and (4 * 100) % 20 == 0     # plitkalar kesilmaydi
m20 = pol // (20 * 20)
m21 = son(F(50 * 30 * 36, 1000))                       # sm^3 -> litr
m22 = son(F((doira_yuzi(1) * 2).taxminiy()) * 1000)     # m^3 -> litr
m23 = son(doira_yuzi(3 * 7).b / doira_yuzi(7).b)       # istalgan radius uchun bir xil
qirra24 = [a for a in range(1, 100) if a ** 3 == 343]
assert len(qirra24) == 1
m24 = qirra24[0] ** 2
m25 = str(doira_yuzi(F(30, 2)) / 8)
m26 = str(12 ** 2 - doira_yuzi(F(12, 2)))
m27 = son(trapetsiya(12, 18, 8) * 4)

# --- SAT
r1 = F(18, 2)
assert aylana_uzunligi(r1) == 18 * pi
s1 = harf([9 * pi, 18 * pi, 36 * pi, 81 * pi], doira_yuzi(r1))
SW, SH, SR = M["SAT_ENI"], M["SAT_BOYI"], M["SAT_RADIUS"]
s2 = harf([128 - 16 * pi, 128 - 32 * pi, 128 - 64 * pi, 32 * pi], SW * SH - 2 * doira_yuzi(SR))
assert SW * SH == 128
s3 = harf([36 * pi, 72 * pi, 144 * pi, 288 * pi], doira_yuzi(4) * 9)
s4 = son(F(504, 12 * 3))
k5 = yoy(150, 18)
assert k5.a == 0
s5 = son(k5.b)

JAVOBLAR = {
    "m20-1": m1, "m20-2": m2, "m20-3": m3, "m20-4": m4, "m20-5": m5, "m20-6": m6, "m20-7": m7,
    "m20-8": m8,
    "m20-9": m9, "m20-10": m10, "m20-11": m11, "m20-12": m12, "m20-13": m13, "m20-14": m14,
    "m20-15": m15, "m20-16": m16, "m20-17": m17, "m20-18": m18,
    "m20-19": m19, "m20-20": m20, "m20-21": m21, "m20-22": m22, "m20-23": m23, "m20-24": m24,
    "m20-25": m25, "m20-26": m26, "m20-27": m27,
    "s20-1": s1, "s20-2": s2, "s20-3": s3, "s20-4": s4, "s20-5": s5,
}


def norm(v):
    if isinstance(v, D):
        v = format(v.normalize(), "f")
    return str(v).strip().lower()


# Matnda chiqqan qiymatlar (misollar natijalari va o'qilgan qiymatlar, xatolardagi qiymatlar,
# format namunalari) mashq va SAT javoblarida takrorlanmasin.
E, B = M["L_ENI"], M["L_BOYI"]
ke, kb = M["L_KESIK_ENI"], M["L_KESIK_BOYI"]
misol2_P = E + B + M["L_YUQORI"] + kb + ke + (B - kb)
misol2_S = E * B - ke * kb
assert misol2_S == M["L_YUQORI"] * B + ke * (B - kb)
r3 = 6
MATNDAGI = {norm(v) for v in [
    6 * 4, 2 * (6 + 4),                                                  # to'g'ri to'rtburchak misoli
    6 * pi,                                                              # r = 3 misoli
    son(F(1, 2) * 10 * 6), son(trapetsiya(7, 11, 5)), 13 * 4,          # Misol 1
    E - M["L_YUQORI"], B - kb, misol2_P, E * B, ke * kb, misol2_S,       # Misol 2
    M["L_YUQORI"] * B, ke * (B - kb),
    aylana_uzunligi(r3), aylana_uzunligi(r3).taxminiy(),                 # Misol 3
    doira_yuzi(r3), doira_yuzi(r3).taxminiy(),
    F(60, 360), yoy(60, r3), sektor(60, r3),                             # Misol 4
    doira_yuzi(5) * 12, (doira_yuzi(5) * 12).taxminiy(),                 # Misol 5
    son(F((doira_yuzi(5) * 12).taxminiy()) / 1000),
    10000, 1000000, 1000, 4, 8,                                          # birliklar, o'xshashlik
    doira_yuzi(10), doira_yuzi(5), 300, 30000,                           # xato 1, 2
    8 * 5, son(F(1, 2) * 8 * 5), 10 * 6, 10 * 5,                         # xato 3, 4
    Pi(0, 8), doira_yuzi(4),                                             # xato 5
    20 * pi, F(7, 2) * pi, 40 + 9 * pi, 50 - 9 * pi, D("50.24"),        # format namunalari
]}
for _id, _q in JAVOBLAR.items():
    assert norm(_q) not in MATNDAGI, (_id, _q)
_mashq = [norm(v) for k, v in JAVOBLAR.items() if k.startswith("m")]
assert len(_mashq) == len(set(_mashq)), "mashq javoblari takrorlanmasin"
