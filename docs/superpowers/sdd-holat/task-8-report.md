# Task 8 report: Kirish va yakuniy test

Status: DONE (BASE a9638d7; one commit "Add kirish and yakuniy test (Task 8)").

## Files
- `kitob/boblar/00-kirish.md` (new): `# Kirish`; `## Muallifdan` (author's voice, signed *Sunnatulla Xolmurodov*); `## Kitobdan qanday foydalanish` (### Kitob tuzilishi, Har bob qanday tuzilgan (6 sections), A, B, C darajalar, Raqamlar va javoblar, SAT haqida qisqacha, Diagnostik test, O'qish rejasi, Xatolar daftari); `## Diagnostik test` (4 `###` part groups, 42 items, `### Natijalar jadvali` with 2 pipe tables + "Qayerdan boshlash kerak?" rule).
- `kitob/boblar/99-yakuniy-test.md` (new): `# Yakuniy test`, intro (65 min, calculator as in SAT), `## I/II/III/IV bo'lim` (each with a one-line English word gloss like the SAT ko'prigi intros), `## Natijani baholash` (score table, per-part rule, chapter -> question map table).
- `kitob/javoblar/00.py`, `kitob/javoblar/99.py` (new). They reuse the chapters' own formatters via `runpy` (14.py Ifoda/kopaytma/d, 15.py yech/koef/nuqta/uchi, 19.py gr, 20.py Pi/pi), so answer text is formatted exactly as in the chapters. All values computed from expressions (Fraction/Decimal/int, Kramer for systems, enumeration for dice/integer counts, quantize for rounding); MC letters via `harf` asserting uniqueness (radical options compared by their squares, factor options by the factor theorem, inequality option by range test).
- No tooling or chapter files edited.

## Counts
- Diagnostic: 42 items `d-1`..`d-42`, 2 per chapter in order, daraja A then B for each pair. 41 grid-in + 1 MC (d-14, answer C).
- Final: 40 items `y-1`..`y-40`; I 12 (y-1..12), II 14 (y-13..26), III 7 (y-27..33), IV 7 (y-34..40). English SAT-style 20 (6/7/4/3 per part): y-1,4,5,8,10,12,14,16,18,20,21,24,26,28,30,32,33,35,37,40; Uzbek 20. Daraja: English "C", Uzbek "B". 8 MC: y-1 B, y-4 D, y-12 A, y-20 C, y-24 B, y-33 D, y-35 A, y-37 C (2 per letter).
- 99.py asserts the English set and part sizes against the md (an English item is detected by what/which/how).

## Chapter -> question map
| Bob | Diagnostik | Yakuniy |
|---|---|---|
| 1 | 1, 2 | 1 |
| 2 | 3, 4 | 2 |
| 3 | 5, 6 | 3, 4 |
| 4 | 7, 8 | 5, 6 |
| 5 | 9, 10 | 7, 8 |
| 6 | 11, 12 | 9, 10 |
| 7 | 13, 14 | 11, 12 |
| 8 | 15, 16 | 13 |
| 9 | 17, 18 | 14, 15 |
| 10 | 19, 20 | 16 |
| 11 | 21, 22 | 17, 18 |
| 12 | 23, 24 | 19, 20 |
| 13 | 25, 26 | 21, 22 |
| 14 | 27, 28 | 23, 24 |
| 15 | 29, 30 | 25, 26 |
| 16 | 31, 32 | 27, 28 |
| 17 | 33, 34 | 29, 30 |
| 18 | 35, 36 | 31, 32, 33 |
| 19 | 37, 38 | 34, 35 |
| 20 | 39, 40 | 36, 37, 38 |
| 21 | 41, 42 | 39, 40 |

## Answers (as printed in Javoblar)
- Kirish: -3; 3; 18; 56; 13/30; 6; 0.042; 30; 240000; 54; 63; 72000; 9; C; 22; 5x + 3; 8; 14; x < -3; 5; 25; 10; -2; y = 3x - 5; (3, 7); 5000; x^2 - 2x - 24; (x - 6)(x + 5); x = -5; x = 5; x = 2; x = 7; 6.5; 95; 42%; 260; 2/3; 1/12; 55°; 24; 49π; 180; 52; 11/60.
- Yakuniy: B; soat 23:00; 42; D; 8.93; 0.714; 350000; 21.6; 10%; 120; 128; A; 5a + 5b; 13; -1; 240; 360; 26; (2, 0); C; 2.2; -6; 3x^2 - 12x + 10; B; x = -1 - 2√2; x = -1 + 2√2; -9; 29; 1.85; 62.5%; 12; 5/14; 9/16; D; 36°; A; 280 - 9π; C; 11; 66; 40/9.
- Every answer hand-verified as well as computed.

## Guards
- `MATNDAGI` in both files: every `$...$` span of the explanatory text (outside `.mashq` divs, extracted automatically from the md) plus the numbers printed in prose (00: 3.12, S3.2, 42, 21, 44, 70; 99: 40, 65, 1.5, 20); asserts no answer equals any of them. The prose has almost no math spans, so this part mostly guards future edits.
- 00.py: all 42 diagnostic answers distinct. 99.py: non-letter final answers distinct, and none equals a diagnostic answer (so no final question is a disguised diagnostic one).
- Originality: each item's key expression/numbers were grepped against chapters 01–21. Eleven near-duplicates were found and replaced: d-12 (ch06 error example 20%/96 000), d-20 (m10 −5 < 2x + 1), d-23 (m12 point (−2, 5)), d-25 (ch12 line y = 2x − 1), d-32 (m16 4 tests average 78), d-37 (m19 47°), d-40 (m20 aquarium 50×30×40), y-3 (m3 3/8 then 2/5 of the rest), y-12 (m7 √98), y-25 (S15 x² − 6x + 4 = 0), y-27 (m16 average 16). Also avoided misol triangles in ch21 (5-12-13, 8-15-17, 7-24-25, 9-40-41, 20-21-29, 12-35-37, 11-60-61 as ratios) and the ch15 misol vertex (−4).

## Check / build
- `python3 kitob/tekshir.py` → `OK: javoblar va tuzilish tekshiruvdan o'tdi`
- `python3 kitob/yigish.py` → docx + pdf built (~1m45s), 193 pages (was 180).
- `pytest kitob/tests -q` → `39 passed`.
- pdftotext: 0 `¿`; no `\frac`/`\sqrt`/`\pi`/`javob=`; the 28 `$` hits are all currency in SAT items (existing chapters + new English items), the `frac` hits are the word "fraction". TOC lists `Kirish ... 4` and `Yakuniy test ... 176` (plus Lug'at 182, Javoblar 190). Labels read 1..42 and 1..40; Javoblar has "Kirish" and "Yakuniy test" groups with labels 1..42 / 1..40.
- Rendered pages 4 (Kirish start), 9 (diagnostic end + Natijalar tables), 176, 180 (final test + score table), 190, 193 (Javoblar): text, formulas, MC lists and tables in place. Pages with < 15 words: 1 (cover), 3 (TOC overflow: Lug'at, Javoblar), 11/59/120/147 (part titles), 31 (end of an existing chapter); no blank pages from the new parts.

## Self-review fixes during the task
- `($^\circ$C)` printed a placeholder box (degree sign with no base) → written as plain "°C" like ch17.
- `$-2[5 - 3(4 - 6)] + 4^2$` printed the `]` like `)` in the PDF → y-1 rewritten with nested parentheses. The same glitch exists in ch01 m1-17 (`3 \cdot [\,20 - ...\,] \div 6` prints as "[ 20 − 2⋅(5 − 8) )") — see concerns.
- Pipe tables came out with four equal columns (topic column wrapping to 3 lines) → separator dashes made proportional and long so Pandoc uses relative widths.
- y-6 originally rounded 7/12, which was also an option in y-4 → changed to 5/7.

## Concerns
1. ch01 m1-17 (existing chapter): a LaTeX bracket `[ ... ]` renders with a `)`-like closing bracket in the LibreOffice PDF. Not touched (out of scope); the final review should consider rewriting it with parentheses.
2. "SAT haqida qisqacha" states facts about the digital SAT (Math: 2 modules, 44 questions, 70 minutes, calculator allowed throughout, mostly 4-option MC, four domains). These are correct as far as I know; the author should confirm before printing, since the format can change.
3. Javoblar groups test answers under the tooling's fixed label "*Mashqlar:*" (e.g. "Kirish — Mashqlar: 1. -3; ..."). It reads fine, but "Savollar" would be nicer; that needs a one-line change in `yigish.javoblar_markdown` (not done, tooling is out of scope).
4. The "Muallifdan" note is finished text written in the author's voice. It makes no claims about years of experience or contact details; the author may want to add these.
5. 00.py/99.py load 14.py, 15.py, 19.py and 20.py via runpy so the formats match the chapters. If those helpers are renamed later, 00/99 fail loudly in tekshir (no silent drift).

## Fix round 1 (findings: task-8-findings.md)

### Important
1. d-25 → $y = 4x - 3$, $3x + y = 11$ → $(2, 5)$ (no longer the s13-2 line or point).
2. d-10 → "Tezyurar poyezd har soniyada 35 m" → 126 km/soat (no ch05 speed).
3. y-32 → a new table about a musical instrument: 150 students; Grade 9 24/46/70, Grade 10 36/44/80, totals 60/90. The question conditions on "does not play" and asks P(grade 9) = 23/45.
4. y-18 → "7 years less than three times her brother's age; Lena is 15 years older" → 26. The 99.py comment is fixed, and the part II gloss now has *three times* / *older* instead of *twice*.
5. Study advice made consistent:
   - Muallifdan (l.13): never skip a chapter; an easy chapter is still passed through ("Ko'p uchraydigan xatolar" + C + SAT ko'prigi).
   - O'qish rejasi (l.88): chapters scored 2 are passed quickly (1–2 days), per the Natijalar table.
   - "Qayerdan boshlash kerak?" says it explicitly. Before the start chapter (all scored 2), do only the "2" recommendation. From the start chapter on, read in order: 2 → quickly, 0/1 → fully. No chapter is skipped entirely.

### Minor
- **Template variants:**
  - y-28 is now café ratings 1–5 for 24 customers, mean 3.625.
  - y-27 is now a reverse weighted mean (30 students averaging 81, 12 girls averaging 84 → boys 79).
  - d-17 is now $7x + 4 = 3x - 16$ → −5.
  - d-21 is now "kitob daftardan 4 baravar qimmat, birga 30 000" → 24000.
  - d-19 is now $3 - 4x \geq 19$ → $x \leq -4$.
  - y-35 is now a square with diagonal 14 and its area asked (98, MC A; ch19 45-45-90 + ch20 area).
  - d-4 is now swimming-pool days (8 and 14 kun) → 56.
- **Triangles:** y-40 is now 16-63-65 (cos B = 63/65 → tan A = 63/16), d-42 is 13-84-85 (sin A = 13/85 → 13/84) and y-39 is 39-80-89 (AB = 178 → BC = 78).
- **d-36:** now the product is 18 → 1/18. Sums 10 and 11 are both counted in the ch18 misol.
- **Found by the new guard and changed:**
  - d-1 → −7 (ch01 answer −3).
  - d-13 → $\frac{5^6 \cdot 5^{-2}}{5^2}$ = 25 (ch07 answer 9).
  - d-14 → $\sqrt{63} + \sqrt{28}$ = $5\sqrt{7}$ (shared √27/√75/√48 with m7-20, s7-3).
  - d-20 → $-10 < 3x + 2 \leq 14$ → 8 (ch10 misol answer 5).
  - d-33 → table 16/20/36, 26/14/40 → 65% (it shared 18/21/39/80 with s17-1).
  - d-35 → 5/4/3 shar → 3/4 (ch18 misol answer 2/3).
  - d-38 → 28-45-53 → 45 (ch19 misol answer 24).
  - y-14 → $\frac{3x - 1}{4} = x - 4$ → 15 (ch09 answer 13).
  - y-29 → table 28/36/64, 42/14/56 → 60% (it shared 15/45/60 with the ch17 misol).
  - y-37 → r = 12, 75° → 5π, with the sector-area distractor 30π (m20-12 used r = 9, 80°).
- **New guard `boblar_bilan_solishtir`** (in both 00.py and 99.py), run for every d/y item against its own chapter:
  - (a) The answer must not equal any mashq/SAT answer of that chapter (from its javoblar/NN.py) or any `*Javob:*` formula of its misols.
  - (b) The item must not repeat a chapter block's number set. A block is flagged when all of its numbers ≥10 (answer included) appear in the item, or when it shares ≥3 numbers with the item and ≥2 of them are not multiples of 10.
  - Re-run on the old commit, (b) flags d-10/m5-11, d-42/m21-20, y-40/m21-9, y-32/ch18 misol, d-33/s17-1, d-14/m7-20 and y-37/m20-12.
  - 99.py also checks its y→chapter dict against the md mapping table.
- **y-20:** the options are encoded as (kind, value) pairs: initial volume 15, empty-time 15, decrease per minute 15, decrease per minute 450. The letter comes from the computed V(0) − V(1) = 15, and an assert checks that exactly one option is a true fact.
- **Units:** "daqiqa" → "minut" everywhere in 00/99, and "sekund" → "soniya" in d-10.
- **Wording:** "A shahridan" in y-17; d-9 now reads "Opa-singil … bo'lishdi. Ulardan ko'proq ulush olgani …".
- **99 score table:**
  - 18–27: redo only the wrong items plus those chapters' SAT ko'prigi (not the whole test).
  - 0–17: start from the first part with fewer than half correct.
- **SAT facts:** added that module 2 difficulty depends on module 1, that a few questions are unscored trial items, and plain-prose advice to check collegeboard.org because the figures may change.

### Checks
- `tekshir.py` OK, and `yigish.py` built 193 pages.
- `pytest` 39 passed.
- PDF text: 0 `¿`, no `\frac`/`\sqrt`/`\pi`/`\leq`/`javob=`. The TOC lists Kirish (4) and Yakuniy test (176).
- I rendered pages 9, 180 and 193 (the y-37 options, the score table and the Javoblar line) and looked at them.
- Answers now:
  - **Kirish:** −7; 3; 18; 56; 13/30; 6; 0.042; 30; 240000; 126; 63; 72000; 25; C; 22; 5x + 3; −5; 14; x ≤ −4; 8; 24000; 10; −2; y = 3x − 5; (2, 5); 5000; x² − 2x − 24; (x − 6)(x + 5); ±5; 2, 7; 6.5; 95; 65%; 260; 3/4; 1/18; 55°; 45; 49π; 180; 52; 13/84.
  - **Yakuniy:** B; soat 23:00; 42; D; 8.93; 0.714; 350000; 21.6; 10%; 120; 128; A; 5a + 5b; 15; −1; 240; 360; 26; (2, 0); C; 2.2; −6; 3x² − 12x + 10; B; −1 ∓ 2√2; −9; 79; 3.625; 60%; 12; 5/14; 23/45; D; 36°; A; 280 − 9π; C; 11; 78; 63/16.
- All changed answers were verified by hand.

### Remaining concerns
- The guard only compares an item with its own chapter. A cross-chapter reuse (like the old y-39 triangle, which came from ch19's s19-2) is avoided by hand, not by the guard. Template-level likeness without shared numbers (like the old y-18) is not detectable cheaply.
- Earlier concerns 1–3 still stand (ch01 m1-17 bracket rendering, author confirming the SAT facts, the "Mashqlar:" label in Javoblar).
