# Task 8 review: commit 82ac80a (Kirish + Yakuniy test)

Reviewer: read-only review. `python3 kitob/tekshir.py` was run (it is read-only) and printed `OK`. yigish/pytest were not run.

## Verdict: Issues

The structure follows the brief. The diagnostic has 42 items `d-1..d-42`, 2 per chapter in order, and the result table maps each question pair to its chapter correctly. The final test has 40 items split 12/14/7/7, with English items y-1, 4, 5, 8, 10, 12, 14, 16, 18, 20, 21, 24, 26, 28, 30, 32, 33, 35, 37 and 40 (20 in all). It also has the score table, the per-part rule and the y→chapter map, and the map matches the content. "Muallifdan" and "Kitobdan qanday foydalanish" are both present.

All 82 answers were re-derived independently (hand plus a scratch Python script). None of them is wrong. Every answer is computed from expressions, and the MC letters come from `harf` with its uniqueness assert. Formats follow R12 and R17 (`5x + 3`, `3x^{2} - 12x + 10`, `280 - 9\pi`, `(x - 6)(x + 5)` ordered by smaller constant, `-1 ∓ 2\sqrt{2}`). The R7/R10/R11/R13/R14 pitfalls are absent: no `\text`, `\mathrm`, `\qquad`, `\not`, no math span starting with `=` or holding only `<`/`>`, thousands written `\,`, systems as stacked `$$` lines. All apostrophes are straight.

The problems are (a) answer and template duplicates with chapter items that the project's leak rule forbids, and (b) contradictory "where to start" advice.

## Important

1. **d-25 duplicates the answer of s13-2.** In `kitob/boblar/00-kirish.md:213-219`, d-25 is the system y = 3x − 2, 2x + y = 13, whose solution is (3, 7). In `13-sistemalar.md:339-340`, s13-2 uses the same line y = 3x − 2, meets y = −x + 10 at (3, 7) and asks for b = 7. Javoblar prints "(3, 7)" for d-25.
   *Fix:* change both the line and the solution point of d-25, for example y = 4x − 3 with 3x + y = 11, giving (2, 5). Grep ch12–13 for the new point first.

2. **d-10 is the exact inverse of m5-11.** `00-kirish.md:143-145` asks for 15 m/s in km/h, answer 54. `05-nisbat.md:254-256` (m5-11) asks for 54 km/soat in m/s, answer 15. The diagnostic's Javoblar therefore gives away the ch05 answer.
   *Fix:* use a speed that appears nowhere in ch05. For example, 35 m/s gives 126 km/soat. Check it against m5-12 (25 m/s → 90), the misol (72 → 20) and y-8 (6 → 21.6).

3. **y-32 is the ch18 worked example re-skinned.** `99-yakuniy-test.md:207-217`: the Grade 10 row is 54/66/120, Grade 9 totals 80, the grand total is 200, and the question is "among those with a pet, P(grade 10)". The worked example at `18-ehtimollik.md:158-177` has the identical 10-sinf row 54/66/120, the same 80/200 totals and the same question b), with answer 54/102.
   *Fix:* change all of the counts and totals (for example 150 students with a different conditioning column), and add the misol's numbers to the `MATNDAGI`-style check.

4. **y-18 is a near-verbatim copy of s11-4.** `99-yakuniy-test.md:113-115` reads "Lena's age is 4 years more than twice her brother's age. The sum of their ages is 37 years." `11-matnli-masalalar.md:353-354` (s11-4) reads "Maria's age is 4 years more than twice her brother's age. The sum of their ages is 31 years." The leftover comment at `kitob/javoblar/99.py:135` still says `b + (2b + 4) = 31`.
   *Fix:* rewrite y-18 with a different relation and given quantity, for example "3 years less than three times…; Lena is 13 years older than her brother". Then fix the comment.

5. **The study advice contradicts itself.** Three passages give different instructions:
   - `00-kirish.md:337` says to start at the first chapter that scored 0 or 1, which implicitly skips the earlier chapters that scored 2.
   - The table at `00-kirish.md:333` says a chapter that scored 2 still gets "Ko'p uchraydigan xatolar + C + SAT ko'prigi".
   - `00-kirish.md:88` says to go through ch1–7 at two per week after a good Part I result.
   - `00-kirish.md:13` says "bob o'tkazib yubormang".

   A student cannot tell whether the chapters before the start chapter are done or skipped.
   *Fix:* add one sentence to line 337: "Undan oldingi boblarda (hammasi 2) faqat yuqoridagi '2' tavsiyasini bajaring, keyin shu bobdan to'liq boshlang". Align line 88 with it.

## Minor

1. **Template near-duplicates.** These reuse a chapter item's wording or structure with new numbers. No answer is leaked, but they should be varied:
   - y-28 / s16-3: "The table shows the number of books each of 20 students read…" with the mean asked.
   - y-27 / m16 at `16-orta-qiymat.md:261`: 8 numbers, mean, one removed, 7 remain.
   - d-17 / s9-1: both reduce to 3x = 24.
   - d-21 / s11-2: sum of three consecutive integers, greatest asked.
   - d-19 / s10-1: 7 − 2x > 13 against 6 − 2x > 16.
   - y-35 / s19-3 and m19-16: the same 30-60-90 setup.
   - d-4 / s2-2: two blinking lights.
2. **Reused Pythagorean triples.** These contradict the report's claim that such triangles were avoided. They come from exercises, not misols:
   - y-40 uses 9-40-41, the same triangle as m21-9 (`21-trigonometriya.md:233`).
   - d-42 uses 11-60-61, the same as m21-20 (`:279`).
   - y-39 uses 33-56-65, the same as s19-2 (`19-burchaklar.md:400`).
3. **d-36 answer is in the ch18 misol text.** `18-ehtimollik.md:122` prints "10 — uchta", i.e. sum 10 occurs 3 ways out of 36. This matters little for a diagnostic, but a different sum (e.g. 9 → 1/9) would be cleaner.
4. **The leak guards only check each file's own prose.** They do not cross-check against chapter misol/SAT answers, which is how issues 1–3 slipped through. Consider asserting that no item reuses a chapter item's key numbers, or at least check d/y answers against the same chapter's `JAVOBLAR`.
5. **y-20's `harf` is tautological.** At `99.py:147-151` the option strings are typed and matched against a typed string. Consider encoding each option as (rate, value) and matching against the computed slope −15.
6. **Mixed time units.** The prose in `00-kirish.md:63,71` and `99-yakuniy-test.md:7` uses "daqiqa", while the chapters and y-2 use "minut". d-4 says "soniya" and d-10 says "sekund" in the same file (ch05 uses minut/sekund). Pick one set.
7. **Grammar in y-17.** `99-yakuniy-test.md:110` has "A shahardan B shahriga"; it should be "A shahridan B shahriga".
8. **The 0–17 rule is biased toward Part II.** `99-yakuniy-test.md:288` says to restart from the part with the most errors, which favours Part II because it has 14 questions. Better: "savollarining yarmidan kamiga to'g'ri javob bergan birinchi qism".
9. **Retaking the same test.** `99-yakuniy-test.md:287` advises redoing the same final test after 2–3 weeks. The student will remember the answers, so suggest redoing only the wrong items plus that chapter's SAT ko'prigi.
10. **SAT facts need the author's confirmation.** At `00-kirish.md:63`, "2 modules, 44 questions, 70 minutes, calculator allowed for the whole section, mostly 4-option MC, four domains" matches the digital SAT as I know it (22 questions / 35 min per module, with a built-in Desmos calculator). The author should still confirm this before printing.
    - Not mentioned but correct if added: the second module is adaptive, and some questions are unscored pretest items.
    - "1.5 daqiqadan sal ko'proq" in `99:7` is fine: 65/40 ≈ 1.63, and the SAT's 70/44 ≈ 1.59.
11. **Muallifdan claims.** `00-kirish.md:7` makes first-person claims about the author's teaching ("Har yili yangi o'quvchilar…"). These are plausible but are the author's to confirm. This was already flagged in the report.

## Independently re-derived answers (all match the md `javob`)

**Diagnostic (all 42):**

| Items | Answers |
|---|---|
| d-1 … d-8 | −3; 3; 18; 56; 13/30; 6; 0.042; 30 |
| d-9 … d-16 | 240000; 54; 63; 72000; 9; C (7√3); 22; 5x + 3 |
| d-17 … d-24 | 8; 14; x < −3; 5; 25; 10; −2; y = 3x − 5 |
| d-25 … d-30 | (3, 7); 5000; x² − 2x − 24; (x − 6)(x + 5); ±5; 2 and 7 |
| d-31 … d-36 | 6.5; 95; 42%; 260; 2/3; 1/12 |
| d-37 … d-42 | 55°; 24; 49π; 180; 52; 11/60 |

**Final (all 40):**

| Items | Answers |
|---|---|
| y-1 … y-8 | B (−6); 23:00; 42; D (5/8); 8.93; 0.714; 350000; 21.6 |
| y-9 … y-16 | 10%; 120; 128; A (2√5); 5a + 5b; 13; −1; 240 |
| y-17 … y-24 | 360; 26; (2, 0); C; 2.2; −6; 3x² − 12x + 10; B (x + 3) |
| y-25 … y-30 | −1 ∓ 2√2; −9; 29; 1.85; 62.5%; 12 |
| y-31 … y-36 | 5/14; 9/16; D (1/8); 36°; A (11√3); 280 − 9π |
| y-37 … y-40 | C (4π); 11; 66; 40/9 |

## Fit check (concept taught in that chapter or earlier)

Every item was checked against the chapter it maps to:

- **Ch01–07:** −3² is taught in the ch01 error section. EKUB notation is from ch02. Negative exponents and radical simplification are from ch07.
- **Ch09–10:** The k / no-solution case is in ch09 (misol and m9). Integer solutions of compound inequalities are in ch10.
- **Ch12–15:**
  - x-intercept and slope interpretation are in ch12.
  - The parameter no-solution system is in ch13.
  - Grouping for ax² + bx + c is in ch14.
  - The quadratic formula with irrational roots (m15-14 style) and the vertex −b/2a are in ch15.
- **Ch16–18:** Frequency-table mean is in ch16. Two-way tables and residual-style prediction difference are in ch17. Without replacement, conditional probability and independence are in ch18.
- **Ch19–21:** The 30-60-90 triangle is in ch19. Arc length, cylinders and liters are in ch20. Cofunction and ratio-from-ratio are in ch21.

No item needs untaught notation.
