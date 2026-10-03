module.exports = {
  n: 9,
  short: 'Sistemalar_yechimlar_soni',
  en: 'Systems: number of solutions and word problems',
  video: '13 min',
  hook: "SAT sistemalarda ko'pincha yechimning o'zini emas, «nechta yechim bor» yoki «$k$ qanday bo'lsa, yechim yo'q» deb so'raydi. Qoidani bilsangiz, bu savollar 30 soniyada yechiladi.",
  goals: [
    ['Yechimlar soni', "Bitta, yo'q, cheksiz — slope va intercept orqali"],
    ['$k$ parametr', 'Yechimsiz yoki cheksiz yechimli sistema uchun $k$'],
    ['Matnli sistemalar', 'Ikki shartdan ikki tenglama tuzish'],
  ],
  kw: [
    ['no solution', "yechimi yo'q", 'parallel lines'],
    ['infinitely many solutions', "cheksiz ko'p yechim", 'same line'],
    ['exactly one solution', 'aynan bitta yechim', 'lines intersect'],
    ['parallel', 'parallel', 'equal slopes'],
    ['coincide', "ustma-ust tushadi", 'the lines coincide'],
    ['constant $k$', "o'zgarmas son $k$", '$k$ is a constant'],
    ['proportional', 'proporsional', '$\\frac{a_1}{a_2}=\\frac{b_1}{b_2}$'],
    ['revenue', 'tushum', 'total revenue \\$2,340'],
  ],
  core: {
    title: 'Yechimlar sonini aniqlash', en: 'Number of solutions: method',
    steps: [
      ['$y=mx+b$ ga keltir', 'Yoki koeffitsiyentlarni nisbat qil'],
      ['Slope larni solishtir', '$m_1\\ne m_2$ ⇒ bitta yechim'],
      ["Teng bo'lsa — $b$ ni", "$b_1\\ne b_2$ ⇒ yechim yo'q"],
      ['Hammasi teng', "$b_1=b_2$ ⇒ cheksiz ko'p"],
    ],
    note: "Tezkor: $\\frac{a_1}{a_2}=\\frac{b_1}{b_2}\\ne\\frac{c_1}{c_2}$ — yechim yo'q; uchala nisbat teng — cheksiz ko'p.",
  },
  cases: {
    title: 'Ikki chiziq: 3 holat', en: 'Two lines',
    intro: "Sistema yechimi — ikki to'g'ri chiziqning umumiy nuqtalari:",
    items: [
      { badge: '1', t: 'Kesishadi', en: 'one solution', rule: '$m_1\\ne m_2$', ex: '$y=2x+1,\\ y=-x+4$', res: '$(1,\\ 3)$' },
      { badge: '∅', t: 'Parallel', en: 'no solution', rule: '$m_1=m_2,\\ b_1\\ne b_2$', ex: '$y=3x+1,\\ y=3x-5$', res: "umumiy nuqta yo'q" },
      { badge: '∞', t: 'Ustma-ust', en: 'infinitely many', rule: '$m_1=m_2,\\ b_1=b_2$', ex: '$x+2y=4,\\ 2x+4y=8$', res: 'bir xil chiziq' },
    ],
  },
  ex: [
    {
      tag: "$k$: yechim yo'q", strat: "slope teng, intercept har xil",
      q: 'In the system $3x+ky=7$ and $6x+8y=5$, $k$ is a constant. For what value of $k$ does the system have no solution?',
      steps: [['\\frac{3}{6}=\\frac{k}{8}', 'koeffitsiyentlar proporsional'], ['6k=24', "krest ko'paytirish"], ['k=4', 'javob']],
      check: 'Tekshiruv: $\\frac{7}{5}\\ne\\frac{1}{2}$ — ozod hadlar proporsional emas ✓',
    },
    {
      tag: 'cheksiz yechim', strat: 'ikkinchi tenglama birinchining karralisi',
      q: 'The system $2x-5y=4$ and $ax-15y=b$ has infinitely many solutions. What is the value of $a+b$?',
      steps: [['3(2x-5y)=3\\cdot 4', '$-5y\\to -15y$: 3 marta'], ['6x-15y=12', 'ikkinchi tenglama shu'], ['a=6,\\ b=12', 'taqqosladik'], ['a+b=18', 'javob']],
      check: 'Tekshiruv: $6x-15y=12$ ni 3 ga bo\'lsak, $2x-5y=4$ ✓',
    },
    {
      tag: 'matnli sistema', strat: 'ikki shart — ikki tenglama',
      q: 'A theater sold 200 tickets. Adult tickets cost \\$15 and student tickets cost \\$9. Total revenue was \\$2,340. How many adult tickets were sold?',
      steps: [['a+s=200', 'soni'], ['15a+9s=2340', 'puli'], ['6a=540', "1-ni 9 ga ko'paytirib ayirdik"], ['a=90', 'javob']],
      check: 'Tekshiruv: $s=110$: $15\\cdot 90+9\\cdot 110=1350+990=2340$ ✓',
    },
  ],
  trap: {
    title: 'Karrali tenglama',
    q: '$x+2y=4$ va $2x+4y=8$',
    body: "Bu ikki xil chiziq emas — bitta chiziq! Javob: cheksiz ko'p yechim. Agar $2x+4y=9$ bo'lsa — yechim yo'q.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos slider bilan $k$',
    q: '$3x+ky=7$ yozing — $k$ uchun slider chiqadi.',
    body: "$k$ ni suring: chiziqlar parallel bo'lgan qiymat — «no solution» javobi. Natijani algebraik tekshiring.",
  },
  mistakes: [
    "«No solution» uchun faqat slope tengligini tekshirib, intercept ni unutish.",
    "Proporsiyani noto'g'ri tuzish: $\\frac{3}{6}=\\frac{8}{k}$.",
    "Matnli masalada «soni» va «puli» tenglamalarini aralashtirish.",
    "$a+b$ so'ralganda faqat $a$ ni javob qilish.",
  ],
  practice: [
    ['$y=4x-2$ va $8x-2y=4$: nechta yechim?', ''],
    ["$2x+3y=6$, $4x+ky=10$: yechim yo'q bo'lsa $k$=?", ''],
    ['$y=-x+5$, $y=2x-1$: yechim', ''],
    ['30 coins (nickels and dimes) worth \\$2.20. Dimes?', ''],
  ],
  answers: ["cheksiz ko'p", '$k=6$', '$(2,\\ 3)$', '14 ta'],
  remember: [
    "Slope har xil — bitta yechim; slope teng, intercept har xil — yo'q; hammasi teng — cheksiz.",
    '$k$ topish: $\\frac{a_1}{a_2}=\\frac{b_1}{b_2}$ proporsiyasidan.',
    'Matnli sistema: «soni» tenglamasi + «qiymati» tenglamasi.',
  ],
};
