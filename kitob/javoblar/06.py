"""06-bob: Foizlar — javoblar hisobi."""
from decimal import Decimal as D
from fractions import Fraction as F


def harf(variantlar, togri):
    """To'g'ri qiymatni variantlar orasidan topib, harfini qaytaradi (yagona bo'lishi shart)."""
    mos = [i for i, v in enumerate(variantlar) if v == togri]
    assert len(mos) == 1, (variantlar, togri)
    return "ABCD"[mos[0]]


def foiz(p):
    """p% ni son sifatida (Decimal): foiz(15) = 0.15."""
    return D(p) / 100


def foiz_matn(ulush):
    """Ulushni (Decimal yoki chekli Fraction) "37.5%" ko'rinishidagi matnga aylantiradi."""
    if isinstance(ulush, F):
        natija = D(ulush.numerator) / D(ulush.denominator)
        assert F(natija) == ulush, "chekli o'nli kasr emas"
        ulush = natija
    matn = format((D(ulush) * 100).normalize(), "f")
    return matn + "%"


def ozgarish(eski, yangi):
    """Foizli o'zgarish ulushi (yangi - eski) / eski, Fraction."""
    return (F(yangi) - F(eski)) / F(eski)


def butun(qiymat):
    """Butun son chiqishi kerak bo'lgan hisobni int ga aylantiradi."""
    assert qiymat == int(qiymat), qiymat
    return int(qiymat)


# m6-1: 45% qisqarmas kasr
m1 = F(45, 100)

# m6-13: 80 ni 25% oshirib, keyin 25% kamaytirish
m13 = 80 * (1 + foiz(25)) * (1 - foiz(25))

# m6-14: 30% chegirmadan keyin 42 000 so'm -> dastlabki narx
m14 = D(42000) / (1 - foiz(30))

# m6-16: 12% oshirilgach 168
m16 = D(168) / (1 + foiz(12))

# m6-17: 40% o'g'il bola, qizlar 18 -> jami
m17 = D(18) / (1 - foiz(40))

# m6-18: telefon 2 500 000 so'mga olingan, 20% ustama, keyin 15% chegirma; foyda
sotuv18 = D(2500000) * (1 + foiz(20)) * (1 - foiz(15))
m18 = sotuv18 - 2500000

# m6-19: 10 000 000 so'm, yillik 20%, 2 yil (foiz yangi summaga hisoblanadi)
m19 = D(10000000) * (1 + foiz(20)) * (1 + foiz(20))

# m6-20: 1 250 o'quvchi, 8% oshdi; o'g'il bolalar 52% -> qizlar
jami20 = D(1250) * (1 + foiz(8))
m20 = jami20 * (1 - foiz(52))

# m6-21: 30 o'yindan 18 g'alaba, yana 10 o'yin; butun mavsumda kamida 65% g'alaba
yetarli = [w for w in range(0, 11) if F(18 + w, 30 + 10) >= F(65, 100)]
m21 = min(yetarli)

# m6-22: stavka 16% dan 20% ga -> necha foizga oshdi
m22 = foiz_matn(ozgarish(16, 20))

# m6-23: avval 10% oshdi, keyin 10% kamaydi, 495 000 bo'ldi -> dastlabki narx
m23 = D(495000) / ((1 + foiz(10)) * (1 - foiz(10)))

# m6-24: 300 g eritmada 12% tuz; necha g suv qo'shilsa tuz 8% bo'ladi
tuz = D(300) * foiz(12)
m24 = tuz / foiz(8) - 300

# m6-25: 4 000 000; fevral +5%, mart -10% -> yanvarga nisbatan necha foiz kam
mart = D(4000000) * (1 + foiz(5)) * (1 - foiz(10))
m25 = foiz_matn((D(4000000) - mart) / D(4000000))

# s6-1: $80, 25% chegirma, keyin chegirmali narxga 6% soliq
s1_qiymat = D(80) * (1 - foiz(25)) * (1 + foiz(6))
s1 = harf([D("56.40"), D("60.00"), D("63.60"), D("84.80")], s1_qiymat)

# s6-2: eng katta foizli o'sish (jadval)
narxlar = {
    "Notebook": (D("2.50"), D("2.80")),
    "Backpack": (D("40.00"), D("46.00")),
    "Calculator": (D("16.00"), D("18.00")),
    "Water bottle": (D("8.00"), D("9.40")),
}
osishlar = [ozgarish(eski, yangi) for eski, yangi in narxlar.values()]
s2 = harf(osishlar, max(osishlar))
# tuzoq: eng katta mutlaq o'sish boshqa buyumda
mutlaq = [yangi - eski for eski, yangi in narxlar.values()]
assert mutlaq.index(max(mutlaq)) != osishlar.index(max(osishlar))

# s6-3: 12% kamaygandan keyin 22 000
s3 = D(22000) / (1 - foiz(12))

# s6-4: 30% oshib, keyin 30% kamaysa, dastlabkining necha foizi
s4_qiymat = (1 + foiz(30)) * (1 - foiz(30))
s4 = harf(["70%", "91%", "100%", "109%"], foiz_matn(s4_qiymat))

JAVOBLAR = {
    # A
    "m6-1": m1,
    "m6-2": foiz_matn(F(3, 8)),
    "m6-3": 320 * foiz(25),
    "m6-4": 1200000 * foiz(12),
    "m6-5": foiz_matn(F(18, 72)),
    "m6-6": foiz(D("0.4")),
    "m6-7": D(35) / foiz(20),
    "m6-8": 46 * foiz(150),
    # B
    "m6-9": foiz_matn(ozgarish(50000, 58000)),
    "m6-10": foiz_matn(-ozgarish(125000, 100000)),
    "m6-11": 360000 * (1 + foiz(15)),
    "m6-12": 85000 * (1 - foiz(30)),
    "m6-13": m13,
    "m6-14": m14,
    "m6-15": D(98) / foiz(140),
    "m6-16": m16,
    "m6-17": m17,
    # C
    "m6-18": m18,
    "m6-19": m19,
    "m6-20": m20,
    "m6-21": m21,
    "m6-22": m22,
    "m6-23": m23,
    "m6-24": m24,
    "m6-25": m25,
    # SAT
    "s6-1": s1,
    "s6-2": s2,
    "s6-3": s3,
    "s6-4": s4,
    "s6-5": F(21, 60) * 100,
}
