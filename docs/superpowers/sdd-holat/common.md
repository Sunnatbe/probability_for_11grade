# Umumiy kontekst (barcha vazifalar uchun majburiy)

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


## Controller rulings (plan ustidan majburiy)
Ruling R1: worked examples are `::: {.misol}` divs (no answer attr), rendered with a bold "Misol N." label; tuzilishni_tekshir counts 3–5 of them — spec requires 3–5 worked examples and the checker needs a marker — if wrong: one regex to change.
Ruling R2: the docx test checks for unrendered LaTeX (any `\word` command, `^{`, `_{`, or `$` followed by a letter/backslash) instead of any `$`; currency is written `\$15` in markdown and is allowed — SAT items naturally use dollars — if wrong: a test regex.
Ruling R3: yigish.py inserts a level-1 part title page before chapters 01, 08, 16, 19 ("I qism. Sonlar va arifmetika", "II qism. Algebra asoslari", "III qism. Ma'lumotlar va ehtimollik", "IV qism. Geometriya") — spec's table of contents is grouped into these parts — if wrong: one mapping in yigish.py.
Ruling R4: numbering label is "<bob>.<n>" for m/s ids, "<n>" for d/y ids; Javoblar section groups by file in order 00, 01–21, 99 — if wrong: filter tweak.
Ruling R5: yigish runs pandoc with `--resource-path=kitob` (cwd-independent) — if wrong: images missing, caught by Task 9 visual check.
Ruling R6: SAT ko'prigi items are labelled "S<bob>.<n>." (body and Javoblar), mashq stay "<bob>.<n>."
Ruling R7: avoid `\text`, `\qquad`, a lone `$=$`, and `\not` in formulas (LibreOffice drops/garbles them in the PDF; use `\neq`, plain words outside math). Do not re-list an Uzbek term from an earlier chapter's Yangi so'zlar with a different English gloss. Powers like 2^3 were already used in ch01–02 with a pointer to chapter 07.

## Lessons from earlier chapter reviews (apply to every chapter)
- No answer leaks: a mashq/SAT item must not reuse the numbers of a `.misol` or of a format example in the intro text (the reviewer found two). Pick format examples that are no answer anywhere in the chapter.
- Teach every notation before an item uses it (e.g. implicit multiplication 3(4−9) is now taught in ch01).
- Word problems: say "butun …ning" vs "qolgan …ning" explicitly so there is only one reading.
- When a rule has an edge case an exercise depends on (rounding carry over 9, three-number EKUB), show it in the text.
- MC SAT letters: derive via a helper that asserts the correct value occurs exactly once among the options (see javoblar/01.py `harf`).
- Chapters 01–04 exist; read their Yangi so'zlar tables before adding terms, and reuse their style (tone, misol layout).
Ruling R10 (extends R7): no math span may start with `=` (e.g. `$= 1000$` prints "¿" in the PDF); keep the whole equation in one span.
- A `javob` may now contain LaTeX with braces (e.g. `javob="\frac{3}{4}"`, `javob="x^{2}+1"`); it is rendered as an equation in Javoblar. Do not write set answers with bare braces like {1,2,3} (they lose their braces); write e.g. `1, 2, 3` instead. Check with `python3 kitob/tekshir.py` (fast) before `python3 kitob/yigish.py`.
- Gloss every symbol on first use, not only terms (≠ and ≥ are now glossed in ch07; < > ≤ get their full treatment in ch10). If a rule list has a condition, make sure every bullet under it obeys it.
- Part I (ch01–07) is complete; Part II chapters build on it and may refer back ("3-bobda ko'rganimizdek").
Ruling R11 (extends R7/R10): no math span holding only `<` or `>` (prints "¿"); write thousands as `2\,500` (not `2{,}500`). Answer formats from ch08–11 to keep: expressions highest degree first, letters alphabetical, constant last; solved formulas as one fraction (`$x = \frac{y + 10}{4}$`); special cases "yechimi yo'q" / "cheksiz ko'p yechim". A polynomial helper `Ifoda` can be copied from javoblar/08.py.
Ruling R12: literal/expression answers in javob use strict canonical order — total degree highest first, letters alphabetical (case-insensitive), constant last, leading negative allowed (e.g. `-2x + 18`, `\frac{-2a + P}{2}`, slope-intercept `-\frac{2}{3}x + 6`); a negative single-term fraction is `-\frac{x}{2}`. Format examples in the text follow the same order. Use the `Ifoda` helper from javoblar/08.py (after the Task 4 fix it implements exactly this).
Ruling R13 (extends R7): write systems as two stacked `$$` lines, never `\begin{cases}` or `\left\{` (prints a bracket on both sides). In matplotlib labels write negatives after a comma in braces: `$(0, {-3})$`. ch12 introduced f(x) notation at a basic level; ch15 did not cover completing the square.
- Leak guard: each javoblar/NN.py since ch12 has a `MATNDAGI` set of every number/expression printed in the text (misol answers, error-example results, format examples) and asserts no mashq OR SAT answer is in it. Do the same (see javoblar/14.py).
- Part II (ch08–15) is complete; ch12 introduced f(x) and coordinate-plane figures (reuse the style of rasmlar/12_*.py).
Ruling R14 (extends R7): no `\mathrm{word}` inside math spans (prints letter-spaced in the PDF; write words outside math). A prose line inside a div that starts with `b) …` becomes a list item in the PDF — avoid line-initial a)/b) in prose. rasmlar/17_malumotlar.py is a data module (not a figure).
Ruling R15: independent events = "mustaqil hodisalar", dependent = "bog'liq hodisalar" (the author's own site uses these terms); never "bog'liqsiz"/"bog'liqmas".
- Leak guard must also hold values printed in misols/error examples as readings (not just results); check the guard asserts case-insensitively where it checks words.
- Part III (ch16–18) is complete: ch16 mean/median/mode (+ spread comparison), ch17 tables/graphs/scatterplots (shared data module rasmlar/17_malumotlar.py drives figures AND answers), ch18 probability (fair coins/dice assumption stated; mustaqil/bog'liq hodisalar; nisbiy chastota).
- Figures: keep ONE data source per figure used by both the figure script and javoblar (see rasmlar/17_malumotlar.py).
Ruling R17: expressions mixing a number and π are written number first (e.g. 60 + 20π) as in SAT answer choices; R12 constant-last applies to polynomials in letters only.
