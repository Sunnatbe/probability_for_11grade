"""10-bob: Tengsizliklar — javoblar hisobi.

Tengsizlik `chap belgi ong` ko'rinishida `Ifoda` bilan beriladi va `yech_t` bilan yechiladi:
chap - ong = a*x + b, chegara -b/a, a < 0 bo'lsa belgi almashadi. Har bir natija chegara
atrofidagi nuqtalarda dastlabki tengsizlik bilan solishtiriladi.
"""
import math
from fractions import Fraction as F
from math import gcd
import operator


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


AMAL = {"<": operator.lt, ">": operator.gt, "<=": operator.le, ">=": operator.ge}
TESKARI = {"<": ">", ">": "<", "<=": ">=", ">=": "<="}
LATEX = {"<": "<", ">": ">", "<=": "\\leq", ">=": "\\geq"}


def _ol(a):
    return a if isinstance(a, Ifoda) else Ifoda({(): F(a)})


def yech_t(chap, belgi, ong, nom="x"):
    """Chiziqli tengsizlikni yechadi: (belgi, chegara), ya'ni `nom belgi chegara`."""
    chap, ong = _ol(chap), _ol(ong)
    a, b = (chap - ong).ajrat(nom)
    assert not a.harflar() and not b.harflar() and a != 0
    a, b = a.ozod(), b.ozod()
    chegara = -b / a
    natija = belgi if a > 0 else TESKARI[belgi]
    for siljish in (-5, -1, F(-1, 7), 0, F(1, 7), 1, 5):
        t = chegara + siljish
        dastlabki = AMAL[belgi](chap.qiymat(**{nom: t}), ong.qiymat(**{nom: t}))
        assert dastlabki == AMAL[natija](t, chegara), (belgi, t)
    return natija, chegara


def t_matn(yechim, nom="x"):
    belgi, chegara = yechim
    return d(f"{nom} {LATEX[belgi]} {son_matn(chegara)}")


def qosh_yech(past, b1, ifoda, b2, yuqori, nom="x"):
    """`past b1 ifoda b2 yuqori` (b1, b2: '<' yoki '<=') -> (quyi, q_belgi, yuqori, y_belgi)."""
    chegaralar = [yech_t(past, b1, ifoda, nom), yech_t(ifoda, b2, yuqori, nom)]
    quyi = [c for c in chegaralar if c[0] in (">", ">=")]
    yuq = [c for c in chegaralar if c[0] in ("<", "<=")]
    assert len(quyi) == 1 and len(yuq) == 1
    natija = (quyi[0][1], TESKARI[quyi[0][0]], yuq[0][1], yuq[0][0])
    lo, lb, hi, hb = natija
    for t in [lo + s for s in (-1, F(-1, 7), 0, F(1, 7))] + [hi + s for s in (F(-1, 7), 0, F(1, 7), 1)]:
        v = _ol(ifoda).qiymat(**{nom: t})
        dastlabki = AMAL[b1](F(past), v) and AMAL[b2](v, F(yuqori))
        assert dastlabki == (AMAL[lb](lo, t) and AMAL[hb](t, hi)), t
    return natija


def q_matn(yechim, nom="x"):
    lo, lb, hi, hb = yechim
    return d(f"{son_matn(lo)} {LATEX[lb]} {nom} {LATEX[hb]} {son_matn(hi)}")


def butunlar(yechim):
    """Qo'sh tengsizlik yechimidagi butun sonlar ro'yxati."""
    lo, lb, hi, hb = yechim
    return [k for k in range(math.floor(lo) - 1, math.ceil(hi) + 2)
            if AMAL[lb](lo, k) and AMAL[hb](k, hi)]


def eng_kichik_butun(yechim):
    belgi, c = yechim
    assert belgi in (">", ">=")
    k = math.floor(c) + 1 if belgi == ">" else math.ceil(c)
    assert AMAL[belgi](k, c) and not AMAL[belgi](k - 1, c)
    return k


def eng_katta_butun(yechim):
    belgi, c = yechim
    assert belgi in ("<", "<=")
    k = math.ceil(c) - 1 if belgi == "<" else math.floor(c)
    assert AMAL[belgi](k, c) and not AMAL[belgi](k + 1, c)
    return k


x = Ifoda.harf("x")

# m10-7: bo'sh doiracha 1 da, strelka chapga
GRAFIK = {("bo'sh", "o'ng"): ">", ("bo'sh", "chap"): "<",
          ("bo'yalgan", "o'ng"): ">=", ("bo'yalgan", "chap"): "<="}
m7 = t_matn((GRAFIK[("bo'sh", "chap")], F(1)))

# m10-22: 30000 + 6000g <= 100000
g = Ifoda.harf("g")
m22 = eng_katta_butun(yech_t(30000 + 6000 * g, "<=", 100000, "g"))

# m10-23: 40000n >= 900000 + 25000n
n = Ifoda.harf("n")
m23 = eng_kichik_butun(yech_t(40000 * n, ">=", 900000 + 25000 * n, "n"))

# m10-24: to'rt test + beshinchi >= 420
t = Ifoda.harf("t")
m24 = eng_kichik_butun(yech_t(78 + 85 + 90 + 82 + t, ">=", 420, "t"))

# m10-25: tezlik 15 km/soat, vaqt 2 dan 4 soatgacha (chegaralar ham kiradi)
tezlik, t_min, t_max = 15, 2, 4
m25 = q_matn((F(tezlik * t_min), "<=", F(tezlik * t_max), "<="), nom="d")

# m10-26: -5 < 2x + 1 <= 7, butun yechimlar yig'indisi
m26 = sum(butunlar(qosh_yech(-5, "<", 2 * x + 1, "<=", 7)))

# s10-1: 6 - 2x > 16
s1_variant = [("<", F(-5)), (">", F(-5)), ("<", F(-11)), (">", F(-11))]
s1 = harf(s1_variant, yech_t(6 - 2 * x, ">", 16))

# s10-3: yuk mashinasi ko'pi bilan 2500 funt; haydovchi 180, har quti 40
s3_variant = [(180, 40, "<="), (180, 40, ">="), (40, 180, "<="), (40, 180, ">=")]
s3 = harf(s3_variant, (180, 40, "<="))

# s10-4: -3 < 2x - 5 < 7 bo'lsa x qaysi bo'lishi mumkin
lo4, lb4, hi4, hb4 = qosh_yech(-3, "<", 2 * x - 5, "<", 7)
s4_variant = [1, 4, 6, 7]
s4 = harf([AMAL[lb4](lo4, v) and AMAL[hb4](v, hi4) for v in s4_variant], True)

# s10-5: x = -2 qaysi tengsizlikning yechimi
s5_variant = [
    lambda x: 3 * x + 4 > 0,
    lambda x: -x + 1 < 0,
    lambda x: 2 * x - 1 <= -5,
    lambda x: 5 - x <= 6,
]
s5 = harf([f(-2) for f in s5_variant], True)

JAVOBLAR = {
    # A
    "m10-1": t_matn(yech_t(x + 6, ">", 2)),
    "m10-2": t_matn(yech_t(x - 3, "<=", -8)),
    "m10-3": t_matn(yech_t(4 * x, "<", 28)),
    "m10-4": t_matn(yech_t(-5 * x, ">=", 30)),
    "m10-5": t_matn(yech_t(x / 3, ">", -2)),
    "m10-6": t_matn(yech_t(-x / 2, "<", 4)),
    "m10-7": m7,
    "m10-8": eng_katta_butun(("<=", F(-5, 2))),
    # B
    "m10-9": t_matn(yech_t(2 * x + 5, "<=", 17)),
    "m10-10": t_matn(yech_t(9 - 4 * x, ">", 25)),
    "m10-11": t_matn(yech_t(5 * x - 2, "<", 3 * x + 8)),
    "m10-12": t_matn(yech_t(3 * (x + 4), ">=", 5 * x - 2)),
    "m10-13": t_matn(yech_t(x / 4 - 1, "<", x / 6)),
    "m10-14": q_matn(qosh_yech(-4, "<", x + 3, "<=", 6)),
    "m10-15": q_matn(qosh_yech(-9, "<=", 3 * x, "<", 12)),
    "m10-16": eng_kichik_butun(yech_t(4 * x - 3, ">", 10)),
    "m10-17": len(butunlar((F(-3), "<", F(4), "<="))),
    # C
    "m10-18": t_matn(yech_t(2 * (3 * x - 1) - (x + 4), "<=", 3 * (x - 2) + 8)),
    "m10-19": t_matn(yech_t((2 * x + 1) / 3, ">=", (x - 1) / 2)),
    "m10-20": q_matn(qosh_yech(1, "<=", 5 - 2 * x, "<", 9)),
    "m10-21": eng_katta_butun(yech_t(-3 * x + 7, ">=", 2 * x - 16)),
    "m10-22": m22,
    "m10-23": m23,
    "m10-24": m24,
    "m10-25": m25,
    "m10-26": m26,
    # SAT
    "s10-1": s1,
    "s10-2": eng_kichik_butun(yech_t(4 * x + 9, ">", 2 * x - 6)),
    "s10-3": s3,
    "s10-4": s4,
    "s10-5": s5,
}
