module.exports = {
  n: 7,
  short: 'Ikki_ozgaruvchili_tenglamalar',
  en: 'Linear equations in two variables',
  video: '12 min',
  hook: "Ikki o'zgaruvchili tenglama ikki xil narsa aralashgan masalalarda chiqadi: chipta va ichimlik, kitob va daftar. SAT bunday «kombinatsiya» modellarini juda yaxshi ko'radi.",
  goals: [
    ['$ax+by=c$', "Standart shakl va uning ma'nosi"],
    ['Kombinatsiya', 'Narxlar va miqdorlar masalasi'],
    ['Kesishmalar', '$x$- va $y$-interceptni tez topish'],
  ],
  kw: [
    ['standard form', 'standart shakl', '$ax+by=c$'],
    ['combination', 'aralash, kombinatsiya', 'a combination of tickets'],
    ['x-intercept', "$Ox$ bilan kesishish", '$y=0$ da'],
    ['y-intercept', "$Oy$ bilan kesishish", '$x=0$ da'],
    ['ordered pair', 'yechim juftligi', '$(2,\\ 3)$'],
    ['in terms of', 'orqali ifodalash', '$y$ in terms of $x$'],
    ['total cost', 'umumiy narx', '$3x+5y=60$'],
    ['could be', "bo'lishi mumkin", 'Which could be the value …?'],
  ],
  core: {
    title: 'Modelni tuzish: 4 qadam', en: 'Building $ax+by=c$',
    steps: [
      ["Ikki o'zgaruvchi", '$x$ va $y$ — nimaning soni?'],
      ['Birlik qiymati', 'Koeffitsiyent — bitta birlikning narxi'],
      ['Jami', '$ax+by$ = umumiy miqdor $c$'],
      ['Savolga javob', 'Bittasi berilsa, ikkinchisini top'],
    ],
    note: "Eslatma: bitta tenglamaning cheksiz ko'p yechimi bor (to'g'ri chiziq). Javob uchun qo'shimcha shart kerak.",
  },
  cases: {
    title: 'Kesishish nuqtalari', en: 'Intercepts and slope',
    intro: "$ax+by=c$ to'g'ri chizig'ini uchta son bilan tez tasvirlash mumkin:",
    items: [
      { badge: 'x', t: 'x-intercept', en: '$y=0$ qo\'ying', rule: '$x=\\frac{c}{a}$', ex: '$2x+5y=20$', res: '$(10,\\ 0)$' },
      { badge: 'y', t: 'y-intercept', en: '$x=0$ qo\'ying', rule: '$y=\\frac{c}{b}$', ex: '$2x+5y=20$', res: '$(0,\\ 4)$' },
      { badge: 'm', t: 'Slope', en: 'slope', rule: '$m=-\\frac{a}{b}$', ex: '$2x+5y=20$', res: '$m=-\\frac{2}{5}$' },
    ],
  },
  ex: [
    {
      tag: 'chipta narxlari', strat: "har bir tur: narx × soni, keyin qo'shing",
      q: 'Adult tickets cost \\$12 and child tickets cost \\$8. A group paid \\$184 for 6 adult tickets and some child tickets. How many child tickets did they buy?',
      steps: [['12a+8c=184', 'model'], ['12\\cdot 6+8c=184', "$a=6$ ni qo'ydik"], ['8c=112', "72 ni o'ngga"], ['c=14', 'javob']],
      check: 'Tekshiruv: $72+8\\cdot 14=72+112=184$ ✓',
    },
    {
      tag: "intercept ma'nosi", strat: "bitta o'zgaruvchini 0 deb oling",
      q: 'The equation $15s+10h=300$ models a store selling shirts $s$ and hats $h$ for a total of \\$300. What is the $h$-intercept of its graph?',
      steps: [['s=0', "ko'ylak sotilmagan"], ['10h=300', ''], ['h=30', 'javob']],
      check: "Ma'nosi: ko'ylak sotilmasa, \\$300 uchun 30 ta shlyapa sotilgan.",
    },
    {
      tag: "$y$ ni $x$ orqali", strat: "$y$ ni yolg'izlang: o'tkazing va bo'ling",
      q: 'The equation $6x+3y=27$ relates $x$ and $y$. Which equation expresses $y$ in terms of $x$?',
      steps: [['3y=27-6x', "$6x$ ni o'ngga"], ['y=9-2x', "3 ga bo'ldik"], ['y=-2x+9', 'javob']],
      check: 'Tekshiruv: $x=1$: $6+3\\cdot 7=27$ ✓',
    },
  ],
  trap: {
    title: 'Koeffitsiyentni almashtirish',
    q: 'Pens cost \\$2 and notebooks cost \\$5. The total is \\$40.',
    body: "To'g'ri: $2p+5n=40$. $5p+2n=40$ — narxlar o'rnini almashtirish. Har bir koeffitsiyent o'z o'zgaruvchisiga tegishli ekanini tekshiring.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Butun yechimlarni topish',
    q: "$12a+8c=184$ ni Desmos'ga yozing.",
    body: "Grafikdagi butun koordinatali nuqtalar — mumkin bo'lgan javoblar. «Which could be…» savolida variantlarni tenglamaga qo'yib tekshiring.",
  },
  mistakes: [
    "Koeffitsiyent va o'zgaruvchilarni almashtirib yozish.",
    "Bitta tenglamadan ikkala o'zgaruvchini aniq topishga urinish.",
    "$y$ ni yolg'izlashda faqat bitta hadni bo'lish: $3y=27-6x\\Rightarrow y=9-6x$ ✗.",
    "Kontekstda manfiy yoki kasr javobni qabul qilish (chiptalar soni butun!).",
  ],
  practice: [
    ['$4x+6y=48$: $x$- va $y$-intercept', ''],
    ['Apples \\$2 each, melons \\$5 each, total \\$41, 8 apples. Melons?', ''],
    ['$10x-2y=14$: $y$ ni $x$ orqali', ''],
    ['$3x+4y=24$: slope', ''],
  ],
  answers: ['$(12,\\ 0)$ va $(0,\\ 8)$', '5 ta', '$y=5x-7$', '$-\\frac{3}{4}$'],
  remember: [
    '$ax+by=c$: koeffitsiyent — birlik qiymati, $c$ — jami.',
    '$x$-intercept: $y=0$; $y$-intercept: $x=0$; slope $=-\\frac{a}{b}$.',
    "Bitta tenglama — cheksiz ko'p juftlik; javob uchun qo'shimcha shart kerak.",
  ],
};
