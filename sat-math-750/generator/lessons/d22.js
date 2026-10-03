module.exports = {
  n: 22,
  short: 'Foizlar',
  en: 'Percentages',
  video: '12 min',
  hook: "Foizlar SAT da deyarli har bir testda bor: chegirma, soliq, o'sish, ketma-ket o'zgarishlar. Asosiy kalit — foizni ko'paytuvchiga aylantirish.",
  goals: [
    ["Foiz = ko'paytuvchi", '30% oshish — $\\times 1.3$, 30% kamayish — $\\times 0.7$'],
    ['Ketma-ket foizlar', "Ko'paytuvchilar ko'paytiriladi, qo'shilmaydi"],
    ["Dastlabki qiymat", "Yangi qiymatni ko'paytuvchiga bo'lish"],
  ],
  kw: [
    ['percent', 'foiz', '20%'],
    ['percent increase', 'foizli ortish', '$\\times 1.2$'],
    ['percent decrease', 'foizli kamayish', '$\\times 0.8$'],
    ['of', '… dan, … ning', '20% of 50 = 10'],
    ['discount', 'chegirma', '15% discount'],
    ['original price', 'asl narx', 'before the discount'],
    ['markup', 'ustama', '25% markup'],
    ['percent change', "foiz o'zgarish", '$\\frac{\\text{yangi}-\\text{eski}}{\\text{eski}}$'],
  ],
  core: {
    title: 'Foiz masalalari: 4 formula', en: 'Percent toolkit',
    steps: [
      ['$p\\%$ of $x$', '$\\frac{p}{100}\\cdot x$'],
      ["O'zgarish", '$x\\cdot(1\\pm r)$, $r=\\frac{p}{100}$'],
      ["Foiz o'zgarish", '$\\frac{\\text{yangi}-\\text{eski}}{\\text{eski}}\\cdot 100\\%$'],
      ['Asl qiymat', '$\\text{eski}=\\frac{\\text{yangi}}{1\\pm r}$'],
    ],
    note: "Esda tuting: 20% oshib, keyin 20% kamaysa — boshlang'ich qiymatga qaytmaydi: $1.2\\cdot 0.8=0.96$.",
  },
  cases: {
    title: "Ko'paytuvchilar", en: 'Multipliers',
    intro: "Har bir foiz o'zgarishni bitta ko'paytuvchi bilan yozing ($200$ dan boshlab):",
    items: [
      { badge: '↑', t: 'Oshish', en: 'increase by 15%', rule: '$\\times 1.15$', ex: '$200\\cdot 1.15$', res: '230' },
      { badge: '↓', t: 'Kamayish', en: 'decrease by 15%', rule: '$\\times 0.85$', ex: '$200\\cdot 0.85$', res: '170' },
      { badge: '⟳', t: 'Ketma-ket', en: '+15%, keyin −15%', rule: '$\\times 1.15\\cdot 0.85$', ex: '$200\\cdot 0.9775$', res: '195.5' },
    ],
  },
  ex: [
    {
      tag: 'ketma-ket foiz', strat: "ko'paytuvchilarni ko'paytiring",
      q: 'The price of a jacket was increased by 25% and then decreased by 20%. The final price is what percent of the original price?',
      steps: [['k=1.25\\cdot 0.80', "ko'paytuvchilar"], ['k=1.00', "o'zgarmadi!"], ['100\\%', 'javob']],
      check: "Tekshiruv: $100\\to 125\\to 100$ ✓ — «+25%, −20%» bir-birini yo'qotadi.",
    },
    {
      tag: 'asl narx', strat: "yangi narx = asl × ko'paytuvchi ⇒ bo'ling",
      q: 'After a 15% discount, a phone costs \\$340. What was the original price, in dollars?',
      steps: [['0.85x=340', '15% chegirma'], ['x=\\frac{340}{0.85}', "bo'ldik"], ['x=400', 'javob']],
      check: "Tekshiruv: $400\\cdot 0.85=340$ ✓; $340\\cdot 1.15=391$ — xato yo'l!",
    },
    {
      tag: "foiz o'zgarish", strat: "farqni ESKI qiymatga bo'ling",
      q: 'The number of students in a club rose from 40 to 58. What is the percent increase?',
      steps: [['58-40=18', 'farq'], ['\\frac{18}{40}=0.45', "eskiga bo'ldik"], ['45\\%', 'javob']],
      check: "$\\frac{18}{58}\\approx 31\\%$ — yangiga bo'lish, keng tarqalgan xato.",
    },
  ],
  trap: {
    title: "Foizlarni qo'shish",
    q: '+10%, keyin +10% = +20%?',
    body: "Yo'q: $1.1\\cdot 1.1=1.21$, ya'ni +21%. Ketma-ket foizlar har doim ko'paytiriladi.",
  },
  tip: {
    badge: '%', short: '100 usuli', title: '100 dan boshlang',
    q: "Asl qiymat noma'lum bo'lsa, uni 100 deb oling.",
    body: "Barcha o'zgarishlarni qo'llang va natijani 100 bilan solishtiring — foiz darhol ko'rinadi.",
  },
  mistakes: [
    "Foiz o'zgarishni yangi qiymatga bo'lish.",
    "Ketma-ket foizlarni qo'shish.",
    "Chegirmadan keyingi narxdan asl narxni topishda $\\times 1.15$ qilish.",
    '«$x$ is 20% of $y$» ni $y=0.2x$ deb yozish (to\'g\'risi $x=0.2y$).',
  ],
  practice: [
    ['35% of 240', ''],
    ["\\$80 → \\$92: foiz o'zgarish", ''],
    ['30% chegirmadan keyin \\$56. Asl narx?', ''],
    ["+50%, keyin −50%: umumiy o'zgarish", ''],
  ],
  answers: ['84', '+15%', '\\$80', '−25%'],
  remember: [
    "Oshish $\\times(1+r)$, kamayish $\\times(1-r)$; ketma-ket — ko'paytiring.",
    "Foiz o'zgarish $=\\frac{\\text{yangi}-\\text{eski}}{\\text{eski}}$.",
    "Asl qiymat: yangi qiymatni ko'paytuvchiga bo'ling.",
  ],
};
