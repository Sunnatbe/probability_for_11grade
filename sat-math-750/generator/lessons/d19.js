module.exports = {
  n: 19,
  short: 'Nochiziqli_sistemalar_va_modul',
  en: 'Nonlinear systems and absolute value',
  video: '12 min',
  hook: "To'g'ri chiziq parabolani ikki, bir yoki nol nuqtada kesishi mumkin. Bugun buni algebraik va grafik yo'l bilan topamiz hamda modulli tenglamalarni yechamiz.",
  goals: [
    ['Chiziq va parabola', "O'rniga qo'yib, kvadrat tenglamaga keltirish"],
    ['Kesishishlar soni', 'Diskriminant orqali: 0, 1 yoki 2'],
    ['Modul', '$|x-a|=b$ — ikki holat'],
  ],
  kw: [
    ['system', 'sistema', '$y=x^2,\\ y=2x+3$'],
    ['intersection', 'kesishish nuqtasi', '$(3,\\ 9)$'],
    ['absolute value', 'modul', '$|-5|=5$'],
    ['line and parabola', 'chiziq va parabola', 'two intersection points'],
    ['distance', 'masofa', '$|x-3|$ — 3 gacha masofa'],
    ['tangent', 'urinadi', 'exactly one point'],
    ['substitute', "o'rniga qo'ymoq", 'substitute $y=x+1$'],
    ['sum of all solutions', "barcha yechimlar yig'indisi", '$7+(-2)=5$'],
  ],
  core: {
    title: 'Chiziq + parabola: 4 qadam', en: 'Line–parabola systems',
    steps: [
      ['$y$ larni tengla', '$x^2+\\ldots=mx+b$'],
      ['Nolga keltir', '$ax^2+bx+c=0$'],
      ['Yech yoki $D$ ni top', 'Ildizlar — $x$ koordinatalar'],
      ['$y$ ni top', "Chiziq tenglamasiga qo'y — osonroq!"],
    ],
    note: "Kesishishlar soni: $D>0$ — 2 ta, $D=0$ — 1 ta (chiziq urinadi), $D<0$ — kesishish yo'q.",
  },
  cases: {
    title: 'Modulli tenglama: 3 holat', en: 'Absolute value equations',
    intro: "$|A|=b$ ko'rinishiga keltiring va $b$ ga qarang:",
    items: [
      { badge: '2', t: 'Ikki yechim', en: '$b>0$', rule: '$A=b$ yoki $A=-b$', ex: '$|x-3|=5$', res: '$x=8,\\ x=-2$' },
      { badge: '1', t: 'Bitta yechim', en: '$b=0$', rule: '$A=0$', ex: '$|2x+4|=0$', res: '$x=-2$' },
      { badge: '∅', t: "Yechim yo'q", en: '$b<0$', rule: 'modul manfiy emas', ex: '$|x+1|=-3$', res: "yechim yo'q" },
    ],
  },
  ex: [
    {
      tag: 'chiziq va parabola', strat: '$y$ larni tenglang — kvadrat tenglama',
      q: 'The system $y=x^2-4x+5$ and $y=x+1$ has two solutions $(x,\\ y)$. What is the sum of the $x$-coordinates of the solutions?',
      steps: [['x^2-4x+5=x+1', '$y$ larni tengladik'], ['x^2-5x+4=0', 'nolga keltirdik'], ['(x-1)(x-4)=0', 'ajratdik'], ['1+4=5', 'javob']],
      check: 'Viyet bilan tezroq: $-\\frac{b}{a}=5$ ✓; nuqtalar $(1,\\ 2)$ va $(4,\\ 5)$.',
    },
    {
      tag: 'kesishishlar soni', strat: 'tenglashtiring va $D=0$ shartini qo\'ying',
      q: 'For what value of $k$ does the line $y=k$ intersect the parabola $y=x^2-6x+11$ at exactly one point?',
      steps: [['x^2-6x+(11-k)=0', 'tengladik'], ['36-4(11-k)=0', '$D=0$'], ['k=2', 'javob']],
      check: "Grafik ma'nosi: $y=2$ parabolaning uchi $(3,\\ 2)$ dan o'tadi ✓",
    },
    {
      tag: 'modulli tenglama', strat: 'ikki holat: $A=b$ va $A=-b$',
      q: 'What is the sum of all solutions to $|2x-5|=9$?',
      steps: [['2x-5=9\\Rightarrow x=7', '1-holat'], ['2x-5=-9\\Rightarrow x=-2', '2-holat'], ['7+(-2)=5', 'javob']],
      check: 'Tekshiruv: $|14-5|=9$ ✓ va $|-4-5|=9$ ✓',
    },
  ],
  trap: {
    title: "Modulni yolg'izlamaslik",
    q: '$|x-2|+3=10$',
    body: "Avval $|x-2|=7$ ga keltiring, keyin ikki holat: $x=9$ yoki $x=-5$. $x-2=10$ deb yechish — xato.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos: abs() va kesishishlar',
    q: 'Modul: abs(2x-5) yoki | | tugmasi.',
    body: "$y=|2x-5|$ va $y=9$ ni chizing — kesishishlar soni va koordinatalari ko'rinadi. Sistemalar uchun ham xuddi shunday.",
  },
  mistakes: [
    'Modulda faqat musbat holatni yechish.',
    "Kvadrat tenglamada bitta ildizni yo'qotish.",
    "$y$ koordinatani noqulay tenglamaga qo'yish (chiziq — osonroq).",
    '«Exactly one point» shartini $D>0$ deb olish.',
  ],
  practice: [
    ['$|x+4|=6$', ''],
    ['$y=x^2$, $y=2x+3$: kesishish nuqtalari', ''],
    ['$y=x^2+2$ va $y=k$ kesishmaydi. $k$?', ''],
    ['$|3x|-2=-5$', ''],
  ],
  answers: ['$x=2$ yoki $x=-10$', '$(3,\\ 9)$ va $(-1,\\ 1)$', '$k<2$', "yechim yo'q"],
  remember: [
    "Sistema: $y$ larni tenglang → kvadrat tenglama → $y$ ni chiziqdan toping.",
    'Kesishishlar soni = diskriminant ishorasi.',
    "$|A|=b$: $b>0$ — ikki holat; avval modulni yolg'izlang.",
  ],
};
