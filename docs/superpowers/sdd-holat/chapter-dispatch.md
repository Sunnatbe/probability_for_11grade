# Chapter task: how to work (shared by Tasks 2–7)

You are writing chapters of "Matematika poydevori — SAT'ga tayyorgarlik uchun" by Sunnatulla Xolmurodov, an Uzbek math teacher who prepares students for SAT Math. Students start weak in arithmetic; the book takes them from numbers to SAT-level foundations.

## Read first (in order)
1. Task brief (chapter-task steps and a table; your row is named in your dispatch): task-2-brief.md in this folder
2. Shared context, binding: common.md in this folder (Global Constraints, mashq/javob interface, rulings R1–R8, and "Lessons from earlier chapter reviews")
3. kitob/README.md section "Bob yozish qoidalari" (exact Markdown conventions — follow literally)
4. The existing chapters in kitob/boblar/ and kitob/javoblar/ (style model; skim one fully, and the Yangi so'zlar tables of all)

## Content quality bar (this is the product)
- Warm, clear teacher voice for a 15–17-year-old, natural Uzbek Latin, straight apostrophe ' only. Short paragraphs. Every new term *o'zbekcha (english)* on first use.
- Each chapter: "Bu bobda" list naming the SAT domain; Yangi so'zlar table; Tushuntirish with rules and 3–5 `.misol` solved step by step; Ko'p uchraydigan xatolar (typical wrong solution vs correct); Mashqlar 20–30 (≥5 each of A/B/C, rising difficulty; C includes multi-step word problems in Uzbek everyday contexts: so'm, bozor, maktab, sport, sayohat); SAT ko'prigi 3–5 English items in authentic SAT style (MC A–D or student-produced response) using only that chapter's skills.
- All problems are original. Never copy or paraphrase SAT/College Board or textbook items.
- Use only concepts from this or earlier chapters; if you must mention a later topic, add a pointer ("N-bobda batafsil").
- Math correctness is non-negotiable: every answer computed in javoblar/NN.py from an expression (Fraction/Decimal), never a typed result; MC letters via a helper asserting uniqueness. Re-check every worked example's steps by hand.
- Formulas in `$...$` LaTeX; currency `\$12`; respect R7 pitfalls.

## Environment
- Repo /home/user/probability_for_11grade, branch claude/magical-gauss-anbzr8, work from repo root. Tooling installed.
- Check: `python3 kitob/yigish.py` (runs answer + structure checks, then builds). Keep shell output small.
- Commit after each chapter ("Add chapter NN: <title>"), each message ending with exactly:
  Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01Be86frcDbvTM1echaH2Esn
  Do not push. No model names elsewhere.

## Rules
- Never spawn subagents or reviewers; the controller reviews afterwards.
- If the build tooling seems wrong (not your content), stop and report rather than editing tekshir.py/yigish.py/filtr.lua.
- If stuck: report BLOCKED or NEEDS_CONTEXT with specifics.

## Report
Write the full report to the report path in your dispatch: per chapter counts (misol, mashq per daraja, sat), figures, short check/build output, files changed, self-review findings, concerns (including anything later chapters must know). Then reply with ONLY (under 15 lines): Status, commits (short SHA + subject), one-line check summary, concerns, report path.
