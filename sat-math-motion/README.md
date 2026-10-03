# SAT Math — 1-dars: motion kliplar (Remotion)

`SAT_Math_Dars01_Digital_SAT_va_diagnostika_motion.txt` dagi 6 ta promptning Remotion versiyasi.
Tayyor videolar: `out/` (1920×1080, 30 fps, H.264, ovozsiz).

| Klip | Fayl | Davomiyligi | Qo'yiladigan joy |
|---|---|---|---|
| SAT-01-P1 · Intro | `out/SAT-01-P1-Intro.mp4` | 6 s | 0:00 |
| SAT-01-P2 · 4 fakt | `out/SAT-01-P2-Tuzilma.mp4` | 12 s | 3:00 |
| SAT-01-P3 · 1-misol | `out/SAT-01-P3-Misol1.mp4` | 15 s | 4:00 |
| SAT-01-P4 · 3 domen | `out/SAT-01-P4-Domenlar.mp4` | 10 s | 6:45 |
| SAT-01-P5 · «Positive» tuzog'i | `out/SAT-01-P5-Tuzoq.mp4` | 8 s | 9:45 |
| SAT-01-P6 · Xulosa | `out/SAT-01-P6-Xulosa.mp4` | 8 s | 11:45 |

P5 da misol to'liq qilib berildi: *What is the positive solution to x² − x − 12 = 0?* →
x = 4 yoki x = −3 (−3 ✗) → «Savol bitta ildizni so'raydi: −3 ni belgilash — xato.» + «Javob: 4».

## Ishlatish

```bash
npm install
npm run studio   # brauzerda ko'rish va tahrirlash
npm run render   # hamma kliplarni out/ ga render qilish
```

Fontlar (Inter, Source Serif 4) `src/fonts/` ichida — internetsiz ham render bo'ladi.
Brauzer yo'lini berish kerak bo'lsa: `REMOTION_BROWSER=/path/to/chrome npm run render`.
Sahnalar: `src/scenes/P1Intro.tsx` … `P6Outro.tsx`; ranglar va fontlar: `src/theme.ts`.
