module.exports = {
  n: 5,
  short: 'Slope_va_intercept',
  en: 'Linear functions: slope and y-intercept',
  video: '12 min',
  hook: "Chiziqli funksiya — butun Algebra va Advanced Math ning poydevori. Slope va y-intercept ni tez topish SAT da kamida 3–4 savolda kerak bo'ladi.",
  goals: [
    ['$y=mx+b$', "Slope va y-intercept ni bir qarashda o'qish"],
    ['Ikki nuqtadan slope', '$m=\\frac{y_2-y_1}{x_2-x_1}$ formulasi'],
    ['$f(x)$ yozuvi', '$f(3)$ ni hisoblash va $f(x)=7$ ni yechish'],
  ],
  kw: [
    ['linear function', 'chiziqli funksiya', '$f(x)=2x+3$'],
    ['slope', 'burchak koeffitsiyenti', '$m=2$'],
    ['y-intercept', "$Oy$ o'qini kesish nuqtasi", '$(0,\\ 3)$'],
    ['x-intercept', "$Ox$ o'qini kesish nuqtasi", '$(-1.5,\\ 0)$'],
    ['rate of change', "o'zgarish tezligi", 'slope = rate of change'],
    ['$f(x)$ notation', 'funksiya yozuvi', '$f(4)=11$'],
    ['input / output', 'kirish / chiqish qiymati', '$x$ / $f(x)$'],
    ['ordered pair', 'tartiblangan juftlik', '$(x,\\ y)$'],
  ],
  core: {
    title: 'Slope ni topish: 4 usul', en: 'Finding the slope',
    steps: [
      ['Tenglamadan', '$y=mx+b$: $x$ oldidagi son'],
      ['Ikki nuqtadan', '$m=\\frac{y_2-y_1}{x_2-x_1}$'],
      ['Jadvaldan', "$\\frac{\\Delta y}{\\Delta x}$: $y$ o'zgarishi / $x$ o'zgarishi"],
      ['Standart shakldan', '$ax+by=c$: $m=-\\frac{a}{b}$'],
    ],
    note: "Eslatma: y-intercept — bu $x=0$ dagi qiymat: $f(0)=b$.",
  },
  cases: {
    title: 'Slope ishorasi', en: 'Sign of the slope',
    intro: "Slope grafik qaysi yo'nalishda ketishini ko'rsatadi:",
    items: [
      { badge: '↗', t: 'Musbat', en: 'positive slope', rule: '$m>0$', ex: '$y=2x-1$', res: "o'sadi" },
      { badge: '↘', t: 'Manfiy', en: 'negative slope', rule: '$m<0$', ex: '$y=-3x+4$', res: 'kamayadi' },
      { badge: '0', t: 'Nol', en: 'zero slope', rule: '$m=0$', ex: '$y=5$', res: 'gorizontal' },
    ],
  },
  ex: [
    {
      tag: 'ikki nuqtadan', strat: "slope formulasi → $b$ ni nuqtadan topish",
      q: 'A line passes through the points $(2,\\ 5)$ and $(6,\\ 13)$. What is the $y$-intercept of the line?',
      steps: [['m=\\frac{13-5}{6-2}=2', 'slope'], ['5=2\\cdot 2+b', "$(2,\\ 5)$ ni qo'ydik"], ['b=1', 'javob']],
      check: 'Tekshiruv: $2\\cdot 6+1=13$ ✓ — y-intercept $(0,\\ 1)$',
    },
    {
      tag: '$f(x)$ yozuvi', strat: "$f(x)=k$ — bu tenglama, yeching",
      q: 'The function $f$ is defined by $f(x)=4x-7$. For what value of $x$ does $f(x)=21$?',
      steps: [['4x-7=21', "$f(x)$ o'rniga 21"], ['4x=28', "7 ni o'ngga"], ['x=7', 'javob']],
      check: 'Tekshiruv: $f(7)=28-7=21$ ✓',
    },
    {
      tag: 'standart shakl', strat: "$y$ ni yolg'izlang yoki $m=-\\frac{a}{b}$",
      q: 'What is the slope of the line with equation $3x+4y=12$?',
      steps: [['4y=-3x+12', "$3x$ ni o'ngga"], ['y=-\\frac{3}{4}x+3', "4 ga bo'ldik"], ['m=-\\frac{3}{4}', 'javob']],
      check: 'Tezkor usul: $m=-\\frac{a}{b}=-\\frac{3}{4}$ ✓',
    },
  ],
  trap: {
    title: '$f(2)$ va $f(x)=2$ farqi',
    q: 'If $f(x)=3x+1$, find $f(2)$ and solve $f(x)=2$.',
    body: "$f(2)=7$ — $x$ ga 2 qo'yildi. $f(x)=2$ esa tenglama: $3x+1=2$, $x=\\frac{1}{3}$. Ularni adashtirish — keng tarqalgan xato.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos: nuqtalardan chiziq',
    q: 'Jadvalga ikki nuqtani kiriting.',
    body: "$y_1\\sim mx_1+b$ yozing — Desmos $m$ va $b$ ni o'zi hisoblaydi. Yoki grafikda $Oy$ o'qini kesish nuqtasini bosing.",
  },
  mistakes: [
    'Slope formulasida tartibni aralashtirish: $\\frac{y_2-y_1}{x_1-x_2}$.',
    "$ax+by=c$ da slope ni $a$ deb olish (aslida $-\\frac{a}{b}$).",
    'y-intercept ni x-intercept bilan adashtirish.',
    "$f(2)$ ni «$f$ karra 2» deb ko'paytirish.",
  ],
  practice: [
    ['Slope of the line through $(1,\\ 4)$ and $(3,\\ 10)$', ''],
    ['$f(x)=5x+2$. Find $f(-3)$.', ''],
    ['$2x-5y=10$: slope va y-intercept', ''],
    ['$g(x)=-2x+9$. For what $x$ is $g(x)=1$?', ''],
  ],
  answers: ['$m=3$', '$-13$', '$m=\\frac{2}{5}$, $b=-2$', '$x=4$'],
  remember: [
    "$y=mx+b$: $m$ — slope (o'zgarish tezligi), $b$ — y-intercept.",
    '$m=\\frac{y_2-y_1}{x_2-x_1}$; $ax+by=c$ da $m=-\\frac{a}{b}$.',
    "$f(a)$ — qo'yish; $f(x)=k$ — tenglama yechish.",
  ],
};
