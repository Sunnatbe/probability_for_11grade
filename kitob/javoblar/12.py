"""12-bob: Koordinatalar tekisligi va chiziqli funksiya — javoblar hisobi.

Nuqtalar `nuqta` bilan "$(a, b)$" ko'rinishida, to'g'ri chiziqlar `y = mx + b` ko'rinishida
(`Ifoda` kanonik tartibi, R12) yoziladi. Har bir topilgan to'g'ri chiziq shartdagi nuqtalarga
qo'yib tekshiriladi.
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



def nuqta(xq, yq):
    """Nuqtaning kanonik matni: $(-5, 2)$, $(\\frac{5}{2}, 0)$."""
    return d(f"({son_matn(xq)}, {son_matn(yq)})")


def ogish(p, q):
    """Ikki nuqtadan o'tuvchi to'g'ri chiziqning burchak koeffitsiyenti."""
    (x1, y1), (x2, y2) = p, q
    assert x1 != x2, "vertikal to'g'ri chiziq"
    return F(y2 - y1, 1) / F(x2 - x1, 1)


def chiziq(m, p):
    """Burchak koeffitsiyenti m va nuqta p bo'yicha y = mx + b dagi b."""
    return F(p[1]) - F(m) * F(p[0])


def tenglama(m, b, *nuqtalar):
    """$y = mx + b$ matni; berilgan nuqtalar shu chiziqda yotishi tekshiriladi."""
    ifoda = F(m) * x + F(b)
    for px, py in nuqtalar:
        assert ifoda.qiymat(x=px) == py, (px, py)
    return d("y = " + ifoda.matn())


def y_ga_nisbatan(a, bk, c):
    """ax + by = c ni y = mx + b ko'rinishiga keltiradi: (m, b)."""
    return F(-a, bk), F(c, bk)


def chorak(px, py):
    if px == 0 or py == 0:
        return None
    if px > 0:
        return "I" if py > 0 else "IV"
    return "II" if py > 0 else "III"


def yagona(royxat, shart):
    mos = [p for p in royxat if shart(p)]
    assert len(mos) == 1, mos
    return mos[0]


x = Ifoda.harf("x")

# --- A
m1 = nuqta(-5, 2)  # 5 birlik chapga, 2 birlik yuqoriga
m2 = nuqta(*yagona([(3, -5), (-2, 6), (-4, -1), (0, 7)], lambda p: chorak(*p) == "II"))
m3 = (4 * x - 3).qiymat(x=-2)
m4 = ogish((1, 3), (5, 11))
m5 = ogish((-2, 5), (4, 2))
m6 = nuqta(0, (-3 * x + 7).qiymat(x=0))
m7 = nuqta(*yagona([(1, 3), (3, 2), (-1, 6), (2, 1)],
                   lambda p: (-2 * x + 4).qiymat(x=p[0]) == p[1]))
m8 = ogish((-3, 4), (5, 4))

# --- B
m9 = tenglama(3, chiziq(3, (2, -1)), (2, -1))
k10 = ogish((-1, 6), (2, -3))
m10 = tenglama(k10, chiziq(k10, (-1, 6)), (-1, 6), (2, -3))
m11 = nuqta(yech1 := F(10, 2), 0)  # 2x - 10 = 0
assert (2 * x - 10).qiymat(x=yech1) == 0
m12, _ = y_ga_nisbatan(3, 4, 12)
m13 = tenglama(5, chiziq(5, (1, 9)), (1, 9))
k14 = ogish((0, -2), (8, 4))
m14 = tenglama(k14, chiziq(k14, (0, -2)), (0, -2), (8, 4))
_, b15 = y_ga_nisbatan(2, -5, 20)
assert 2 * 0 - 5 * b15 == 20
m15 = nuqta(0, b15)
m16 = (F(-1) - 3) / F(1, 2)  # x/2 + 3 = -1
assert F(1, 2) * m16 + 3 == -1
m17 = yagona(range(-20, 21), lambda k: 3 * k - 5 == 16)

# --- C
k18, _ = y_ga_nisbatan(4, -2, 9)
m18 = tenglama(k18, chiziq(k18, (-2, 3)), (-2, 3))
m19 = yagona(range(-20, 21), lambda k: 2 * k + 1 == 11)
k20 = ogish((-1, 5), (2, -1))
m20 = yagona(range(-50, 51), lambda k: ogish((2, -1), (5, k)) == k20)
# taksi: 3 km -> 14 000, 8 km -> 29 000; o'tirish narxi = b
k21 = ogish((3, 14000), (8, 29000))
m21 = chiziq(k21, (3, 14000))
assert k21 * 8 + m21 == 29000
# sham: (0, 24) va (2, 21) -> h = kt + 24, h = 0 bo'lganda t
k22 = ogish((0, 24), (2, 21))
m22 = -F(24) / k22
assert k22 * m22 + 24 == 0
# benzin: (2, 38), (5, 20); boshlang'ich miqdor = b
m23 = chiziq(ogish((2, 38), (5, 20)), (2, 38))
# jamg'arma: (0, 150 000) va (3, 270 000) -> 750 000 ga yetish
k24 = ogish((0, 150000), (3, 270000))
m24 = (750000 - F(150000)) / k24
assert k24 * m24 + 150000 == 750000
# (-4, 9) va (2, 0) dan o'tadi -> y o'qi bilan kesishish
k25 = ogish((-4, 9), (2, 0))
m25 = nuqta(0, chiziq(k25, (2, 0)))

# --- SAT
s1 = ogish((-2, 7), (4, -1))
s2 = F(36, 4)
assert (4 * x - 36).qiymat(x=s2) == 0
s3_variant = [(2, -2), (-2, 9), (-2, 10), (F(1, 2), F(5, 2))]  # (m, b)
s3 = harf([m == -2 and m * 3 + b == 4 for m, b in s3_variant], True)
s4_variant = ["fixed fee", "charge per hour", "charge for one hour", "number of hours"]
s4 = harf(s4_variant, "charge per hour")  # C = 45h + 60: 45 — soatbay haq
a5 = yagona(range(-20, 21), lambda a: a * 3 - 7 == 8)
s5 = a5 * (-2) - 7

JAVOBLAR = {
    # A
    "m12-1": m1, "m12-2": m2, "m12-3": m3, "m12-4": m4, "m12-5": m5, "m12-6": m6,
    "m12-7": m7, "m12-8": m8,
    # B
    "m12-9": m9, "m12-10": m10, "m12-11": m11, "m12-12": m12, "m12-13": m13,
    "m12-14": m14, "m12-15": m15, "m12-16": m16, "m12-17": m17,
    # C
    "m12-18": m18, "m12-19": m19, "m12-20": m20, "m12-21": m21, "m12-22": m22,
    "m12-23": m23, "m12-24": m24, "m12-25": m25,
    # SAT
    "s12-1": s1, "s12-2": s2, "s12-3": s3, "s12-4": s4, "s12-5": s5,
}

# Yechilgan misollar, xatolar bo'limi va format namunasidagi javoblar mashqlarda takrorlanmasin
MATNDAGI = {
    nuqta(3, 2), nuqta(-4, 1), nuqta(-2, -3), nuqta(4, -2), nuqta(-5, 0),  # 1-rasm, Misol 1
    nuqta(4, 7), nuqta(-2, -4), "11", "4",  # Misol 2
    "-3/2",  # Misol 3
    tenglama(F(2, 3), 1), tenglama(-2, 5), nuqta(F(5, 2), 0), nuqta(0, 5), tenglama(-4, 5),  # Misol 4
    "-12", "95", "6",  # Misol 5
    "3", "-2/3", nuqta(2, 0),  # xatolar
    nuqta(-6, 11), tenglama(F(-5, 4), 7), "-7/5",  # format namunasi
}
for _id, _q in JAVOBLAR.items():
    _s = _q if isinstance(_q, str) else str(_q)
    assert _s not in MATNDAGI, (_id, _s)
