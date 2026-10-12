"""04-bob: O'nli kasrlar va yaxlitlash — javoblar hisobi."""
from decimal import ROUND_HALF_UP, Decimal as D
from fractions import Fraction as F


def harf(variantlar, togri):
    """To'g'ri qiymatni variantlar orasidan topib, harfini qaytaradi (yagona bo'lishi shart)."""
    mos = [i for i, v in enumerate(variantlar) if v == togri]
    assert len(mos) == 1, (variantlar, togri)
    return "ABCD"[mos[0]]


def yaxlitla(son, xona):
    """Maktab qoidasi bo'yicha yaxlitlash (5 va undan katta bo'lsa yuqoriga).

    `xona` — "0.1", "0.01", "1" kabi. Natija satr: oxirdagi nollar saqlanadi (20.00).
    """
    return str(D(son).quantize(D(xona), rounding=ROUND_HALF_UP))


def onli(kasr):
    """Chekli o'nli kasrga aylanadigan Fraction ni Decimal ga aylantiradi."""
    natija = D(kasr.numerator) / D(kasr.denominator)
    assert F(natija) == kasr, "kasr chekli o'nli kasr emas"
    return natija


# m4-14: 47 850 ni minglargacha yaxlitlash
m14 = int(D(47850).scaleb(-3).quantize(D(1), rounding=ROUND_HALF_UP)) * 1000

# m4-19: 100 m yugurish natijalari (soniya)
natijalar = [D("12.48"), D("12.5"), D("12.39"), D("12.41")]

# m4-20: 45 000 so'm (10 GB), har qo'shimcha 0.5 GB uchun 6 000 so'm, 13.5 GB ishlatildi
qoshimcha = (D("13.5") - 10) / D("0.5")
assert qoshimcha == qoshimcha.to_integral_value()
m20 = 45000 + qoshimcha * 6000

# m4-21: har sonni butun songacha yaxlitlab taxminiy hisoblash
m21 = D(yaxlitla("39.8", "1")) * D(yaxlitla("5.1", "1"))

# m4-24: o'ndan birgacha yaxlitlanganda 3.7 bo'ladigan eng kichik ikki xonali o'nli kasr
m24 = min(D(n) / 100 for n in range(300, 500) if yaxlitla(D(n) / 100, "0.1") == "3.7")

# m4-25: 0.(3) = 1/3
m25 = onli(F(1, 3) + F(1, 6))

# s4-3: 6.4873 ni yuzdan birgacha yaxlitlash
s3_variant = [D("6.48"), D("6.487"), D("6.49"), D("6.5")]

JAVOBLAR = {
    # A
    "m4-1": F(D("0.45")),
    "m4-2": D(7) / D(8),
    "m4-3": D("6.25") + D("3.8"),
    "m4-4": 10 - D("4.37"),
    "m4-5": D("0.6") * D("0.7"),
    "m4-6": D("3.6") / D("0.4"),
    "m4-7": yaxlitla("5.678", "0.1"),
    "m4-8": max(D("0.7"), D("0.68"), D("0.705"), D("0.07")),
    # B
    "m4-9": D("1.25") * D("4.8"),
    "m4-10": D("0.084") / D("0.12"),
    "m4-11": D("2.5") * (D("3.2") - D("1.4")) + D("0.75"),
    "m4-12": yaxlitla(D(5) / D(6), "0.01"),
    "m4-13": yaxlitla("19.996", "0.01"),
    "m4-14": m14,
    "m4-15": onli(F(3, 4)) + D("0.35"),
    "m4-16": D("0.125") * D("0.8") + D("0.3") / D("0.05"),
    # C
    "m4-17": D("2.5") * 4800 + D("1.2") * 98000 + D("0.75") * 64000,
    "m4-18": D("7.5") / 100 * 240 * 10900,
    "m4-19": max(natijalar) - min(natijalar),
    "m4-20": m20,
    "m4-21": m21,
    "m4-22": D(1260000) / 28 + D(12500),
    "m4-23": onli(F(1, 8) + F(D("0.375")) * F(2, 3)),
    "m4-24": m24,
    "m4-25": m25,
    # SAT
    "s4-1": harf([F(6, 25), F(5, 16), F(5, 8), F(8, 5)], F(D("0.625"))),
    "s4-2": 3 * D("2.45") + D("1.30"),
    "s4-3": harf(s3_variant, D(yaxlitla("6.4873", "0.01"))),
    "s4-4": D("2.4") / D("0.15"),
}
