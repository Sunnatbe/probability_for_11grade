"""17-bob ma'lumotlari: chizmalar (rasmlar/17_*.py) va javoblar (javoblar/17.py) shu fayldan o'qiydi.

Chizma va javob bir xil ro'yxatdan olinadi, shuning uchun ular bir-biridan farq qila olmaydi.
Bu fayl yig'ishda skript sifatida ham ishga tushiriladi; u hech narsa chizmaydi.
"""

# Ustunli diagramma: maktab kutubxonasidan oylar bo'yicha berilgan kitoblar soni
OYLAR = ["Sentabr", "Oktabr", "Noyabr", "Dekabr", "Yanvar", "Fevral"]
KITOBLAR = [120, 150, 140, 90, 110, 170]

# Chiziqli grafik: bahor kunida havo harorati (°C), har 2 soatda o'lchangan
SOATLAR = [6, 8, 10, 12, 14, 16, 18]
HARORAT = [2, 6, 12, 16, 18, 14, 8]

# Nuqtali diagramma: 16 o'quvchining testga tayyorgarlik vaqti (soat) va test bali
NUQTALAR = [
    (1, 55), (2, 60), (2, 50), (3, 65), (4, 50), (4, 70), (5, 75), (5, 65),
    (6, 80), (6, 70), (7, 90), (7, 75), (8, 80), (9, 95), (9, 85), (10, 100),
]
# eng mos to'g'ri chiziq (line of best fit): y = K * x + B
K, B = 5, 45


def bashorat(x):
    return K * x + B


if __name__ == "__main__":
    assert len(OYLAR) == len(KITOBLAR) and len(SOATLAR) == len(HARORAT)
    # chiziq haqiqatan ham eng kichik kvadratlar chizig'iga yaqin bo'lsin
    n = len(NUQTALAR)
    ox = sum(x for x, _ in NUQTALAR) / n
    oy = sum(y for _, y in NUQTALAR) / n
    k = sum((x - ox) * (y - oy) for x, y in NUQTALAR) / sum((x - ox) ** 2 for x, _ in NUQTALAR)
    assert abs(k - K) < 0.2 and abs((oy - k * ox) - B) < 1, (k, oy - k * ox)
    assert all(y != bashorat(x) for x, y in NUQTALAR)  # hech bir nuqta chiziq ustida emas
