"""09-bob: Chiziqli tenglamalar — javoblar hisobi.

Tenglamalar `Ifoda` ko'phadlari bilan `chap = ong` ko'rinishida beriladi va `yech` bilan
yechiladi: chap - ong = A*x + B ga ajratiladi, x = -B/A. Har bir son yechim dastlabki
tenglamaga qo'yib tekshiriladi.
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


YOQ = "yechimi yo'q"
CHEKSIZ = "cheksiz ko'p yechim"


def turi(chap, ong, nom="x"):
    """Tenglama yechimlari soni: 'bitta', YOQ yoki CHEKSIZ."""
    a, b = (chap - ong).ajrat(nom)
    if a == 0:
        return CHEKSIZ if b == 0 else YOQ
    return "bitta"


def yech(chap, ong, nom="x"):
    """Bir noma'lumli chiziqli tenglamani yechadi: son (Fraction), YOQ yoki CHEKSIZ."""
    t = turi(chap, ong, nom)
    if t != "bitta":
        return t
    a, b = (chap - ong).ajrat(nom)
    assert not a.harflar() and not b.harflar(), "boshqa harf bor: harfli_yech ishlating"
    x = -b.ozod() / a.ozod()
    assert chap.qiymat(**{nom: x}) == ong.qiymat(**{nom: x})
    return x


def harfli_yech(chap, ong, nom):
    """Formulani `nom` harfiga nisbatan yechadi (koeffitsiyenti son bo'lishi kerak) -> Ifoda.

    Natija bir necha nuqtada dastlabki formulaga qo'yib tekshiriladi.
    """
    a, b = (chap - ong).ajrat(nom)
    assert a != 0 and not a.harflar(), "koeffitsiyent son emas"
    natija = -b / a.ozod()
    boshqalar = [h for h in (chap - ong).harflar() if h != nom]
    for i, nuqta in enumerate(([3, -2, 5], [F(1, 2), 7, -4], [-6, F(2, 3), 1])):
        q = dict(zip(boshqalar, nuqta))
        q[nom] = natija.qiymat(**q)
        assert chap.qiymat(**q) == ong.qiymat(**q), i
    return natija


def yagona_k(tenglama, kerak, oraliq=range(-20, 21)):
    """k ning butun qiymatlari orasidan tenglama turi `kerak` bo'ladiganini topadi (yagona)."""
    mos = [k for k in oraliq if turi(*tenglama(k)) == kerak]
    assert len(mos) == 1, mos
    return mos[0]


x, y = Ifoda.harf("x"), Ifoda.harf("y")

# m9-16: o'nli koeffitsiyentlar
m16 = yech(F("0.4") * x + F("1.5"), F("0.1") * x + 3)

# m9-20: 5x - 2(x - k) = 3x + 8 cheksiz ko'p yechim
m20 = yagona_k(lambda k: (5 * x - 2 * (x - k), 3 * x + 8), CHEKSIZ)
# m9-21: kx - 4 = 3(x + 2) - x yechimsiz
m21 = yagona_k(lambda k: (k * x - 4, 3 * (x + 2) - x), YOQ)

# m9-22: y = 4x - 10 ni x ga nisbatan
m22 = d("x = " + kasr_matn(harfli_yech(y, 4 * x - 10, "x")))

# m9-23: F = 9C/5 + 32, F = 95
c = Ifoda.harf("C")
m23 = yech(F(9, 5) * c + 32, Ifoda({(): 95}), "C")

# m9-24: 25000 + 4000g = 61000 (GB)
g = Ifoda.harf("g")
m24 = yech(25000 + 4000 * g, Ifoda({(): 61000}), "g")

# m9-25: 120000 + 15000n = 25000n (mashg'ulotlar)
n = Ifoda.harf("n")
m25 = yech(120000 + 15000 * n, 25000 * n, "n")

# m9-26: 2x + 3y = 18 ni y ga nisbatan
m26 = d("y = " + kasr_matn(harfli_yech(2 * x + 3 * y, Ifoda({(): 18}), "y")))

# s9-3: qaysi tenglamaning yechimi yo'q
s3_variant = [
    (4 * x + 1, 4 * x + 1),
    (4 * x + 1, 2 * x + 1),
    (4 * x + 1, 4 * (x + 1)),
    (4 * x + 1, 4 * (x - 1) + 5),
]
s3 = harf([turi(*t) for t in s3_variant], YOQ)

# s9-4: ax - 7 = 3(2x + 1) yechimsiz
s4 = yagona_k(lambda a: (a * x - 7, 3 * (2 * x + 1)), YOQ)

# s9-5: C = 12n + 5m -> m
cc, nn, mm = Ifoda.harf("C"), Ifoda.harf("n"), Ifoda.harf("m")
m_ifoda = harfli_yech(cc, 12 * nn + 5 * mm, "m")
s5_variant = [
    lambda C, n: (C - 12 * n) / 5,
    lambda C, n: C / 5 - 12 * n,
    lambda C, n: (C + 12 * n) / 5,
    lambda C, n: 5 * (C - 12 * n),
]
nuqtalar = [(F(100), F(3)), (F(7), F(-2)), (F(1, 3), F(5))]
s5 = harf([all(f(C, n) == m_ifoda.qiymat(C=C, n=n) for C, n in nuqtalar) for f in s5_variant],
          True)

JAVOBLAR = {
    # A
    "m9-1": yech(x + 13, Ifoda({(): 6})),
    "m9-2": yech(x - 8, Ifoda({(): -11})),
    "m9-3": yech(7 * x, Ifoda({(): -42})),
    "m9-4": yech(x / 4, Ifoda({(): -9})),
    "m9-5": yech(2 * x + 9, Ifoda({(): 25})),
    "m9-6": yech(15 - 4 * x, Ifoda({(): 3})),
    "m9-7": yech(-5 * x - 6, Ifoda({(): 14})),
    "m9-8": yech(8 * x, Ifoda({(): 6})),
    # B
    "m9-9": yech(9 * x - 4, 5 * x + 22),
    "m9-10": yech(3 - 2 * x, 4 * x - 21),
    "m9-11": yech(4 * (x - 3), 2 * x + 10),
    "m9-12": yech(5 * (2 * x + 1) - 3 * (x - 4), Ifoda({(): 3})),
    "m9-13": yech(2 * x / 3 - 1, Ifoda({(): 7})),
    "m9-14": yech(x / 2 + x / 3, Ifoda({(): 15})),
    "m9-15": yech((x - 3) / 4, (x + 2) / 6),
    "m9-16": m16,
    "m9-17": yech(3 * (x + 4), 3 * x + 10),
    # C
    "m9-18": yech(2 * (3 * x - 1) - (x + 5), 5 * x - 7),
    "m9-19": yech((2 * x - 1) / 3 - (x + 2) / 4, Ifoda({(): 1})),
    "m9-20": m20,
    "m9-21": m21,
    "m9-22": m22,
    "m9-23": m23,
    "m9-24": m24,
    "m9-25": m25,
    "m9-26": m26,
    # SAT
    "s9-1": yech(5 * (x - 3), 2 * x + 9),
    "s9-2": yech(x / 2 + x / 5, Ifoda({(): 14})),
    "s9-3": s3,
    "s9-4": s4,
    "s9-5": s5,
}
