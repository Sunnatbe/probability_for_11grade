"""05-bob: Nisbat, proporsiya, o'lchov birliklari — javoblar hisobi."""
from decimal import Decimal as D
from fractions import Fraction as F
from math import gcd


def harf(variantlar, togri):
    """To'g'ri qiymatni variantlar orasidan topib, harfini qaytaradi (yagona bo'lishi shart)."""
    mos = [i for i, v in enumerate(variantlar) if v == togri]
    assert len(mos) == 1, (variantlar, togri)
    return "ABCD"[mos[0]]


def nisbat(*sonlar):
    """Nisbatni qisqarmas ko'rinishda "a:b" matni sifatida qaytaradi (butun sonlar)."""
    g = 0
    for s in sonlar:
        assert s == int(s) and s > 0
        g = gcd(g, int(s))
    return ":".join(str(int(s) // g) for s in sonlar)


def nomalum_had(a, b, c):
    """a : b = c : x proporsiyada x = b * c / a (ayqash ko'paytirish)."""
    return F(b) * F(c) / F(a)


def onli(kasr):
    """Chekli o'nli kasrga aylanadigan Fraction ni Decimal ga aylantiradi."""
    natija = D(kasr.numerator) / D(kasr.denominator)
    assert F(natija) == kasr, "kasr chekli o'nli kasr emas"
    return natija


def butun(qiymat):
    """Butun son chiqishi kerak bo'lgan hisobni int ga aylantiradi."""
    assert qiymat == int(qiymat), qiymat
    return int(qiymat)


# m5-3: x : 12 = 5 : 4  ->  4 : 5 = 12 : x
m3 = nomalum_had(4, 5, 12)
assert m3 / 12 == F(5, 4)

# m5-2: 45 minut : 2 soat (bir xil birlikka: minut)
m2 = nisbat(45, 2 * 60)

# m5-9: 252 ni 3:4 nisbatda bo'lish, kattaroq qism
m9 = F(252, 3 + 4) * 4

# m5-10: 9/x = 6/14  ->  6 : 9 = 14 : x
m10 = nomalum_had(6, 9, 14)
assert F(9) / m10 == F(6, 14)

# m5-11, m5-12: km/soat <-> m/s (54 km/soat, 25 m/s)
m11 = F(54 * 1000, 3600)
m12 = F(25 * 3600, 1000)

# m5-13: 3 stakan un : 2 stakan sut; 7.5 stakan un
m13 = nomalum_had(3, 2, D("7.5"))

# m5-14: masshtab 1 : 200 000, xaritada 4.5 sm; km da (1 km = 100 000 sm)
m14 = F(D("4.5")) * 200000 / 100000

# m5-15: 0.9 l = 10 800 so'm; 1.5 l = 17 250 so'm; arzonroq 1 litr narxi
litr_narxlari = [F(10800) / F(D("0.9")), F(17250) / F(D("1.5"))]
assert litr_narxlari == [12000, 11500]
m15 = min(litr_narxlari)

# m5-16: 8 ishchi 9 kunda; 12 ishchi (teskari proporsional)
m16 = F(8 * 9, 12)

# m5-17: konsentrat : suv = 1 : 4, jami 2 l = 2000 ml
m17 = F(2000, 1 + 4) * 1

# m5-18: o'g'il : qiz = 4 : 5, qizlar 3 taga ko'p
qism18 = F(3, 5 - 4)
m18 = (4 + 5) * qism18

# m5-19: 2.5 kg uzum 45 000 so'm; 4 kg uzum + 3 kg olma (olma 6 000 so'm arzon)
uzum = F(45000) / F(D("2.5"))
m19 = 4 * uzum + 3 * (uzum - 6000)

# m5-20: 300 km, 80 km/soat, 7:30 da yo'lga chiqdi
yol_minut = F(300, 80) * 60
yetib = 7 * 60 + 30 + butun(yol_minut)
m20 = f"soat {yetib // 60}:{yetib % 60:02d}"

# m5-21: 2 soat 15 minutda 27 km
m21 = F(27) / (2 + F(15, 60))

# m5-22: 1 200 000 so'm 2:3:5 nisbatda, eng katta ulush
m22 = F(1200000, 2 + 3 + 5) * 5

# m5-23: ikki printer, minutiga 18 va 12 bet, 450 bet
m23 = F(450, 18 + 12)

# m5-24: 1 kg ga 15 mg, bola 24 kg; 5 ml siropda 120 mg
m24 = F(24 * 15, 120) * 5

# m5-25: olma : nok = 5 : 3; 8 ta olma yeyilsa 1 : 1
yechim25 = [5 * k for k in range(1, 100) if 5 * k - 8 == 3 * k]
assert len(yechim25) == 1
m25 = yechim25[0]

# s5-1: sharbat narxi (untsiya boshiga eng arzon)
idishlar = [(12, D("1.80")), (20, D("2.60")), (32, D("4.48")), (64, D("9.60"))]
untsiya_narx = [narx / hajm for hajm, narx in idishlar]
s1 = harf(untsiya_narx, min(untsiya_narx))

# s5-3: qizil : ko'k = 3 : 7, jami 60
s3 = harf([18, 20, 42, 140], butun(F(60, 3 + 7) * 7))

JAVOBLAR = {
    # A
    "m5-1": nisbat(24, 36),
    "m5-2": m2,
    "m5-3": m3,
    "m5-4": D("4.2") * 1000,
    "m5-5": D(2500) / 1000,
    "m5-6": F(195, 3),
    "m5-7": F(16200, 6),
    "m5-8": nisbat(18, 12),
    # B
    "m5-9": m9,
    "m5-10": m10,
    "m5-11": m11,
    "m5-12": m12,
    "m5-13": m13,
    "m5-14": m14,
    "m5-15": m15,
    "m5-16": m16,
    "m5-17": m17,
    # C
    "m5-18": m18,
    "m5-19": m19,
    "m5-20": m20,
    "m5-21": m21,
    "m5-22": m22,
    "m5-23": m23,
    "m5-24": m24,
    "m5-25": m25,
    # SAT
    "s5-1": s1,
    "s5-2": F(66 * 1000, 60),
    "s5-3": s3,
    "s5-4": onli(nomalum_had(2, 15, 9)),  # 2 sm : 15 km = 9 sm : x
    "s5-5": F(840) / F(D("3.5")) * 6,
}
