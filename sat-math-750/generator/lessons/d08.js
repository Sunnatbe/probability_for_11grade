module.exports = {
  n: 8,
  short: 'Sistemalar_yechish_usullari',
  en: 'Systems of two linear equations: solving methods',
  video: '13 min',
  hook: "Ikki tenglamalar sistemasi — SAT ning eng barqaror mavzularidan biri: har testda 2–3 savol. Bugun uchta usulni va qaysi biri qachon tezroq ekanini o'rganamiz.",
  goals: [
    ["O'rniga qo'yish", "Bitta o'zgaruvchi yolg'iz bo'lsa — eng tezi"],
    ["Qo'shish usuli", "Koeffitsiyentlarni tenglab, bittasini yo'qotish"],
    ['Desmos', "Ikki chiziqning kesishish nuqtasi — yechim"],
  ],
  kw: [
    ['system of equations', 'tenglamalar sistemasi', 'two equations, two unknowns'],
    ['substitution', "o'rniga qo'yish usuli", '$y=2x-1$ ni qo\'ying'],
    ['elimination', "qo'shish (yo'qotish) usuli", 'eliminate $y$'],
    ['ordered pair', 'tartiblangan juftlik', '$(x,\\ y)=(3,\\ 1)$'],
    ['solution to the system', 'sistemaning yechimi', 'satisfies both equations'],
    ['intersection point', 'kesishish nuqtasi', 'where the lines meet'],
    ['value of $x+y$', 'ifodaning qiymati', 'What is $x+y$?'],
    ['multiply', "ko'paytirmoq", 'multiply by 3'],
  ],
  core: {
    title: "Qo'shish usuli: 4 qadam", en: 'Elimination step by step',
    steps: [
      ['Tekisla', "Ikkala tenglama $ax+by=c$ ko'rinishida"],
      ['Koeffitsiyentni tengla', "Bittasini (yoki ikkalasini) songa ko'paytir"],
      ["Qo'sh yoki ayir", "Bitta o'zgaruvchi yo'qoladi"],
      ["Ortga qo'y", "Topilganini istalgan tenglamaga qo'y"],
    ],
    note: "Yorliq: savol $x+y$ yoki $x-y$ ni so'rasa — tenglamalarni to'g'ridan-to'g'ri qo'shing yoki ayiring.",
  },
  cases: {
    title: 'Qaysi usul tezroq?', en: 'Choosing a method',
    intro: 'Sistemaga qarab usul tanlang — bu vaqtni tejaydi:',
    items: [
      { badge: 'S', t: "O'rniga qo'yish", en: 'substitution', rule: '$y=\\ldots$ bor', ex: '$y=2x-1,\\ 3x+y=9$', res: '$x=2,\\ y=3$' },
      { badge: 'E', t: "Qo'shish", en: 'elimination', rule: 'qarama-qarshi koef.', ex: '$x+y=10,\\ x-y=4$', res: '$x=7,\\ y=3$' },
      { badge: 'D', t: 'Desmos', en: 'graphing', rule: 'murakkab sonlar', ex: 'ikkala chiziqni chizing', res: 'nuqtani bosing' },
    ],
  },
  ex: [
    {
      tag: "o'rniga qo'yish", strat: "$y$ allaqachon yolg'iz — uni qo'ying",
      q: 'If $y=3x-4$ and $2x+y=16$, what is the value of $x$?',
      steps: [['2x+(3x-4)=16', "$y$ ni qo'ydik"], ['5x-4=16', "o'xshash hadlar"], ['5x=20', "4 ni o'ngga"], ['x=4', 'javob']],
      check: 'Tekshiruv: $y=3\\cdot 4-4=8$; $2\\cdot 4+8=16$ ✓',
    },
    {
      tag: "qo'shish usuli", strat: "$y$ koeffitsiyentlarini qarama-qarshi qiling",
      q: 'If $3x+2y=16$ and $5x-4y=12$, what is the value of $y$?',
      steps: [['6x+4y=32', "1-tenglamani 2 ga ko'paytirdik"], ['11x=44', "qo'shdik: $y$ yo'qoldi"], ['3\\cdot 4+2y=16', "$x=4$ ni qo'ydik"], ['y=2', 'javob']],
      check: 'Tekshiruv: $5\\cdot 4-4\\cdot 2=12$ ✓',
    },
    {
      tag: "$x+y$ yorlig'i", strat: "yechmang — tenglamalarni qo'shing",
      q: 'If $4x+y=17$ and $x+4y=13$, what is the value of $x+y$?',
      steps: [['5x+5y=30', "qo'shdik"], ['5(x+y)=30', '5 ni qavsdan chiqardik'], ['x+y=6', 'javob']],
      check: "Haqiqatan $x=\\frac{11}{3},\\ y=\\frac{7}{3}$ — ularni alohida topish ancha uzoq!",
    },
  ],
  trap: {
    title: "Savol nimani so'raydi?",
    q: '… what is the value of $y$?',
    body: "$x$ ni topib to'xtab qolish — klassik xato. «Solution $(x,\\ y)$» savolida juftlik tartibini ham aralashtirmang.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos: ikki chiziq',
    q: 'Ikkala tenglamani shundayligicha yozing.',
    body: "Kesishish nuqtasini bosing — $(x,\\ y)$ tayyor. Kasr javoblarni variantlar bilan solishtiring.",
  },
  mistakes: [
    "Tenglamani songa ko'paytirganda o'ng tomonni unutish.",
    'Ayirishda ishoralarni noto\'g\'ri olish: $-(-4y)=+4y$.',
    "Faqat bitta o'zgaruvchini topib, savolga javob bermaslik.",
    'Juftlik tartibini almashtirish: $(y,\\ x)$.',
  ],
  practice: [
    ['$y=x+2$, $3x+y=18$. $x$ = ?', ''],
    ['$2x+3y=13$, $2x-y=1$. $y$ = ?', ''],
    ['$x+2y=7$, $3x-2y=5$. $(x,\\ y)$ = ?', ''],
    ['$7x+3y=20$, $3x+7y=30$. $x+y$ = ?', ''],
  ],
  answers: ['$x=4$', '$y=3$', '$(3,\\ 2)$', '5'],
  remember: [
    "$y=\\ldots$ bo'lsa — o'rniga qo'yish; koeffitsiyentlar qulay bo'lsa — qo'shish.",
    "Ko'paytirganda tenglamaning har bir hadini ko'paytiring.",
    "$x+y$ so'ralsa — avval tenglamalarni qo'shib yoki ayirib ko'ring.",
  ],
};
