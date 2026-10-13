# «Matematika poydevori» — ishni davom ettirish (holat: 2026-10-13)

Reja: `docs/superpowers/plans/2026-10-12-matematika-poydevori.md`, spec: `docs/superpowers/specs/2026-10-12-matematika-poydevori-design.md`.
Branch: `claude/magical-gauss-anbzr8`, oxirgi kitob commiti `d84b01c`.

## Bajarilgan va tekshirilgan
- Task 1 (yig'ish tizimi) va Task 2–7: **1–21-boblar** yozilgan, har biri mustaqil tekshiruvchidan o'tgan (matematika, til, chizmalar, javoblar). `python3 kitob/yigish.py` → 180 betli PDF.
- Mudofaa: javoblar Python bilan hisoblanadi, `MATNDAGI` himoyasi javob matnda ko'rinib qolishini ushlaydi.

## Qolgan ishlar (shu tartibda)
1. **Task 8** — `kitob/boblar/00-kirish.md` + `kitob/javoblar/00.py` (muallifdan so'z, foydalanish yo'riqnomasi, 42 savolli diagnostik test `d-1…d-42`, har bobdan 2 tadan; natija jadvali) va `99-yakuniy-test.md` + `99.py` (40 savol `y-1…y-40`, taqsimot 12/14/7/7, yarmi inglizcha SAT uslubida, ball jadvali). Birinchi urinish API limiti tufayli to'xtagan, hech narsa yozilmagan. Talablar: `task-8-brief.md` va ushbu papkadagi `common.md`.
2. **Mayda tahrirlar** (kechiktirilgan): `progress.md` dagi "minor (deferred)" qatorlari va `task-7-findings-B.md` (ch19–21), Task 1 tooling minorlari.
3. **Yig'ish dasturidagi kamchilik:** mundarijadan keyin bo'sh bet (3-bet) chiqyapti — `kitob/yigish.py` da tekshirib tuzatish.
4. **Umumiy (butun branch) tekshiruv** — eng kuchli model bilan; kechiktirilgan minorlarni saralash; bitta tuzatish to'lqini, bitta qayta tekshiruv.
5. **Task 9** — yakuniy tekshiruv: `pytest`, `yigish.py`, PDF matni (mundarijada 21 bob + kirish + yakuniy test + lug'at + javoblar; `$`, `\frac`, `¿` yo'q), bet soni, bir nechta betni ko'zdan kechirish; `.docx` va `.pdf` ni muallifga yuborish.

## Yangi konteynerda boshlash
- Dasturlar: `pandoc`, `libreoffice-writer`, **`libreoffice-math`**, `poppler-utils`; `pip install pytest matplotlib python-docx` (batafsil: `kitob/README.md`).
- Ish tartibi: `superpowers:subagent-driven-development`. Bu papkadagi fayllarni `.superpowers/sdd/2026-10-12-matematika-poydevori/` ichiga nusxalang (`common.md`, `progress.md`, `chapter-dispatch.md`, `chapter-review.md`); `progress.md` da Task 1–7 "complete" ekani yozilgan, Task 8 dan davom eting. `common.md` — qoidalar R1–R17 va darslar; har bir yordamchiga shu fayl majburiy.
- `.superpowers/` git'da e'tiborga olinmaydi (`.git/info/exclude`); bu papka — uning nusxasi.
