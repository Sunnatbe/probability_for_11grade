"""01-bob: Butun sonlar va amallar tartibi — javoblar hisobi."""
from itertools import combinations


def harf(variantlar, togri):
    """To'g'ri qiymatni variantlar orasidan topib, harfini qaytaradi (yagona bo'lishi shart)."""
    mos = [i for i, v in enumerate(variantlar) if v == togri]
    assert len(mos) == 1, (variantlar, togri)
    return "ABCD"[mos[0]]


def eng_katta_qavsli(sonlar, amallar):
    """Ifodaga bitta juft qavs qo'yishning barcha usullari ichida eng katta qiymat."""
    qiymatlar = []
    n = len(sonlar)
    for i, j in combinations(range(n), 2):
        qismlar = []
        for k, s in enumerate(sonlar):
            q = str(s)
            if k == i:
                q = "(" + q
            if k == j:
                q = q + ")"
            qismlar.append(q)
            if k < n - 1:
                qismlar.append(amallar[k])
        qiymatlar.append(eval("".join(qismlar)))
    return max(qiymatlar)


# SAT 1: -3(4 - 9) + 2
s1_variant = [-17, -13, 13, 17]
# SAT 3: |7 - 12| - |-4|
s3_variant = [-9, -1, 1, 9]
# SAT 4: g'avvos -18 m, 7 m ko'tariladi, 4 m tushadi
s4_variant = ["-18 - 7 + 4", "-18 + 7 - 4", "18 + 7 - 4", "-18 + 7 + 4"]

JAVOBLAR = {
    # A
    "m1-1": -8 + 15,
    "m1-2": 6 - 11,
    "m1-3": -4 - 9,
    "m1-4": 7 - (-6),
    "m1-5": (-5) * 8,
    "m1-6": (-42) // (-7),
    "m1-7": abs(-13) - abs(5),
    "m1-8": -3 + 5,
    # B
    "m1-9": 12 - 4 * 3,
    "m1-10": (12 - 4) * 3,
    "m1-11": 36 // 6 * 2,
    "m1-12": -2 * (7 - 10) + 5,
    "m1-13": 5 ** 2 - 3 * 6,
    "m1-14": -(4 ** 2) + (-4) ** 2,
    "m1-15": (18 - 6) // (-3),
    "m1-16": abs(4 - 11) + abs(-2 * 3),
    # C
    "m1-17": 3 * (20 - 2 * (5 - 8)) // 6,
    "m1-18": -2 * 3 ** 2 + 4 * (6 - 2 * 5),
    "m1-19": -7 + 11 - 9,
    "m1-20": (3 * 2 + 1 * 1 + 2 * 0) - (3 * 0 + 1 * 4 + 2 * 3),
    "m1-21": 100000 - (3 * 12000 + 2 * 18000),
    "m1-22": -120 + 6 * 15,
    "m1-23": abs(4 - (-9)),
    "m1-24": eng_katta_qavsli([2, 3, 4, 1], ["+", "*", "-"]),
    "m1-25": 13 * 4 + 5 * (-1) + (20 - 13 - 5) * 0,
    # SAT
    "s1-1": harf(s1_variant, -3 * (4 - 9) + 2),
    "s1-2": -5 + 14 - 11,
    "s1-3": harf(s3_variant, abs(7 - 12) - abs(-4)),
    "s1-4": harf([eval(v) for v in s4_variant], -18 + 7 - 4),
}

# bo'lishlar butun chiqishini tekshiramiz (// qoldiqsiz bo'lsin)
assert (-42) % (-7) == 0 and 36 % 6 == 0 and (18 - 6) % 3 == 0
assert (3 * (20 - 2 * (5 - 8))) % 6 == 0
