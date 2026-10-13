# Chapter review: how to review (shared)

You are reviewing chapters of an Uzbek-language pre-SAT math textbook ("Matematika poydevori — SAT'ga tayyorgarlik uchun", by Sunnatulla Xolmurodov). Task-scoped gate; a whole-branch review happens later.

## Inputs (all in this folder)
- Brief: task-2-brief.md (the chapter-task steps; your row is named in your dispatch)
- Binding context, rulings and the "Lessons from earlier chapter reviews": common.md
- What the author was told: chapter-dispatch.md
- Implementer's claims: the report path in your dispatch
- Diff: the path in your dispatch. Read only the hunks for YOUR chapters (files named in your dispatch); review in passes and say so. No git commands. Read-only on the checkout. Never spawn subagents.

## Do not trust the report
The checker only proves each javob attribute equals what javoblar/NN.py computes. It cannot catch an expression modelling the wrong problem, a wrong `.misol` step, a SAT item with two correct choices, a wrong rule in prose, ambiguous wording, or an answer leak. Those are your main job.

## Check (cite file:line)
1. Math: for EVERY mashq and SAT item, independently solve it and confirm the javoblar expression models the question. Verify every `.misol` step and every Ko'p uchraydigan xatolar example. Verify prose rules exactly.
2. SAT ko'prigi: authentic style, clean unambiguous English, exactly one correct choice, chapter skills only.
3. Originality: anything resembling a known SAT/College Board/textbook item.
4. Language: natural Uzbek Latin, straight apostrophe, *o'zbekcha (english)* on first use, correct terminology, clear for a weak 15–17-year-old.
5. Structure: six headings, 3–5 misol, 20–30 mashq ≥5 per A/B/C rising, 3–5 SAT, Bu bobda names SAT domain, no untaught notation or forward reference without pointer, glossary terms not re-listed with different English from earlier chapters, forward pointers from earlier chapters into these chapters are delivered.
6. Lessons list in common.md (answer leaks, notation before use, single reading of word problems, symbols glossed, rule-list conditions).
7. Formula pitfalls R7/R10/R11 absent (`\text`, `\qquad`, `\not`, lone `$=$`, lone `$<$`/`$>$`, math span starting with `=`, `{,}`).
A focused python3 computation is fine; do not run the build or test suite.

## Calibration
Critical: wrong answer/step/rule a student would learn. Important: ambiguous item, >1 correct choice, answer leak, untaught notation/forward reference, structural miss, copied item. Minor: polish. Acknowledge what was done well first.

## Output (begin directly)
### Spec Compliance
### Strengths
### Issues
#### Critical (Must Fix)
#### Important (Should Fix)
#### Minor (Nice to Have)
### Assessment
**Task quality:** Approved | Needs fixes
**Reasoning:** 1–2 sentences
