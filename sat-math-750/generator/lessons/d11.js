module.exports = {
  n: 11,
  short: 'Kophadlar',
  en: 'Equivalent expressions: polynomials',
  video: '12 min',
  hook: "Advanced Math moduliga xush kelibsiz! «Qaysi ifoda bunga teng?» savollari SAT da har testda bir necha marta chiqadi — bugun ko'phadlar bilan boshlaymiz.",
  goals: [
    ['Qavs ochish', "Taqsimot qonuni va ko'phadlarni ko'paytirish"],
    ["Qisqa ko'paytirish", '$(a\\pm b)^2$ va $a^2-b^2$ formulalari'],
    ['Koeffitsiyent tenglash', "$ax^2+bx+c$ dagi noma'lum $a$, $b$, $c$"],
  ],
  kw: [
    ['equivalent', 'teng kuchli', 'equivalent expressions'],
    ['expand', 'qavsni ochmoq', '$(x+2)(x+3)$'],
    ['factor', "ko'paytuvchilarga ajratmoq", '$x^2-9=(x-3)(x+3)$'],
    ['polynomial', "ko'phad", '$3x^2-2x+5$'],
    ['coefficient', 'koeffitsiyent', '3 in $3x^2$'],
    ['like terms', "o'xshash hadlar", '$2x$ and $5x$'],
    ['constant term', 'ozod had', '5 in $x^2+5$'],
    ['for all values of $x$', "$x$ ning barcha qiymatlarida", 'identity'],
  ],
  core: {
    title: "Ko'phadlar bilan ishlash", en: 'Working with polynomials',
    steps: [
      ['Qavsni och', "Har bir hadni har biriga ko'paytir"],
      ["O'xshash hadlar", 'Bir xil darajalarni jamla'],
      ['Formulani tani', '$(a+b)^2$, $a^2-b^2$ — tez yo\'l'],
      ['Taqqosla', 'Bir xil darajadagi koeffitsiyentlar teng'],
    ],
    note: "Tezkor tekshiruv: $x=2$ kabi son qo'ying — teng kuchli ifodalar bir xil qiymat beradi.",
  },
  cases: {
    title: "Qisqa ko'paytirish formulalari", en: 'Special products',
    intro: 'Uchta formulani yod biling — ular SAT da doim qaytadi:',
    items: [
      { badge: '+', t: "Yig'indi kvadrati", en: 'square of a sum', rule: '$(a+b)^2$', ex: '$(x+3)^2$', res: '$x^2+6x+9$' },
      { badge: '−', t: 'Ayirma kvadrati', en: 'square of a difference', rule: '$(a-b)^2$', ex: '$(2x-5)^2$', res: '$4x^2-20x+25$' },
      { badge: '±', t: 'Kvadratlar ayirmasi', en: 'difference of squares', rule: '$a^2-b^2$', ex: '$9x^2-16$', res: '$(3x-4)(3x+4)$' },
    ],
  },
  ex: [
    {
      tag: "ko'phad ko'paytmasi", strat: "har bir hadni har biriga, keyin o'xshashlarni jamlang",
      q: 'Which expression is equivalent to $(2x+3)(x-4)+5x$?',
      steps: [['2x^2-8x+3x-12+5x', 'qavsni ochdik'], ['2x^2+0x-12', "o'xshash hadlar"], ['2x^2-12', 'javob']],
      check: "Tekshiruv: $x=1$: $5\\cdot(-3)+5=-10$ va $2-12=-10$ ✓",
    },
    {
      tag: 'koeffitsiyent tenglash', strat: "chap tomonni oching, darajalar bo'yicha taqqoslang",
      q: 'If $(ax+3)(2x-1)=10x^2+bx-3$ for all values of $x$, where $a$ and $b$ are constants, what is the value of $a+b$?',
      steps: [['2ax^2+(6-a)x-3', 'chap tomonni ochdik'], ['2a=10\\Rightarrow a=5', '$x^2$ oldida'], ['b=6-a=1', '$x$ oldida'], ['a+b=6', 'javob']],
      check: 'Tekshiruv: $(5x+3)(2x-1)=10x^2+x-3$ ✓',
    },
    {
      tag: 'kvadratlar ayirmasi', strat: '$a^2-b^2$ shaklini taning',
      q: 'Which of the following is equivalent to $x^4-81$?',
      steps: [['(x^2)^2-9^2', '$a=x^2,\\ b=9$'], ['(x^2-9)(x^2+9)', '1-marta ajratdik'], ['(x-3)(x+3)(x^2+9)', 'javob']],
      check: "$x^2+9$ endi ajralmaydi — bu yig'indi, ayirma emas.",
    },
  ],
  trap: {
    title: '$(a+b)^2\\ne a^2+b^2$',
    q: '$(x+5)^2$ = ?',
    body: "To'g'ri: $x^2+10x+25$. $x^2+25$ — o'rta had $2ab$ ni unutish; bu xato variant testda albatta bo'ladi.",
  },
  tip: {
    badge: '2', short: "son qo'yish", title: "Son qo'yib tekshirish",
    q: "Ikkala ifodaga $x=2$ (yoki $x=3$) qo'ying.",
    body: "Qiymatlar teng bo'lmasa — ifodalar teng kuchli emas. 0 va 1 dan qoching: ular ko'p xatoni yashiradi.",
  },
  mistakes: [
    '$(a+b)^2$ ni $a^2+b^2$ deb ochish.',
    "Minus oldidagi qavsni ochishda ishoralarni o'zgartirmaslik.",
    "$x$ va $x^2$ hadlarini «o'xshash» deb qo'shish.",
    'Koeffitsiyent tenglashda ozod hadni tekshirmaslik.',
  ],
  practice: [
    ['$(x-6)(x+6)$', ''],
    ['$3x(x-2)-(x^2-6x)$', ''],
    ['$(3x-2)^2$', ''],
    ['$(x+k)(x+2)=x^2+7x+10$. $k$ = ?', ''],
  ],
  answers: ['$x^2-36$', '$2x^2$', '$9x^2-12x+4$', '$k=5$'],
  remember: [
    '$(a\\pm b)^2=a^2\\pm 2ab+b^2$; $a^2-b^2=(a-b)(a+b)$.',
    '«For all values of $x$» — koeffitsiyentlarni tenglang.',
    "Shubha bo'lsa — son qo'yib tekshiring.",
  ],
};
