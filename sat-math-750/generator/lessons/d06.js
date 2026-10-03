module.exports = {
  n: 6,
  short: 'Grafik_jadval_kontekst',
  en: 'Linear functions: graphs, tables and context',
  video: '12 min',
  hook: "SAT faqat «slope nechaga teng?» deb so'ramaydi — ko'pincha «bu son nimani bildiradi?» deb so'raydi. Bugun shu talqin savollarini va jadvaldan funksiya tuzishni o'rganamiz.",
  goals: [
    ['Kontekstda slope', "«har bir birlikka qancha o'zgaradi»"],
    ["Boshlang'ich qiymat", 'y-intercept — $x=0$ dagi miqdor'],
    ['Jadvaldan funksiya', 'Jadval yoki grafikdan $f(x)=mx+b$ tuzish'],
  ],
  kw: [
    ['increase', 'oshish, ortish', 'increases by 4'],
    ['decrease', 'kamayish', 'decreases by 3 liters'],
    ['represent', 'ifodalaydi', 'What does 65 represent?'],
    ['interpret', 'talqin qilmoq', 'best interpretation'],
    ['initial value', "boshlang'ich qiymat", '$x=0$ dagi qiymat'],
    ['rate', "tezlik, sur'at", '\\$12 per hour'],
    ['estimated', 'taxminiy', 'estimated cost'],
    ['constant rate', "o'zgarmas tezlik", 'burns at a constant rate'],
  ],
  core: {
    title: 'Talqin qilish: 4 qadam', en: 'Interpreting a model',
    steps: [
      ['Kattaliklarni aniqla', '$x$ va $y$ nimani bildiradi, birligi qanday?'],
      ["Slope ma'nosi", "$x$ 1 ga oshsa, $y$ $m$ ga o'zgaradi"],
      ["Intercept ma'nosi", "$x=0$ dagi (boshlang'ich) miqdor"],
      ['Birlik bilan javob', '«dollar per month», «litr» kabi'],
    ],
    note: "Formula: slope birligi = $y$ birligi / $x$ birligi — birliklar ma'noni ochib beradi.",
  },
  cases: {
    title: "Bir funksiya — 3 ko'rinish", en: 'Equation, table, graph',
    intro: "Funksiya uch xil berilishi mumkin — hammasidan $m$ va $b$ ni topamiz:",
    items: [
      { badge: 'f', t: 'Tenglama', en: 'equation', rule: '$C=12h+30$', ex: 'slope 12, intercept 30', res: '$m=12,\\ b=30$' },
      { badge: '▦', t: 'Jadval', en: 'table', rule: '$\\frac{\\Delta y}{\\Delta x}$', ex: '$x$: 0, 2, 4 → $y$: 5, 11, 17', res: '$y=3x+5$' },
      { badge: '↗', t: 'Grafik', en: 'graph', rule: 'rise / run', ex: '$(0,\\ 2)$ va $(4,\\ 10)$', res: '$y=2x+2$' },
    ],
  },
  ex: [
    {
      tag: "slope ma'nosi", strat: "$x$ 1 ga oshsa, $y$ qancha o'zgaradi?",
      q: 'The equation $T=65-3h$ gives the amount of water $T$, in liters, left in a tank $h$ hours after it starts draining. What is the best interpretation of $-3$?',
      steps: [['h\\to h+1', "1 soat o'tdi"], ['T\\to T-3', '3 litr kamaydi'], ['\\text{har soatda 3 litr kamayadi}', 'javob']],
      check: "65 esa boshlang'ich miqdor ($h=0$): bakda dastlab 65 litr bor edi.",
    },
    {
      tag: 'qiymatlardan funksiya', strat: '$m=\\frac{\\Delta y}{\\Delta x}$, keyin $b$ ni bitta nuqtadan',
      q: 'For the linear function $f$, $f(1)=7$ and $f(4)=19$. Which equation defines $f$?',
      steps: [['m=\\frac{19-7}{4-1}=4', 'slope'], ['7=4\\cdot 1+b', "$(1,\\ 7)$ ni qo'ydik"], ['b=3', 'intercept'], ['f(x)=4x+3', 'javob']],
      check: 'Tekshiruv: $f(4)=16+3=19$ ✓',
    },
    {
      tag: 'kontekstdan model', strat: "boshlang'ich qiymat — $b$, tezlik — $m$",
      q: 'A candle is 24 cm tall and burns at a constant rate of 1.5 cm per hour. After how many hours will the candle be 9 cm tall?',
      steps: [['h=24-1.5t', 'model'], ['24-1.5t=9', 'tenglama'], ['1.5t=15', '15 sm yondi'], ['t=10', 'javob']],
      check: 'Tekshiruv: $24-1.5\\cdot 10=9$ ✓',
    },
  ],
  trap: {
    title: 'Intercept talqini',
    q: 'In $C=12h+30$, what does 30 represent?',
    body: "30 — $h=0$ dagi narx: bir martalik (chaqiruv) to'lovi. «Har soat uchun narx» — bu 12, ya'ni slope. Variantlarda ikkalasi ham bo'ladi.",
  },
  tip: {
    badge: 'B', short: 'birliklar', title: 'Birliklar orqali tekshirish',
    q: 'Slope birligi = $y$ birligi / $x$ birligi.',
    body: "$T$ — litr, $h$ — soat ⇒ $-3$ «litr/soat». Variantdagi birlik mos kelmasa — u noto'g'ri.",
  },
  mistakes: [
    "Slope ni boshlang'ich qiymat bilan adashtirish.",
    "Manfiy slope ni «kamayish» deb emas, «manfiy miqdor» deb talqin qilish.",
    "Jadvalda $x$ qadami 1 emasligini unutish: $\\Delta x=2$ bo'lsa, bo'lish kerak.",
    "Model qaysi oraliqda ma'noli ekanini unutish (vaqt manfiy bo'lmaydi).",
  ],
  practice: [
    ['$P=8n-200$ — foyda, $n$ — sotilgan chiptalar. 8 nimani bildiradi?', ''],
    ['$f(2)=10$, $f(6)=22$. $f(x)$ = ?', ''],
    ['Jadval: $x$ = 0, 1, 2; $y$ = 40, 35, 30. Model?', ''],
    ['$P=8n-200$: nechta chiptada foyda 0 bo\'ladi?', ''],
  ],
  answers: ['har chipta \\$8 foyda', '$f(x)=3x+4$', '$y=40-5x$', '25 ta chipta'],
  remember: [
    "Slope — har bir birlik $x$ uchun $y$ ning o'zgarishi (birligi bilan).",
    "Intercept — boshlang'ich qiymat, $x=0$ dagi miqdor.",
    'Jadval yoki grafikdan: avval $m=\\frac{\\Delta y}{\\Delta x}$, keyin $b$ — bitta nuqtadan.',
  ],
};
