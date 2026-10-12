"""02-bob: Bo'linish: tub sonlar, EKUB, EKUK — javoblar hisobi."""
from math import gcd, lcm

KUNLAR = ["dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba", "yakshanba"]


def harf(variantlar, togri):
    """To'g'ri qiymatni variantlar orasidan topib, harfini qaytaradi (yagona bo'lishi shart)."""
    mos = [i for i, v in enumerate(variantlar) if v == togri]
    assert len(mos) == 1, (variantlar, togri)
    return "ABCD"[mos[0]]


def tubmi(n):
    return n >= 2 and all(n % d for d in range(2, int(n ** 0.5) + 1))


def bo_luvchilar(n):
    return [d for d in range(1, n + 1) if n % d == 0]


def ajrat(n):
    """Tub ko'paytuvchilar: {tub: daraja}."""
    natija, d = {}, 2
    while n > 1:
        while n % d == 0:
            natija[d] = natija.get(d, 0) + 1
            n //= d
        d += 1
    return natija


def ajratma_matn(n):
    """Kanonik ko'rinish: $2^3 \\cdot 3^2$ (daraja 1 bo'lsa yozilmaydi)."""
    qismlar = [f"{p}^{k}" if k > 1 else f"{p}" for p, k in sorted(ajrat(n).items())]
    return "$" + " \\cdot ".join(qismlar) + "$"


def raqamlar_yigindisi(n):
    return sum(int(c) for c in str(n))


# m2-16: 520 dan 529 gacha sonlardan 3 ga ham, 5 ga ham bo'linadigani
m16 = [n for n in range(520, 530) if n % 3 == 0 and n % 5 == 0]
assert len(m16) == 1

# m2-19: xona 360 sm x 480 sm, eng katta kvadrat plitka
plitka = gcd(360, 480)
m19 = f"{plitka} sm, {(360 // plitka) * (480 // plitka)} ta"

# m2-20: 4, 6, 9 ga bo'lganda qoldiq 1, 50 va 100 orasida
m20 = [n for n in range(51, 100) if n % 4 == 1 and n % 6 == 1 and n % 9 == 1]
assert len(m20) == 1

# m2-23: EKUB(a, 36) = 12, EKUK(a, 36) = 180  =>  a = 12 * 180 / 36
a23 = 12 * 180 // 36
assert gcd(a23, 36) == 12 and lcm(a23, 36) == 180

# m2-24: 12 ga ham, 18 ga ham bo'linadigan eng kichik uch xonali son
m24 = next(n for n in range(100, 1000) if n % lcm(12, 18) == 0)

# s2-4: n ni 7 ga bo'lganda qoldiq 4; n + 10 ni 7 ga bo'lgandagi qoldiq
s4 = {(n + 10) % 7 for n in range(1, 500) if n % 7 == 4}
assert len(s4) == 1

JAVOBLAR = {
    # A
    "m2-1": 47 % 6,
    "m2-2": len(bo_luvchilar(30)),
    "m2-3": ", ".join(str(n) for n in [21, 23, 27, 29, 33, 37] if tubmi(n)),
    "m2-4": sum(1 for n in range(1, 21) if tubmi(n)),
    "m2-5": max(n for n in range(1, 50) if n % 7 == 0),
    "m2-6": 5832 // 9 if raqamlar_yigindisi(5832) % 9 == 0 else None,
    "m2-7": ajratma_matn(72),
    "m2-8": gcd(18, 24),
    # B
    "m2-9": lcm(8, 12),
    "m2-10": ajratma_matn(252),
    "m2-11": gcd(84, 126),
    "m2-12": lcm(15, 35),
    "m2-13": f"{gcd(16, 27)} (o'zaro tub sonlar)" if gcd(16, 27) == 1 else gcd(16, 27),
    "m2-14": gcd(30, 45, 75),
    "m2-15": lcm(4, 6, 10),
    "m2-16": m16[0],
    # C
    "m2-17": gcd(48, 72),
    "m2-18": f"{lcm(4, 6)} kundan keyin, {KUNLAR[(0 + lcm(4, 6)) % 7]}",
    "m2-19": m19,
    "m2-20": m20[0],
    "m2-21": KUNLAR[(KUNLAR.index("chorshanba") + 100) % 7],
    "m2-22": lcm(18, 30) // 18,
    "m2-23": a23,
    "m2-24": m24,
    # SAT
    "s2-1": harf([tubmi(n) for n in [39, 51, 57, 59]], True),
    "s2-2": lcm(18, 24),
    "s2-3": harf([7, 14, 28, 420], gcd(84, 140)),
    "s2-4": harf([0, 3, 4, 6], s4.pop()),
}
