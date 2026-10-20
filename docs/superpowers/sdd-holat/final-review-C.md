# Final whole-book review C: ch16–21, yakuniy test, cross-book checks

Reviewer C, read-only, HEAD 03de722 (branch claude/magical-gauss-anbzr8).

What was run:
- `python3 kitob/tekshir.py` printed OK.
- The PDF at `kitob/chiqish/matematika-poydevori.pdf` (192 pp, built 08:58, the same minute as HEAD) was read with `pdftotext`. It was not rebuilt.
- Figures in `kitob/rasmlar/chiqish/*.png` for ch17, ch19, ch20 and ch21 were inspected visually.

## Verdict: Approved after 2 Important fixes

The math is correct throughout my slice. I re-derived all of the following by hand or with Python, and every one matches its `javob`:
- every `.misol` step in ch16–21 (29 misols);
- every mashq and SAT item in ch16–21 (183 items, i.e. 100%, well above the 40% asked);
- all 40 yakuniy test items.

Every MC letter is unique and correct, and every figure agrees with its data module. The final test is balanced 12/14/7/7 with 20 English items. The y→chapter table equals `BOBI`, and the score bands cover 0–40 without gaps. The per-part "less than half" thresholds are correct: <6, <7, <4, <4. A score of ≤17 always leaves at least one part under half, so the 0–17 advice always applies.

Both Important findings are leaks across files (diagnostic → chapter, chapter format example → final test). Neither is a math error.

Counts: **Important 2, Minor 17** (plus deferred triage and cross-book notes).

---

## Important

### I1. d-38 and m21-10 use the same 28-45-53 triangle (answer leak through the diagnostic Javoblar)

- `00-kirish.md:281-283` (d-38): hypotenuse 53, leg 28, so the other leg is **45**. The Javoblar prints "38. 45".
- `21-trigonometriya.md:236-238` (m21-10): cos A = 28/53, find tan A. The answer is 45/28, and the only work in it is finding that same leg, 45.

A student who did the diagnostic already holds m21-10's hidden side. Task 8 treated the same kind of reuse as Important (d-25/s13-2, y-40/m21-9).

Fix in m21-10, since this is my slice and keeps the diagnostic numbers small. 65-72-97 is the only primitive triple under 100 that is not already used in the book.
- `21-trigonometriya.md:236` → `::: {.mashq #m21-10 daraja="B" javob="72/65"}`
- `21-trigonometriya.md:237` → `$A$ o'tkir burchak va $\cos A = \frac{65}{97}$. $\tan A$ ni toping.`
- `javoblar/21.py:153-154` → `q10 = katet(97, 65)` / `m10 = q10 / 65` (97² − 65² = 5184 = 72²)

I checked the change against the guards:
- 21.py: "72/65" is not in MATNDAGI, and mashq answers stay unique.
- 99.py and 00.py: the template guards share only the single number 65 with y-40, so they do not fire.

### I2. The ch18 format example is the exact answer of y-31

- `18-ehtimollik.md:244` says "Ehtimollikni qisqarmas kasr ko'rinishida yozing (masalan, $\frac{5}{14}$)".
- `99-yakuniy-test.md:203-205` (y-31, ch18) has the answer **5/14**.

The project rule ("Pick format examples that are no answer anywhere") forbids this. The guard in 99.py compares only against chapter mashq and misol answers, so it missed this case.

Fix: change the format example, not the test.
- `18-ehtimollik.md:244`: `$\frac{5}{14}$` → `$\frac{4}{21}$`
- `javoblar/18.py:176`: `F(5, 14)` → `F(4, 21)`

4/21 is not an answer anywhere in 00, 01–21 or 99.

---

## Minor (each with its exact edit)

1. **S20.2 distractor C is negative (deferred task-7-B #2).** 128 − 64π ≈ −73 can be ruled out at a glance.
   - `20-yuz-hajm.md:362`: `C) $128 - 64\pi$` → `C) $64 - 16\pi$`. This is the plausible "one 8×8 half, one circle" slip.
   - `javoblar/20.py:161`: `128 - 64 * pi` → `64 - 16 * pi`. B stays unique.

2. **m20-23 is too light for level C (deferred task-7-B #5).** It is a one-step application of k².
   - `20-yuz-hajm.md:317-319` → `::: {.mashq #m20-23 daraja="C" javob="128\pi"}` / `Doiraning radiusi $4$ sm edi, u $3$ marta oshirildi. Doira yuzi necha sm² ga oshdi? Javobni $\pi$ orqali yozing.`
   - `javoblar/20.py:148` → `m23 = str(doira_yuzi(3 * 4) - doira_yuzi(4))`, which gives 144π − 16π = 128π.
   - The new answer is not in MATNDAGI and stays unique among the mashq answers.

3. **The ch20 "Bu bobda" list of earlier chapters is inaccurate (deferred task-7-B #3).**
   - Facts: cube volume appears only in ch07. Rectangle area appears in ch14 and ch15. Perimeter appears in ch08, ch09 and ch11.
   - `20-yuz-hajm.md:7`: replace "8- va 11-boblarda to'g'ri to'rtburchakning perimetrini, 7- va 14-boblarda kvadratning yuzini va kubning hajmini uchratgan edik."
   - With: "8-, 9- va 11-boblarda to'g'ri to'rtburchakning perimetrini, 14- va 15-boblarda uning yuzini, 7-bobda kvadratning yuzini va kubning hajmini uchratgan edik."

4. **Reference-sheet phrase (deferred task-7-B #4).** `20-yuz-hajm.md:16`: "aylanadagi yoy $360^\circ$ ekani ham yozilgan" → "butun aylana $360^\circ$ li yoyga teng ekani ham yozilgan".

5. **"doim" (deferred task-7-B #7).** `20-yuz-hajm.md:211`: "Qiya tomon balandlikdan doim uzun" → "Qiya tomon balandlikdan uzunroq".

6. **Stale figure comments (deferred task-7-B #1).** In `rasmlar/20_malumotlar.py:6` and `:13`, "20.2-rasm a)" / "20.2-rasm b)" → "20.1-rasm a)" / "20.1-rasm b)".

7. **sin 90° is used but undefined for right-triangle ratios (deferred ch21).**
   - `21-trigonometriya.md:176`: replace the parenthesis "($\sin x^\circ = 1$ faqat $x = 90$ da bo'ladi, o'tkir burchak uchun esa sinus doim $1$ dan kichik.)"
   - With: "(O'tkir burchakning sinusi doim $1$ dan kichik, chunki katet gipotenuzadan qisqa.)"

8. **The ch19 Mashqlar intro does not say how to write a solved x (deferred).** m19-11 has the answer 18 with no degree sign, while the intro says "Burchakni gradus belgisi bilan yozing".
   - `19-burchaklar.md:277`: after "(masalan, 41°)." insert " Tenglamadan $x$ so'ralsa, uni gradus belgisisiz son bilan yozing." This matches ch21:192.

9. **The rationalizing technique has no name (deferred).**
   - `19-burchaklar.md:199`: after the parenthesis "(bu kasrning qiymatini … $= 1$)" insert ". Bu usul *maxrajni ildizdan qutqarish (rationalizing the denominator)* deyiladi" and keep the final colon.
   - `19-burchaklar.md` Yangi so'zlar, after line 57: add `| maxrajni ildizdan qutqarish | rationalizing the denominator |`.
   - `21-trigonometriya.md:98`: "(oxirgi qadamda 19-bobdagidek maxrajdagi ildizdan qutuldik)" → "(oxirgi qadamda 19-bobdagidek maxrajni ildizdan qutqardik)".

10. **Degree labels print as "48 °" with a gap (deferred).** Mathtext `^\circ` leaves a gap; the titles already use a plain "°". Use plain text:
    - `rasmlar/19_sat.py:30` → `f"{chap}°"`
    - `rasmlar/19_sat.py:32` → `r"$x$°"`
    - `rasmlar/19_sat.py:36` → `f"{tashqi}°"`
    - `rasmlar/19_maxsus.py:28,29,42,43` → `"45°"`, `"45°"`, `"30°"`, `"60°"`
    - `rasmlar/21_narvon.py:34` → `f"{m['NARVON_BURCHAGI']}°"`

11. **The same 12-35-37 triangle is used three times, twice in consecutive C items.** m19-21 has dx 12, dy 35 → 37. m19-22 has legs 37, half-base 12 → 35. m21-15 is (35, 12) → 37. Change m19-22:
    - `19-burchaklar.md:369-371` → `::: {.mashq #m19-22 daraja="C" javob="30"}` / `Teng yonli uchburchakning yon tomonlari $34$ dan, asosi $32$. Asosga tushirilgan balandligini toping.`
    - `javoblar/19.py:127` → `m22 = katet(34, F(32, 2))`
    - 30 is not in MATNDAGI and not among the ch19 mashq answers.

12. **m19-25 reads "∠A burchak" ("A burchak burchak"; ch19:65 teaches that ∠B is read "B burchak").**
    - `19-burchaklar.md:382` → `$\triangle ABC$ da $A$ burchak $B$ burchakdan $20^\circ$ katta, $C$ burchak esa $B$ burchakdan $2$ marta katta. $\angle C$ ni toping.`

13. **17.1-jadval is referenced but never labelled.** `17-grafiklar.md:52` says "Natijalar 17.1-jadvalda", but only 17.2-jadval and 18.1-jadval carry a bold label.
    - Insert a line before `17-grafiklar.md:54`: `**17.1-jadval.** Sport to'garaklari bo'yicha so'rovnoma.`, followed by a blank line.
    - The 17.py row checks are unaffected.

14. **"spinner" is glossed two ways and never introduced in ch18.**
    - ch18 uses "aylanma g'ildirak" (m18-5, m18-7, m18-17) without a gloss. The m18-5 item uses it before any explanation.
    - 99:171 glosses spinner as "aylanuvchi strelkali disk".
    - Fix `18-ehtimollik.md:45`: "…xaltadan qaramasdan shar olish." → "…xaltadan qaramasdan shar olish, *aylanma g'ildirak (spinner)* ni aylantirish (strelka qaysi bo'lakda to'xtashini kuzatish)."
    - Add the row `| aylanma g'ildirak | spinner |` to the ch18 table (after line 22).
    - Fix `99-yakuniy-test.md:171`: "*spinner* — aylanuvchi strelkali disk" → "*spinner* — aylanma g'ildirak". On the same line add "*fair six-sided die* — to'g'ri (simmetrik) o'yin soqqasi". y-33 uses "die" and "fair", and neither is glossed anywhere.

15. **The s18 vocabulary misses "inclusive" (s18-4 "1 through 40, inclusive").**
    - `18-ehtimollik.md:364`: after "*multiple of* — ...ga karrali," add " *1 through 40, inclusive* — $1$ dan $40$ gacha (ikkala chegara ham kiradi),".

16. **y-27 reuses the m16-23 template, and its answer (79) is printed as given data in m16-23** ("o'rtacha bali $79$").
    - `99-yakuniy-test.md:174` → "Sinfdagi $25$ o'quvchining test bo'yicha o'rtacha bali $80$. Ulardan $10$ nafari qizlar, qizlarning o'rtacha bali $86$. Sinfdagi o'g'il bolalarning o'rtacha bali qancha?"
    - `:173` → `javob="76"`
    - `javoblar/99.py:188` → `y27 = F(25 * 80 - 10 * 86, 25 - 10)`
    - I checked 76 against every ch16 answer, every d/y answer and the ch16 template guard (at most 2 common numbers), and it passes.

17. **"daqiqa" and "minut" are mixed (book-wide "minut", which ch05 teaches; Task 8 already unified 00/99).**
    - `16-orta-qiymat.md:67` "necha daqiqa" → "necha minut"
    - `16-orta-qiymat.md:73` "$11$ daqiqa" → "$11$ minut"
    - `17-grafiklar.md:198` "soat va daqiqa" → "soat va minut"
    - Outside my slice: `11-matnli-masalalar.md:168` "2 soat 30 daqiqa" → "2 soat 30 minut".
    - Related: "soniya" (00:144, 04:274, 15:327,331) and "sekund" (ch05, which defines 1 minut = 60 sekund) are also mixed. Pick "sekund" to match ch05. This is for reviewer A to decide.

---

## Deferred-minor triage

### task-7-findings-B.md (ch20)

| # | Item | Decision |
|---|---|---|
| 1 | 20_malumotlar comments | FIX NOW (Minor 6) |
| 2 | S20.2 C negative | FIX NOW (Minor 1) |
| 3 | Bu bobda list | FIX NOW, with corrected chapter facts (Minor 3) |
| 4 | "yoy 360°" | FIX NOW (Minor 4) |
| 5 | m20-23 too easy | FIX NOW (Minor 2) |
| 6 | orphan "Misol 1." at a page bottom (PDF p.159) | DROP: it depends on reflow after the other edits, and no text-only fix is guaranteed |
| 7 | "doim" | FIX NOW (Minor 5) |

### Task 7 ch19/21

| Item | Decision |
|---|---|
| sin 90° | FIX NOW (Minor 7) |
| plain-number x | FIX NOW (Minor 8) |
| leak guard on MC option values (s19-3 = 9, s19-5 = 12) | DROP: the values are only given data elsewhere, not leaks |
| degree label gaps | FIX NOW (Minor 10) |
| angle-sum proof drawing (19:118) | DROP: the prose proof is complete, and a new figure costs more than it adds |
| rationalizing name | FIX NOW (Minor 9) |

### Task 6

m17-9 = 130, m17-2 = 80 and m18-23 30/25 equal given data only. DROP: not leaks.

### Tooling (Task 1 / R9)

| Item | Decision |
|---|---|
| TOC test can pass on the TOC page | DROP: TOC verified by hand (all 21 chapters, 4 parts, Kirish, Yakuniy test, Lug'at, Javoblar with correct page numbers) |
| no pdftotext equation assertion | DROP: checked by hand, no `$`, `\frac`, `\word`, `^{` or `¿` anywhere in the PDF text; only 32 currency `$` |
| fenced example divs | DROP: no fenced divs are used |
| single-quoted javob message | DROP |
| prose apostrophes not normalised | DROP: verified, there are zero ʻ ʼ ’ ‘ in boblar/*.md and rasmlar/*.py |
| fmt(bool) / "ng" sorting / bare ImportError / stale outputs | DROP: "ng" affects only "tangens" (it would sort after "tashqi"), which is harmless |
| README lacks python3-uno | FIX NOW, one word: `README.md:8` → `sudo apt-get install pandoc libreoffice-writer libreoffice-math python3-uno poppler-utils` |
| tekshir.py `__main__` | already fixed (CLI prints OK) |
| plain-brace answers / BOM / CLI on empty root / _JAVOB regex edges | DROP: authors follow the rule, and none of these occurs |

---

## Cross-book checks

### (a) Yangi so'zlar glossary, all 21 tables (296 rows)

- **Apostrophes:** no ʻ, ’ or backtick variants.
- **Same Uzbek term with a different English gloss:** none. The only shared key is "to'ldiruvchi burchaklar (90°/180°)", which is intentional.
- **Same English with different Uzbek:** all three cases are legitimate and disambiguated.
  - "base" is "daraja asosi" (ch07) and "asos (uchburchakda)" (ch19).
  - "leg" is "katet" and "yon tomon (teng yonli uchburchakda)".
  - "vertex" is "burchak uchi" and "parabolaning uchi".
- **Optional alignment:** the ch19 rows are "to'ldiruvchi burchaklar (yig'indisi 90°/180°)", but the text term (19:74) is "*90° gacha / 180° gacha to'ldiruvchi burchaklar*". If wanted, rename the rows to "to'ldiruvchi burchaklar (90° gacha)" and "(180° gacha)". This keeps the t-sorting and matches the text.
- **Terms used before their gloss chapter:** "perimetr" and "to'g'ri to'rtburchak" appear in ch02/08/09/11 before ch20 lists them. Those uses explain perimeter inline, so this is acceptable. "kesma" is glossed inline in ch10 and listed in ch19 with the same English (segment), so it is consistent.
- **Printed Lug'at (PDF pp.181–188):** deduplicated, sorted in Uzbek alphabet order (o' and g' after z, then sh, ch), with no doubled rows.

### (b) Book-level PDF

- **TOC:** correct and on one page. The part titles sit before ch01/08/16/19 (pp.10, 58, 119, 146), and each part page holds only the title.
  - Optional: chapter headings use a leading zero ("01. Butun sonlar…"), while the prose everywhere says "1-bob". Dropping the zero in the 9 headings of `01-…09-*.md` line 1 would read more naturally. This is cosmetic.
- **Javoblar completeness:** all 715 m/s/d/y ids have an answer in the Javoblar section (scripted check against the PDF text). The labels are S<bob>.<n> for SAT items, "Savollar:" for d/y and <bob>.<n> for mashq, as in R4/R6.
- **Artifacts:** the PDF text has no `$`, `\frac`, `\`-commands, `^{`, `_{` or `¿` apart from 32 currency amounts in SAT items.
- **Odd page breaks (cosmetic, for Task 9's visual pass):**
  - p.156→157: the S19.1 label and figure sit at the page bottom, and the question text is on the next page. Optional fix: in `19-burchaklar.md:393-397`, put the stem sentence before the image.
  - p.178→179: the options of y-35 are split (A on p.178, B–D on p.179).
  - p.159: orphan "Misol 1." (see the triage above).
- **Length:** the book is 192 pages, against the spec's "taxminiy 200–250 bet". This is informational only, since the spec says "taxminiy".
- **Time-answer style differs:** ch05 and 99 use "soat 11:15" / "soat 23:00", while ch17 uses "18:00" / "20:40". This is optional and low value; leave it unless someone touches 17.py `soat()`.

### Duplicates and leaks (my slice and its links)

- The leak guards in 16–21.py all pass.
- The only true cross-file leaks are I1 and I2.
- Other numeric coincidences between d/y answers and ch16–21 answers are unrelated topics and not leaks (e.g. 120, 15, 18).
- Repeated triangles that are not leaks, so no action:
  - 20-21-29 (m19-17, m21-1–3);
  - 7-24-25 (ch19 misol 3b, m21-4/5 pandus);
  - the 60° ladder (ch21 misol 3, m21-11, s21-4);
  - y-34 vs m19-13 (same template, different ratio).

### Pedagogy, ramp, language and figures

- **Ordering:** each chapter teaches every notation before it is used. ch21 relies on the ch19 rationalizing and special triangles, and ch17 relies on the ch12 slope.
- **Ramp:** A→B→C is sound. m20-23 is light (Minor 2). m17-21 (4 × 5 = 20, slope interpretation) is light for C but acceptable as a concept item.
- **Ko'p uchraydigan xatolar:** every error example in ch16–21 is correct and targets a real SAT distractor.
- **SAT bridges:** in house style, with original numbers, and the English vocabulary is glossed (except the gaps in Minor 14 and 15).
- **Figures:** every figure checked matches its data module and the text:
  - 17.1–17.3: tick steps as stated; 16 distinct scatter points;
  - 19.1: 2/3/6/7 acute;
  - 19.5: x = 67;
  - 20.1, 20.4, 21.2: as described.
  - The cylinder's hidden bottom edge is correctly dashed.
