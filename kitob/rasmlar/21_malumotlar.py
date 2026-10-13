"""21-bob ma'lumotlari: chizmalar (rasmlar/21_*.py) va javoblar (javoblar/21.py) shu fayldan o'qiydi.

Bu fayl yig'ishda skript sifatida ham ishga tushiriladi; u hech narsa chizmaydi.
"""
from fractions import Fraction as F

# 21.2-rasm a): devorga suyalgan narvon (m) va uning yer bilan hosil qilgan burchagi (gradus)
NARVON_UZUNLIGI = 8
NARVON_BURCHAGI = 60

# 21.2-rasm b): pandus (m) — gorizontal uzunlik, balandlik, qiya sirt uzunligi (matn sifatida)
PANDUS_GORIZONTAL = "2.4"
PANDUS_BALANDLIK = "0.7"
PANDUS_UZUNLIK = "2.5"

if __name__ == "__main__":
    g, b, u = (F(x) for x in (PANDUS_GORIZONTAL, PANDUS_BALANDLIK, PANDUS_UZUNLIK))
    assert g ** 2 + b ** 2 == u ** 2          # Pifagor teoremasi
