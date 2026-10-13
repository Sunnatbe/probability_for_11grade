"""19-bob: Burchaklar, uchburchaklar, Pifagor teoremasi — javoblar hisobi.

Burchak javoblari "62°" ko'rinishida, uzunliklar son, ildizli uzunliklar "13\\sqrt{2}" ko'rinishida.
19.1-rasm va S19.1 chizmasiga oid javoblar rasmlar/19_malumotlar.py dan hisoblanadi (chizmalar ham
shu fayldan chiziladi). Har bir to'g'ri burchakli uchburchak Pifagor teoremasi bilan tekshiriladi.
"""
import runpy
from decimal import Decimal as D
from fractions import Fraction as F
from math import isqrt
from pathlib import Path

KITOB = Path(__file__).resolve().parent.parent
M = runpy.run_path(str(KITOB / "rasmlar" / "19_malumotlar.py"), run_name="__main__")
sakkiz = M["sakkiz_burchak"]


def harf(variantlar, togri):
    """To'g'ri qiymatni variantlar orasidan topib, harfini qaytaradi (yagona bo'lishi shart)."""
    mos = [i for i, v in enumerate(variantlar) if v == togri]
    assert len(mos) == 1, (variantlar, togri)
    return "ABCD"[mos[0]]


def son(q):
    """Fraction -> butun bo'lsa int, aks holda chekli o'nli kasr (Decimal)."""
    q = F(q)
    if q.denominator == 1:
        return q.numerator
    natija = D(q.numerator) / D(q.denominator)
    assert F(natija) == q, f"chekli o'nli kasr emas: {q}"
    return natija


def gr(q):
    """Burchak (gradus) -> "62°"."""
    q = F(q)
    assert 0 < q < 360
    return f"{son(q)}°"


def ildiz(n):
    """sqrt(n) (n — musbat butun yoki chekli o'nli kasr kvadrati) ni soddalashtiradi.

    To'liq kvadrat bo'lsa son (int/Decimal), aks holda "k\\sqrt{m}" matni (m kvadratsiz)."""
    n = F(n)
    for maxraj in (1, 10, 100):          # o'nli kasrlar (masalan 92.16 = 9.6^2)
        s = n * maxraj * maxraj
        if s.denominator == 1 and isqrt(s.numerator) ** 2 == s.numerator:
            return son(F(isqrt(s.numerator), maxraj))
    assert n.denominator == 1, n
    n = n.numerator
    k = max(d for d in range(1, isqrt(n) + 1) if n % (d * d) == 0)
    m = n // (k * k)
    assert k * k * m == n and all(m % (d * d) for d in range(2, isqrt(m) + 1))
    return ("" if k == 1 else str(k)) + f"\\sqrt{{{m}}}"


def gipotenuza(a, b):
    return ildiz(F(a) ** 2 + F(b) ** 2)


def katet(c, a):
    assert F(c) > F(a)
    return ildiz(F(c) ** 2 - F(a) ** 2)


def kv(x):
    """ildiz() natijasining kvadrati (tekshiruv uchun)."""
    if isinstance(x, str):
        k, m = x.split("\\sqrt{")
        return F(int(k) if k else 1) ** 2 * int(m.rstrip("}"))
    return F(x) ** 2


def burchaklar_yigindisi(*b):
    assert sum(b) == 180, b
    return b


# --- A
m1 = gr(90 - 28)
m2 = gr(180 - 47)
m3 = gr(180 - 38)                              # vertikal bo'lmagan burchak — qo'shni burchak
m4 = gr(sakkiz(6, 57)[1])
m5 = gr(180 - 66 - 71)
m6 = gr(180 - 2 * 34)
m7 = gipotenuza(16, 30)
assert kv(m7) == 16 ** 2 + 30 ** 2
m8 = katet(50, 14)
assert kv(m8) + 14 ** 2 == 50 ** 2

# --- B
m9 = gr(128 - 49)                              # tashqi = A + B
burchaklar_yigindisi(49, 128 - 49, 180 - 128)
qism = F(180, 3 + 4 + 8)
m10 = gr(8 * qism)
burchaklar_yigindisi(3 * qism, 4 * qism, 8 * qism)
# m19-11: 4 va 5 ichki almashinuvchi -> teng: 5x + 12 = 7x - 24
x11 = [x for x in range(1, 100) if 5 * x + 12 == 7 * x - 24]
assert len(x11) == 1
m11 = x11[0]
assert sakkiz(4, 5 * m11 + 12)[5] == 7 * m11 - 24
# m19-12: 3 va 5 ichki bir tomonli -> yig'indi 180
x12 = [x for x in range(1, 100) if (x + 26) + (3 * x + 6) == 180]
assert len(x12) == 1
assert sakkiz(3, x12[0] + 26)[5] == 3 * x12[0] + 6
m12 = gr(3 * x12[0] + 6)
b13 = F(180, 1 + 1 + 3)                       # asosdagi b, uchidagi 3b
m13 = gr(3 * b13)
# m19-14: 31 - 13 < c < 31 + 13, c butun -> eng kichigi
m14 = min(c for c in range(1, 100) if 31 - 13 < c < 31 + 13)
m15 = gipotenuza(13, 13)
assert m15 == "13\\sqrt{2}"
m16 = ildiz((2 * 9) ** 2 - 9 ** 2)            # gipotenuza 2*9, uzun katet
assert kv(m16) + 81 == 18 ** 2
assert 20 ** 2 + 21 ** 2 == 29 ** 2            # teskari teorema: eng katta burchak to'g'ri burchak
m17 = gr(90)
m18 = son(F(14) * F(12, 8))                    # EF = BC * DE / AB

# --- C
diag = gipotenuza(48, 64)
m19 = (48 + 64) - diag
m20 = katet(10, D("2.8"))
assert kv(m20) + F("2.8") ** 2 == 100
m21 = gipotenuza(10 - (-2), 38 - 3)
m22 = katet(37, F(24, 2))                      # balandlik asosni teng ikkiga bo'ladi
m23 = ildiz(14 ** 2 - 7 ** 2)
assert m23 == "7\\sqrt{3}"
m24 = son(F(46) * F("1.5") / 2)
b25 = [b for b in range(1, 180) if (b + 20) + b + 2 * b == 180]
assert len(b25) == 1
m25 = gr(2 * b25[0])
# m19-26: diagonal 10 = x*sqrt2 -> x = 10/sqrt2 = 5 sqrt2; x^2 = 50
assert 2 * 50 == 10 ** 2
m26 = ildiz(50)

# --- SAT
chap, tashqi = M["SAT_CHAP"], M["SAT_TASHQI"]
# Q dagi ichki burchak = chap (ichki almashinuvchi), R dagi ichki burchak = 180 - tashqi
s1 = 180 - chap - (180 - tashqi)
burchaklar_yigindisi(s1, chap, 180 - tashqi)
s2 = gipotenuza(33, 56)
# s19-3: 30 qarshisidagi katet = gipotenuza / 2
s3 = harf([9, "9\\sqrt{2}", "9\\sqrt{3}", 36], son(F(18, 2)))
s4 = harf([13, 14, D("17.5"), 28], son(F(7) * F(10, 4)))
s5 = harf([4, 12, 18, 20], [c for c in (4, 12, 18, 20) if 11 - 7 < c < 11 + 7][0])
assert len([c for c in (4, 12, 18, 20) if 11 - 7 < c < 11 + 7]) == 1

JAVOBLAR = {
    "m19-1": m1, "m19-2": m2, "m19-3": m3, "m19-4": m4, "m19-5": m5, "m19-6": m6, "m19-7": m7,
    "m19-8": m8,
    "m19-9": m9, "m19-10": m10, "m19-11": m11, "m19-12": m12, "m19-13": m13, "m19-14": m14,
    "m19-15": m15, "m19-16": m16, "m19-17": m17, "m19-18": m18,
    "m19-19": m19, "m19-20": m20, "m19-21": m21, "m19-22": m22, "m19-23": m23, "m19-24": m24,
    "m19-25": m25, "m19-26": m26,
    "s19-1": s1, "s19-2": s2, "s19-3": s3, "s19-4": s4, "s19-5": s5,
}


# Matnda chiqqan sonlar (misollar natijalari va o'qilgan qiymatlar, xatolardagi qiymatlar,
# format namunalari) mashq va SAT javoblarida takrorlanmasin. Gradus belgisi olib tashlab solishtiriladi.
def norm(v):
    if isinstance(v, D):
        v = format(v.normalize(), "f")
    return str(v).replace("°", "").strip().lower()


misol1 = sakkiz(1, 116)
assert (misol1[4], misol1[5], misol1[6]) == (116, 116, 64)
x_m1 = [x for x in range(1, 100) if 3 * x + 10 == 5 * x - 30][0]
assert sakkiz(3, 3 * x_m1 + 10)[7] == 5 * x_m1 - 30
b_m2 = [b for b in range(1, 180) if b + b + (b - 30) == 180][0]
MATNDAGI = {norm(v) for v in [
    26, 90 - 26, 180 - 26,                                           # to'ldiruvchi burchak misoli
    116, 64, x_m1, 3 * x_m1 + 10, 40,                                # Misol 1
    52, 73, 180 - 52 - 73, 52 + 73, 3 * b_m2, b_m2, b_m2 - 30,       # Misol 2
    3, 4, 8, 7, 5, 6, 9, 11, 10, 14,                                 # uchburchak tengsizligi
    12, 13, 15, 17, 24, 25,                                          # Pifagor uchliklari
    81, 144, 225, gipotenuza(9, 12), 625, 49, 576, katet(25, 7),     # Misol 3
    130, "yo'q",
    ildiz(2 * 7 ** 2), F(10, 2), ildiz(10 ** 2 - 5 ** 2), ildiz(F(8 ** 2, 2)),  # Misol 4
    D("1.8"), D("1.2"), D("1.5"), son(6 * F("1.8") / F("1.2")),    # Misol 5
    ildiz(6 ** 2 + 10 ** 2), 136, katet(10, 6), 36, 100,            # xato 1
    5 + 12, gipotenuza(5, 12), 169,                                  # xato 2
    38, 77, 180 - 77, 38 + 77,                                       # xato 3
    74, 180 - 74,                                                    # xato 4
    2, 2 + 3,                                                        # xato 5
    41, D("4.5"), "2\\sqrt{6}",                                      # format namunalari
]}
for _id, _q in JAVOBLAR.items():
    assert norm(_q) not in MATNDAGI, (_id, _q)
_mashq = [norm(v) for k, v in JAVOBLAR.items() if k.startswith("m")]
assert len(_mashq) == len(set(_mashq)), "mashq javoblari takrorlanmasin"
