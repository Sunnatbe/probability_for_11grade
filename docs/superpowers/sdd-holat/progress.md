# SDD ledger — plan: docs/superpowers/plans/2026-10-12-matematika-poydevori.md
Spec: docs/superpowers/specs/2026-10-12-matematika-poydevori-design.md
Branch: claude/magical-gauss-anbzr8 (feature branch; no separate worktree)

## Pre-flight scan
| Tasks | Shared file/interface | Finding |
|---|---|---|
| 1 ↔ 2-8 | mashq div interface (`.mashq`/`.sat`, id, javob, daraja), fmt | consistent; but worked examples have no markup yet tuzilish check must count 3–5 → R1 |
| 1 ↔ 2-8 | docx test "no `$` in text" vs SAT questions with dollar amounts | conflict → R2 |
| 1 ↔ 2-8 | part titles (I–IV) — spec lists parts, no task places them | gap → R3 |
| 1 ↔ 8 | ids d-N / y-N, numbering by filter "bob.raqam" | d/y have no chapter number → R4 |
| 1 ↔ 2-7 | rasmlar/chiqish paths resolved by pandoc | Task 1 must set resource path to kitob/ → R5 |
| 2-7 internal | each task: md + javoblar + rasmlar, check + build | self-consistent |
| 8 internal | diagnostic 42 = 21×2; final 40 = 12+14+7+7 | consistent |
| 9 | verification only | consistent |

Ruling R1: worked examples are `::: {.misol}` divs (no answer attr), rendered with a bold "Misol N." label; tuzilishni_tekshir counts 3–5 of them — spec requires 3–5 worked examples and the checker needs a marker — if wrong: one regex to change.
Ruling R2: the docx test checks for unrendered LaTeX (any `\word` command, `^{`, `_{`, or `$` followed by a letter/backslash) instead of any `$`; currency is written `\$15` in markdown and is allowed — SAT items naturally use dollars — if wrong: a test regex.
Ruling R3: yigish.py inserts a level-1 part title page before chapters 01, 08, 16, 19 ("I qism. Sonlar va arifmetika", "II qism. Algebra asoslari", "III qism. Ma'lumotlar va ehtimollik", "IV qism. Geometriya") — spec's table of contents is grouped into these parts — if wrong: one mapping in yigish.py.
Ruling R4: numbering label is "<bob>.<n>" for m/s ids, "<n>" for d/y ids; Javoblar section groups by file in order 00, 01–21, 99 — if wrong: filter tweak.
Ruling R5: yigish runs pandoc with `--resource-path=kitob` (cwd-independent) — if wrong: images missing, caught by Task 9 visual check.
Task 1: dispatched (BASE 7c27948, implementer a01ae8c6804a8c233, model sonnet)
Ruling R6: SAT ko'prigi items are labelled "S<bob>.<n>." (body and Javoblar), mashq stay "<bob>.<n>." — R4 made m3-1 and s3-1 both '3.1.', ambiguous for students — if wrong: one label string in filtr.lua/yigish.py.
Note: build requires apt package libreoffice-math (installed in this container by Task 1).
Task 1: review 1 — spec ❌ (R6 missing), 4 Important: R6 labels; fmt TypeError uncaught in javoblarni_tekshir; failure paths untested; libreoffice-math not documented
Task 1: minor (deferred): TOC page test can pass on TOC page itself — also assert page lacks "Mundarija"
Task 1: minor (deferred): no pdftotext assertion that equations survive
Task 1: minor (deferred): mashqlar parsed on raw text but tuzilish strips code fences — fenced example divs break answer check
Task 1: minor (deferred): single-quoted/unquoted javob reported as "javob atributi yo'q"
Task 1: minor (deferred): chapter prose apostrophes not normalised (only Lug'at) — tell authors to use '
Task 1: minor (deferred): fmt(bool) returns "True"; alphabet sort ignores "ng"; bare ImportError without uno; stale docx/pdf not deleted on failed build
Task 1: fix round 1/5 (4 addressed, 0 open; commits 9ac4ced..24963d8)
Task 1: minor (deferred): README lacks python3-uno package name
Task 1: complete (commits 7c27948..24963d8, review clean)
Task 2: dispatched (BASE 24963d8, chapters 01–04, model opus)
Task 1: minor (deferred, found in Task 2): tekshir.py has no __main__, `python3 kitob/tekshir.py` is a silent no-op though plan step 4 uses it
Ruling R7: chapter authors avoid `\text`, `\qquad`, a lone `$=$`, and `\not` (LibreOffice drops/garbles them in PDF); an Uzbek term already in an earlier chapter's Yangi so'zlar is not re-listed with a different English gloss — found by Task 2 implementer — if wrong: cosmetic PDF glitches / duplicate glossary rows
Task 2: review 1 — spec ✅, math all correct; 2 Important: m2-1/m2-17 reuse worked-example numbers (answer leak); s1-1 implicit multiplication untaught; 7 Minor content edits
Ruling R8: one-line content Minors from a chapter review ride along in that task's fix round (they never gate the re-review or extend the loop) — editing the book later costs a fresh context per chapter, now it costs one message — if wrong: slightly larger fix diffs
Task 2: fix round 1/5 (2 gating + 7 minor addressed, 0 open; commits 619491d..5eab153)
Task 2: complete (commits 24963d8..5eab153, review clean)
Task 3: dispatched (BASE 5eab153, chapters 05–07, model opus)
Ruling R9: the answer checker must accept `}` inside a quoted javob value (symbolic answers in ch08/14/15 need it) — Task 1 tooling defect found by Task 3; fixed by a small tooling dispatch before Task 4 — if wrong: authors forced into brace-free LaTeX answers
Ruling R10 (extends R7): no math span may start with `=` (e.g. `$= 1000$` prints "¿"); continue the equation inside one span instead
Tooling R9: dispatched to Task 1 implementer, commit e9a032b (598cc04..e9a032b)
Tooling R9: review clean (all addressed)
Tooling R9: minor (deferred): yigish.py:124 plain-brace answer like {1,2,3} wrapped in $..$ loses braces (set answers in ch.18 would hit it)
Tooling R9: minor (deferred): exec loader fails on UTF-8 BOM (use utf-8-sig)
Tooling R9: minor (deferred): tekshir CLI prints OK for nonexistent root / empty boblar
Tooling R9: minor (deferred): _JAVOB regex edge cases (trailing backslash, \{ unescape)
Task 3: review 1 — spec ✅, math all correct; 2 Important (ch07 √(a²)=|a| under a≥0 header; ≥/≠ untaught); 6 Minor (R8: ride along)
Task 3: fix round 1/5 (2 gating + 6 minor addressed, 0 open; commits e9a032b..a2480c6)
Task 3: complete (commits 5eab153..a2480c6, review clean)
Task 4: dispatched (BASE a2480c6, chapters 08–11, model opus)
Ruling R11 (extends R7/R10): no math span holding only `<` or `>`; thousands written `2\,500` (not `2{,}500`); answer formats: expressions highest degree first, letters alphabetical, constant last; solved formulas as one fraction (`$x = \frac{y + 10}{4}$`); special cases "yechimi yo'q" / "cheksiz ko'p yechim"; polynomial helper `Ifoda` may be copied from javoblar/08.py — found by Task 4 — if wrong: cosmetic
Task 4: review B (ch10–11) — 2 Important (ch11:56 false contrast; m11-14 leak), 6 Minor
Task 4: review A (ch08–09) — Approved, 0 Important, 11 Minor (incl. Ifoda sign/order convention)
Ruling R12: answer-key form for literal answers is strict canonical order everywhere — total degree highest first, letters alphabetical case-insensitively, constant last, a leading negative allowed (−2x + 18, \frac{-2a + P}{2}); a negative single-term fraction renders −\frac{x}{2}; `ozod_oldin` option removed; format examples in text follow the same order; prose working steps may stay natural — matches y = mx + b in ch12 and gives one rule a student can follow — if wrong: some keys read less naturally (P − 2a vs −2a + P)
Task 4: fix round 1/5 (2 gating + all minors addressed, 0 open; commits f6e198e..27829d2; implementer interrupted once by API rate limit, resumed)
Task 4: minor (deferred): several mashq-to-mashq answer duplicates in ch09–11 (not leaks)
Task 4: complete (commits a2480c6..27829d2, review clean)
Task 5: dispatched (BASE 27829d2, chapters 12–15, model opus)
Ruling R13 (extends R7): systems written as two stacked `$$` lines, not `\begin{cases}`/`\left\{` (prints bracket on both sides); in matplotlib labels a negative after a comma needs braces `$(0, {-3})$`; ch12 introduced f(x) at a basic level — found by Task 5 — if wrong: cosmetic
Task 5: review B (ch14–15) — 1 Important (m14-25 leak), 6 Minor
Task 5: review A (ch12–13) — Approved, 11 Minor
Task 5: fix round 1/5 (1 gating + 17 minor addressed, 0 open; commits 3b7fee4..91638e5)
Task 5: minor (deferred): 13_kesishish dashed line now starts at x=0 (cosmetic)
Task 5: complete (commits 27829d2..91638e5, review clean)
Task 6: dispatched (BASE 91638e5, chapters 16–18, model opus)
Task 6: implementer interrupted once by API rate limit, resumed; ch16–18 committed (91638e5..394c13d)
Ruling R14 (extends R7): no `\mathrm{word}` inside math (prints letter-spaced in PDF; write words outside math); a prose line inside a div that starts with `b) …` becomes a list item in the PDF — avoid line-initial `a)`/`b)` outside the Mashqlar item pattern — found by Task 6 — if wrong: cosmetic PDF glitches
Task 6: review B (ch18) — math all correct; 3 Important (m18-5 leak, fair coin/die unstated, term), 7 Minor
Ruling R15: ch18 uses "mustaqil hodisalar" / "bog'liq hodisalar" for independent/dependent events — the author's own site (index.html) uses exactly these terms; chosen over the reviewer's "bog'liqmas" and the implementer's "bog'liqsiz" — if wrong: a find-and-replace in ch18
Task 6: review A (ch16–17) — math all correct; 3 Important (caption leak, s17-1 wrong-row shortcut, misol 3b printed readings), 9 Minor
Task 6: fix round 1/5 (6 gating + all minors addressed except B3 heading; commits 394c13d..9fd61e0)
Task 6: fix round 2/5 (B3 heading + m18-24 wording; commit 9fd61e0..d33212b)
Ruling R16: round 2 was a heading rename + one phrase, verified by case-insensitive grep and tekshir.py rather than a re-review dispatch — a two-line rename cannot affect math or answers — if wrong: a leftover word in ch18
Task 6: minor (deferred): some answers equal numbers that appear only as given data in the text (m17-9 = 130, m17-2 = 80, m18-23 30/25) — not leaks
Task 6: complete (commits 91638e5..d33212b, review clean)
Task 7: dispatched (BASE d33212b, chapters 19–21, model opus)
Ruling R17: expressions mixing a number and π are written number first (`60 + 20\pi`, `144 - 36\pi`) as in SAT answer choices — R12's constant-last applies to polynomials in letters, π is a number; the Mashqlar intro of ch20 states the format — if wrong: one formatting function plus m20-18 and m20-26
Task 7: ch19–21 committed (d33212b..d84b01c); root-denominator rationalization taught in ch19 (not in ch07), ch21 relies on it
Task 7: review B (ch20) — Approved; 0 Important, 7 Minor
Task 7: review A (ch19, ch21) — Approved, 0 Important, 7 Minor (see task-7 findings in progress notes: sin 90° undefined; plain-number x note in ch19 intro; MC answer values not in leak guard (s19-3=9, s19-5=12); figure degree label gap; angle-sum proof lacks drawing; unnamed rationalizing technique)
Task 7: minor (deferred, ch19/21): ch21:176 aside uses sin 90° (undefined in chapter) — keep only "o'tkir burchakning sinusi doim 1 dan kichik"; ch19 Mashqlar intro should say solved x is a plain number (as ch21:192); leak guard should also compare MC option values; degree label gaps in 19_sat.py/19_maxsus.py/21_narvon.py ("48 °"); angle-sum proof (19:118) needs a drawing or a naming sentence; give the rationalizing technique a name/gloss "maxrajni ildizdan qutqarish (rationalizing the denominator)"
Task 7: minor (deferred, ch20): see task-7-findings-B.md items 1–7 (S20.2 distractor C negative; Bu bobda prior list; "yoy 360°" phrase; m20-23 too easy for C; orphan "Misol 1." label; "doim")
Task 7: complete (commits d33212b..d84b01c, review clean — no gating findings; minors deferred to the final review's triage)
Task 8: dispatched (BASE d84b01c, kirish + yakuniy test, model opus)
Task 8: dispatched (BASE a9638d7, kirish + yakuniy test, model opus) — 2026-10-20 resumed in fresh container; env (pandoc, libreoffice-math, pytest) verified
Task 8: implementer done, commit 82ac80a (193 pp, 39 tests pass); reviewer next. Concerns: ch1 ex 1.17 bracket; SAT facts to confirm; Javoblar label 'Mashqlar:' for d/y
Task 8: review — blind solve 82/82 match; reviewer: 5 Important (d-25, d-10, y-32, y-18 duplicates of chapter items; kirish l.337 contradiction) + 11 minor; fix round 1 sent to implementer
