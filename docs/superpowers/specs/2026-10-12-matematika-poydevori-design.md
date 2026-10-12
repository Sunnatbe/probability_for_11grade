# "Matematika poydevori — SAT'ga tayyorgarlik uchun": kitob rejasi

**Muallif:** Sunnatulla Xolmurodov
**Sana:** 2026-10-12

## Maqsad

O'quvchilar SAT Math'ga tayyorlanishdan oldin asosiy matematikani o'rganadigan, muallifning shaxsiy kitobi. Muallif SAT'ga tayyorlaydigan o'qituvchi. Uning o'quvchilari ko'pincha arifmetikadan zaif bo'ladi, shuning uchun kitob ularni sonlardan SAT darajasidagi algebra, ma'lumotlar tahlili va geometriya asoslarigacha olib boradi.

**Muvaffaqiyat mezonlari:**
- Kitobni o'qib, mashqlarni bajargan o'quvchi SAT'ga tayyorgarlik kursini boshlay oladi.
- O'quvchi SAT'dagi inglizcha matematik atamalarni taniydi.
- Kitobdagi barcha masalalar va matnlar yangidan yozilgan, boshqa manbalardan ko'chirilmagan.
- Barcha javoblar hisoblab tekshirilgan.
- Muallif Word faylini o'zi tahrirlay oladi, chop eta oladi yoki nashr qila oladi.

## Kelishilgan qarorlar

| Masala | Qaror |
| --- | --- |
| Til | Tushuntirishlar o'zbekcha (lotin yozuvida). Har bir yangi atama yonida inglizchasi: *kasr (fraction)*. Har bob oxirida SAT uslubidagi savollar inglizcha. |
| Boshlang'ich daraja | Arifmetikadan boshlanadi |
| Format | Word (.docx) asosiy, undan PDF olinadi |
| Tuzilish | Mavzular oddiydan murakkabga qarab ketadi; har bob SAT'ning qaysi bo'limiga kerakligi ko'rsatiladi |
| Muqova | Nom va muallif ismi yuqoridagidek |

## Mundarija

**Kirish:** muallifdan so'z, kitobdan qanday foydalanish, diagnostik test.

**I. Sonlar va arifmetika** *(Numbers & Arithmetic)*
1. Butun sonlar va amallar tartibi *(integers, order of operations)*
2. Bo'linish: tub sonlar, EKUB, EKUK *(primes, GCF, LCM)*
3. Kasrlar *(fractions)*
4. O'nli kasrlar va yaxlitlash *(decimals, rounding)*
5. Nisbat, proporsiya, o'lchov birliklari *(ratio, proportion, units)*
6. Foizlar *(percent, increase/decrease)*
7. Darajalar va ildizlar *(exponents, roots)*

**II. Algebra asoslari** *(Algebra)*

8. Algebraik ifodalar *(expressions)*
9. Chiziqli tenglamalar *(linear equations)*
10. Tengsizliklar *(inequalities)*
11. Matnli masalani tenglamaga aylantirish *(word problems)*
12. Koordinatalar tekisligi va chiziqli funksiya *(slope, y = mx + b)*
13. Tenglamalar sistemasi *(systems of equations)*
14. Ko'phadlar va ko'paytuvchilarga ajratish *(polynomials, factoring)*
15. Kvadrat tenglamalarga kirish *(quadratics)*

**III. Ma'lumotlar va ehtimollik** *(Problem-Solving & Data Analysis)*

16. O'rta qiymat, mediana, moda *(mean, median, mode)*
17. Jadval va grafiklarni o'qish *(tables & graphs)*
18. Ehtimollik asoslari *(probability)*

**IV. Geometriya** *(Geometry & Trigonometry)*

19. Burchaklar, uchburchaklar, Pifagor teoremasi
20. Perimetr, yuz, hajm, aylana
21. Trigonometriyaga kirish *(sin, cos, tan)*

**Yakun:** yakuniy test, o'zbekcha–inglizcha lug'at, barcha mashqlarning javoblari.

Taxminiy hajm: 200–250 bet.

## Bob tuzilishi

Har bir bob bir xil tartibda yoziladi:

1. **Bu bobda:** 2–4 ta o'quv maqsadi va bob SAT'ning qaysi bo'limiga kerakligi.
2. **Yangi so'zlar:** o'zbekcha atama va inglizcha tarjimasi.
3. **Tushuntirish:** qoidalar va 3–5 ta yechib ko'rsatilgan misol, har biri bosqichma-bosqich.
4. **Ko'p uchraydigan xatolar:** noto'g'ri yechim va uning to'g'risi.
5. **Mashqlar:** uch daraja (A — oson, B — o'rta, C — qiyin), har bob uchun jami 20–30 ta.
6. **SAT ko'prigi:** SAT uslubida inglizcha 3–5 ta savol, tanlov javobli yoki javobni o'zi yozadigan.

Javoblar kitob oxirida, bob va mashq raqami bo'yicha beriladi.

## Mualliflik

Barcha tushuntirishlar, misollar va masalalar shu kitob uchun yangidan yoziladi. SAT, College Board yoki boshqa darslik materiallari ko'chirilmaydi va qayta yozilmaydi. SAT ko'prigi savollari faqat SAT savollarining **uslubiga** (format, til, qiyinlik) mos tuziladi.

## Ishlab chiqarish

**Fayllar** (`kitob/` papkasida):
- `boblar/NN-nom.md`: har bob alohida fayl. Pandoc Markdown formatida, formulalar `$...$` ichida LaTeX ko'rinishida.
- `javoblar/NN-nom.py`: har bobning javoblarini hisoblaydigan Python fayli.
- `shablon/reference.docx`: Word uslublari (shrift, sarlavhalar, bet raqamlari).
- `yigish.sh`: hamma narsani yig'adigan buyruq.
- Natija: `chiqish/matematika-poydevori.docx` va `chiqish/matematika-poydevori.pdf`.

**Yig'ish:**
1. Javoblar tekshiruvi: har bir bobdagi javob Python bilan hisoblangan javobga solishtiriladi. Mos kelmasa, yig'ish to'xtaydi va qaysi mashq xato ekani aytiladi.
2. Pandoc boblarni bitta `.docx` ga yig'adi. Formulalar Word'ning tahrirlanadigan tenglamalariga aylanadi. Muqova, mundarija va bet raqamlari ham qo'shiladi.
3. LibreOffice `.docx` dan PDF oladi.

Chizmalar (koordinatalar tekisligi, grafiklar, geometrik shakllar) Python'da (matplotlib) chiziladi. Shunda ular ham manba fayllardan qayta chizilishi mumkin.

## Ish tartibi

1. **Namuna:** 3-bob (Kasrlar) to'liq yoziladi, Word va PDF ko'rinishida muallifga beriladi.
2. **Fikr:** muallif tushuntirish darajasi, misollar soni, dizayn va atamalar haqida fikr bildiradi. Uslub kelishib olinadi.
3. **Asosiy qism:** qolgan boblar bo'lim-bo'lim yoziladi (I → II → III → IV). Har bo'lim tugagach, muallifga yangi Word/PDF beriladi.
4. **Yakun:** diagnostik test, yakuniy test, lug'at, javoblar, muallifdan so'z.

Har bir qadam git'ga saqlanadi.

## Doiradan tashqarida

- Kitobni nashriyotga topshirish, ISBN olish, sotish.
- Veb-sayt yoki interaktiv versiya. Keyinroq alohida loyiha sifatida qilinishi mumkin.
- To'liq SAT amaliy testlari. Kitob SAT'dan oldingi poydevor uchun.
