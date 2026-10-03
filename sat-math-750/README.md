# SAT Math 750+ — darslar to'plami (Kholmurodov Academy)

`SAT_Math_750_darslar.zip` — kursning 36 ta darsi uchun tayyor materiallar
(«SAT_Math_kurs_tuzilmasi.xlsx» → «Darslar» varag'i bo'yicha, 6 modul):

- `DarsNN_<mavzu>.pptx` — 11 slaydli taqdimot (16:9), har bir slaydda video uchun spiker matni (Notes);
- `DarsNN_ssenariy.pdf` — 4 sahifali video ssenariysi (11 sahna: vaqt, slayd, ekranda, ko'rsatma, gapiriladigan matn);
- `DarsNN_konspekt.pdf` — 2 sahifali A4 konspekt (inglizcha kalit so'zlar, algoritm, yechilgan misollar, tuzoqlar, mini-mashq).

Dizayn 3-dars namunasi (`Dars03_Chiziqli_tenglamalar.pptx`, `Dars03_konspekt.pdf`) asosida.

## Qayta yig'ish

```bash
cd generator
npm install
node build_all.js        # → build/SAT_Math_750_darslar.zip
```

Talablar: Node.js, Chromium (Playwright), `zip`; shriftlar: Carlito, KaTeX (npm), Latin Modern (`generator/fonts`).

- `generator/lessons/dNN.js` — har bir darsning mazmuni (matnlar, misollar, javoblar); formulalar `$...$` ichida LaTeX.
- `generator/build_ppt.js` — taqdimot (pptxgenjs), `generator/build_pdf.js` — konspekt (KaTeX + Chromium).
- `generator/meta.json` — Excel'dagi «Darslar» varag'idan olingan ro'yxat.
