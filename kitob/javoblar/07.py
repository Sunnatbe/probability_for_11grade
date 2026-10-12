"""07-bob: Darajalar va ildizlar — javoblar hisobi."""
from decimal import Decimal as D
from fractions import Fraction as F
from math import isqrt


def harf(variantlar, togri):
    """To'g'ri qiymatni variantlar orasidan topib, harfini qaytaradi (yagona bo'lishi shart)."""
    mos = [i for i, v in enumerate(variantlar) if v == togri]
    assert len(mos) == 1, (variantlar, togri)
    return "ABCD"[mos[0]]


def onli(kasr):
    """Chekli o'nli kasrga aylanadigan Fraction ni Decimal ga aylantiradi."""
    kasr = F(kasr)
    natija = D(kasr.numerator) / D(kasr.denominator)
    assert F(natija) == kasr, "kasr chekli o'nli kasr emas"
    return natija


def butun_ildiz(n, k):
    """Butun n sonining aniq k-darajali ildizi (butun son); aniq bo'lmasa xato."""
    belgi = -1 if n < 0 else 1
    assert belgi == 1 or k % 2 == 1, "juft darajali ildiz manfiy sondan olinmaydi"
    r = round(abs(n) ** (1 / k))
    for nomzod in (r - 1, r, r + 1):
        if nomzod >= 0 and nomzod ** k == abs(n):
            return belgi * nomzod
    raise AssertionError(f"{n} aniq {k}-darajali son emas")


def aniq_ildiz(son, k=2):
    """Kasr sonning aniq k-darajali ildizi (Fraction); natija k-darajaga ko'tarilsa son chiqadi."""
    son = F(son)
    natija = F(butun_ildiz(son.numerator, k), butun_ildiz(son.denominator, k))
    assert natija ** k == son
    return natija


def ildiz_sodda(n):
    """sqrt(n) = k*sqrt(m), m kvadratsiz. (k, m) qaytaradi va k^2 * m == n ni tekshiradi."""
    assert n > 0
    k = max(d for d in range(1, isqrt(n) + 1) if n % (d * d) == 0)
    m = n // (k * k)
    assert k * k * m == n
    assert all(m % (d * d) != 0 for d in range(2, isqrt(m) + 1)), "m kvadratsiz emas"
    return k, m


def ildiz_matn(k, m):
    """k*sqrt(m) ni kanonik LaTeX matnga aylantiradi: $7\\sqrt 2$.

    Figurali qavssiz yoziladi, chunki div atributi ichida `}` bo'lishi mumkin emas;
    shuning uchun ildiz osti bitta raqamli bo'lishi shart.
    """
    if m == 1:
        return k
    assert 1 < m < 10, "ildiz osti bitta raqam bo'lishi kerak"
    koef = "" if k == 1 else str(k)
    return f"${koef}\\sqrt {m}$"


# m7-15: sqrt(98)
m15 = ildiz_matn(*ildiz_sodda(98))

# m7-17: sqrt(90) qaysi ikki ketma-ket butun son orasida
a17 = isqrt(90)
assert a17 * a17 < 90 < (a17 + 1) ** 2
m17 = f"{a17} va {a17 + 1}"

# m7-20: sqrt(75) - sqrt(27)
k1, r1 = ildiz_sodda(75)
k2, r2 = ildiz_sodda(27)
assert r1 == r2
m20 = ildiz_matn(k1 - k2, r1)

# m7-21: (sqrt 5)^2 + sqrt((-6)^2); (sqrt a)^2 = a ta'rif bo'yicha
m21 = 5 + aniq_ildiz((-6) ** 2)
assert aniq_ildiz((-6) ** 2) == 6

# m7-22: soat 8:00 da 300 ta, har soatda 2 marta; soat 14:00 da
m22 = 300 * 2 ** (14 - 8)

# m7-23: kvadrat bog' yuzi 1225 kv. m, to'rt tomoni uchun to'r
m23 = 4 * aniq_ildiz(1225)

# m7-24: kub hajmi 3375 sm^3 -> qirra
m24 = aniq_ildiz(3375, 3)

# s7-4: sqrt(200) ga teng variant; variantlar (k, m) = k*sqrt(m)
s4_variant = [(2, 10), (4, 5), (4, 10), (10, 2)]
s4 = harf([k * k * m for k, m in s4_variant], 200)
assert ildiz_sodda(200) == (10, 2)

# s7-5: 3^n = 81 -> 3^(n-2)
n5 = [n for n in range(0, 10) if 3 ** n == 81]
assert len(n5) == 1
s5 = 3 ** (n5[0] - 2)

JAVOBLAR = {
    # A
    "m7-1": 3 ** 4,
    "m7-2": (-4) ** 3,
    "m7-3": 9 ** 0 + 1 ** 9,
    "m7-4": F(2) ** -4,
    "m7-5": aniq_ildiz(169),
    "m7-6": aniq_ildiz(216, 3),
    "m7-7": F(3, 5) ** 2,
    "m7-8": onli(F(10) ** -3),
    # B
    "m7-9": F(2) ** 5 * F(2) ** 4 / F(2) ** 6,
    "m7-10": F(3 ** 2) ** 3 / F(3) ** 4,
    "m7-11": F(5) ** -1 + F(5) ** 0,
    "m7-12": F(2, 5) ** -2,
    "m7-13": 4 ** 3 * 25 ** 3,
    "m7-14": onli(aniq_ildiz(D("0.49")) + aniq_ildiz(D("0.008"), 3)),
    "m7-15": m15,
    "m7-16": aniq_ildiz(2 * 18),
    "m7-17": m17,
    # C
    "m7-18": F(2) ** -2 * F(2) ** 5 / F(2) ** -1,
    "m7-19": F(6 ** 4, 2 ** 4 * 3 ** 3),
    "m7-20": m20,
    "m7-21": m21,
    "m7-22": m22,
    "m7-23": m23,
    "m7-24": m24,
    "m7-25": F(8 ** 5, 4 ** 7),
    "m7-26": F(25) ** 3 * F(5) ** -2 / 125,
    # SAT
    "s7-1": harf([3, 4, 8, 14], 9 + (-3) - 2),
    "s7-2": harf([9, 12, 14, 24], 3 * 4 + 2),
    "s7-3": aniq_ildiz(3 * 48),
    "s7-4": s4,
    "s7-5": s5,
}
