"""17-bob: Jadval va grafiklarni o'qish — javoblar hisobi.

Diagrammalarga oid javoblar rasmlar/17_malumotlar.py dagi ro'yxatlardan hisoblanadi (chizmalar ham
shu fayldan chiziladi). Bobdagi jadvallar kitob matnidagi jadval bilan qatorma-qator solishtiriladi.
"""
import runpy
from decimal import Decimal as D
from fractions import Fraction as F
from pathlib import Path

KITOB = Path(__file__).resolve().parent.parent
BOB = KITOB / "boblar" / "17-grafiklar.md"
# run_name="__main__": ma'lumot faylidagi tekshiruvlar (chiziq eng mos chiziqqa yaqin) ham ishlaydi
M = runpy.run_path(str(KITOB / "rasmlar" / "17_malumotlar.py"), run_name="__main__")
OYLAR, KITOBLAR = M["OYLAR"], M["KITOBLAR"]
SOATLAR, HARORAT = M["SOATLAR"], M["HARORAT"]
NUQTALAR, bashorat = M["NUQTALAR"], M["bashorat"]
assert (M["K"], M["B"]) == (5, 45)  # matnda y = 5x + 45 deb yozilgan


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


def foiz(ulush):
    """Ulushni "37.5%" ko'rinishidagi matnga aylantiradi."""
    return format((D(son(ulush)) * 100).normalize(), "f") + "%"


def matn(q):
    if isinstance(q, str):
        return q
    if isinstance(q, D):
        return format(q.normalize(), "f")
    return str(q)


def jadval_matnda(sarlavha, qatorlar):
    """Ikki tomonlama jadval kitob matnida aynan shu sonlar bilan yozilganini tekshiradi.

    qatorlar: {qator nomi: [qiymatlar]}; "Jami" ustuni va qatori shu yerda hisoblanadi.
    None — matnda "?" bilan yozilgan noma'lum katak (uning qiymati alohida beriladi).
    """
    satr = BOB.read_text(encoding="utf-8")

    def katak(v):
        return "?" if v is None else f"${v}$"

    assert f"|  | {' | '.join(sarlavha)} |" in satr, sarlavha
    for nom, q in qatorlar.items():
        qator = f"| {nom} | " + " | ".join(katak(v) for v in q) + " |"
        assert qator in satr, qator


def soat(t):
    """Soatni (Fraction) "20:40" ko'rinishiga."""
    t = F(t)
    daqiqa = t * 60
    assert daqiqa.denominator == 1
    return f"{int(daqiqa) // 60}:{int(daqiqa) % 60:02d}"


def oraliq(i):
    return f"{SOATLAR[i]}:00 dan {SOATLAR[i + 1]}:00 gacha"


OY = dict(zip(OYLAR, KITOBLAR))
HAR = dict(zip(SOATLAR, HARORAT))


def tezlik(t1, t2):
    return F(HAR[t2] - HAR[t1], t2 - t1)


# Kitoblar jadvali (17.2-jadval): 8-sinf va 9-sinf, badiiy / ilmiy-ommabop / tarixiy
K8, K9 = [33, 10, 17], [31, 30, 19]
KJAMI = [a + b for a, b in zip(K8, K9)]
jadval_matnda(["Badiiy", "Ilmiy-ommabop", "Tarixiy", "Jami"],
              {"8-sinf": K8 + [sum(K8)], "9-sinf": K9 + [sum(K9)], "Jami": KJAMI + [sum(KJAMI)]})

# --- A
m1 = OY["Noyabr"]
m2 = max(KITOBLAR) - min(KITOBLAR)
m3 = HAR[10]
m4 = len(NUQTALAR)
m5 = KJAMI[2]
m6 = sum(1 for x, _ in NUQTALAR if x < 4)
m7 = sum(KITOBLAR)
mos8 = [t for t in SOATLAR if HAR[t] == 16]
assert len(mos8) == 1
m8 = f"{mos8[0]}:00"

# --- B
m9 = son(F(sum(KITOBLAR), len(KITOBLAR)))
m10 = foiz(F(OY["Oktabr"] - OY["Sentabr"], OY["Sentabr"]))
m11 = HAR[12] - HAR[6]
m12 = son(tezlik(14, 18))
farqlar = [HARORAT[i + 1] - HARORAT[i] for i in range(len(HARORAT) - 1)]
assert farqlar.count(min(farqlar)) == 1
m13 = oraliq(farqlar.index(min(farqlar)))
m14 = bashorat(9)
mos15 = [F(x, 2) for x in range(0, 41) if bashorat(F(x, 2)) == 80]
assert len(mos15) == 1
m15 = son(mos15[0])
m16 = foiz(F(K8[0], sum(K8)))
m17 = foiz(F(K9[1], KJAMI[1]))

# --- C
mart = OY["Fevral"] * (1 - F(40, 100))
m18 = son(F(sum(KITOBLAR) + mart, len(KITOBLAR) + 1))
# 18:00 dan keyin 16:00-18:00 dagi tezlik bilan pasaysa, harorat qachon 0 bo'ladi
m19 = soat(18 + F(0 - HAR[18], 1) / tezlik(16, 18))
m20 = foiz(F(K9[2] + 20, sum(K9) + 20))
m21 = bashorat(4) - bashorat(0)                     # 4 soat farq -> ball farqi
past4 = [y for x, y in NUQTALAR if x == 4 and y < bashorat(4)]
assert len(past4) == 1
m22 = bashorat(4) - past4[0]
yetti = [y for x, y in NUQTALAR if x >= 7]
m23 = son(F(sum(yetti), len(yetti)))
m24 = foiz(F(sum(1 for x, y in NUQTALAR if y > bashorat(x)), len(NUQTALAR)))

# --- SAT
S1 = {"Grade 9": [28, 34, 18], "Grade 10": [21, 39, 15]}
SJAMI = [a + b for a, b in zip(*S1.values())]
jadval_matnda(["Walk", "Bus", "Car", "Total"],
              {**{k: v + [sum(v)] for k, v in S1.items()}, "Total": SJAMI + [sum(SJAMI)]})
s1 = son(F(S1["Grade 10"][0], sum(S1["Grade 10"])) * 100)
# s17-2: y = -1.6x + 24 (narx ming dollarda): har yil bashorat qilingan narx 1600 dollarga kamayadi
k2 = F("-1.6") * 1000
s2 = harf([("kamayadi", 16000), ("yangi", 1600), ("kamayadi", 1600), ("oshadi", 1600)],
          ("kamayadi" if k2 < 0 else "oshadi", abs(k2)))
BOY = {0: F("3.0"), 2: F("7.4"), 4: F("12.2"), 6: F("15.8"), 8: F("18.0")}
_bob = BOB.read_text(encoding="utf-8")
assert "| Week | " + " | ".join(f"${h}$" for h in BOY) + " |" in _bob
assert "| Height (cm) | " + " | ".join(f"${v:.1f}$" for v in map(float, BOY.values())) + " |" in _bob
s3 = son((BOY[6] - BOY[2]) / (6 - 2))
s4 = son(F("4.5") * 80 - 210)
s5 = son(160 - (F("4.5") * 78 - 210))

JAVOBLAR = {
    "m17-1": m1, "m17-2": m2, "m17-3": m3, "m17-4": m4, "m17-5": m5, "m17-6": m6, "m17-7": m7,
    "m17-8": m8,
    "m17-9": m9, "m17-10": m10, "m17-11": m11, "m17-12": m12, "m17-13": m13, "m17-14": m14,
    "m17-15": m15, "m17-16": m16, "m17-17": m17,
    "m17-18": m18, "m17-19": m19, "m17-20": m20, "m17-21": m21, "m17-22": m22, "m17-23": m23,
    "m17-24": m24,
    "s17-1": s1, "s17-2": s2, "s17-3": s3, "s17-4": s4, "s17-5": s5,
}

# Matndagi (misollar, xatolar, format namunasi) javoblar mashq va SAT javoblarida takrorlanmasin
T9, T10 = [30, 15, 35], [22, 10, 18]                 # Misol 1 jadvali (35 va 10 — noma'lum kataklar)
TJAMI = [a + b for a, b in zip(T9, T10)]
jadval_matnda(["Futbol", "Shaxmat", "Suzish", "Jami"],
              {"9-sinf": [T9[0], T9[1], None, sum(T9)], "10-sinf": [T10[0], None, T10[2], sum(T10)],
               "Jami": TJAMI + [sum(TJAMI)]})
eng_tez = farqlar.index(max(farqlar))
MATNDAGI = {matn(v) for v in [
    T9[2], T10[1], foiz(F(T10[2], sum(T10))), foiz(F(T9[1], TJAMI[1])),        # Misol 1
    OY["Oktabr"] - OY["Dekabr"], foiz(F(OY["Oktabr"] - OY["Dekabr"], OY["Oktabr"])),  # Misol 2
    max(HARORAT), f"{SOATLAR[HARORAT.index(max(HARORAT))]}:00",              # Misol 3 a)
    oraliq(eng_tez), son(F(max(farqlar), 2)), son(tezlik(6, 14)),            # Misol 3 b), c)
    "musbat", M["K"], M["B"], son(bashorat(F(11, 2))), 65 - bashorat(3),   # Misol 4
    10,                                                                      # xato 1 (100 va 90)
    foiz(F(T9[1], sum(T9))),                                                 # xato 2 (noto'g'ri)
    HAR[18] - HAR[6], son(tezlik(6, 18)),                                    # xato 3
    bashorat(12),                                                            # xato 4
    "7:15", "12.5%", D("-1.5"), "10:00 dan 12:00 gacha",                     # format namunalari
]}
for _id, _q in JAVOBLAR.items():
    assert matn(_q) not in MATNDAGI, (_id, _q)
