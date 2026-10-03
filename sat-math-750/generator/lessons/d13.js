module.exports = {
  n: 13,
  short: 'Ratsional_ifodalar',
  en: 'Rational expressions',
  video: '12 min',
  hook: "Algebraik kasrlar oddiy kasrlar kabi ishlaydi: qisqartirish, umumiy maxraj, ko'paytirish. Farqi — maxrajda $x$ bor, shuning uchun ehtiyot bo'lish kerak.",
  goals: [
    ['Qisqartirish', "Avval ko'paytuvchilarga ajrat, keyin qisqartir"],
    ['Umumiy maxraj', "Algebraik kasrlarni qo'shish va ayirish"],
    ["Berilgan ko'rinishga", '$\\frac{A}{x+1}+B$ shakliga keltirish'],
  ],
  kw: [
    ['rational expression', 'ratsional ifoda', '$\\frac{x+1}{x-2}$'],
    ['numerator', 'surat', '$x+1$'],
    ['denominator', 'maxraj', '$x-2$'],
    ['simplify', 'soddalashtirmoq', 'simplify the expression'],
    ['common denominator', 'umumiy maxraj', '$(x-1)(x+1)$'],
    ['undefined', 'aniqlanmagan', 'when $x=2$'],
    ['reciprocal', 'teskari kasr', '$\\frac{3}{x}\\to\\frac{x}{3}$'],
    ['equivalent form', 'teng kuchli shakl', '$4+\\frac{3}{x+1}$'],
  ],
  core: {
    title: 'Algebraik kasr: 4 qadam', en: 'Working with rational expressions',
    steps: [
      ["Ko'paytuvchilarga ajrat", 'Surat va maxrajni'],
      ['Umumiyini qisqartir', "Faqat ko'paytuvchini, hadni emas!"],
      ['Umumiy maxraj', "Qo'shish va ayirishda kerak"],
      ['Cheklovni yoz', 'Maxraj $\\ne 0$'],
    ],
    note: "Qoida: $\\frac{x+3}{x}$ da $x$ qisqarmaydi — $x$ suratda ko'paytuvchi emas, had.",
  },
  cases: {
    title: 'Kasrlar ustida amallar', en: 'Operations',
    intro: "Oddiy kasrlardagi qoidalar o'zgarmaydi:",
    items: [
      { badge: '×', t: "Ko'paytirish", en: 'multiply', rule: '$\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ac}{bd}$', ex: '$\\frac{x}{3}\\cdot\\frac{6}{x^2}$', res: '$\\frac{2}{x}$' },
      { badge: '÷', t: "Bo'lish", en: 'divide', rule: '$\\frac{a}{b}\\div\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$', ex: '$\\frac{2}{x}\\div\\frac{4}{x^2}$', res: '$\\frac{x}{2}$' },
      { badge: '+', t: "Qo'shish", en: 'add', rule: '$\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$', ex: '$\\frac{1}{x}+\\frac{1}{2}$', res: '$\\frac{2+x}{2x}$' },
    ],
  },
  ex: [
    {
      tag: 'qisqartirish', strat: 'ajrat → qisqartir',
      q: 'Which expression is equivalent to $\\frac{x^2-9}{x^2+5x+6}$ for $x>0$?',
      steps: [['x^2-9=(x-3)(x+3)', 'kvadratlar ayirmasi'], ['x^2+5x+6=(x+2)(x+3)', '$2\\cdot 3=6$, $2+3=5$'], ['\\frac{x-3}{x+2}', 'javob']],
      check: 'Tekshiruv: $x=1$: $\\frac{-8}{12}=-\\frac{2}{3}$ va $\\frac{-2}{3}$ ✓',
    },
    {
      tag: 'umumiy maxraj', strat: "maxrajlar ko'paytmasi — umumiy maxraj",
      q: 'Which is equivalent to $\\frac{3}{x-1}-\\frac{2}{x+1}$?',
      steps: [['\\frac{3(x+1)-2(x-1)}{(x-1)(x+1)}', 'umumiy maxraj'], ['\\frac{3x+3-2x+2}{x^2-1}', 'qavsni ochdik'], ['\\frac{x+5}{x^2-1}', 'javob']],
      check: 'Tekshiruv: $x=2$: $3-\\frac{2}{3}=\\frac{7}{3}$ va $\\frac{7}{3}$ ✓',
    },
    {
      tag: 'berilgan shaklga', strat: 'suratni maxraj orqali yozing',
      q: 'The expression $\\frac{4x+7}{x+1}$ can be written as $4+\\frac{A}{x+1}$. What is the value of $A$?',
      steps: [['4x+7=4(x+1)+3', 'maxrajni ajratdik'], ['\\frac{4(x+1)+3}{x+1}=4+\\frac{3}{x+1}', "bo'ldik"], ['A=3', 'javob']],
      check: 'Tekshiruv: $x=0$: $7$ va $4+3=7$ ✓',
    },
  ],
  trap: {
    title: 'Hadni qisqartirish xatosi',
    q: '$\\frac{x+6}{x}=6$?',
    body: "Yo'q! $\\frac{x+6}{x}=1+\\frac{6}{x}$. Faqat butun surat va butun maxrajdagi umumiy ko'paytuvchi qisqaradi.",
  },
  tip: {
    badge: '2', short: "son qo'yish", title: "Son qo'yish usuli",
    q: "$x=2$ ni savolga va har bir variantga qo'ying.",
    body: "Faqat bitta variant bir xil qiymat beradi. Maxrajni 0 qiladigan sonni (masalan, $x=1$) tanlamang.",
  },
  mistakes: [
    'Hadlarni qisqartirish: $\\frac{x+6}{x}=6$ ✗.',
    'Ayirishda ikkinchi suratni qavsga olmaslik: $-2(x-1)=-2x+2$.',
    "Bo'lishda ikkinchi kasrni teskari qilmaslik.",
    'Maxrajni nolga aylantiradigan qiymatni unutish.',
  ],
  practice: [
    ['$\\frac{x^2-4x}{x^2-16}$', 'soddalashtiring'],
    ['$\\frac{2}{x}+\\frac{3}{x^2}$', ''],
    ['$\\frac{6x+5}{2x+1}=3+\\frac{A}{2x+1}$. $A$ = ?', ''],
    ['$\\frac{x}{x-5}$ qachon aniqlanmagan?', ''],
  ],
  answers: ['$\\frac{x}{x+4}$', '$\\frac{2x+3}{x^2}$', '$A=2$', '$x=5$'],
  remember: [
    "Avval ko'paytuvchilarga ajrating — faqat ko'paytuvchi qisqaradi.",
    "Qo'shish va ayirish — umumiy maxraj; bo'lish — teskarisiga ko'paytirish.",
    '$\\frac{ax+b}{x+c}$ ni $a+\\frac{A}{x+c}$ shakliga: suratni maxraj orqali yozing.',
  ],
};
