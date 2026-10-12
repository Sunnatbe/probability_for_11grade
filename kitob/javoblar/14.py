"""14-bob: Ko'phadlar va ko'paytuvchilarga ajratish — javoblar hisobi.

Ko'paytirish natijalari `Ifoda` bilan hisoblanadi va oddiy Python funksiyasi bilan bir necha
nuqtada solishtiriladi. Ko'paytuvchilarga ajratish javoblari `kopaytma` bilan yoziladi: ko'paytuvchilar
qayta ko'paytirilib dastlabki ko'phadga tengligi (aynan va bir necha nuqtada) tekshiriladi.
Kanonik ko'rinish: avval son yoki birhad ko'paytuvchi, keyin qavslar ozod hadi o'sish tartibida,
bir xil qavslar kvadrat bilan: $2x(x - 5)(x + 1)$, $(x - 6)^{2}$.
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



NUQTALAR = (F(2), F(-3), F(-1, 2), F(7), F(1, 3), F(0))


def solishtir(ifoda, funksiya):
    """Ifodani oddiy Python funksiyasi bilan bir necha nuqtada solishtiradi (mustaqil tekshiruv)."""
    harflar = ifoda.harflar() or ["x"]
    for i, t in enumerate(NUQTALAR):
        q = {h: t + j for j, h in enumerate(harflar)}
        assert ifoda.qiymat(**q) == funksiya(**q), (ifoda.matn(), q)
    return ifoda


def kopaytma(ifoda, umumiy, qavslar):
    """`ifoda = umumiy * qavslar[0] * ...` ni tekshirib, kanonik ko'paytma matnini qaytaradi."""
    umumiy = Ifoda._ol(umumiy)
    natija = umumiy
    for q in qavslar:
        natija = natija * q
    assert natija == ifoda, (natija.matn(), ifoda.matn())
    for t in NUQTALAR:  # qavslarni qayta ochmasdan, qiymatlar bo'yicha ham
        ko = umumiy.qiymat(x=t)
        for q in qavslar:
            ko *= q.qiymat(x=t)
        assert ko == ifoda.qiymat(x=t)
    for q in qavslar:  # har bir qavs: birinchi darajali, bosh koeffitsiyenti musbat, umumiy bo'luvchisiz
        assert q.koef("x") > 0 and set(q.h) <= {((("x", 1),)), ()}, q.matn()
        assert all(k.denominator == 1 for k in q.h.values())
        assert gcd(*(int(k) for k in q.h.values())) == 1, q.matn()
    tartib = sorted(qavslar, key=lambda q: (q.ozod(), q.koef("x")))
    qismlar, i = [], 0
    while i < len(tartib):
        j = i
        while j < len(tartib) and tartib[j] == tartib[i]:
            j += 1
        daraja = j - i
        qismlar.append(f"({tartib[i].matn()})" + (f"^{{{daraja}}}" if daraja > 1 else ""))
        i = j
    bosh = "" if umumiy == 1 else umumiy.matn()
    return d(bosh + "".join(qismlar))


def omil(chiziqli, ko_phad):
    """Factor teoremasi: px + q ko'phadning ko'paytuvchisi bo'lishi uchun -q/p uning ildizi bo'lishi kerak."""
    p, q = chiziqli.koef("x"), chiziqli.ozod()
    return ko_phad.qiymat(x=-q / p) == 0


def daraja(ifoda):
    return max(sum(e for _, e in m) for m in ifoda.h)


x, y = Ifoda.harf("x"), Ifoda.harf("y")
D = lambda e: d(e.matn())  # noqa: E731

# --- A
m1 = daraja(5 * x**3 - 2 * x**4 + x - 7)
m2 = solishtir((4 * x**2 + 3 * x - 7) + (2 * x**2 - 5 * x + 1),
               lambda x: (4 * x**2 + 3 * x - 7) + (2 * x**2 - 5 * x + 1))
m3 = solishtir((5 * x**2 - x + 4) - (2 * x**2 + 3 * x - 6),
               lambda x: (5 * x**2 - x + 4) - (2 * x**2 + 3 * x - 6))
m4 = solishtir(3 * x * (2 * x**2 - 4 * x + 5), lambda x: 3 * x * (2 * x**2 - 4 * x + 5))
m5 = solishtir((x + 6) * (x + 2), lambda x: (x + 6) * (x + 2))
m6 = solishtir((x - 7) * (x + 3), lambda x: (x - 7) * (x + 3))
m7 = solishtir((x - 9)**2, lambda x: (x - 9)**2)
m8 = kopaytma(8 * x**3 - 12 * x**2, 4 * x**2, [2 * x - 3])
m9 = kopaytma(x**2 + 7 * x + 10, 1, [x + 2, x + 5])

# --- B
m10 = solishtir((3 * x - 4) * (2 * x + 5), lambda x: (3 * x - 4) * (2 * x + 5))
m11 = solishtir((2 * x + 3)**2, lambda x: (2 * x + 3)**2)
m12 = solishtir((5 * x - 1) * (5 * x + 1), lambda x: (5 * x - 1) * (5 * x + 1))
m13 = solishtir((x + 2) * (x**2 - x + 3), lambda x: (x + 2) * (x**2 - x + 3))
m14 = kopaytma(x**2 - 9 * x + 20, 1, [x - 4, x - 5])
m15 = kopaytma(x**2 + 3 * x - 28, 1, [x + 7, x - 4])
m16 = kopaytma(x**2 - 64, 1, [x + 8, x - 8])
m17 = kopaytma(x**2 + 14 * x + 49, 1, [x + 7, x + 7])
m18 = kopaytma(2 * x**2 - 2 * x - 24, 2, [x - 4, x + 3])

# --- C
m19 = kopaytma(2 * x**2 + 11 * x + 12, 1, [2 * x + 3, x + 4])
m20 = kopaytma(3 * x**2 - 10 * x - 8, 1, [3 * x + 2, x - 4])
m21 = kopaytma(5 * x**3 - 45 * x, 5 * x, [x - 3, x + 3])
m22 = solishtir((x + 3)**2 - (x - 3)**2, lambda x: (x + 3)**2 - (x - 3)**2)
m23 = solishtir((2 * x - 1) * (x + 4) - 2 * (x**2 - 3), lambda x: (2 * x - 1) * (x + 4) - 2 * (x**2 - 3))
m24 = (52 - 48) * (52 + 48)
assert m24 == 52**2 - 48**2
m25 = solishtir((x + 7) * (x - 2), lambda x: (x + 7) * (x - 2))          # bog' yuzi
m26 = solishtir((x + 3)**2 - x**2, lambda x: (x + 3)**2 - x**2)          # yuz qanchaga oshdi
m27 = F(48, 12)                                                          # x^2 - y^2 = (x - y)(x + y)
assert ((x - y) * (x + y)) == x**2 - y**2

# --- SAT
s1 = harf([3 * x**2 - 13 * x - 10, 3 * x**2 - 10, 3 * x**2 + 17 * x - 10, 3 * x**2 - 15 * x - 10],
          (3 * x + 2) * (x - 5))
s2 = harf([(x - 4) * (x - 6), (x + 3) * (x + 8), (x - 3) * (x - 8), (x - 2) * (x - 12)],
          x**2 - 11 * x + 24)
# s14-3: (ax + 3)(2x - 5) = 8x^2 + bx - 15 har qanday x da -> a, keyin b
mos3 = [a for a in range(-20, 21)
        if ((a * x + 3) * (2 * x - 5)).koef("x", 2) == 8 and ((a * x + 3) * (2 * x - 5)).ozod() == -15]
assert mos3 == [4]
s3 = ((mos3[0] * x + 3) * (2 * x - 5)).koef("x")
s4 = harf([omil(v, 4 * x**2 - 25) for v in (4 * x - 5, 2 * x - 5, 2 * x - 25, x - 5)], True)
s5 = F(39, 3)  # x^2 - y^2 = (x - y)(x + y)

JAVOBLAR = {
    # A
    "m14-1": m1, "m14-2": D(m2), "m14-3": D(m3), "m14-4": D(m4), "m14-5": D(m5),
    "m14-6": D(m6), "m14-7": D(m7), "m14-8": m8, "m14-9": m9,
    # B
    "m14-10": D(m10), "m14-11": D(m11), "m14-12": D(m12), "m14-13": D(m13), "m14-14": m14,
    "m14-15": m15, "m14-16": m16, "m14-17": m17, "m14-18": m18,
    # C
    "m14-19": m19, "m14-20": m20, "m14-21": m21, "m14-22": D(m22), "m14-23": D(m23),
    "m14-24": m24, "m14-25": D(m25), "m14-26": D(m26), "m14-27": m27,
    # SAT
    "s14-1": s1, "s14-2": s2, "s14-3": s3, "s14-4": s4, "s14-5": s5,
}

# Matndagi (misollar, xatolar, format namunasi) javoblar mashqlarda takrorlanmasin
MATNDAGI = {
    D((3 * x**2 - 5 * x + 2) + (x**2 - 4 * x - 6)),                      # Misol 1 a)
    D((3 * x**2 - 5 * x + 2) - (x**2 - 4 * x - 6)),                      # Misol 1 b)
    D(-2 * x * (3 * x**2 - x + 4)),                                      # Misol 2 a)
    D((2 * x + 3) * (x - 4)), D((x - 2) * (x**2 + 3 * x - 1)),           # Misol 2 b), c)
    D((x + 5)**2), D((3 * x - 2)**2), D((2 * x + 7) * (2 * x - 7)), "899",  # Misol 3
    kopaytma(x**2 + 2 * x - 15, 1, [x + 5, x - 3]),                      # Misol 4 a)
    kopaytma(3 * x**2 - 12, 3, [x - 2, x + 2]),                          # Misol 4 b)
    kopaytma(x**2 - 10 * x + 25, 1, [x - 5, x - 5]),                     # Misol 4 c)
    kopaytma(2 * x**2 + 7 * x + 3, 1, [2 * x + 1, x + 3]),               # Misol 5 a)
    kopaytma(2 * x**3 - 8 * x**2 - 10 * x, 2 * x, [x - 5, x + 1]),       # Misol 5 b)
    D((x + 4)**2), D((4 * x**2 + x) - (x**2 - 3 * x)),                   # xatolar
    kopaytma(x**2 - 5 * x - 14, 1, [x - 7, x + 2]),
    kopaytma(2 * x**2 - 18, 2, [x - 3, x + 3]),
    kopaytma(2 * x**3 - 32 * x, 2 * x, [x - 4, x + 4]),                  # format namunasi
    D(3 * x**3 - x**2 + 8),
    kopaytma(x**2 - 12 * x + 36, 1, [x - 6, x - 6]),                    # format namunasi
}
for _id, _q in JAVOBLAR.items():
    _s = _q if isinstance(_q, str) else str(_q)
    assert _id.startswith("s") or _s not in MATNDAGI, (_id, _s)
