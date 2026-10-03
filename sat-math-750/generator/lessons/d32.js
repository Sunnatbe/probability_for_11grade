module.exports = {
  n: 32,
  short: 'Aylana_yoy_sektor',
  en: 'Circles: equation, arc length and sector area',
  video: '13 min',
  hook: "Aylana — SAT geometriyasining eng «algebraik» mavzusi: tenglamadan markaz va radiusni topish uchun to'liq kvadrat ajratish kerak. Bugun shu va yoy, sektor formulalarini o'rganamiz.",
  goals: [
    ['Aylana tenglamasi', '$(x-h)^2+(y-k)^2=r^2$'],
    ["To'liq kvadrat", 'Yoyilgan tenglamadan markaz va radius'],
    ['Yoy va sektor', 'Markaziy burchak ulushi orqali'],
  ],
  kw: [
    ['circle', 'aylana', '$x^2+y^2=25$'],
    ['radius', 'radius', '$r=5$'],
    ['center', 'markaz', '$(h,\\ k)$'],
    ['arc length', 'yoy uzunligi', '$\\frac{\\theta}{360}\\cdot 2\\pi r$'],
    ['sector', 'sektor', '$\\frac{\\theta}{360}\\cdot\\pi r^2$'],
    ['central angle', 'markaziy burchak', '$\\theta$'],
    ['circumference', 'aylana uzunligi', '$2\\pi r$'],
    ['completing the square', "to'liq kvadrat ajratish", '$x^2-6x+9=(x-3)^2$'],
  ],
  core: {
    title: "To'liq kvadrat ajratish", en: 'Completing the square',
    steps: [
      ['Guruhla', '$x$ li va $y$ li hadlarni alohida'],
      ['Yarmini kvadratla', "$x^2+bx$ ga $(\\frac{b}{2})^2$ qo'sh"],
      ['Ikkala tomonga', "Qo'shganingni o'ng tomonga ham qo'sh"],
      ["O'qi", '$(x-h)^2+(y-k)^2=r^2$: markaz va radius'],
    ],
    note: "Diqqat: o'ng tomondagi son — $r^2$, radius emas. Ildiz chiqaring!",
  },
  cases: {
    title: 'Ulush usuli', en: 'Fraction of the circle',
    intro: 'Markaziy burchak $\\theta$ aylananing qancha qismi ekanini bildiradi:',
    items: [
      { badge: '∠', t: 'Ulush', en: 'fraction of circle', rule: '$\\frac{\\theta}{360^\\circ}$', ex: '$\\theta=90^\\circ$', res: '$\\frac{1}{4}$' },
      { badge: '⌒', t: 'Yoy', en: 'arc length', rule: '$\\frac{\\theta}{360^\\circ}\\cdot 2\\pi r$', ex: '$r=6,\\ \\theta=60^\\circ$', res: '$2\\pi$' },
      { badge: 'S', t: 'Sektor', en: 'sector area', rule: '$\\frac{\\theta}{360^\\circ}\\cdot\\pi r^2$', ex: '$r=6,\\ \\theta=60^\\circ$', res: '$6\\pi$' },
    ],
  },
  ex: [
    {
      tag: "to'liq kvadrat", strat: "har bir o'zgaruvchi uchun $(\\frac{b}{2})^2$",
      q: 'The equation $x^2+y^2-6x+8y=11$ defines a circle in the $xy$-plane. What is the radius of the circle?',
      steps: [['(x^2-6x+9)+(y^2+8y+16)=11+9+16', "9 va 16 qo'shdik"], ['(x-3)^2+(y+4)^2=36', "to'liq kvadratlar"], ['r=\\sqrt{36}=6', 'javob']],
      check: 'Markaz: $(3,\\ -4)$ — qavsdagi ishoralar teskari!',
    },
    {
      tag: 'yoy uzunligi', strat: 'ulush × aylana uzunligi',
      q: 'A circle has a radius of 9. What is the length of an arc with a central angle of $80^\\circ$?',
      steps: [['\\frac{80}{360}=\\frac{2}{9}', 'ulush'], ['C=2\\pi\\cdot 9=18\\pi', 'aylana uzunligi'], ['\\frac{2}{9}\\cdot 18\\pi=4\\pi', 'javob']],
      check: 'Radianda: $s=r\\theta$; $80^\\circ=\\frac{4\\pi}{9}$, $9\\cdot\\frac{4\\pi}{9}=4\\pi$ ✓',
    },
    {
      tag: 'sektor yuzi', strat: 'ulush × doira yuzasi',
      q: 'A sector of a circle with radius 10 has an area of $25\\pi$. What is the central angle of the sector, in degrees?',
      steps: [['\\pi r^2=100\\pi', 'doira yuzasi'], ['\\frac{25\\pi}{100\\pi}=\\frac{1}{4}', 'ulush'], ['\\theta=\\frac{1}{4}\\cdot 360^\\circ=90^\\circ', 'javob']],
      check: 'Tekshiruv: $\\frac{90}{360}\\cdot 100\\pi=25\\pi$ ✓',
    },
  ],
  trap: {
    title: '$r^2$ va $r$',
    q: '$(x+2)^2+(y-1)^2=49$: radius?',
    body: "$r=7$, 49 emas. Markaz $(-2,\\ 1)$ — qavsdagi ishoralar teskari olinadi.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos aylanani chizadi',
    q: 'Tenglamani shundayligicha yozing.',
    body: "Markaz va radiusni grafikdan o'qing yoki variantlardagi aylanalarni ustma-ust qo'yib solishtiring.",
  },
  mistakes: [
    '$r^2$ ni radius deb olish.',
    'Markaz koordinatalarining ishorasini aralashtirish.',
    "To'liq kvadrat ajratganda o'ng tomonga ham qo'shishni unutish.",
    'Yoy uzunligida $\\pi r^2$, sektor yuzida $2\\pi r$ ishlatish.',
  ],
  practice: [
    ['$(x-5)^2+(y+2)^2=16$: markaz va radius', ''],
    ['$x^2+y^2+10x=0$: radius', ''],
    ['$r=12$, $\\theta=30^\\circ$: yoy uzunligi', ''],
    ['$r=4$, $\\theta=45^\\circ$: sektor yuzi', ''],
  ],
  answers: ['$(5,\\ -2)$, $r=4$', '5', '$2\\pi$', '$2\\pi$'],
  remember: [
    '$(x-h)^2+(y-k)^2=r^2$: markaz $(h,\\ k)$, radius $\\sqrt{r^2}$.',
    "To'liq kvadrat: $(\\frac{b}{2})^2$ ni ikkala tomonga qo'shing.",
    'Yoy $=\\frac{\\theta}{360}\\cdot 2\\pi r$, sektor $=\\frac{\\theta}{360}\\cdot\\pi r^2$.',
  ],
};
