# "Matematika poydevori" kitobi: bajarish rejasi

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 21 bob, kirish va yakuniy qismlardan iborat to'liq kitobni Markdown manbalardan yozish va undan tahrirlanadigan Word hamda PDF yig'ish.

**Architecture:** Har bob `kitob/boblar/` da Pandoc Markdown fayl. Mashqlar javobi atribut sifatida yoziladi va Python hisob-kitobi bilan solishtiriladi (`tekshir.py`). `yigish.py` tekshiruvdan o'tgach Pandoc (Lua filtr bilan) `.docx` yasaydi, LibreOffice UNO orqali mundarijani yangilab PDF chiqaradi. Lug'at va javoblar bo'limi boblardan avtomatik hosil qilinadi.

**Tech Stack:** Pandoc 3.1.3, Lua filtr, LibreOffice 24.2 (UNO, `python3 -c "import uno"` ishlaydi), Python 3 (`fractions`, `pytest`, `matplotlib` — oxirgi ikkalasi `pip install` bilan), `pdftotext`.

**Spec:** `docs/superpowers/specs/2026-10-12-matematika-poydevori-design.md`

## Global Constraints

- Nom: "Matematika poydevori — SAT'ga tayyorgarlik uchun"; muallif: Sunnatulla Xolmurodov.
- Tushuntirish o'zbek lotin yozuvida; har yangi atama birinchi uchraganda yonida inglizchasi kursivda: *kasr (fraction)*. Apostrof: `'` (o', g', ').
- SAT ko'prigi savollari faqat inglizcha.
- Har bob bo'limlari, shu tartibda va shu sarlavhalar bilan: `## Bu bobda`, `## Yangi so'zlar`, `## Tushuntirish`, `## Ko'p uchraydigan xatolar`, `## Mashqlar`, `## SAT ko'prigi`.
- Har bobda: 3–5 yechilgan misol, 20–30 mashq (A, B, C darajalar, har darajada kamida 5 ta), 3–5 SAT ko'prigi savoli.
- Barcha matn va masalalar yangidan yoziladi; SAT/College Board yoki darslik materiali ko'chirilmaydi va qayta yozilmaydi.
- Har bir mashq va SAT savolining javobi Python bilan hisoblanadi; tekshiruvdan o'tmagan kitob yig'ilmaydi.
- Formulalar `$...$` LaTeX ichida yoziladi (Word'da tahrirlanadigan tenglama bo'lishi uchun), Unicode belgilarda emas.
- Chiqish: `kitob/chiqish/matematika-poydevori.docx` va `.pdf`; `chiqish/` git'ga kiritilmaydi, muallifga fayl sifatida yuboriladi.

## Review Focus

1. **Javob formati mos kelmasligi** — `7/12` va `0.5833`, `-3/4` va `−3/4`: tekshiruv bitta kanonik formatni talab qiladi va mos kelmasa aniq xabar beradi (Task 1 testlari).
2. **Bo'sh mundarija PDF'da** — Pandoc TOC maydoni yangilanmasa PDF'da mundarija bo'sh chiqadi: PDF matnida har bob nomi mundarijada bor (Task 1 testi).
3. **Formula xom matn bo'lib qolishi** — `$`, `\frac` Word matnida ko'rinsa: docx'da `$` va `\frac` yo'q, OMML tenglamalar bor (Task 1 testi).
4. **Javob o'quvchiga ko'rinib qolishi** — `javob` atributi mashq ostida chiqmasligi kerak, faqat kitob oxirida (Task 1 testi).
5. **Lug'atda takror yoki apostrof farqi** — `o'nli` va `oʻnli` ikki marta chiqmasin (Task 1 testi).

---

## Fayl tuzilishi

```
kitob/
  boblar/00-kirish.md            muallifdan so'z, foydalanish, diagnostik test
  boblar/01-butun-sonlar.md ... boblar/21-trigonometriya.md
  boblar/99-yakuniy-test.md
  javoblar/NN.py                 har bob uchun JAVOBLAR lug'ati (00 va 99 ham)
  rasmlar/NN_nom.py              matplotlib chizmalari -> rasmlar/chiqish/NN_nom.png
  shablon/reference.docx         Word uslublari
  shablon/filtr.lua              mashq raqamlash, javobni olib tashlash, bob oldidan bet uzilishi
  tekshir.py                     javob va tuzilish tekshiruvi
  yigish.py                      to'liq yig'ish
  tests/                         pytest
  chiqish/                       (gitignore)
```

### Mashq va javob interfeysi (barcha vazifalar uchun)

Boblarda mashq:

```markdown
::: {.mashq #m3-12 daraja="B" javob="7/12"}
$\frac{1}{3} + \frac{1}{4}$ ni hisoblang.
:::
```

SAT savoli: `::: {.sat #s3-2 javob="C"}` va savol ichida `A)`…`D)` variantlar ro'yxati; bo'sh javobli (grid-in) savolda `javob` qiymat.

`javoblar/03.py`:

```python
from fractions import Fraction as F
JAVOBLAR = {"m3-12": F(1, 3) + F(1, 4), "s3-2": "C", ...}
```

Kanonik format `fmt(qiymat) -> str`: `int` → `"7"`; `Fraction` → qisqartirilgan `"7/12"`, maxraji 1 bo'lsa `"7"`, manfiy `"-7/12"`; `Decimal`/`float` → ortiqcha nolsiz `"2.5"`; `str` → o'zgarishsiz. Mashq `id` formati: `m<bob>-<n>`, `s<bob>-<n>`, kirish `d-<n>`, yakuniy `y-<n>`.

Yangi so'zlar jadvali: `| O'zbekcha | English |` sarlavhali pipe jadval.

---

### Task 1: Yig'ish tizimi

**Files:**
- Create: `kitob/tekshir.py`, `kitob/yigish.py`, `kitob/shablon/filtr.lua`, `kitob/shablon/reference.docx`, `kitob/.gitignore`, `kitob/tests/test_tekshir.py`, `kitob/tests/test_yigish.py`, `kitob/tests/namuna/` (kichik namunaviy bob va javoblar)

**Interfaces:**
- Produces:
  - `tekshir.fmt(value) -> str`
  - `tekshir.mashqlar(md_text: str) -> list[Mashq]`, `Mashq = (id: str, tur: "mashq"|"sat", daraja: str|None, javob: str)`
  - `tekshir.javoblarni_tekshir(boblar_dir: Path, javoblar_dir: Path) -> list[str]` (xatolar ro'yxati; bo'sh = o'tdi). Xato turlari: javob mos emas (`m3-12: kitobda "7/12", hisobda "5/12"`), hisobda yo'q, kitobda yo'q, takroriy id.
  - `tekshir.tuzilishni_tekshir(md_text: str, fayl: str) -> list[str]` — Global Constraints'dagi sarlavhalar tartibi va sonlar (00, 99 fayllar uchun o'tkazib yuboriladi).
  - `yigish.yigish(ildiz: Path) -> tuple[Path, Path]` — docx va pdf yo'llari; tekshiruv xatosi bo'lsa `SystemExit(1)` va xatolarni chiqaradi. CLI: `python3 kitob/yigish.py`.
  - Avtomatik bo'limlar: `Lug'at` (barcha "Yangi so'zlar" jadvallaridan, apostroflar `'` ga keltirilib, takrorsiz, o'zbekcha alifbo tartibida) va `Javoblar` (bob bo'yicha, `id` raqami bilan).

- [ ] **Step 1:** `pip install pytest matplotlib` va `kitob/tests/namuna/` ga 2 ta mashq, 1 SAT savoli, lug'at jadvali bo'lgan kichik bob yozing.
- [ ] **Step 2: Testlarni yozing** — `test_tekshir.py`:
  - `test_fmt`: `fmt(F(14,24)) == "7/12"`, `fmt(F(-3,4)) == "-3/4"`, `fmt(F(6,3)) == "2"`, `fmt(Decimal("2.50")) == "2.5"`, `fmt(7) == "7"`, `fmt("C") == "C"`.
  - `test_mos_kelmaslik_aniqlanadi`: kitobda `7/12`, hisobda `F(5,12)` → xato matnida `m3-12`, `7/12`, `5/12` bor.
  - `test_yetishmagan_va_ortiqcha`: hisobda yo'q id va kitobda yo'q id ikkalasi ham xato.
  - `test_takroriy_id`.
  - `test_tuzilish`: sarlavha tushib qolsa yoki 19 ta mashq bo'lsa xato.
- [ ] **Step 3:** `test_yigish.py` (namuna bob bilan vaqtinchalik ildizda yig'ish):
  - docx `word/document.xml` da `<m:oMath` bor, matnda `$` va `\frac` yo'q.
  - docx matnida mashq ostida `javob` qiymati yo'q, `Javoblar` bo'limida bor.
  - PDF (`pdftotext`) mundarijasida namuna bob sarlavhasi va bet raqami bor.
  - `Lug'at` da `o'nli` va `oʻnli` yozilgan ikki jadvaldan bitta qator.
  - Muqovada nom va "Sunnatulla Xolmurodov".
  - Noto'g'ri javobli namuna bilan `yigish` `SystemExit` beradi va docx yaratmaydi.
- [ ] **Step 4:** Testlar FAIL ekanini ko'ring: `python3 -m pytest kitob/tests -q`.
- [ ] **Step 5:** Amalga oshiring. Lua filtr: `.mashq`/`.sat` div'larni `**3.12.**` (bob.raqam) bilan boshlanadigan paragrafga aylantiradi va atributlarni olib tashlaydi; har `#` sarlavhadan oldin OpenXML bet uzilishi. `reference.docx`: `pandoc -o custom-reference.docx --print-default-data-file reference.docx` dan olib, shriftlar (asosiy matn serif 11pt, sarlavhalar sans), A4, bet raqami pastda. Muqova: Pandoc `title`, `subtitle`, `author` metama'lumoti. PDF: UNO skripti hujjatni ochib `getDocumentIndexes()` ning har birini `update()` qiladi va `writer_pdf_Export` bilan saqlaydi. Rasmlar: `rasmlar/*.py` har biri yig'ishda ishga tushiriladi.
- [ ] **Step 6:** `python3 -m pytest kitob/tests -q` — hammasi PASS.
- [ ] **Step 7:** Commit: `git add kitob && git commit -m "Add book build: answer checker, Word/PDF pipeline"`

### Task 2–7: Boblar

Har bir bob vazifasi bir xil qadamlardan iborat:

- [ ] **Step 1:** `javoblar/NN.py` da bobning barcha mashq va SAT savollari javoblarini hisoblovchi kod yozing (javob qo'lda yozilmaydi, ifodadan hisoblanadi; masalan foiz masalasi `Decimal(240) * Decimal("0.15")`).
- [ ] **Step 2:** `boblar/NN-nom.md` ni Global Constraints'dagi tuzilishda yozing; har mashq `javob` atributi Step 1 dagi qiymatning `fmt` ko'rinishi. Bob boshida `# NN. Sarlavha` va birinchi qatorda *SAT bo'limi:* nomi.
- [ ] **Step 3:** Kerakli chizmalarni `rasmlar/NN_*.py` da yozing va bobda `![...](rasmlar/chiqish/NN_*.png)` bilan qo'ying.
- [ ] **Step 4:** `python3 kitob/tekshir.py` — xatosiz. Keyin har yechilgan misolni qo'lda bir marta qayta hisoblab, matndagi oraliq qadamlar ham to'g'riligini tekshiring.
- [ ] **Step 5:** `python3 kitob/yigish.py` — docx va pdf hosil bo'ladi.
- [ ] **Step 6:** Commit.

| Task | Boblar | SAT bo'limi | Chizmalar |
| --- | --- | --- | --- |
| 2 | 01 Butun sonlar va amallar tartibi; 02 Bo'linish: tub sonlar, EKUB, EKUK; 03 Kasrlar; 04 O'nli kasrlar va yaxlitlash | Problem-Solving & Data Analysis / Algebra | son o'qi (01) |
| 3 | 05 Nisbat, proporsiya, o'lchov birliklari; 06 Foizlar; 07 Darajalar va ildizlar | Problem-Solving & Data Analysis / Advanced Math | — |
| 4 | 08 Algebraik ifodalar; 09 Chiziqli tenglamalar; 10 Tengsizliklar; 11 Matnli masalani tenglamaga aylantirish | Algebra | son o'qida tengsizlik (10) |
| 5 | 12 Koordinatalar tekisligi va chiziqli funksiya; 13 Tenglamalar sistemasi; 14 Ko'phadlar va ko'paytuvchilarga ajratish; 15 Kvadrat tenglamalarga kirish | Algebra / Advanced Math | to'g'ri chiziq, kesishish nuqtasi, parabola |
| 6 | 16 O'rta qiymat, mediana, moda; 17 Jadval va grafiklarni o'qish; 18 Ehtimollik asoslari | Problem-Solving & Data Analysis | ustunli diagramma, chiziqli grafik, nuqtali diagramma |
| 7 | 19 Burchaklar, uchburchaklar, Pifagor teoremasi; 20 Perimetr, yuz, hajm, aylana; 21 Trigonometriyaga kirish | Geometry & Trigonometry | uchburchaklar, aylana, to'g'ri burchakli uchburchakda sin/cos/tan |

Ichki tartib: bob ichida faqat oldingi boblardagi tushunchalar ishlatiladi (masalan 06 Foizlar 03–05 ga tayanadi, 09 dan foydalanmaydi).

### Task 8: Kirish va yakuniy qism

**Files:** `boblar/00-kirish.md`, `javoblar/00.py`, `boblar/99-yakuniy-test.md`, `javoblar/99.py`

- [ ] **Step 1:** `00-kirish.md`: "Muallifdan" (muallif nomidan qisqa so'z, muallif o'zi tahrirlaydi), "Kitobdan qanday foydalanish" (bob tuzilishi, A/B/C darajalar, SAT ko'prigi), "Diagnostik test": 21 bobning har biridan 2 tadan, jami 42 savol (`d-1`…`d-42`), va natija jadvali: qaysi savollar xato bo'lsa qaysi bobdan boshlash.
- [ ] **Step 2:** `99-yakuniy-test.md`: 40 savol (`y-1`…`y-40`), 4 bo'lim mutanosib (I: 12, II: 14, III: 7, IV: 7), yarmi SAT uslubida inglizcha.
- [ ] **Step 3:** `javoblar/00.py`, `javoblar/99.py`; `tekshir.py` va `yigish.py` xatosiz.
- [ ] **Step 4:** Commit.

### Task 9: Yakuniy tekshiruv va topshirish

- [ ] **Step 1:** `python3 -m pytest kitob/tests -q` va `python3 kitob/yigish.py` — xatosiz.
- [ ] **Step 2:** PDF'ni `pdftotext` bilan tekshiring: mundarijada 21 bob, `Lug'at`, `Javoblar`; bet soni 150–300; `$`, `\frac`, `javob=` yo'q.
- [ ] **Step 3:** PDF'ning muqova, mundarija, bitta bob boshi va bitta chizmali betini rasmga aylantirib (`pdftoppm -r 60`) ko'zdan kechiring: matn chiqib ketmagan, formulalar va rasmlar joyida.
- [ ] **Step 4:** Commit va push; `.docx` va `.pdf` ni muallifga yuboring.
