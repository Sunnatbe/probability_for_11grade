"""08-bob: Algebraik ifodalar — javoblar hisobi.

Ifoda javoblari `Ifoda` ko'phad sinfi bilan hisoblanadi va kanonik matnga aylantiriladi;
har bir soddalashtirish natijasi yana bir necha nuqtada qiymat bo'yicha tekshiriladi.
"""
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


def solishtir(ifoda, funksiya):
    """Ifodani oddiy Python funksiyasi bilan bir necha nuqtada solishtiradi (mustaqil tekshiruv)."""
    harflar = ifoda.harflar() or ["x"]
    for nuqta in ([F(2), F(-3)], [F(-1, 2), F(5)], [F(7), F(1, 3)], [F(0), F(-4)]):
        q = dict(zip(harflar, nuqta + nuqta))
        assert ifoda.qiymat(**q) == funksiya(**q), (ifoda.matn(), q)
    return ifoda


x, y, a, b, m, n, r = (Ifoda.harf(h) for h in "xyabmnr")

# --- B, C: soddalashtirish (har biri funksiya bilan mustaqil tekshiriladi)
m12 = solishtir(4 * (x + 3) + 2 * (3 * x - 1), lambda x: 4 * (x + 3) + 2 * (3 * x - 1))
m13 = solishtir(8 * y - (3 * y - 7), lambda y: 8 * y - (3 * y - 7))
m14 = solishtir(2 * (5 * a - 4) - 3 * (a - 6), lambda a: 2 * (5 * a - 4) - 3 * (a - 6))
m15 = solishtir(x * (x - 5) + 3 * x, lambda x: x * (x - 5) + 3 * x)
m16 = solishtir(5 * x**2 - 3 * x + 2 - 2 * x**2 + 7 * x - 9,
                lambda x: 5 * x**2 - 3 * x + 2 - 2 * x**2 + 7 * x - 9)

# m8-17: 12x - 18 = EKUB * (...)
ifoda17 = 12 * x - 18
ekub17 = gcd(*(int(k) for k in ifoda17.h.values()))
qoldiq17 = ifoda17 / ekub17
assert ekub17 * qoldiq17 == ifoda17
m17 = d(f"{ekub17}({qoldiq17.matn()})")

m18 = solishtir(F(1, 2) * (6 * x - 4) + F(2, 3) * (9 * x + 3),
                lambda x: F(1, 2) * (6 * x - 4) + F(2, 3) * (9 * x + 3))
m19 = solishtir(3 * a - 2 * (a - 2 * b) + 5 * (b - a),
                lambda a, b: 3 * a - 2 * (a - 2 * b) + 5 * (b - a))
m20 = solishtir(2 * x * (3 * x - 1) - 3 * (x**2 - 2 * x + 4),
                lambda x: 2 * x * (3 * x - 1) - 3 * (x**2 - 2 * x + 4))

# m8-21: avval soddalashtirib, keyin x = -3
ifoda21 = solishtir(4 * (2 * x - 5) - 3 * (2 * x - 7) + x,
                    lambda x: 4 * (2 * x - 5) - 3 * (2 * x - 7) + x)
m21 = ifoda21.qiymat(x=-3)

# m8-22: taksi 6000 + 2500k; Vali 12 km, Ali 7 km -> farq
narx22 = 6000 + 2500 * Ifoda.harf("k")
m22 = narx22.qiymat(k=12) - narx22.qiymat(k=7)

# m8-23: eni x, bo'yi 2x + 3; perimetr = to'rt tomon yig'indisi
m23 = solishtir(x + (2 * x + 3) + x + (2 * x + 3), lambda x: 2 * (x + 2 * x + 3))

# m8-24: 2 kg olma (a so'm/kg) va 3 kg nok (a + 3000 so'm/kg)
m24 = solishtir(2 * a + 3 * (a + 3000), lambda a: 2 * a + 3 * (a + 3000))

# m8-25: (10x - 15)/5 + 2(x + 1)
m25 = solishtir((10 * x - 15) / 5 + 2 * (x + 1), lambda x: (10 * x - 15) / 5 + 2 * (x + 1))

# m8-26: 5(x - 2) - (5x - 13) har qanday x da bir xil
ifoda26 = solishtir(5 * (x - 2) - (5 * x - 13), lambda x: 5 * (x - 2) - (5 * x - 13))
assert not ifoda26.harflar()
m26 = ifoda26.ozod()

# --- SAT
# s8-1: 4(3x - 2) - (5x - 6)
s1_togri = 4 * (3 * x - 2) - (5 * x - 6)
s1_variant = [7 * x - 14, 7 * x - 2, 7 * x + 4, 17 * x - 14]
s1 = harf(s1_variant, s1_togri)

# s8-3: 6x^2 + 9x ga teng kuchli
s3_variant = [3 * x * (2 * x + 3), 3 * x * (2 * x + 9), 6 * x * (x + 3), 6 * x * (x + 9)]
s3 = harf(s3_variant, 6 * x**2 + 9 * x)

# s8-4: 3(x + 2k) - 2x = x + 18 -> 6k = 18
s4_k = [k for k in range(-20, 21)
        if 3 * (x + 2 * k) - 2 * x == x + 18]
assert len(s4_k) == 1

JAVOBLAR = {
    # A
    "m8-1": (4 * x - 9).qiymat(x=6),
    "m8-2": (5 - 2 * a).qiymat(a=-3),
    "m8-3": (y**2 + 3 * y).qiymat(y=-5),
    "m8-4": d(solishtir(7 * x + 3 * x - 4 * x, lambda x: 7 * x + 3 * x - 4 * x).matn()),
    "m8-5": d(solishtir(9 * a - 4 + 2 * a + 10, lambda a: 9 * a - 4 + 2 * a + 10).matn()),
    "m8-6": d(solishtir(6 * (2 * x - 5), lambda x: 6 * (2 * x - 5)).matn()),
    "m8-7": d(solishtir(-3 * (4 - y), lambda y: -3 * (4 - y)).matn()),
    "m8-8": (4 * x**2 - x + 9).koef("x"),
    # B
    "m8-9": (x**2 * y - 4 * x * y).qiymat(x=-2, y=3),
    "m8-10": (6 * a + 9 * b).qiymat(a=F(1, 2), b=F(-2, 3)),
    "m8-11": (3 * m - 1).qiymat(m=-4) / (m + 2).qiymat(m=-4),
    "m8-12": d(m12.matn()),
    "m8-13": d(m13.matn()),
    "m8-14": d(m14.matn()),
    "m8-15": d(m15.matn()),
    "m8-16": d(m16.matn()),
    "m8-17": m17,
    # C
    "m8-18": d(m18.matn()),
    "m8-19": d(m19.matn()),
    "m8-20": d(m20.matn()),
    "m8-21": m21,
    "m8-22": m22,
    "m8-23": d(m23.matn()),
    "m8-24": d(m24.matn()),
    "m8-25": d(m25.matn()),
    "m8-26": m26,
    # SAT
    "s8-1": s1,
    "s8-2": (2 * x**2 - 5 * x).qiymat(x=-3),
    "s8-3": s3,
    "s8-4": s4_k[0],
}
