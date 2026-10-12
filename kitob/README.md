# Matematika poydevori: kitobni yig'ish

## Kerakli dasturlar

Tizim paketlari (Ubuntu/Debian):

```
sudo apt-get install pandoc libreoffice-writer libreoffice-math poppler-utils
```

`libreoffice-math` shart: usiz PDF'da formulalar yo'qolib qoladi (yig'ish bu holda xato beradi).
`poppler-utils` (`pdftotext`, `pdfinfo`) testlar uchun kerak.

Python paketlari: `pip install pytest matplotlib python-docx`. LibreOffice'ning Python ko'prigi (`import uno`) tizim `python3` da bo'lishi kerak.

## Yig'ish va test

```
python3 kitob/yigish.py            # kitob/chiqish/matematika-poydevori.docx va .pdf
python3 -m pytest kitob/tests -q   # testlar
```

Javoblar `javoblar/NN.py` bilan mos kelmasa yoki bob tuzilishi buzilgan bo'lsa, yig'ish xatolar ro'yxatini chiqarib to'xtaydi. `kitob/chiqish/` git'ga kiritilmaydi.

## Bob yozish qoidalari (Markdown)

- Fayl: `boblar/NN-nom.md` (`00-kirish`, `01`...`21`, `99-yakuniy-test`). Apostrof har joyda to'g'ri `'` (o', g', SAT'ga); `ʻ` yoki `’` ishlatmang.
- Bitta `# Bob nomi`, keyin aynan shu `##` sarlavhalar shu tartibda: `Bu bobda`, `Yangi so'zlar`, `Tushuntirish`, `Ko'p uchraydigan xatolar`, `Mashqlar`, `SAT ko'prigi`. Kichik sarlavhalar uchun `###`.
- Formulalar: `$...$` yoki `$$...$$` (LaTeX; Word'da tahrirlanadigan tenglama bo'ladi). Dollar valyuta bo'lsa `\$15` deb yozing.
- Yechilgan misol (3-5 ta): `::: {.misol}` ... `:::` (atributsiz). Matnda "Misol N." deb raqamlanadi.
- Mashq (20-30 ta, A, B, C darajalarda kamida 5 tadan):

  ```
  ::: {.mashq #m3-12 daraja="B" javob="7/12"}
  $\frac{1}{3} + \frac{1}{4}$ ni hisoblang.
  :::
  ```

  Matnda `3.12.` (bob.raqam) bo'ladi. Kirish va yakuniy testda `#d-1`, `#y-1` ishlatiladi (matnda `1.`).
- SAT savoli (3-5 ta, faqat inglizcha): `::: {.sat #s3-2 javob="C"}`; matnda `S3.2.` bo'ladi. Variantlar bo'sh qatordan keyin `A) ...` ro'yxati, har biri alohida qatorda, qatorlar orasida bo'sh qator. Grid-in savolda `javob` qiymatning o'zi.
- `javob` va `daraja` o'quvchiga ko'rinmaydi; javob faqat kitob oxiridagi `Javoblar` bo'limida chiqadi.
- `javob` qiymati `javoblar/NN.py` dagi hisob natijasining kanonik matni bilan bir xil bo'lishi kerak (`tekshir.fmt`): `7`, `7/12`, `-3/4` (oddiy minus), `2.5`, `C`. `javoblar/NN.py`: `JAVOBLAR = {"m3-12": F(1, 3) + F(1, 4), "s3-2": "C"}`.
- Faqat eng yuqori darajadagi div'lar qayta ishlanadi: `.mashq`, `.sat`, `.misol` ni boshqa div yoki ro'yxat ichiga joylamang.
- Lug'at: `## Yangi so'zlar` ostida sarlavhasi aynan `| O'zbekcha | English |` bo'lgan jadval:

  ```
  | O'zbekcha | English |
  |---|---|
  | kasr | fraction |
  ```

  Yakuniy `Lug'at` bo'limi barcha jadvallardan avtomatik yig'iladi (takrorsiz, o'zbek alifbosi tartibida).
- Rasm: `![Sarlavha](rasmlar/chiqish/NN_nom.png){width=70%}`. Rasmni `rasmlar/NN_nom.py` (matplotlib) yaratadi va `Path(__file__).parent / "chiqish"` ga saqlaydi; yig'ishda barcha `rasmlar/*.py` ishga tushiriladi.
- Qism sarlavhalari (I-IV qism) 01, 08, 16, 19 boblar oldidan avtomatik qo'shiladi; ularni bobga yozmang.
