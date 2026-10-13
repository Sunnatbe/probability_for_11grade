"""19-bob ma'lumotlari: chizmalar (rasmlar/19_*.py) va javoblar (javoblar/19.py) shu fayldan o'qiydi.

Bu fayl yig'ishda skript sifatida ham ishga tushiriladi; u hech narsa chizmaydi.
"""

# 19.1-rasm: l || m, t — kesuvchi. Burchak raqamlari: l bilan kesishishda 1 (yuqori-chap),
# 2 (yuqori-o'ng), 3 (pastki-chap), 4 (pastki-o'ng); m bilan kesishishda 5, 6, 7, 8 xuddi shunday.
# Kesuvchi chapdan o'ngga ko'tariladi, shuning uchun 2, 3, 6, 7 — o'tkir, 1, 4, 5, 8 — o'tmas burchaklar.
KESUVCHI_QIYALIGI = 62          # faqat chizish uchun (rasm masshtabsiz deb aytilgan)
OTKIR = (2, 3, 6, 7)
OTMAS = (1, 4, 5, 8)
VERTIKAL = [(1, 4), (2, 3), (5, 8), (6, 7)]
MOS = [(1, 5), (2, 6), (3, 7), (4, 8)]
ICHKI_ALMASHINUVCHI = [(3, 6), (4, 5)]
ICHKI_BIR_TOMONLI = [(3, 5), (4, 6)]


def sakkiz_burchak(raqam, qiymat):
    """19.1-rasmda bitta burchak qiymatidan (gradus) sakkizta burchakni topadi: {raqam: gradus}.

    Qoidalar: vertikal, mos va ichki almashinuvchi burchaklar teng, ichki bir tomonli burchaklar
    yig'indisi 180 ga teng. Natija rasmga mos bo'lishi (o'tkir guruh 90 dan kichik) tekshiriladi.
    """
    q = {raqam: qiymat}
    ozgardi = True
    while ozgardi:
        ozgardi = False
        for a, b in VERTIKAL + MOS + ICHKI_ALMASHINUVCHI:
            for x, y in ((a, b), (b, a)):
                if x in q and y not in q:
                    q[y] = q[x]
                    ozgardi = True
        for a, b in ICHKI_BIR_TOMONLI + [(1, 2), (5, 6)]:  # (1, 2), (5, 6) — qo'shni burchaklar
            for x, y in ((a, b), (b, a)):
                if x in q and y not in q:
                    q[y] = 180 - q[x]
                    ozgardi = True
    assert len(q) == 8
    assert all(q[n] < 90 for n in OTKIR) and all(q[n] > 90 for n in OTMAS), q
    return q


# 19.5-rasm (S19.1): l || m; P nuqta l da, Q va R nuqtalar m da.
# l ning chap nuri bilan PQ orasidagi burchak, R dagi tashqi burchak (m ning o'ng nuri bilan RP orasida).
SAT_CHAP = 48
SAT_TASHQI = 115

if __name__ == "__main__":
    q = sakkiz_burchak(2, KESUVCHI_QIYALIGI)
    assert q[1] == 180 - KESUVCHI_QIYALIGI
