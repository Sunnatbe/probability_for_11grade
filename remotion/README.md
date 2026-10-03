# General English A2 → B1 — 1-dars: motion grafikalar (Remotion)

`General_English_Dars01_Kirish_va_diagnostika_motion.txt` dagi 6 ta prompt Remotion'da kod sifatida qilingan.
Hammasi 1920×1080, 30 fps, ovozsiz. Tayyor MP4 fayllar `out/` papkasida.

| ID | Sahna | Qayerga | Davomiyligi | Fayl |
|---|---|---|---|---|
| ENG-01-P1 | Intro (dars ochilishi) | 0:00 | 6 s | `out/ENG-01-P1_Intro.mp4` |
| ENG-01-P2 | 4 ko'nikma | 2:46 | 12 s | `out/ENG-01-P2_4-konikma.mp4` |
| ENG-01-P3 | 1-misol (grammatika savoli) | 3:41 | 15 s | `out/ENG-01-P3_1-misol.mp4` |
| ENG-01-P4 | A2, B1, B2: farqi nimada? | 6:13 | 10 s | `out/ENG-01-P4_3-holat.mp4` |
| ENG-01-P5 | «Tasodifiy javob» tuzog'i | 8:58 | 8 s | `out/ENG-01-P5_Tuzoq.mp4` |
| ENG-01-P6 | Xulosa va keyingi dars | 10:49 | 8 s | `out/ENG-01-P6_Xulosa.mp4` |

## Ishga tushirish

```bash
cd remotion
npm install
npm start            # Remotion Studio — ko'rish va tahrirlash
npm run render:all   # 6 ta klipni out/ ga render qilish
npm run render:p3    # bitta klip
```

`ENG-01-All` kompozitsiyasi 6 ta klipni ketma-ket ko'rsatadi (faqat ko'rib chiqish uchun).

## Tuzilishi

- `src/theme.ts` — ranglar (navy `#1B1F3B`, indigo `#4F46E5`, amber `#F59E0B`, lavender `#C7CCF5`), shrift, o'lcham.
- `src/scenes/P1Intro.tsx … P6Outro.tsx` — har bir prompt uchun alohida sahna. Ekrandagi matnlar fayl boshida konstanta sifatida turibdi — matnni o'zgartirish uchun shu yerni tahrirlang.
- `src/components/` — fon, strelka, belgi (✓), konfetti.
- Shrift: Inter (`@fontsource/inter`, internetsiz ishlaydi).

Keyingi darslar uchun: `src/scenes` dagi fayllardan nusxa olib, matn va vaqtlarni almashtiring, `src/Root.tsx` dagi `CLIPS` ro'yxatiga qo'shing.
