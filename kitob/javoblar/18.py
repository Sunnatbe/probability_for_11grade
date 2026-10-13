"""18-bob: Ehtimollik asoslari — javoblar hisobi.

Ehtimolliklar iloji boricha elementar hodisalarni to'liq sanab (itertools.product) hisoblanadi:
P = qulay natijalar soni / barcha teng imkoniyatli natijalar soni (Fraction, qisqartirilgan).
Bobdagi jadvallar kitob matnidagi jadval bilan qatorma-qator solishtiriladi.
"""
from decimal import Decimal as D
from fractions import Fraction as F
from itertools import product
from pathlib import Path

BOB = Path(__file__).resolve().parent.parent / "boblar" / "18-ehtimollik.md"
MATN = BOB.read_text(encoding="utf-8")

SOQQA = range(1, 7)
TANGA = ("G", "R")  # gerb, raqam


def harf(variantlar, togri):
    """To'g'ri qiymatni variantlar orasidan topib, harfini qaytaradi (yagona bo'lishi shart)."""
    mos = [i for i, v in enumerate(variantlar) if v == togri]
    assert len(mos) == 1, (variantlar, togri)
    return "ABCD"[mos[0]]


def P(natijalar, shart):
    """Teng imkoniyatli natijalar ro'yxatida shartni qanoatlantiruvchilar ulushi."""
    natijalar = list(natijalar)
    return F(sum(1 for n in natijalar if shart(n)), len(natijalar))


def onli(q):
    """Fraction -> Decimal (chekli bo'lishi shart)."""
    q = F(q)
    natija = D(q.numerator) / D(q.denominator)
    assert F(natija) == q
    return natija


def foiz(q):
    return format((onli(q) * 100).normalize(), "f") + "%"


def matn(q):
    if isinstance(q, str):
        return q
    if isinstance(q, D):
        return format(q.normalize(), "f")
    return str(q)


def jadval(sarlavha, qatorlar, jami="Jami"):
    """Ikki tomonlama jadval: "Jami" ustun va qatorini hisoblab, matnda aynan borligini tekshiradi.

    Qaytaradi: {(qator, ustun): son} (jami kataklar bilan).
    """
    assert f"|  | {' | '.join(sarlavha)} | {jami} |" in MATN, sarlavha
    kat = {}
    for nom, q in qatorlar.items():
        for u, v in zip(sarlavha, q):
            kat[nom, u] = v
        kat[nom, jami] = sum(q)
    for u in list(sarlavha) + [jami]:
        kat[jami, u] = sum(kat[nom, u] for nom in qatorlar)
    for nom in list(qatorlar) + [jami]:
        qator = f"| {nom} | " + " | ".join(f"${kat[nom, u]}$" for u in list(sarlavha) + [jami]) + " |"
        assert qator in MATN, qator
    return kat


# Ikki soqqa yig'indilari jadvali (Misol 2) matnda to'g'ri yozilganini tekshiramiz
assert "|  | " + " | ".join(f"${b}$" for b in SOQQA) + " |" in MATN
for a in SOQQA:
    assert f"| ${a}$ | " + " | ".join(f"${a + b}$" for b in SOQQA) + " |" in MATN, a

IKKI = list(product(SOQQA, SOQQA))

# 18.1-jadval: tushlikda nima ichiladi
T = jadval(["Choy", "Sharbat", "Suv"], {"7-sinf": [14, 26, 10], "8-sinf": [34, 14, 22]})

# --- A
m1 = P(range(1, 21), lambda n: n % 4 == 0)
m2 = F(5, 7 + 5)
m3 = onli(1 - F("0.35"))
m4 = P("MATEMATIKA", lambda h: h == "A")
m5 = len(list(product(SOQQA, range(1, 6))))
m6 = foiz(F(40, 500))
m7 = P(["qizil"] * 3 + ["sariq"] * 4 + ["yashil"], lambda r: r in ("sariq", "yashil"))
m8 = F(30 - 18, 30)

# --- B
m9 = P(IKKI, lambda n: n[0] + n[1] == 5)
m10 = P(IKKI, lambda n: abs(n[0] - n[1]) == 2)
m11 = P(product(TANGA, repeat=4), lambda n: "G" in n)
assert m11 == 1 - F(1, 16)
m12 = onli(1 - F(4, 100))
m13 = F(T["Jami", "Suv"], T["Jami", "Jami"])
m14 = F(T["7-sinf", "Sharbat"], T["Jami", "Jami"])
m15 = F(T["7-sinf", "Sharbat"], T["7-sinf", "Jami"])
m16 = F(T["8-sinf", "Choy"], T["Jami", "Choy"])
m17 = P(product(range(1, 6), repeat=2), lambda n: n[0] % 2 == 1 and n[1] % 2 == 1)
assert m17 == F(3, 5) * F(3, 5)

# --- C
# m18-18: qizil ehtimolligi 3/8, ko'k sharlar 15 ta -> jami
mos18 = [n for n in range(1, 500) if n - 15 >= 0 and F(n - 15, n) == F(3, 8)]
assert mos18 == [24]
m18 = mos18[0]
mos19 = [x for x in range(0, 500) if F(5 + x, 15 + x) == F(3, 4)]
assert mos19 == [25]
m19 = mos19[0]
m20 = F(T["8-sinf", "Jami"] - T["8-sinf", "Choy"], T["8-sinf", "Jami"])
# m18-21: 80 a'zo, 45 erkak; suzish: erkaklardan 20, ayollardan 15
erkak, ayol = 45, 80 - 45
m21 = F(15, 20 + 15)
assert ayol >= 15
m22 = P(IKKI, lambda n: 6 in n)
assert m22 == 1 - F(5, 6) * F(5, 6)
# m18-23: 50 o'quvchi; Samarqand 30, Buxoro 25, ikkalasi 12
oquvchilar = [(s, b) for s, b, k in [(1, 1, 12), (1, 0, 30 - 12), (0, 1, 25 - 12)] for _ in range(k)]
oquvchilar += [(0, 0)] * (50 - len(oquvchilar))
m23 = P(oquvchilar, lambda o: o == (0, 0))
m24 = onli((1 - F("0.4")) * (1 - F("0.3")))
m25 = F(6, 400) * 5000
assert m25.denominator == 1
m25 = int(m25)

# --- SAT
U = jadval(["Dog", "Cat", "No pet"], {"Apartment": [24, 36, 60], "House": [72, 33, 75]}, jami="Total")
s1 = harf([F(72, 300), F(72, 180), F(72, 96), F(96, 300)], F(U["House", "Dog"], U["House", "Total"]))
assert all(f"\\frac{{{a}}}{{{b}}}" in MATN for a, b in [(72, 300), (72, 180), (72, 96), (96, 300)])
s2 = F(U["Apartment", "Cat"], U["Total", "Cat"])
yashil = 1 - F(1, 4) - F(1, 3)
s3 = yashil * 36
assert s3.denominator == 1
s3 = int(s3)
s4 = P(range(1, 41), lambda n: n % 6 == 0)
s5 = F(3, 100) * 2400
assert s5.denominator == 1
s5 = int(s5)

JAVOBLAR = {
    "m18-1": m1, "m18-2": m2, "m18-3": m3, "m18-4": m4, "m18-5": m5, "m18-6": m6, "m18-7": m7,
    "m18-8": m8,
    "m18-9": m9, "m18-10": m10, "m18-11": m11, "m18-12": m12, "m18-13": m13, "m18-14": m14,
    "m18-15": m15, "m18-16": m16, "m18-17": m17,
    "m18-18": m18, "m18-19": m19, "m18-20": m20, "m18-21": m21, "m18-22": m22, "m18-23": m23,
    "m18-24": m24, "m18-25": m25,
    "s18-1": s1, "s18-2": s2, "s18-3": s3, "s18-4": s4, "s18-5": s5,
}

# Matndagi (tushuntirish, misollar, xatolar, format namunasi) javoblar mashq va SAT javoblarida
# takrorlanmasin
N = jadval(["Ha", "Yo'q"], {"9-sinf": [48, 32], "10-sinf": [54, 66]})   # Misol 4 jadvali
XALTA1 = ["qizil"] * 5 + ["ko'k"] * 3 + ["yashil"] * 4
UCH = list(product(TANGA, repeat=3))
XALTA5 = ["qizil"] * 3 + ["ko'k"] * 2
MATNDAGI = {matn(v) for v in [
    P(SOQQA, lambda n: n == 6), P(SOQQA, lambda n: n % 2 == 0),                 # tushuntirish
    F(2, 10) * 50,                                                              # kutilgan son misoli
    2 * 6, 6 * 6, 2 * 2 * 2,                                                    # matnda sanalgan elementar hodisalar soni
    F(3, 40), D("0.075"), "7.5%",                                               # yozuv shakllari misoli
    P(XALTA1, lambda r: r == "yashil"), 1 - P(XALTA1, lambda r: r == "yashil"),  # Misol 1
    P(XALTA1, lambda r: r == "sariq"),
    P(IKKI, lambda n: sum(n) == 8), 1 - P(IKKI, lambda n: sum(n) >= 10),        # Misol 2
    P(UCH, lambda n: n.count("G") == 2), 1 - P(UCH, lambda n: "R" not in n),    # Misol 3
    F(N["Jami", "Ha"], N["Jami", "Jami"]), F(N["10-sinf", "Ha"], N["Jami", "Ha"]),  # Misol 4
    F(N["10-sinf", "Ha"], N["10-sinf", "Jami"]),
    P(product(TANGA, SOQQA), lambda n: n == ("G", 6)),                          # Misol 5
    P(product(XALTA5, XALTA5), lambda n: n == ("ko'k", "ko'k")),
    F(2, 5) * F(1, 4),
    F(1, 3), P(product(TANGA, repeat=2), lambda n: n.count("G") == 1),          # xato 1
    F(N["9-sinf", "Yo'q"], N["Jami", "Jami"]), F(N["9-sinf", "Yo'q"], N["Jami", "Yo'q"]),  # xato 2
    F(1, 2) + F(1, 6),                                                          # xato 3
    F(1, 2) + F(1, 2), P(product(TANGA, repeat=2), lambda n: "G" in n),         # xato 4
    F(5, 14), D("0.85"), "85%",                                                 # format namunasi
]}
for _id, _q in JAVOBLAR.items():
    assert matn(_q) not in MATNDAGI, (_id, _q)
