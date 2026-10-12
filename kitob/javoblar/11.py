"""11-bob: Matnli masalani tenglamaga aylantirish — javoblar hisobi.

Har bir masala matndagi kabi tenglamaga aylantiriladi (`Ifoda` bilan), `yech` bilan
yechiladi va javob dastlabki shartlarga qo'yib tekshiriladi.
"""
from decimal import Decimal as D
from fractions import Fraction as F
from math import gcd


def harf(variantlar, togri):
    """To'g'ri qiymatni variantlar orasidan topib, harfini qaytaradi (yagona bo'lishi shart)."""
    mos = [i for i, v in enumerate(variantlar) if v == togri]
    assert len(mos) == 1, (variantlar, togri)
    return "ABCD"[mos[0]]


class Ifoda:
    """Ko'phad: {monom: koeffitsiyent}, monom = (("x", 2), ("y", 1)) kabi tartiblangan juftlar.

    Kanonik matn (`matn`): daraja kamayishi bo'yicha, bir xil darajada harflar alifbosi (katta-kichik harf farqsiz)
    bo'yicha, ozod had oxirida; koeffitsiyent 1 yozilmaydi, kasr koeffitsiyent \\frac bilan.
    """

    def __init__(self, hadlar=None):
        self.h = {m: F(k) for m, k in (hadlar or {}).items() if k != 0}

    @staticmethod
    def harf(nom):
        return Ifoda({((nom, 1),): 1})

    @staticmethod
    def _ol(a):
        return a if isinstance(a, Ifoda) else Ifoda({(): F(a)})

    def __add__(self, o):
        h = dict(self.h)
        for m, k in Ifoda._ol(o).h.items():
            h[m] = h.get(m, 0) + k
        return Ifoda(h)

    __radd__ = __add__

    def __neg__(self):
        return Ifoda({m: -k for m, k in self.h.items()})

    def __sub__(self, o):
        return self + (-Ifoda._ol(o))

    def __rsub__(self, o):
        return Ifoda._ol(o) - self

    def __mul__(self, o):
        h = {}
        for m1, k1 in self.h.items():
            for m2, k2 in Ifoda._ol(o).h.items():
                d = dict(m1)
                for v, e in m2:
                    d[v] = d.get(v, 0) + e
                m = tuple(sorted(d.items(), key=lambda p: (p[0].lower(), p[0])))
                h[m] = h.get(m, 0) + k1 * k2
        return Ifoda(h)

    __rmul__ = __mul__

    def __truediv__(self, son):
        assert not isinstance(son, Ifoda), "faqat songa bo'linadi"
        return self * (1 / F(son))

    def __pow__(self, n):
        natija = Ifoda({(): 1})
        for _ in range(n):
            natija = natija * self
        return natija

    def __eq__(self, o):
        return self.h == Ifoda._ol(o).h

    def __hash__(self):
        return hash(frozenset(self.h.items()))

    def qiymat(self, **q):
        jami = F(0)
        for m, k in self.h.items():
            had = k
            for v, e in m:
                had *= F(q[v]) ** e
            jami += had
        return jami

    def ozod(self):
        return self.h.get((), F(0))

    def koef(self, nom, daraja=1):
        return self.h.get(((nom, daraja),), F(0))

    def harflar(self):
        return sorted({v for m in self.h for v, _ in m}, key=lambda s: (s.lower(), s))

    def ajrat(self, nom):
        """self = A * nom + B ko'rinishiga ajratadi (nom faqat birinchi darajada bo'lishi shart)."""
        a, b = {}, {}
        for m, k in self.h.items():
            d = dict(m)
            e = d.pop(nom, 0)
            assert e in (0, 1), "harf birinchi darajada emas"
            (a if e == 1 else b)[tuple(sorted(d.items(), key=lambda p: (p[0].lower(), p[0])))] = k
        return Ifoda(a), Ifoda(b)

    def matn(self, tartib=None):
        if not self.h:
            return "0"
        tartib = tartib or self.harflar()

        def kalit(m):
            d = dict(m)
            if not m:
                return (2, 0, ())
            return (1, -sum(d.values()), tuple(-d.get(v, 0) for v in tartib))

        qismlar = []
        for i, m in enumerate(sorted(self.h, key=kalit)):
            k = self.h[m]
            belgi = ("-" if k < 0 else "") if i == 0 else (" - " if k < 0 else " + ")
            a = abs(k)
            harfli = "".join(v if e == 1 else f"{v}^{{{e}}}" for v, e in m)
            if harfli and a == 1:
                koef = ""
            elif a.denominator == 1:
                koef = str(a.numerator)
            else:
                koef = f"\\frac{{{a.numerator}}}{{{a.denominator}}}"
            qismlar.append(belgi + koef + harfli)
        return "".join(qismlar)


def son_matn(q):
    """Sonni LaTeX matnga: -7, \\frac{3}{4}, -\\frac{7}{2}."""
    q = F(q)
    if q.denominator == 1:
        return str(q.numerator)
    return f"{'-' if q < 0 else ''}\\frac{{{abs(q.numerator)}}}{{{q.denominator}}}"


def kasr_matn(ifoda, **kw):
    """Kasr koeffitsiyentli ko'phadni umumiy maxrajli bitta kasr ko'rinishida yozadi."""
    maxraj = 1
    for k in ifoda.h.values():
        maxraj = maxraj * k.denominator // gcd(maxraj, k.denominator)
    if maxraj == 1:
        return ifoda.matn(**kw)
    if len(ifoda.h) == 1 and next(iter(ifoda.h.values())) < 0:
        return "-" + kasr_matn(-ifoda, **kw)  # bitta hadli manfiy kasr: -\\frac{x}{2}
    return f"\\frac{{{(ifoda * maxraj).matn(**kw)}}}{{{maxraj}}}"


def d(matn):
    """Javob matnini formula sifatida o'raydi."""
    return f"${matn}$"


def _ol(a):
    return a if isinstance(a, Ifoda) else Ifoda({(): F(a)})


def yech(chap, ong, nom="x"):
    """Bir noma'lumli chiziqli tenglamaning yagona yechimi (Fraction), tekshiruv bilan."""
    chap, ong = _ol(chap), _ol(ong)
    a, b = (chap - ong).ajrat(nom)
    assert a != 0 and not a.harflar() and not b.harflar()
    x = -b.ozod() / a.ozod()
    assert chap.qiymat(**{nom: x}) == ong.qiymat(**{nom: x})
    return x


def onli(kasr):
    """Chekli o'nli kasrga aylanadigan Fraction ni Decimal ga aylantiradi."""
    kasr = F(kasr)
    natija = D(kasr.numerator) / D(kasr.denominator)
    assert F(natija) == kasr, "kasr chekli o'nli kasr emas"
    return natija


def butun(q):
    """Masala javobi butun son bo'lishi shart."""
    assert F(q).denominator == 1, q
    return int(q)


x, y, a, b, n, r, t, w = (Ifoda.harf(h) for h in "xyabnrtw")

# --- A
m1 = d((x - 9).matn())
m2 = d((4 * y + 3).matn())
m3 = d(kasr_matn((a + b) / 2))
m4 = yech(5 * x, 65)
m5 = yech(x - 14, -6)
m6 = yech(n + (n + 1) + (n + 2), 72, "n")
m7 = d((r + 1500 + 2 * r).matn())
m8 = yech(x + (x + 4), 30)                      # Laylo x, Malika x + 4

# --- B
m9 = yech(4 * x + 6, 2 * x + 20)
n10 = butun(yech(n + (n + 2), 86, "n"))
assert n10 % 2 == 0
m10 = n10 + 2                                   # kattasi
m11 = butun(yech(n + (n + 1) + (n + 2) + (n + 3), -18, "n"))
m12 = butun(yech((x + 26) + 4, 3 * (x + 4)))     # qiz x, ona x + 26
c13 = butun(yech(25000 * x + 40000 * (9 - x), 300000))   # x — bolalar
assert 0 <= c13 <= 9
m14 = onli(yech(14 * t + 18 * t, 112, "t"))
m15 = yech(2 * (w + 3 * w), 64, "w")
m16 = yech(F(80, 100) * x, 248000)
x17 = butun(yech(x + (x + 5) + 2 * x, 85))
m17 = 2 * x17                                   # 9-V sinf

# --- C
n18 = butun(yech(3 * n, (n + 4) + 18, "n"))
assert n18 % 2 == 1
m18 = n18 + 2                                   # o'rtadagisi
b19 = butun(yech(2 * b - 6, 3 * (b - 6), "b"))  # uka hozir b, Akmal 2b
m19 = 2 * b19
t20 = yech(90 * t, 60 * (t + 1), "t")           # avtomobil t soat yuradi
m20 = 90 * t20
assert m20 == 60 * (t20 + 1)
tuz21 = F(15, 100) * 400
m21 = yech(tuz21, F(6, 100) * (400 + w), "w")
m22 = yech(18000 * (12 - b) + 30000 * b, 26000 * 12, "b")
j23 = yech(2 * x + x + (x - 120000), 1080000)
m23 = 2 * j23                                   # Bobur
w24 = yech(2 * (w + (2 * w - 5)), 110, "w")
m24 = 2 * w24 - 5                               # bo'yi
m25 = onli(yech(x / 3 + x / 5, 4))
n26 = butun(yech(n + (n + 4), 3 * (n + 2) - 56, "n"))
assert n26 % 2 == 0
m26 = n26 + (n26 + 2) + (n26 + 4)

# --- SAT
s1 = harf([7 - 3 * n, 3 * n - 7, 3 * (n - 7), 3 * (7 - n)], 3 * n - 7)
n2 = butun(yech(n + (n + 1) + (n + 2), 141, "n"))
s2 = n2 + 2
s3 = butun(yech(12 * a + 8 * (80 - a), 840, "a"))
s4 = harf([b + (2 * b + 4), b + 2 * (b + 4), 2 * b + 4, b + 4 * b + 2], b + (2 * b + 4))
s5 = yech(70 * t + 50 * t, 360, "t")

JAVOBLAR = {
    "m11-1": m1, "m11-2": m2, "m11-3": m3, "m11-4": m4, "m11-5": m5,
    "m11-6": m6, "m11-7": m7, "m11-8": m8,
    "m11-9": m9, "m11-10": m10, "m11-11": m11, "m11-12": m12, "m11-13": c13,
    "m11-14": m14, "m11-15": m15, "m11-16": m16, "m11-17": m17,
    "m11-18": m18, "m11-19": m19, "m11-20": m20, "m11-21": m21, "m11-22": m22,
    "m11-23": m23, "m11-24": m24, "m11-25": m25, "m11-26": m26,
    "s11-1": s1, "s11-2": s2, "s11-3": s3, "s11-4": s4, "s11-5": s5,
}
