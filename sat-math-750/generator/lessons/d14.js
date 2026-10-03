module.exports = {
  n: 14,
  short: 'Kvadrat_tenglamalar',
  en: 'Quadratic equations',
  video: '13 min',
  hook: "Kvadrat tenglamalar Advanced Math ning yuragi. SAT ildizlarni topishni, ularning yig'indisi va ko'paytmasini hamda nechta yechim borligini so'raydi.",
  goals: [
    ['Uch usul', 'Ajratish, formula, Desmos'],
    ['Diskriminant', '$D=b^2-4ac$ — ildizlar soni'],
    ['Viyet teoremasi', "Ildizlar yig'indisi va ko'paytmasi"],
  ],
  kw: [
    ['quadratic equation', 'kvadrat tenglama', '$ax^2+bx+c=0$'],
    ['factor', "ko'paytuvchilarga ajratmoq", '$(x+7)(x-4)$'],
    ['roots / solutions', 'ildizlar, yechimlar', '$x=-7,\\ x=4$'],
    ['zeros', 'nollar', '$f(x)=0$ yechimlari'],
    ['discriminant', 'diskriminant', '$b^2-4ac$'],
    ['quadratic formula', 'ildizlar formulasi', '$\\frac{-b\\pm\\sqrt{D}}{2a}$'],
    ['sum of the solutions', "yechimlar yig'indisi", '$-\\frac{b}{a}$'],
    ['product of the solutions', "yechimlar ko'paytmasi", '$\\frac{c}{a}$'],
  ],
  core: {
    title: 'Kvadrat tenglama: 4 qadam', en: 'Solving $ax^2+bx+c=0$',
    steps: [
      ['Nolga tengla', 'Hamma hadlarni bir tomonga: $ax^2+bx+c=0$'],
      ['Ajratib ko\'r', "$x^2+bx+c$: ko'paytmasi $c$, yig'indisi $b$"],
      ["Har ko'paytuvchi = 0", '$(x-p)(x-q)=0\\Rightarrow x=p$ yoki $x=q$'],
      ["Bo'lmasa — formula", '$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$'],
    ],
    note: "Viyet: $x_1+x_2=-\\frac{b}{a}$, $x_1x_2=\\frac{c}{a}$ — ildizlarni topmasdan yig'indini toping.",
  },
  cases: {
    title: 'Diskriminant: ildizlar soni', en: 'Number of real solutions',
    intro: '$D=b^2-4ac$ ni hisoblang va ishorasiga qarang:',
    items: [
      { badge: '2', t: 'Ikki ildiz', en: 'two real solutions', rule: '$D>0$', ex: '$x^2-5x+6=0$', res: '$D=1$' },
      { badge: '1', t: 'Bitta ildiz', en: 'exactly one solution', rule: '$D=0$', ex: '$x^2-6x+9=0$', res: '$D=0$' },
      { badge: '∅', t: "Ildiz yo'q", en: 'no real solutions', rule: '$D<0$', ex: '$x^2+2x+5=0$', res: '$D=-16$' },
    ],
  },
  ex: [
    {
      tag: 'ajratish', strat: "ko'paytmasi $c$, yig'indisi $b$ bo'lgan ikki son",
      q: 'What is the positive solution to $x^2+3x-28=0$?',
      steps: [['(x+7)(x-4)=0', '$7\\cdot(-4)=-28$, $7-4=3$'], ['x=-7\\ \\text{yoki}\\ x=4', 'har biri 0 ga'], ['x=4', 'javob (musbat)']],
      check: 'Tekshiruv: $16+12-28=0$ ✓',
    },
    {
      tag: 'formula', strat: 'ajralmasa — formula',
      q: 'What are the solutions to $2x^2-4x-3=0$?',
      steps: [['D=(-4)^2-4\\cdot 2\\cdot(-3)=40', 'diskriminant'], ['x=\\frac{4\\pm\\sqrt{40}}{4}', 'formula'], ['x=\\frac{2\\pm\\sqrt{10}}{2}', '$\\sqrt{40}=2\\sqrt{10}$']],
      check: "Variantda $1\\pm\\frac{\\sqrt{10}}{2}$ ko'rinishida ham bo'lishi mumkin — bu o'sha javob.",
    },
    {
      tag: 'Viyet', strat: 'ildizlarni topmang — $-\\frac{b}{a}$',
      q: 'What is the sum of the solutions to $3x^2-12x+5=0$?',
      steps: [['a=3,\\ b=-12', 'koeffitsiyentlar'], ['x_1+x_2=-\\frac{b}{a}', 'Viyet'], ['-\\frac{-12}{3}=4', 'javob']],
      check: '$D=144-60=84>0$ — ikkita haqiqiy ildiz bor ✓',
    },
  ],
  trap: {
    title: "Ildizni yo'qotish",
    q: '$x^2=5x$ ni $x$ ga bo\'lsangiz…',
    body: "…$x=5$ qoladi, $x=0$ esa yo'qoladi! To'g'ri yo'l: $x^2-5x=0\\Rightarrow x(x-5)=0\\Rightarrow x=0$ yoki $x=5$.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos: ildizlar = nollar',
    q: '$y=2x^2-4x-3$ ni yozing.',
    body: "Grafik $x$ o'qini kesgan nuqtalar — ildizlar. Kesmasa — haqiqiy ildiz yo'q ($D<0$). Taqribiy qiymatni variantlar bilan solishtiring.",
  },
  mistakes: [
    'Tenglamani nolga keltirmasdan ajratish: $x^2+3x=28\\Rightarrow x(x+3)=28$.',
    "Formulada $-b$ ishorasini unutish yoki faqat ildizni $2a$ ga bo'lish.",
    "Ikkala tomonni $x$ ga bo'lib, $x=0$ ildizini yo'qotish.",
    'Diskriminantda manfiy $b$ ni kvadratga ko\'tarishda xato: $(-4)^2=16$.',
  ],
  practice: [
    ['$x^2-x-12=0$', ''],
    ['$x^2+6x+k=0$ bitta ildizga ega. $k$ = ?', ''],
    ["$2x^2+8x-10=0$: ildizlar ko'paytmasi", ''],
    ['$x^2+4x+7=0$: nechta haqiqiy ildiz?', ''],
  ],
  answers: ['$x=4$ yoki $x=-3$', '$k=9$', '$-5$', "yo'q ($D=-12$)"],
  remember: [
    "Avval $=0$ ga keltiring, keyin ajrating; bo'lmasa — formula.",
    "$D>0$ — 2 ta, $D=0$ — 1 ta, $D<0$ — haqiqiy ildiz yo'q.",
    "Viyet: yig'indi $-\\frac{b}{a}$, ko'paytma $\\frac{c}{a}$.",
  ],
};
