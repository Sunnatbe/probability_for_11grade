module.exports = {
  n: 2,
  short: 'Desmos_va_javob_kiritish',
  en: 'Desmos calculator and answer entry rules',
  video: '13 min',
  hook: "Digital SAT da Desmos grafik kalkulyatori ichkariga o'rnatilgan — uni yaxshi bilgan o'quvchi ko'p savolni hisob-kitobsiz, grafik orqali yechadi.",
  goals: [
    ['Desmos asoslari', 'Grafik, kesishish nuqtasi, jadval, slider'],
    ['Grafik bilan yechish', 'Ikki tomonni $y_1$ va $y_2$ qilib yechish'],
    ['SPR qoidalari', "Kasr, o'nli son va manfiy javobni to'g'ri kiritish"],
  ],
  kw: [
    ['graph', 'grafik', 'Graph $y=2x+1$.'],
    ['intersection', 'kesishish nuqtasi', 'the point of intersection'],
    ['table', 'jadval', '$x$ and $y$ values'],
    ['slider', "o'zgaruvchi surgich", '$y=ax+1$, $a$ — slider'],
    ['fraction', 'oddiy kasr', '$\\frac{7}{3}$'],
    ['decimal', "o'nli kasr", '2.333'],
    ['round to the nearest tenth', "o'ndan birgacha yaxlitlash", '2.333 → 2.3'],
    ['negative', 'manfiy', '$-5$'],
  ],
  core: {
    title: 'SPR javobini kiritish: 4 qoida', en: 'Answer entry rules',
    steps: [
      ["Kasr yoki o'nli", "7/2 yoki 3.5 — ikkalasi ham to'g'ri"],
      ["Uzun o'nli kasr", "Katakni to'ldiring: 2/3 → .6666 yoki .6667"],
      ["Aralash son yo'q", '$3\\frac{1}{2}$ emas — 7/2 yoki 3.5'],
      ['Belgilar', "Minus mumkin; \\$, %, vergul yozilmaydi"],
    ],
    note: "Eslatma: musbat javob uchun 5 ta, manfiy uchun 6 ta belgigacha; bir nechta to'g'ri javob bo'lsa — bittasini kiriting.",
  },
  cases: {
    title: 'Desmos: 3 usul', en: 'Three ways to use Desmos',
    intro: 'Har qanday tenglamani Desmos bilan uch xil yechish yoki tekshirish mumkin:',
    items: [
      { badge: '∩', t: 'Kesishish', en: 'intersection', rule: '$y_1=y_2$', ex: '$y=3x-5,\\ y=7$', res: '$x=4$' },
      { badge: '0', t: 'Nollar', en: 'x-intercepts', rule: '$f(x)=0$', ex: '$y=x^2-9$', res: '$x=\\pm 3$' },
      { badge: 'a', t: 'Slider', en: 'slider', rule: '$y=ax+1$', ex: "$a$ ni o'zgartiring", res: 'grafik buriladi' },
    ],
  },
  ex: [
    {
      tag: 'kesishish nuqtasi', strat: "chap tomon — $y_1$, o'ng tomon — $y_2$",
      q: 'What value of $x$ satisfies $5x-7=2x+11$?',
      steps: [['y=5x-7', '1-qatorga'], ['y=2x+11', '2-qatorga'], ['(6,\\ 23)', 'kesishish nuqtasini bosdik'], ['x=6', 'javob']],
      check: 'Tekshiruv: $5\\cdot 6-7=23$ va $2\\cdot 6+11=23$ ✓',
    },
    {
      tag: 'kasr javob (SPR)', strat: "javobni kasr ko'rinishida qoldiring",
      q: 'If $3x+4=11$, what is the value of $x$?',
      steps: [['3x=7', "4 ni o'ngga"], ['x=\\frac{7}{3}', "3 ga bo'ldik"], ['\\text{7/3 yoki 2.333}', 'kiritish']],
      check: "2.33 yoki 2.3 — xato: katak to'liq to'ldirilmagan.",
    },
    {
      tag: 'eng kichik qiymat', strat: 'grafikdagi eng past nuqtani bosing',
      q: 'The function $f$ is defined by $f(x)=x^2-4x+1$. What is the minimum value of $f(x)$?',
      steps: [['f(x)=x^2-4x+1', "Desmos'ga yozdik"], ['(2,\\ -3)', 'eng past nuqta'], ['-3', 'javob — $y$ koordinata']],
      check: 'Algebraik tekshiruv: $f(2)=4-8+1=-3$ ✓',
    },
  ],
  trap: {
    title: "Yaxlitlash tuzog'i",
    q: 'If the answer is $\\frac{2}{3}$, which entries are accepted?',
    body: "2/3, .6666, .6667, 0.666, 0.667 — to'g'ri; 0.66, .67, 0.67 — xato. Kasrni o'zgarishsiz kiritish eng xavfsiz.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos tezkor usullari',
    q: 'Nuqta ustiga bosing — koordinatalar chiqadi.',
    body: "Jadval: «+» → table. Noma'lum harf yozsangiz, Desmos slider taklif qiladi. «Zoom fit» — butun grafikni ko'rish.",
  },
  mistakes: [
    "Javobni yaxlitlab kiritish: $\\frac{2}{3}$ o'rniga 0.67.",
    "Aralash sonni «3 1/2» deb kiritish — u 31/2 deb o'qiladi.",
    "Desmos'da $x$ o'rniga boshqa harf yozib, tasodifan slider yaratish.",
    "Faqat ekrandagi oynaga ishonish — kesishish nuqtasi ko'rinmasa, «zoom out» qiling.",
  ],
  practice: [
    ['$4x-3=x+9$', 'Desmos bilan'],
    ['$\\frac{5}{8}$ ni SPR ga qanday kiritasiz?', 'ikki usul'],
    ['$x^2-6x+5=0$ ning ildizlari', 'Desmos bilan'],
    ['Aralash son $2\\frac{1}{4}$ ni kiriting', ''],
  ],
  answers: ['$x=4$', '5/8 yoki .625', '$x=1$ va $x=5$', '9/4 yoki 2.25'],
  remember: [
    'Tenglama → $y_1$ va $y_2$ → kesishish nuqtasining $x$ koordinatasi.',
    "SPR: kasr yoki to'liq o'nli son; aralash son va birliklar yozilmaydi.",
    'Desmos butun test davomida ochiq — tekshirish uchun 20 soniya yetadi.',
  ],
};
