# General English: A2 → B1 — Kholmurodov Academy

- `General_English_kurs_tuzilmasi.xlsx` — kurs rejasi (6 modul, 36 dars), `make_xlsx.py` orqali yaratilgan.
- `General_English_darslar.zip` — 36 ta dars uchun materiallar:
  - `DarsNN_<mavzu>.pptx` — 11 slayd, emojilar bilan; har bir slaydda video uchun spiker matni (Notes);
  - `DarsNN_konspekt.pdf` — 2 sahifali A4 konspekt.
- `namuna/` — tasdiqlangan namuna (3-dars, Present Simple).

Listening darslarida audio yo'q — tinglash matnlari (transcript) berilgan.

## Qayta yig'ish

```bash
cd generator && npm install && node build_all.js   # → build/General_English_darslar.zip
```

Har bir darsning mazmuni: `generator/lessons/dNN.js` (matnlar, misollar, javoblar, `emoji` maydoni).
