# Final whole-book review B: chapters 08–15 (II qism. Algebra asoslari)

Scope: kitob/boblar/08..15-*.md, kitob/javoblar/08..15.py, kitob/rasmlar/{10,12,13,15}_*.py and their PNGs, plus the built PDF text (kitob/chiqish/matematika-poydevori.pdf, built 2026-10-20 08:58 from HEAD 03de722) for rendering checks.

**Verdict: Approved. 0 Important, 8 Minor.** `python3 kitob/tekshir.py` reports OK.

## What was checked

- **Math, 100% of items.** I re-derived every `.misol` step (39 worked examples) and every mashq and SAT answer in ch08–15 (206 mashq and 40 SAT items), by hand and with sympy for the harder ones: m9-19, m10-18/19/20, m13-9/10/13, m14-13/19/20/18, m15-14/18/19/25, s15-4, s8-1, m8-20. All answers are correct and unambiguous. Every MC letter comes from `harf` with its uniqueness assert, and I checked each distractor by hand. These items have one reading and one answer: m15-20 ("k — musbat son"), m15-23 (positive root), m15-25 ("manfiy son"), m10-23 ("kamida" plus an exact fit), m12-2 and m12-7 (exactly one option fits) and m13-1. Inequality sign flips are correct in Misol 1b/1c/2/3b/4b of ch10 and in m10-4/6/10/20/21 and s10-1. The quadratics are correct: discriminants, factorings, vertices, the 2±√3 reduction and the (−3±√17)/4 form.
- **R12 formats.** The keys follow canonical order: `-4a + 9b`, `3y - 12`, `\frac{-2a + P}{2}`, `y = \frac{-2x + 18}{3}`, slope-intercept, factor order by smaller constant (`(x - 5)(x - 4)`, `(x - 4)(3x + 2)`), ascending roots and x-sorted points. The format examples in the text (08:216, 09:214, 10:214, 11:217, 12:254, 13:223, 14:223, 15:230) are no answer anywhere.
- **Leaks.** I scanned every key in ch08–15 against the numbers and expressions printed outside mashq/SAT divs. The only hits are small-integer coincidences in unrelated problems (e.g. m8-1 = 15 and the Misol 4 value 15). No mashq or SAT item reuses a misol's data or result. The MATNDAGI guards in 12–15.py cover SAT ids.
- **Ordering of notation.** Each "N-bobda … batafsil" back-pointer matches the earlier chapter's text (07:47, 05:91, 07:156, 09:41, 08:162). Terms are glossed before they are used: modul (ch01), ayqash ko'paytirish (ch05), foiz punkti (ch06), EKUB/EKUK, f(x) (12:90), ± (15:49), "constant" (glossed in each SAT intro), mile, pound and T-shirt.
- **Glossary.** No Uzbek term is listed with two different English glosses across the whole book.
- **Apostrophes and LaTeX.** All apostrophes are straight. None of the banned LaTeX from R7/R10/R11/R13/R14 appears.
- **Rendering.** The PDF text of this slice has no "¿", raw `$`, `\` or braces. a)/b) parts render as intended.
- **Figures.** 10_tengsizlik, 12_koordinatalar, 12_burchak_koeffitsiyenti, 13_kesishish and 15_parabola match their misols exactly: points, slope triangle, intersection (2, 3), roots −1 and 3, vertex (1, −4) and intercept (0, −3). No graded item depends on a figure, so the "one data source" rule (R16/ch17) does not apply.
- **Earlier fixes.** All Minor fixes from task-4-findings-B, task-5-findings-A and task-5-findings-B are present in HEAD.

## Important

None.

## Minor

**M1. "constant" is missing from the Lug'at.** `o'zgarmas son (constant)` is glossed only inline (08:153) and in SAT intros. The term appears in s8-4, s9-4, s12-5, s13-4 and s14-3, so it is one of the most frequent SAT words, but the end-of-book Lug'at only collects table rows.
- Fix: add a row to kitob/boblar/08-ifodalar.md after line 27 (`| ozod had | constant term |`): `| o'zgarmas son | constant |`. No conflict with any other table.
- Optional, same kind: add `| qat'iy tengsizlik | strict inequality |` to the 10-tengsizliklar.md table after line 25. *qat'iy (strict)* is glossed inline at 10:49.

**M2. Hollow markers contradict ch10's open-circle meaning.** Ch10 teaches that a hollow circle marks a point that is *not* included (and SAT graphs use the same convention). Two figures still draw an included, highlighted point as a white hollow circle:
- kitob/rasmlar/13_kesishish.py:49 draws the intersection point (2, 3), the very solution, as `markerfacecolor="white"`.
- kitob/rasmlar/15_parabola.py:60 draws the y-intercept (0, −3) as `color="white"`.

Fix: make them filled.
- 13_kesishish.py:49: `markerfacecolor="white"` → `markerfacecolor="black"` (or `"#1a7f37"`).
- 15_parabola.py:60: `color="white"` → `color="#1a7f37"`. Keep `markeredgecolor="black"`. Red is already used for the x-intercepts and a black square for the vertex.

**M3. m13-23 is a near-clone of m11-12.** Both say "parent is d years older; in 4 years parent is 3 times as old". m11-12 has 26 years and answer 9; m13-23 has 28 years and answer 10. Ch11 Misol 3 has the same shape too. Give m13-23 a different structure (sum plus "years ago"):
- kitob/boblar/13-sistemalar.md:319-321:
  - `javob="10"` → `javob="15"`
  - text → `Ota va o'g'il yoshlarining yig'indisi $60$ ga teng. $5$ yil oldin ota o'g'lidan $4$ baravar katta edi. O'g'il hozir necha yoshda?`
- kitob/javoblar/13.py:240-241:
  - `ota23, ogil23 = sistema((1, 1, 60), (1, -4, 5 - 20))  # f + s = 60; f - 5 = 4(s - 5)`
  - `assert ota23 - 5 == 4 * (ogil23 - 5)`

  This gives (45, 15). 15 is not in MATNDAGI and is no other ch13 answer.

**M4. Misol 5a (09:169-177) changes term order without saying why.** The worked step is `P - 2a = 2b`, and the next line shows `b = \frac{-2a + P}{2}` with no comment. A weak student will think a step is missing. R12 fixes the key form, so explain it rather than change it.
- Fix: after line 171 (`$$b = \frac{-2a + P}{2}.$$`) add the line `Bu $\frac{P - 2a}{2}$ ning o'zi; javobda hadlarni harflar alifbosi tartibida yozamiz (mashqlardagi kabi).`

**M5. Self-reference at 08:330.** It reads `*Equivalent* — "teng kuchli" (7-bobda ko'rgandik)`, but the term is defined in this chapter (08:149) together with its English.
- Fix: `(7-bobda ko'rgandik)` → `(shu bobda ko'rdik)`.

**M6. Comma before "va" joining clauses** (same style fix as the earlier ch14:139 finding). Remove the comma in each:
- 08:15 `bo'limidan biri, va uning` → `bo'limidan biri va uning`
- 09:133 `noto'g'ri tenglik, va $x$` → `noto'g'ri tenglik va $x$`
- 10:94 `$5 + 15 = 20$, va $20 \leq 17$` → `$5 + 15 = 20$ va $20 \leq 17$`
- 12:45 `vertikal (tik), va ularni` → `vertikal (tik); ularni`
- 12:189 `bilan yoziladi, va uning` → `bilan yoziladi va uning`

**M7. Graph lines cross tick labels (cosmetic):**
- In 12_burchak_koeffitsiyenti.png the blue line crosses the x-label "−2".
- In 13_kesishish.png the blue line crosses "−1" and the red dashed line crosses "4".

Fix: give tick labels a white backing in the tick loops.
- kitob/rasmlar/12_burchak_koeffitsiyenti.py:33 and kitob/rasmlar/13_kesishish.py:32: add `bbox=dict(boxstyle="square,pad=0.05", fc="white", ec="none"), zorder=3` to the `ax.text(k, -0.4…)` calls.

**M8. Javoblar number style differs from the text** (book-wide tooling; flag to the controller, not slice-specific). In the rendered Javoblar:
- Big integers print ungrouped: `8.22. 12500`, `11.16. 310000`, `11.23. 600000`, `12.21. 5000`, `13.19. 9000`. The text writes `248\,000` (R11).
- Plain negative numbers print with a hyphen (`8.8. -1`, `S15.5. -5`), while expression answers print a true minus (`− 4 a+9 b`).

Optional fix, in yigish.py's Javoblar rendering only (keys and `fmt` unchanged): for a key matching `^-?\d+$`, emit it as math (`$-1$`, `$310\,000$` for |n| ≥ 10 000).

## Deferred-minor triage (items in this slice)

| Deferred item (progress.md) | Decision | Reason / exact fix |
|---|---|---|
| Task 4: "several mashq-to-mashq answer duplicates in ch09–11 (not leaks)" | **DROP** | Equal answer values across unrelated problems do the reader no harm, and the leak scan above confirms none comes from a misol. The one real near-duplicate *problem* is handled separately as M3 (m13-23 vs m11-12). |
| Task 5: "13_kesishish dashed line now starts at x=0 (cosmetic)" | **DROP** | Extending the red line left (to x ≈ −0.5, y = 8) brings back the collision with the y-label "8" that Task 5 fixed. The segment is correct and Misol 1 reads only the intersection. If M7's white label backing is applied, the line could be extended safely with `ax.plot([-0.5, 5], [8, -3], …)` at 13_kesishish.py:40, but that is optional. |

## Notes (no action)

- javoblar/08–11.py have no MATNDAGI leak guard (the guard started in ch12, R13). My scan above found no leaks, so a retrofit is not needed for correctness.
- Some item templates repeat on purpose, so a student can compare methods: the phone tariff in m9-24 (equation) and m10-22 (inequality), and two-price ticket problems in s11-3 (one unknown) and s13-5 / Misol 5 of ch13 (system). Acceptable.
- s12-4 uses 45 in `C = 45h + 60`, the same number as the chapter-intro example question at 12:16 ("best interpretation of 45"). The key is a letter, so this is not a leak.
