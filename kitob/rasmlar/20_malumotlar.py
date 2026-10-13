"""20-bob ma'lumotlari: chizmalar (rasmlar/20_*.py) va javoblar (javoblar/20.py) shu fayldan o'qiydi.

Bu fayl yig'ishda skript sifatida ham ishga tushiriladi; u hech narsa chizmaydi.
"""

# 20.2-rasm a): L shaklidagi shakl (sm). To'g'ri to'rtburchakning o'ng yuqori burchagidan
# kesik_eni x kesik_boyi o'lchamli to'g'ri to'rtburchak kesib olingan.
L_ENI, L_BOYI = 10, 8
L_KESIK_ENI, L_KESIK_BOYI = 4, 3
# rasmda yozilgan tomonlar: pastki (L_ENI), chap (L_BOYI), yuqori chap qism, kesikning tik tomoni
L_YUQORI = L_ENI - L_KESIK_ENI

# 20.2-rasm b): sport maydonchasi — to'g'ri to'rtburchak va ikki yarim doira (m)
STADION_UZUNLIK = 30      # to'g'ri qismining uzunligi
STADION_ENI = 20          # eni = yarim doiralar diametri

# 20.4-rasm (S20.2): to'g'ri to'rtburchak ichida ikki teng doira
SAT_ENI, SAT_BOYI = 16, 8
SAT_RADIUS = 4

if __name__ == "__main__":
    assert 0 < L_KESIK_ENI < L_ENI and 0 < L_KESIK_BOYI < L_BOYI
    # doiralar to'g'ri to'rtburchakka va bir-biriga tegib turadi
    assert 2 * SAT_RADIUS == SAT_BOYI and 4 * SAT_RADIUS == SAT_ENI
