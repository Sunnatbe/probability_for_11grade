"""13-bob: Tenglamalar sistemasi — javoblar hisobi.

Har bir sistema `a1*x + b1*y = c1`, `a2*x + b2*y = c2` ko'rinishida beriladi va `sistema`
bilan (determinantlar orqali) yechiladi; topilgan juftlik ikkala tenglamaga qo'yib tekshiriladi.
Javob: "$(x, y)$", "yechimi yo'q" yoki "cheksiz ko'p yechim".
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


def nuqta(xq, yq):
    """Juftlikning kanonik matni: $(3, -1)$."""
    return d(f"({son_matn(xq)}, {son_matn(yq)})")


def sistema(t1, t2):
    """t = (a, b, c): ax + by = c. Natija: (x, y) Fraction juftligi, YOQ yoki CHEKSIZ."""
    (a1, b1, c1), (a2, b2, c2) = [tuple(F(v) for v in t) for t in (t1, t2)]
    det = a1 * b2 - a2 * b1
    if det == 0:
        # koeffitsiyentlar proporsional: ozod hadlar ham proporsional bo'lsa — bitta chiziq
        bir_xil = a1 * c2 == a2 * c1 and b1 * c2 == b2 * c1
        return CHEKSIZ if bir_xil else YOQ
    xq = (c1 * b2 - c2 * b1) / det
    yq = (a1 * c2 - a2 * c1) / det
    for a, b, c in ((a1, b1, c1), (a2, b2, c2)):
        assert a * xq + b * yq == c
    return xq, yq


def javob(t1, t2):
    r = sistema(t1, t2)
    return r if isinstance(r, str) else nuqta(*r)


def yagona(royxat, shart):
    mos = [p for p in royxat if shart(p)]
    assert len(mos) == 1, mos
    return mos[0]


def yxb(m, b):
    """y = mx + b ni (a, b, c) ko'rinishiga: -mx + y = b."""
    return (-F(m), 1, F(b))


# --- A
# m13-1: x + 2y = 1, 2x - y = 7 sistemasining yechimi variantlar orasidan
m1 = nuqta(*yagona([(1, 0), (3, -1), (4, 1), (5, -2)],
                   lambda p: p[0] + 2 * p[1] == 1 and 2 * p[0] - p[1] == 7))
assert sistema((1, 2, 1), (2, -1, 7)) == (3, -1)
m2 = javob(yxb(2, 0), (1, 1, 12))          # y = 2x, x + y = 12
m3 = javob(yxb(1, 3), (2, 1, 18))          # y = x + 3, 2x + y = 18
m4 = javob((1, 1, 11), (1, -1, 5))
m5 = javob((4, 1, 14), (2, 1, 8))
m6 = javob((1, -2, 0), (3, -4, 10))        # x = 2y
m7 = javob((1, 1, -1), (1, -1, 7))

# --- B
m8 = javob((3, 2, 2), (1, -1, 4))
m9 = javob((2, 5, 1), (3, -2, 30))
m10 = javob((4, -3, -10), (5, 2, 22))
m11 = javob((3, -1, 4), (6, -2, 9))
m12 = javob((1, 2, 5), (3, 6, 15))
m13 = javob((F(1, 2), F(1, 3), 4), (1, -1, 3))   # x/2 + y/3 = 4
m14 = javob(yxb(2, -3), yxb(-1, 9))        # grafiklar kesishishi
katta15, kichik15 = sistema((1, 1, 47), (1, -1, 13))
m15 = katta15                              # kattasi
r16 = sistema(yxb(3, 1), yxb(3, -4))
assert r16 == YOQ
m16 = 0                                    # parallel chiziqlar: umumiy nuqta yo'q

# --- C
m17 = yagona(range(-20, 21), lambda k: sistema((2, k, 3), (4, 6, 1)) == YOQ)
m18 = yagona(range(-50, 51), lambda k: sistema((3, -2, 5), (6, -4, k)) == CHEKSIZ)
olma19, nok19 = sistema((2, 3, 41000), (4, 1, 37000))
m19 = nok19
kichik20, katta20 = sistema((1, 1, 40), (1000, 5000, 112000))
m20 = katta20                              # 5000 so'mliklar soni
ikki21, uch21 = sistema((1, 1, 28), (2, 3, 68))
m21 = uch21
qayiq22, oqim22 = sistema((1, 1, F(36, 2)), (1, -1, F(24, 2)))
m22 = oqim22
ota23, ogil23 = sistema((1, -1, 28), (1, -3, 12 - 4))  # f = s + 28; f + 4 = 3(s + 4)
assert ota23 + 4 == 3 * (ogil23 + 4)
m23 = ogil23
x24, y24 = sistema((5, 3, 34), (3, 5, 30))
m24 = x24 + y24

# --- SAT
s1 = sistema((2, 1, 11), (1, -1, 1))[0]
s2 = sistema(yxb(3, -2), yxb(-1, 10))[1]
s3_variant = ["zero", "exactly one", "exactly two", "infinitely many"]
s3 = harf(s3_variant, {YOQ: "zero", CHEKSIZ: "infinitely many"}.get(
    sistema((4, -6, 10), (6, -9, 15)), "exactly one"))
s4 = yagona(range(-20, 21), lambda a: sistema((a, 3, 8), (4, -6, 5)) == YOQ)
kichik5, katta5 = sistema((1, 1, 60), (8, 11, 585))
s5 = katta5

JAVOBLAR = {
    # A
    "m13-1": m1, "m13-2": m2, "m13-3": m3, "m13-4": m4, "m13-5": m5, "m13-6": m6,
    "m13-7": m7,
    # B
    "m13-8": m8, "m13-9": m9, "m13-10": m10, "m13-11": m11, "m13-12": m12,
    "m13-13": m13, "m13-14": m14, "m13-15": m15, "m13-16": m16,
    # C
    "m13-17": m17, "m13-18": m18, "m13-19": m19, "m13-20": m20, "m13-21": m21,
    "m13-22": m22, "m13-23": m23, "m13-24": m24,
    # SAT
    "s13-1": s1, "s13-2": s2, "s13-3": s3, "s13-4": s4, "s13-5": s5,
}

# Matndagi (misollar, xatolar, format namunasi) javoblar mashqlarda takrorlanmasin
MATNDAGI = {
    javob(yxb(1, 1), yxb(-2, 7)),          # Misol 1 (rasm): (2, 3)
    javob((1, -2, 1), (3, 1, 17)),         # Misol 2: (5, 2)
    javob((3, 2, 4), (5, -3, 13)),         # Misol 3: (2, -1)
    "6",                                   # Misol 4 b)
    "50", "100",                           # Misol 5
    javob((6, 1, 17), (2, 1, 1)),          # xato 2: (4, -7)
    nuqta(-1, 6), nuqta(6, -1),            # xato 4
    nuqta(-7, 4),                          # format namunasi
    javob((1, 1, 9), (1, -1, 5)),          # xato 1: (7, 2)
}
assert sistema((2, -1, 3), (4, -2, 5)) == YOQ                       # Misol 4 a)
assert yagona(range(-20, 21), lambda k: sistema((k, 3, 6), (2, 1, 5)) == YOQ) == 6
assert sistema((1, 1, 150), (20000, 12000, 2200000)) == (50, 100)  # Misol 5
for _id, _q in JAVOBLAR.items():
    _s = _q if isinstance(_q, str) else str(_q)
    assert _id.startswith("s") or _s not in MATNDAGI, (_id, _s)
