"""03-bob: Kasrlar — javoblar hisobi."""
from fractions import Fraction as F


def harf(variantlar, togri):
    """To'g'ri qiymatni variantlar orasidan topib, harfini qaytaradi (yagona bo'lishi shart)."""
    mos = [i for i, v in enumerate(variantlar) if v == togri]
    assert len(mos) == 1, (variantlar, togri)
    return "ABCD"[mos[0]]


def aralash(butun, surat, maxraj):
    """Aralash son: 2 3/5 -> 2 + 3/5."""
    return butun + F(surat, maxraj)


# m3-20: 32 o'quvchi; 3/8 qismi futbolga, qolganlarning 2/5 qismi shaxmatga
futbol = 32 * F(3, 8)
m20 = (32 - futbol) * F(2, 5)

# m3-22: 1-kun 1/4, 2-kun 1/3, 60 bet qoldi
m22 = 60 / (1 - F(1, 4) - F(1, 3))

# m3-23: 2/3 qismi to'la, 6 litrdan keyin 5/6 qismi
m23 = 6 / (F(5, 6) - F(2, 3))

# m3-24: maoshning 2/5 qismi ijaraga, 1/4 qismi ovqatga, 1 400 000 so'm qoldi
m24 = 1400000 / (1 - F(2, 5) - F(1, 4))

# s3-3: 3/5 qismi to'la, 140 litr ishlatilgach 1/4 qismi
s3 = 140 / (F(3, 5) - F(1, 4))

JAVOBLAR = {
    # A
    "m3-1": F(18, 24),
    "m3-2": F(28, 42),
    "m3-3": aralash(3, 2, 7),
    "m3-4": F(2, 9) + F(5, 9),
    "m3-5": F(3, 4) - F(1, 6),
    "m3-6": F(5, 8) * F(4, 15),
    "m3-7": F(3, 5) / F(9, 10),
    "m3-8": 36 * F(5, 6),
    # B
    "m3-9": F(1, 2) + F(2, 3) - F(3, 4),
    "m3-10": aralash(2, 1, 3) + aralash(1, 3, 4),
    "m3-11": aralash(2, 3, 8) - 5,
    "m3-12": aralash(1, 1, 5) * aralash(2, 1, 2),
    "m3-13": aralash(2, 2, 3) / aralash(1, 1, 9),
    "m3-14": max(F(5, 7), F(7, 10)),
    "m3-15": F(3, 4) * F(2, 3) + F(1, 2) / 2,
    "m3-16": 24 / F(3, 8),
    # C
    "m3-17": (F(1, 2) - F(1, 3)) / (F(1, 4) + F(1, 6)),
    "m3-18": (1 + F(1, 2)) / (1 - F(1, 4)),
    "m3-19": aralash(2, 1, 2) * 96000 + aralash(1, 3, 4) * 8000,
    "m3-20": m20,
    "m3-21": F(2, 5) * aralash(7, 1, 2),
    "m3-22": m22,
    "m3-23": m23,
    "m3-24": m24,
    "m3-25": F(1, 2 * 3) + F(1, 3 * 4) + F(1, 4 * 5),
    # SAT
    "s3-1": harf([F(1, 6), F(1, 3), F(11, 24), F(13, 24)], F(5, 6) - F(3, 8)),
    "s3-2": aralash(2, 1, 4) * F(2, 3),
    "s3-3": s3,
    "s3-4": harf([F(27, 32), F(2, 3), F(3, 2), F(32, 27)], F(3, 4) / F(9, 8)),
}
