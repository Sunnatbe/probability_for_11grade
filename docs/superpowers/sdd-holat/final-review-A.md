# Final review A: Kirish (00) and chapters 01–07

Reviewer: final whole-book review, slice A, which covers `kitob/boblar/00-kirish.md`, `01`–`07`, `javoblar/00.py`–`07.py` and `rasmlar/01_son_oqi.py`. The review was read-only: no repo file was edited and no build was run. `python3 kitob/tekshir.py` printed `OK`.

## Verdict: Approved with fixes

All answers in the slice are mathematically correct:

- Every `.misol` step in ch01–07 was re-derived by hand.
- All 42 diagnostic answers and all mashq/SAT answers in ch01–07 were checked by hand.
- An independent Python script (not the repo's `javoblar`) re-derived 85 items, focusing on multi-step, percent, ratio, rounding and power items. That is well over 40% per chapter, and every one matched the `javob`.
- All MC letters are unique.
- Structure is within spec: 5 misols per chapter, 24–26 mashq with at least 8 per level, 4–5 SAT items.
- There are no R7/R10/R11 violations: no `\text`, `\mathrm`, `\not`, no span starting with `=`, no lone `<`/`>`, no `{,}`.
- There are no curly apostrophes and no Unicode minus.
- Glossary glosses are consistent book-wide. The only English gloss shared by two Uzbek terms is `base`: "daraja asosi" vs "asos (uchburchakda)", which is correct.

There are two Important findings. Both are answer leaks of the kind the project's leak rule forbids. There are 22 Minor findings, mostly cheap one-line edits.

After applying any of the edits below, run `python3 kitob/tekshir.py`. `javoblar/00.py` cross-checks d-items against their chapter's answers. All replacement answers below were chosen so they do not collide with d-1…d-14 or with y-1…y-12.

---

## Important

### I1. m2-7 answer is printed verbatim in Misol 2
- **Where:** `kitob/boblar/02-bolinish.md:235-237`. The item reads "72 ni tub ko'paytuvchilarga ajrating", with `javob="$2^3 \cdot 3^2$"`.
- **Leak:** Misol 2 at `02-bolinish.md:103` prints "$72 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 = 2^3 \cdot 3^2$".
- **Fix:** replace the item.
  - md:
    ```
    ::: {.mashq #m2-7 daraja="A" javob="$2 \cdot 3 \cdot 5^2$"}
    150 ni tub ko'paytuvchilarga ajrating.
    :::
    ```
  - `kitob/javoblar/02.py:74`: `"m2-7": ajratma_matn(150),`. The output of `ajratma_matn(150)` is exactly `$2 \cdot 3 \cdot 5^2$`. The number 150 does not appear anywhere in ch02.

### I2. m2-24 reuses Misol 3's exact computation EKUK(12, 18) = 36
- **Where:** `kitob/boblar/02-bolinish.md:307-309`, "12 ga ham, 18 ga ham bo'linadigan eng kichik uch xonali sonni toping", with `javob="108"`.
- **Leak:** Misol 3 (`02-bolinish.md:128-141`) works out EKUK(12, 18) = 36 step by step, and the answer is 3 · 36. The student only has to copy the misol's result. This is the same class as the m2-1/m2-17 leaks fixed in Task 2.
- **Fix:**
  - md: change the item to "9 ga ham, 15 ga ham bo'linadigan eng kichik uch xonali sonni toping." with `javob="135"`.
  - `kitob/javoblar/02.py:60`: `m24 = next(n for n in range(100, 1000) if n % lcm(9, 15) == 0)`, which gives 135. Neither 9/15 nor 45/135 is a misol pair.

---

## Minor

### M1. Time unit: "sekund" (ch05) vs "soniya" (ch00, ch04, ch15)

The unit is defined in ch05 as "sekund", but every other use in the book is "soniya". Use one word, "soniya", to match the brief's minut/soniya.

**FIX NOW** in `kitob/boblar/05-nisbat.md`:

| Line | Change |
|---|---|
| 100 | "$1$ sekundda" → "$1$ soniyada" |
| 132 | "$1$ minut = $60$ sekund" → "$1$ minut = $60$ soniya" and "$1$ soat = $3600$ sekund" → "$1$ soat = $3600$ soniya" |
| 140 | "metr/sekundda (m/s)" → "metr/soniyada (m/s)" |
| 146 | "$1$ soat = $3600$ sekund" → "$1$ soat = $3600$ soniya" |
| 148 | "$1$ sekundda" → "$1$ soniyada" |

Cross-slice, for the other reviewers: "daqiqa" is still used at `11-matnli-masalalar.md:168`, `16-orta-qiymat.md:67,73` and `17-grafiklar.md:198`. Change it to "minut" there, since the rest of the book, including ch05's definition and the kirish, uses "minut".

### M2. Three copies of one temperature template in ch01
- **Problem:** Misol 5 (`01-butun-sonlar.md:151-163`: −4, +9, −6), m1-19 (`:273-275`: −7, +11, −9) and s1-2 (`:317-319`: −5, +14, −11) are the same item. m1-19 is also labelled C while being a re-skinned misol.
- **Fix for m1-19:**
  - md: "Kuz kuni soat 17:00 da harorat $4^\circ$C edi. Shundan keyin harorat har soatda 3 gradusga pasaydi. Soat 22:00 da harorat necha gradus bo'ldi?" with `javob="-11"`.
  - `javoblar/01.py:60`: `"m1-19": 4 - (22 - 17) * 3,`
- **Fix for s1-2:**
  - md: "In January, the lowest temperature recorded in a city was $-17$ degrees Celsius and the highest was $6$ degrees Celsius. How many degrees Celsius greater was the highest temperature than the lowest temperature?" with `javob="23"`.
  - `javoblar/01.py:69`: `"s1-2": 6 - (-17),`

### M3. m1-11 is the error-section example with new numbers, and the answer is the same
- **Problem:** `01-butun-sonlar.md:239-241` has $36 \div 6 \cdot 2$ = 12. Misol 4 and Error 1 (`:134-144`, `:169-171`) use $24 \div 4 \cdot 2$ = 12.
- **Fix:**
  - md: $36 \div 4 \cdot 3$ with `javob="27"`.
  - `01.py:51`: `"m1-11": 36 // 4 * 3,`
  - Also change the assert at `01.py:75` from `36 % 6 == 0` to `36 % 4 == 0`.

### M4. m2-1 repeats the text's division example (divisor 6, remainder 5)
- **Problem:** `02-bolinish.md:211-213` asks for 53 ÷ 6, remainder 5. The text at `:42-46` uses 47 = 6 · 7 + 5 and also lists the remainders of division by 6.
- **Fix:**
  - md: "58 ni 9 ga bo'lganda qoldiq nechaga teng?" with `javob="4"`.
  - `02.py:68`: `"m2-1": 58 % 9,`

### M5. m2-9 has the same answer as Misol 2 and Error 2
- **Problem:** `02-bolinish.md:245-247` gives EKUK(8, 12) = 24. Misol 2 prints 24, and Error 2 prints EKUK(6, 8) = 24.
- **Fix:**
  - md: EKUK$(10, 15)$ with `javob="30"`.
  - `02.py:77`: `lcm(10, 15)`

### M6. m2-17 has the same template and the same answer (12) as Misol 4
- **Problem:** `02-bolinish.md:279-281` is two kinds of item split into the largest number of equal bundles, answer 12. Misol 4 (`:151-163`) is the same setup with answer 12.
- **Fix:**
  - md: "…63 ta qizil va 81 ta oq atirgul bor…" with `javob="9"`.
  - `02.py:86`: `gcd(63, 81)`
- Avoid 18, which is d-3's answer and would trip the 00.py cross-check. Also avoid 14 and 56, which are near d-4.

### M7. The weekday-cycle technique is used but never shown
- **Problem:** m2-18 (`:283-285`) and m2-21 (`:295-297`, "100 kundan keyin") depend on "days of the week repeat every 7 days, so look at the remainder". The text teaches remainders (`:42-46`) but never makes this link. The project's own rule is: show an edge case in the text when an exercise depends on it.
- **Fix:** add after `02-bolinish.md:46`:
  > Qoldiq takrorlanadigan hodisalarda qo'l keladi. Hafta kunlari har 7 kunda takrorlanadi: 30 kundan keyingi kunni topish uchun $30 = 7 \cdot 4 + 2$ deb yozamiz. To'rt to'liq haftadan keyin yana bugungi kun keladi, demak 30 kundan keyin bugundan 2 kun keyingi kun bo'ladi.

### M8. m3-1 has the same value as Misol 1
- **Problem:** `03-kasrlar.md:201-203` has 18/24 → 3/4. Misol 1 has 36/48 → 3/4, and 18/24 is the same fraction halved.
- **Fix:**
  - md: $\frac{24}{42}$ with `javob="4/7"`.
  - `03.py:35`: `F(24, 42)`
- 4/7 is not an answer anywhere in ch03.

### M9. s3-1 reuses Misol 2's numbers
- **Problem:** `03-kasrlar.md:309-319` is $\frac{5}{6} - \frac{3}{8}$. Misol 2 prints EKUK(6, 8) = 24 and $\frac{5}{6} = \frac{20}{24}$.
- **Fix:**
  - md: "Which of the following is equal to $\frac{7}{9} - \frac{5}{12}$?" with options
    ```
    A) $\frac{2}{3}$
    B) $\frac{1}{6}$
    C) $\frac{13}{36}$
    D) $\frac{43}{36}$
    ```
    The answer stays `javob="C"`.
  - `03.py:63`: `harf([F(2, 3), F(1, 6), F(13, 36), F(43, 36)], F(7, 9) - F(5, 12))`

### M10. m3-24 does not say "butun" explicitly
- **Problem:** `03-kasrlar.md:297-299`. Common.md requires saying "butun …ning" vs "qolgan …ning" explicitly, as m3-22 does. The "qolgan" reading gives a non-integer, so the answer is not really ambiguous, but the item breaks the rule set by Misol 4.
- **Fix:** "…oylik maoshining $\frac{2}{5}$ qismini ijara haqiga, yana butun maoshining $\frac{1}{4}$ qismini oziq-ovqatga sarfladi…". The answer is unchanged.

### M11. m4-5 is almost the same item as diagnostic d-7
- **Problem:** m4-5 is $0.6 \cdot 0.7$ = 0.42 (`04-onli-kasrlar.md:213-215`). d-7 is $0.6 \cdot 0.07$ = 0.042 (`00-kirish.md:131-133`), and the student has already seen d-7's answer key.
- **Fix:**
  - md: m4-5 becomes $0.9 \cdot 0.7$ with `javob="0.63"`.
  - `04.py:57`: `D("0.9") * D("0.7")`

### M12. m4-23's answer equals a number given in the question and in the text
- **Problem:** At `04-onli-kasrlar.md:289-291`, the answer 0.375 is also an operand in the question and is printed at `:52` ($\frac{3}{8} = 0.375$).
- **Fix:**
  - md: $\frac{1}{8} + 0.375 \cdot \frac{4}{5}$ with `javob="0.425"`.
  - `04.py:77`: `onli(F(1, 8) + F(D("0.375")) * F(4, 5))`

### M13. s4-4 reuses Misol 3's number pair
- **Problem:** s4-4 (`04-onli-kasrlar.md:333-335`) divides 2.4 by 0.15. Misol 3 multiplies 2.4 · 0.15.
- **Fix:**
  - md: "A wooden board is 4.5 meters long. It is cut into pieces that are each 0.18 meter long…" with `javob="25"`.
  - `04.py:84`: `D("4.5") / D("0.18")`

### M14. m6-1 duplicates m4-1
- **Problem:** m6-1 (`06-foizlar.md:189-191`) asks for 45% as a fraction, 9/20. m4-1 asks for 0.45 as a fraction, also 9/20.
- **Fix:**
  - md: "$65\%$ ni qisqarmas oddiy kasr ko'rinishida yozing." with `javob="13/20"`.
  - `06.py:40`: `m1 = F(65, 100)`

### M15. Symbols used before they are glossed

The project rule is to gloss every symbol on first use.

- **`≈`:** first used at `04-onli-kasrlar.md:140`, but first glossed only in ch20:119.
  - **Fix:** in `:140`, change "…$2.97 \approx 3.0$ hosil bo'ladi." to "…$2.97 \approx 3.0$ hosil bo'ladi ($\approx$ — "taxminan teng")."
- **`<` / `>`:** used at `01-butun-sonlar.md:49` with no reading given.
  - **Fix:** after "Rasmga qarang: $-4 < 3$, chunki $-4$ chaproqda turadi.", add `(< belgisi "kichik", > belgisi "katta" deb o'qiladi.)`.
  - Keep the bare symbols outside math, because R11 forbids a math span holding only `<`/`>`.

### M16. Suffix on EKUB/EKUK written with a space in ch02–03

ch02–03 write "EKUB i", "EKUK ni" with a space. ch05/08/09/13 write "EKUBi", "EKUKga", which is the correct form. Attach the suffix:

| Location | Change |
|---|---|
| `02-bolinish.md:12` | "EKUK ni" → "EKUKni" |
| `02-bolinish.md:88` | "*EKUB* i" → "*EKUB*i" |
| `02-bolinish.md:94` | "EKUB i" → "EKUBi" |
| `02-bolinish.md:96` | "EKUB i" → "EKUBi" |
| `02-bolinish.md:116` | "*EKUK* i" → "*EKUK*i" |
| `02-bolinish.md:122` | "EKUK i" → "EKUKi" |
| `02-bolinish.md:126` | "EKUB i bilan EKUK ini" → "EKUBi bilan EKUKini" |
| `02-bolinish.md:187` | "EKUK ni" → "EKUKni" |
| `02-bolinish.md:193` | "EKUK ni" → "EKUKni" |
| `03-kasrlar.md:86` | "EKUK i" → "EKUKi" |
| ch03 | "EKUB ga" → "EKUBga" and "EKUK ga" → "EKUKga", at the occurrences found by `grep -n "EKU[BK] ga" kitob/boblar/03-kasrlar.md` |

### M17. Spelling of "baravar"
`06-foizlar.md:44` has "bir yarim barobar". Change it to "bir yarim baravar", which matches `07:15,351`, `00:198` and ch11.

### M18. Kirish says "soha", chapters say "SAT bo'limi"
- **Problem:** `00-kirish.md:63` says "Savollar to'rt sohaga bo'linadi… Har bob boshida shu bob qaysi sohaga kerakligi yozilgan". Every chapter instead labels the domain "*SAT bo'limi:*" and says "… bo'limida".
- **Fix:** replace the last clause with: "Har bob boshidagi "SAT bo'limi" qatorida shu bob ana shu to'rt sohadan qaysi biriga kerakligi yozilgan."

### M19. d-4 is the same story as m2-18
- **Problem:** `00-kirish.md:119-121` has Ali and Vali going to a swimming pool every 8 and 14 days. m2-18 has Ali and Vali at a basseyn every 4 and 6 days.
- **Fix:** "Ikki sport to'garagidan biri har $8$ kunda, ikkinchisi har $14$ kunda musobaqa o'tkazadi. Bugun ikkalasi ham musobaqa o'tkazdi. Necha kundan keyin ular yana bir kunda musobaqa o'tkazadi?" The answer stays 56 and `00.py` is unchanged.

### M20. Thousands formatting (optional, cosmetic)
- **Problem:** ch01, ch03 and ch04 write sums in prose as `100\ 000`, a full non-breaking space in text font. This occurs at `01:282`, `03:154,166,278,298` and `04:152,266,270,278,286`. Kirish and ch05+ use `$100\,000$`, a thin space in math font.
- **Fix:** if time permits, wrap these sums as `$100\,000$`. They render legibly either way.

### M21. y-7 is the same template as m4-18 (cross-reference for the 99 reviewer)
- `99-yakuniy-test.md` y-7: 8 l per 100 km, 12 500 so'm per litre, 350 km.
- `04-onli-kasrlar.md:269-271` m4-18: 7.5 l per 100 km, 10 900 so'm per litre, 240 km.
- The wording is near-identical. Vary the context, for example a taxi fare or electricity per kWh.

### M22. m1-23 is too easy for level C (optional, lean DROP)
- `01-butun-sonlar.md:289-291` asks for the distance between −9 and 4. That is exactly the rule and example at `:65`, so it is a B-level item.
- If you strengthen it, use a two-step lift item: "Lift yerto'ladagi $-2$-qavatdan 6 qavat pastga tushdi, keyin 17 qavat yuqoriga ko'tarildi (yerto'la qavatlari manfiy son bilan belgilanadi). Lift qaysi qavatda to'xtadi?" This gives `javob="9"`, with `01.py:64` `"m1-23": -2 - 6 + 17`.
- The value 9 is not among the ch01 answers and differs from d-1 (−7) and d-2 (3). Otherwise keep the item as it is.

---

## Deferred-minor triage (items in this slice)

| Source | Item | Decision |
|---|---|---|
| Task 8 Minor 1 | Template near-duplicates: d-17/s9-1, d-21/s11-2, d-19/s10-1 | **DROP**: already fixed. d-17, d-19 and d-21 have been rewritten. |
| Task 8 Minor 1 | d-4/s2-2 (blinking lights) | **FIX NOW**, but the remaining duplicate is now d-4 vs m2-18 (Ali/Vali). See M19. |
| Task 8 Minor 3 | d-36 answer in ch18 misol text | **DROP**: already fixed. d-36 is now "product 18" → 1/18. |
| Task 8 Minor 4 | Leak guards don't cross-check chapters | **DROP**: done. `javoblar/00.py:232-292` `boblar_bilan_solishtir` compares answers and number templates with the d-item's own chapter. |
| Task 8 Minor 6 | Mixed time units | **FIX NOW**: kirish is fixed ("minut"), but sekund/soniya and daqiqa/minut are still split across chapters. See M1. |
| Task 8 Minor 10 | SAT facts | **DROP**: done. `00-kirish.md:63` now gives 44 questions / 70 minutes, adaptive module 2, unscored pretest items, a calculator throughout, and a "check collegeboard.org" caveat. All of these are accurate as of 2026. The author should still glance at it before printing. |
| Task 8 Minor 11 | First-person claims in Muallifdan (`00:7`) | **DROP**: these are for the author to confirm, not something to edit. |
| Task 1 | Chapter prose apostrophes not normalised | **DROP**: scanned 00–07 and found no curly/modifier apostrophes. |
| Task 1 | README lacks the `python3-uno` package name | **FIX NOW** (tooling, cheap). In `kitob/README.md` "Python paketlari" line, add "(Debian/Ubuntu: `sudo apt-get install python3-uno`)". |

Other Task 1 / Tooling R9 deferred minors are tooling, not slice content: TOC test, pdftotext equation assertion, fenced divs, quoting of `javob`, `fmt(bool)`, "ng" sort, BOM, empty-root OK, `_JAVOB` regex, and brace answers. **DROP** all of them. No book content triggers any of them now, and the Task 9 visual check covers the rendering risks.

---

## Checked and fine (no action)

- **Diagnostic test:**
  - All 42 answers were re-derived.
  - Pairs map to chapters correctly.
  - The "Qayerdan boshlash" advice (`00:337`) no longer contradicts `:13` or `:88`.
- **ch05:**
  - The ayqash-ko'paytirish shortcut (`:91`) is correct.
  - The unit table is correct.
  - s5-1 per-ounce prices are 15/13/14/15 cents, so the answer is unique.
- **ch06:**
  - m6-21 gives 26/40 ≥ 65%, so the answer 8 is unique.
  - s6-2 has a tautology guard: the largest absolute increase is not the largest percent increase.
- **ch07:**
  - $\sqrt{a^2} = |a|$ is now stated for all $a$.
  - ≥ and ≠ are glossed.
- **ch04:**
  - The rounding carry case is shown at `:140`.
  - m4-13 "20.00" follows the stated keep-trailing-zero rule.
- **Figure:** `rasmlar/01_son_oqi.py` matches its caption and the text, with points −4 and 3 and the distances |−4| = 4 and |3| = 3.
- **Line-initial a)/b) in misol divs (ch04–07):** these become lettered lists that render with the same "a)" labels, so they are cosmetic only and need no change.
