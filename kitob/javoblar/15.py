"""15-bob: Kvadrat tenglamalarga kirish — javoblar hisobi.

Kvadrat tenglama `ax^2 + bx + c = 0` (butun a, b, c) `ildizlar` bilan yechiladi. Ildizlar
p + q*sqrt(m) ko'rinishida aniq saqlanadi va tenglamaga qo'yib (sqrt(m) li qism ham, oddiy qism ham
nol chiqishi) tekshiriladi. Javob: "$x = -8$; $x = 6$" (o'sish tartibida), bitta ildiz "$x = 6$",
ildiz yo'q bo'lsa "yechimi yo'q". Nuqtalar "$(a, b)$", bir nechta nuqta abssissasi o'sish tartibida.
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


def kvadratsiz(n):
    """n = k^2 * m, m kvadratsiz: (k, m)."""
    k, m, i = 1, n, 2
    while i * i <= m:
        while m % (i * i) == 0:
            m //= i * i
            k *= i
        i += 1
    return k, m


def _qiymat_qm(a, b, c, p, q, m):
    """a*r^2 + b*r + c, r = p + q*sqrt(m): (oddiy qism, sqrt(m) oldidagi qism)."""
    kv_odd, kv_ild = p * p + m * q * q, 2 * p * q
    return a * kv_odd + b * p + c, a * kv_ild + b * q


def ildizlar(a, b, c):
    """ax^2 + bx + c = 0 ning haqiqiy ildizlari: [(p, q, m), ...] o'sish tartibida, r = p + q*sqrt(m)."""
    a, b, c = F(a), F(b), F(c)
    assert a != 0
    dsk = b * b - 4 * a * c
    if dsk < 0:
        return []
    assert dsk.denominator == 1
    k, m = kvadratsiz(int(dsk)) if dsk else (0, 1)
    if m == 1:  # ratsional ildizlar (D = 0 bo'lsa bitta)
        rr = sorted({(-b - k) / (2 * a), (-b + k) / (2 * a)})
        natija = [(r, F(0), 1) for r in rr]
    else:
        p, q = -b / (2 * a), F(k) / (2 * a)
        natija = sorted([(p, -abs(q), m), (p, abs(q), m)], key=lambda t: t[1])
    for p, q, mm in natija:
        assert _qiymat_qm(a, b, c, p, q, mm) == (0, 0), (a, b, c, p, q, mm)
        assert abs(float(a) * (float(p) + float(q) * mm**0.5)**2 + float(b) * (float(p) + float(q) * mm**0.5) + float(c)) < 1e-9
    return natija


def ildiz_matn(p, q, m):
    """p + q*sqrt(m) ni LaTeX'ga: 2 - \\sqrt{3}, \\frac{-3 + \\sqrt{17}}{4}."""
    if q == 0:
        return son_matn(p)
    maxraj = p.denominator * q.denominator // gcd(p.denominator, q.denominator)
    ps, qs = int(p * maxraj), int(q * maxraj)
    ildiz = ("" if abs(qs) == 1 else str(abs(qs))) + f"\\sqrt{{{m}}}"
    if ps == 0:
        surat = ("-" if qs < 0 else "") + ildiz
    else:
        surat = f"{ps} {'-' if qs < 0 else '+'} {ildiz}"
    return surat if maxraj == 1 else f"\\frac{{{surat}}}{{{maxraj}}}"


def yech(a, b, c):
    """Kvadrat tenglama javobining kanonik matni."""
    rr = ildizlar(a, b, c)
    if not rr:
        return YOQ
    return "; ".join(d("x = " + ildiz_matn(*r)) for r in rr)


def ildizlar_soni(a, b, c):
    return len(ildizlar(a, b, c))


def nuqta(xq, yq):
    return d(f"({son_matn(xq)}, {son_matn(yq)})")


def uchi(a, b, c):
    """y = ax^2 + bx + c parabolasining uchi."""
    xu = F(-b) / (2 * F(a))
    return xu, F(a) * xu * xu + F(b) * xu + F(c)


def yagona(royxat, shart):
    mos = [p for p in royxat if shart(p)]
    assert len(mos) == 1, mos
    return mos[0]


x = Ifoda.harf("x")


def koef(ifoda):
    """Ifoda (chap - o'ng) ni (a, b, c) ga."""
    assert set(ifoda.harflar()) <= {"x"}
    return ifoda.koef("x", 2), ifoda.koef("x"), ifoda.ozod()


# --- A
m1 = yech(*koef(x**2 - 64))
m2 = yech(*koef(x**2 - 121))
m3 = yech(*koef(5 * x**2 - 80))
m4 = yech(*koef((x - 3) * (x + 8)))
m5 = yech(*koef(x * (x - 6)))
m6 = yech(*koef(x**2 + 9 * x + 14))
m7 = yech(*koef(x**2 + 16))
a8, b8, c8 = koef(x**2 - 3 * x - 10)
m8 = b8**2 - 4 * a8 * c8

# --- B
m9 = yech(*koef(x**2 - 3 * x - 28))                # x^2 - 3x = 28
m10 = yech(*koef((x - 5)**2 - 36))
m11 = yech(*koef(3 * x**2 + 12 * x))
m12 = yech(*koef(2 * x**2 - 7 * x + 3))
m13 = yech(*koef(x**2 - 12 * x + 36))
m14 = yech(*koef(x**2 + 2 * x - 4))
m15 = ildizlar_soni(*koef(3 * x**2 - 5 * x + 4))
m16 = nuqta(*uchi(1, 4, -1))
m17 = "; ".join(nuqta(r[0], 0) for r in ildizlar(*koef(x**2 - x - 20)))

# --- C
m18 = yech(*koef(2 * x**2 + 3 * x - 1))
m19 = yech(*koef((x + 2) * (x - 3) - 24))
m20 = yagona(range(1, 51), lambda k: ildizlar_soni(1, -k, 25) == 1)    # k musbat
r21 = [r[0] for r in ildizlar(*koef(x * (x + 4) - 96)) if r[0] > 0]     # eni x, bo'yi x + 4
m21 = r21[0]
r22 = [r[0] for r in ildizlar(*koef(x * (x + 1) - 132)) if r[0] > 0]    # ketma-ket musbat butun sonlar
m22 = r22[0]
t23 = [r[0] for r in ildizlar(*koef(-5 * x**2 + 20 * x)) if r[0] > 0]   # h = -5t^2 + 20t = 0, t > 0
m23 = t23[0]
m24 = uchi(-5, 30, 0)[1]                                                 # h = -5t^2 + 30t eng katta qiymati
r25 = [r[0] for r in ildizlar(*koef(x**2 - 3 * x - 40)) if r[0] < 0]    # x^2 - 3x = 40, manfiysi
m25 = r25[0]
m26 = nuqta(*uchi(-1, 4, 5))

# --- SAT
s1 = [r[0] for r in ildizlar(1, -4, -45) if r[0] > 0][0]
r2 = ildizlar(1, 2, -24)
s2 = r2[0][0] + r2[1][0]
s3_variant = ["zero", "exactly one", "exactly two", "infinitely many"]
s3 = harf(s3_variant, s3_variant[ildizlar_soni(4, -12, 9)])
s4_ildiz = ildizlar(1, -6, 4)
s4_variant = [(3, 1, 5), (-3, 1, 5), (6, 1, 5), (3, 2, 5)]  # p ± q*sqrt(m)
s4 = harf([[(F(p), F(-q), m), (F(p), F(q), m)] for p, q, m in s4_variant], s4_ildiz)
s5 = uchi(2, -8, 3)[1]  # a > 0: uchi — eng kichik qiymat

JAVOBLAR = {
    # A
    "m15-1": m1, "m15-2": m2, "m15-3": m3, "m15-4": m4, "m15-5": m5, "m15-6": m6,
    "m15-7": m7, "m15-8": m8,
    # B
    "m15-9": m9, "m15-10": m10, "m15-11": m11, "m15-12": m12, "m15-13": m13,
    "m15-14": m14, "m15-15": m15, "m15-16": m16, "m15-17": m17,
    # C
    "m15-18": m18, "m15-19": m19, "m15-20": m20, "m15-21": m21, "m15-22": m22,
    "m15-23": m23, "m15-24": m24, "m15-25": m25, "m15-26": m26,
    # SAT
    "s15-1": s1, "s15-2": s2, "s15-3": s3, "s15-4": s4, "s15-5": s5,
}

# Matndagi (misollar, xatolar, format namunasi) javoblar mashqlarda takrorlanmasin
MATNDAGI = {
    yech(1, 0, -9), yech(2, 0, -50), yech(*koef((x + 1)**2 - 49)),         # Misol 1
    yech(*koef(x**2 + x - 12)), yech(*koef(2 * x**2 - 10 * x)),            # Misol 2
    yech(1, -4, 1), yech(2, 3, -2),                                         # Misol 3
    "16",                                                                   # Misol 4 c)
    "; ".join(nuqta(r[0], 0) for r in ildizlar(1, -2, -3)), nuqta(*uchi(1, -2, -3)),  # Misol 5
    nuqta(0, -3),
    yech(1, 0, -36), yech(*koef(x**2 - 4 * x)), yech(*koef((x - 2) * (x + 1) - 4)),   # xatolar
    yech(1, -5, 2),
    "$x = -9$; $x = 2$", nuqta(-7, 12), yech(3, -1, -1),                    # format namunalari
}
assert yech(1, 0, 4) == YOQ                                                # Misol 1 d): x^2 + 5 = 1
assert [ildizlar_soni(1, -6, 9), ildizlar_soni(2, 1, 3)] == [1, 0]         # Misol 4 a), b)
assert yagona(range(-50, 51), lambda c: ildizlar_soni(1, 8, c) == 1) == 16
for _id, _q in JAVOBLAR.items():
    _s = _q if isinstance(_q, str) else str(_q)
    assert _s not in MATNDAGI, (_id, _s)
