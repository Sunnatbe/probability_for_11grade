module.exports = {
  n: 24,
  short: 'Tarqoq_diagramma_va_modellar',
  en: 'Two-variable data: models and scatterplots',
  video: '12 min',
  hook: "Tarqoq diagramma — ikki kattalik orasidagi bog'lanish surati. SAT eng mos chiziqdan bashorat qilishni va slope ning ma'nosini so'raydi.",
  goals: [
    ['Tarqoq diagramma', "Bog'lanish yo'nalishi va kuchi"],
    ['Eng mos chiziq', 'Tenglamadan bashorat va qoldiq'],
    ['Model tanlash', "Chiziqli yoki ko'rsatkichli model"],
  ],
  kw: [
    ['scatterplot', 'tarqoq diagramma', 'points $(x,\\ y)$'],
    ['line of best fit', 'eng mos chiziq', '$y=1.8x+12$'],
    ['predicted value', 'bashorat qiymati', '$\\hat{y}$'],
    ['actual value', 'haqiqiy qiymat', 'observed data point'],
    ['residual', 'qoldiq', 'actual − predicted'],
    ['positive association', "musbat bog'lanish", 'birga oshadi'],
    ['linear model', 'chiziqli model', '$y=mx+b$'],
    ['exponential model', "ko'rsatkichli model", '$y=ab^x$'],
  ],
  core: {
    title: 'Eng mos chiziq: 4 savol', en: 'Reading a line of best fit',
    steps: [
      ['Bashorat', "$x$ ni tenglamaga qo'y — $\\hat{y}$"],
      ['Qoldiq', 'haqiqiy − bashorat'],
      ["Slope ma'nosi", "$x$ 1 ga oshsa, $y$ taxminan $m$ ga o'zgaradi"],
      ["Intercept ma'nosi", "$x=0$ dagi taxminiy qiymat (agar ma'noli bo'lsa)"],
    ],
    note: "Muhim: «predicted» yoki «estimated» so'zi — chiziq bo'yicha qiymat, haqiqiy nuqta emas.",
  },
  cases: {
    title: "Bog'lanish turlari", en: 'Types of association',
    intro: 'Nuqtalar bulutining shakliga qarang:',
    items: [
      { badge: '↗', t: 'Musbat', en: 'positive', rule: '$m>0$', ex: "o'qish soati va ball", res: 'birga oshadi' },
      { badge: '↘', t: 'Manfiy', en: 'negative', rule: '$m<0$', ex: 'mashina yoshi va narxi', res: 'biri oshsa, biri kamayadi' },
      { badge: '○', t: "Bog'lanishsiz", en: 'no association', rule: 'tartibsiz', ex: "bo'y va telefon raqami", res: 'chiziq mos emas' },
    ],
  },
  ex: [
    {
      tag: 'bashorat', strat: "$x$ ni eng mos chiziq tenglamasiga qo'ying",
      q: 'The line of best fit for a scatterplot is $y=1.8x+12$, where $x$ is hours studied and $y$ is the test score. What is the predicted score for 20 hours of study?',
      steps: [['y=1.8\\cdot 20+12', "qo'ydik"], ['y=36+12', 'hisobladik'], ['y=48', 'javob']],
      check: "Bu — bashorat; haqiqiy o'quvchining bali boshqacha bo'lishi mumkin.",
    },
    {
      tag: 'qoldiq', strat: 'haqiqiy − bashorat',
      q: 'Using the model $y=1.8x+12$, a student who studied 30 hours scored 70. What is the residual for this student?',
      steps: [['\\hat{y}=1.8\\cdot 30+12=66', 'bashorat'], ['70-66', 'haqiqiy − bashorat'], ['4', 'javob']],
      check: 'Qoldiq musbat ⇒ nuqta chiziqdan yuqorida joylashgan.',
    },
    {
      tag: "slope ma'nosi", strat: "slope — har bir birlik $x$ uchun o'zgarish",
      q: 'For the model $y=1.8x+12$, what is the best interpretation of 1.8?',
      steps: [['x\\to x+1', "1 soat ko'proq"], ['y\\to y+1.8', 'ball oshadi'], ['\\approx 1.8\\ \\text{ball / soat}', 'javob']],
      check: "Talqinda «predicted» yoki «taxminan» so'zi bo'lishi kerak — model aniq emas.",
    },
  ],
  trap: {
    title: 'Korrelyatsiya ≠ sabab',
    q: "Muzqaymoq savdosi va cho'kish holatlari birga oshadi.",
    body: "Bu bog'lanish, sabab emas — ikkalasi ham issiq havoga bog'liq. Sabab-oqibat haqida faqat tajriba xulosa beradi.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos regressiya',
    q: 'Jadvalga nuqtalarni kiriting.',
    body: "$y_1\\sim mx_1+b$ — chiziqli, $y_1\\sim ab^{x_1}$ — ko'rsatkichli model. $r$ ning moduli 1 ga yaqin — model yaxshi mos.",
  },
  mistakes: [
    'Bashorat qiymatini haqiqiy qiymat deb hisoblash.',
    'Qoldiqni «bashorat − haqiqiy» deb olish.',
    "Diagramma oralig'idan ancha tashqarida ishonch bilan bashorat qilish.",
    "Bog'lanishni sabab-oqibat deb talqin qilish.",
  ],
  practice: [
    ['$y=-2.5x+90$: $x=12$ dagi bashorat', ''],
    ['Haqiqiy 58, bashorat 61. Qoldiq?', ''],
    ["$y=-2.5x+90$, $x$ — kun: $-2.5$ ning ma'nosi", ''],
    ["Nuqtalar tobora tik o'smoqda. Qaysi model?", ''],
  ],
  answers: ['60', '$-3$', 'har kuni ≈2.5 ga kamayadi', "ko'rsatkichli"],
  remember: [
    'Bashorat — eng mos chiziq tenglamasidan; «predicted / estimated».',
    'Qoldiq = haqiqiy − bashorat; musbat — nuqta chiziqdan yuqorida.',
    "Bog'lanish — sabab emas; slope — har bir birlikka taxminiy o'zgarish.",
  ],
};
