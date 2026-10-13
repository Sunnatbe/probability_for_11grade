"""16-bob: O'rta qiymat, mediana, moda — javoblar hisobi.

Har bir statistik kattalik ma'lumotlar ro'yxatidan funksiya bilan hisoblanadi; chastotalar jadvali
avval ro'yxatga "yoyiladi". Bobdagi jadvallar kitob matnidagi jadval bilan solishtiriladi.
"""
from decimal import Decimal as D
from fractions import Fraction as F
from pathlib import Path
from statistics import pstdev

BOB = Path(__file__).resolve().parent.parent / "boblar" / "16-orta-qiymat.md"


def harf(variantlar, togri):
    """To'g'ri qiymatni variantlar orasidan topib, harfini qaytaradi (yagona bo'lishi shart)."""
    mos = [i for i, v in enumerate(variantlar) if v == togri]
    assert len(mos) == 1, (variantlar, togri)
    return "ABCD"[mos[0]]


def son(q):
    """Fraction -> chekli o'nli kasr bo'lsa Decimal, butun bo'lsa int."""
    q = F(q)
    if q.denominator == 1:
        return q.numerator
    natija = D(q.numerator) / D(q.denominator)
    assert F(natija) == q, f"chekli o'nli kasr emas: {q}"
    return natija


def matn(q):
    """Leak guard uchun kanonik matn (tekshir.fmt bilan bir xil)."""
    if isinstance(q, str):
        return q
    if isinstance(q, D):
        return format(q.normalize(), "f")
    return str(q)


def orta(r):
    return F(sum(F(x) for x in r)) / len(r)


def mediana(r):
    s = sorted(F(x) for x in r)
    n = len(s)
    return s[n // 2] if n % 2 else (s[n // 2 - 1] + s[n // 2]) / 2


def moda(r):
    sanoq = {x: r.count(x) for x in r}
    eng = max(sanoq.values())
    modalar = [x for x, k in sanoq.items() if k == eng]
    assert len(modalar) == 1 and eng > 1, modalar
    return modalar[0]


def kenglik(r):
    return max(r) - min(r)


def yoy(jadval):
    """{qiymat: chastota} -> qiymatlar ro'yxati."""
    return [q for q, k in jadval.items() for _ in range(k)]


def jadval_matnda(sarlavha, jadval):
    """Chastotalar jadvali kitob matnida aynan shu sonlar bilan yozilganini tekshiradi."""
    matn = BOB.read_text(encoding="utf-8")
    qator1 = f"| {sarlavha[0]} | " + " | ".join(f"${q}$" for q in jadval) + " |"
    qator2 = f"| {sarlavha[1]} | " + " | ".join(f"${k}$" for k in jadval.values()) + " |"
    assert qator1 in matn and qator2 in matn, (qator1, qator2)


# --- A
m1 = son(orta([6, 11, 4, 9, 15]))
# m16-2: standart chetlanishni solishtirish (o'rta qiymatlar teng, tarqoqlik har xil)
_P, _Q = [48, 49, 50, 51, 52], [30, 40, 50, 60, 70]
assert orta(_P) == orta(_Q)
m2 = "P" if pstdev(_P) > pstdev(_Q) else "Q"
m3 = moda([14, 6, 3, 14, 11, 3, 14, 10])
m4 = kenglik([41, 18, 56, 27, 45])
m5 = son(mediana([16, 7, 15, 10, 20, 9]))
m6 = son(orta([F("2.4"), F("3.1"), F("4.5"), F("5.2")]))
m7 = 6 * 16
assert orta([16] * 6) * 6 == m7
m8 = son(orta([-3, 2, -5, 0, 4, -4, -1]))

# --- B
m9 = 4 * 13 - (12 + 15 + 9)
assert orta([12, 15, 9, m9]) == 13
m10 = son(orta([160] * 5 + [172]))                       # 5 ta o'rtacha 160 -> yig'indi 800
assert F(5 * 160 + 172, 6) == m10
m11 = 8 * 20 - 7 * 18
GOLLAR = {0: 2, 1: 3, 2: 4, 3: 7, 4: 4}
jadval_matnda(("Urilgan gollar", "O'yinlar soni"), GOLLAR)
m12 = son(orta(yoy(GOLLAR)))
m13 = son(mediana(yoy(GOLLAR)))
r14 = [11, 12, 14, 16, 52]
m14 = son(orta(r14) - orta(r14[:-1]))
m15 = son(F(3 * 12000 + 2 * 18000, 3 + 2))
m16 = son(F(15 * F("8.8") + 10 * F("7.3"), 25))
# m16-17: 3, 7, 10, 12, x (x > 12): mediana 10, o'rta qiymat medianaga teng
mos17 = [x for x in range(13, 200) if orta([3, 7, 10, 12, x]) == mediana([3, 7, 10, 12, x])]
assert mos17 == [18]
m17 = mos17[0]

# --- C
m18 = 5 * 82 - 4 * 78
assert orta([78] * 4 + [m18]) == 82
m19 = son(F(25 * 68 - 97 + 47, 25))
x20 = 5 * 118 - (120 + 95 + 140 + 110)
m20 = son(mediana([120, 95, 140, 110, x20]))
# m16-21: 2 kishilik 4 oila, 3 kishilik 6, 4 kishilik k, 5 kishilik 2; o'rta qiymat 3.5
mos21 = [k for k in range(0, 100) if orta(yoy({2: 4, 3: 6, 4: k, 5: 2})) == F(7, 2)]
assert mos21 == [12]
m21 = mos21[0]
m22 = son(F(2 * 60 + 3 * 80, 2 + 3))
m23 = son(F(20 * 79 - 8 * 85, 12))
assert F(8 * 85 + 12 * m23, 20) == 79
m24 = son(mediana([14, 18, 21, 25, 30, 36, 10, 40]))
r25 = [F("4.5")] * 8 + [27]
m25 = son(orta(r25) - mediana(r25))

# --- SAT
# s16-1: 38 olib tashlansa o'rta qiymat va mediana qanday o'zgaradi
r1 = [3, 4, 4, 5, 6, 6, 7, 8, 38]
r1b = [3, 4, 4, 5, 6, 6, 7, 8]


def ishora(a, b):
    return (b > a) - (b < a)


s1 = harf([(-1, -1), (-1, 1), (-1, 0), (0, -1)],
          (ishora(orta(r1), orta(r1b)), ishora(mediana(r1), mediana(r1b))))
s2 = 11 * 26 - 10 * 24
KITOB = {0: 6, 1: 8, 2: 4, 3: 2}
jadval_matnda(("Books read", "Number of students"), KITOB)
s3 = son(orta(yoy(KITOB)))
s4 = harf([36, 34, 70, 35], son(F(18 * 30 + 12 * 40, 30)))
# s16-5: har bir qiymatga 5 qo'shilsa: (o'rta qiymat farqi, kenglik farqi)
X = [12, 15, 15, 20, 31]
Y = [v + 5 for v in X]
s5 = harf([(0, 0), (5, 5), (5, 0), (0, 5)], (orta(Y) - orta(X), kenglik(Y) - kenglik(X)))

JAVOBLAR = {
    "m16-1": m1, "m16-2": m2, "m16-3": m3, "m16-4": m4, "m16-5": m5, "m16-6": m6,
    "m16-7": m7, "m16-8": m8,
    "m16-9": m9, "m16-10": m10, "m16-11": m11, "m16-12": m12, "m16-13": m13, "m16-14": m14,
    "m16-15": m15, "m16-16": m16, "m16-17": m17,
    "m16-18": m18, "m16-19": m19, "m16-20": m20, "m16-21": m21, "m16-22": m22, "m16-23": m23,
    "m16-24": m24, "m16-25": m25,
    "s16-1": s1, "s16-2": s2, "s16-3": s3, "s16-4": s4, "s16-5": s5,
}

# Matndagi (misollar, xatolar, format namunasi) javoblar mashq va SAT javoblarida takrorlanmasin
M1A = [12, 8, 20, 5, 14, 8, 10]
M1B = [24, 30, 18, 27, 21, 30]
M3 = [6, 7, 7, 8, 12]
BOLALAR = {1: 4, 2: 9, 3: 7, 4: 3, 5: 2}
jadval_matnda(("Oiladagi bolalar soni", "Oilalar soni"), BOLALAR)
XATO4 = {1: 5, 2: 3, 3: 2}
jadval_matnda(("Qiymat", "Chastota"), XATO4)
MATNDAGI = {matn(son(v)) for v in [
    orta(M1A), mediana(M1A), moda(M1A), kenglik(M1A),            # Misol 1 a)
    orta(M1B), mediana(M1B),                                     # Misol 1 b)
    6 * 85 - 5 * 84,                                             # Misol 2
    orta(M3), mediana(M3), orta(M3 + [50]), mediana(M3 + [50]),  # Misol 3
    orta(yoy(BOLALAR)), mediana(yoy(BOLALAR)), moda(yoy(BOLALAR)), sum(BOLALAR.values()),  # Misol 4
    F(20 * 72 + 30 * 82, 50), F(72 + 82, 2),                     # Misol 5 (to'g'ri va noto'g'ri)
    7, mediana([9, 2, 7, 4, 6]),                                 # xato 1
    mediana([3, 5, 8, 10]),                                      # xato 2
    F(70 + 90, 2), F(10 * 70 + 30 * 90, 40),                     # xato 3
    orta([1, 2, 3]), orta(yoy(XATO4)), 5, moda(yoy(XATO4)),      # xato 4
    F("14.25"),                                                  # format namunasi
]}
for _id, _q in JAVOBLAR.items():
    assert matn(_q) not in MATNDAGI, (_id, _q)
