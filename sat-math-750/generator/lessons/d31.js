module.exports = {
  n: 31,
  short: 'Yuza_va_hajm',
  en: 'Area and volume',
  video: '12 min',
  hook: "Yuza va hajm formulalari reference sheet da berilgan — SAT sizdan formulani emas, uni to'g'ri qo'llashni va o'lcham o'zgarganda nima bo'lishini so'raydi.",
  goals: [
    ["Formulalar varag'i", 'Qaysi formula qayerda — tez topish'],
    ['Murakkab shakllar', "Bo'laklarga ajratish yoki ayirish"],
    ['Masshtab', 'Uzunlik $\\times k$ ⇒ yuza $\\times k^2$, hajm $\\times k^3$'],
  ],
  kw: [
    ['area', 'yuza', '$A=lw$'],
    ['volume', 'hajm', '$V=lwh$'],
    ['surface area', 'sirt yuzasi', 'kub: $6s^2$'],
    ['cylinder', 'silindr', '$V=\\pi r^2h$'],
    ['cone', 'konus', '$V=\\frac{1}{3}\\pi r^2h$'],
    ['sphere', 'shar', '$V=\\frac{4}{3}\\pi r^3$'],
    ['scale factor', 'masshtab koeffitsiyenti', '$k=3$'],
    ['rectangular prism', "to'g'ri burchakli prizma", '$V=lwh$'],
  ],
  core: {
    title: 'Hajm masalasi: 4 qadam', en: 'Solving volume problems',
    steps: [
      ['Shaklni aniqla', 'Silindr, konus, shar yoki prizma?'],
      ['Formulani ol', 'Reference sheet: $V=\\pi r^2h$ va h.k.'],
      ['Radius yoki diametr?', "Diametr berilsa — 2 ga bo'l!"],
      ["Qo'y va hisobla", '$\\pi$ ni oxirigacha saqla'],
    ],
    note: "Javob variantlarida $\\pi$ qoldirilgan bo'lsa (masalan, $36\\pi$), $\\pi$ ni 3.14 ga almashtirmang.",
  },
  cases: {
    title: "O'lcham o'zgarsa", en: 'Scaling',
    intro: 'Barcha uzunliklar $k$ marta oshirilsa:',
    items: [
      { badge: 'k', t: 'Uzunlik', en: 'length, perimeter', rule: '$\\times k$', ex: '$k=3$', res: '3 marta' },
      { badge: 'k²', t: 'Yuza', en: 'area, surface area', rule: '$\\times k^2$', ex: '$k=3$', res: '9 marta' },
      { badge: 'k³', t: 'Hajm', en: 'volume', rule: '$\\times k^3$', ex: '$k=3$', res: '27 marta' },
    ],
  },
  ex: [
    {
      tag: 'silindr', strat: 'diametrni radiusga aylantiring',
      q: 'A cylinder has a diameter of 6 inches and a height of 10 inches. What is its volume, in cubic inches?',
      steps: [['r=\\frac{6}{2}=3', 'radius'], ['V=\\pi\\cdot 3^2\\cdot 10', "qo'ydik"], ['V=90\\pi', 'javob']],
      check: "$\\approx 282.7$ kub dyuym; diametrni radius deb olsangiz $360\\pi$ — tuzoq variant.",
    },
    {
      tag: 'masshtab', strat: 'hajm $k^3$ marta o\'zgaradi',
      q: 'A sphere has a radius of 2 cm. If the radius is tripled, by what factor does the volume increase?',
      steps: [['k=3', 'radius 3 marta'], ['k^3=27', 'hajm koeffitsiyenti'], ['27\\ \\text{marta}', 'javob']],
      check: 'Tekshiruv: $\\frac{4}{3}\\pi\\cdot 6^3=288\\pi$ va $\\frac{4}{3}\\pi\\cdot 2^3=\\frac{32}{3}\\pi$; nisbat 27 ✓',
    },
    {
      tag: 'murakkab shakl', strat: 'katta shakldan kichigini ayiring',
      q: 'A rectangular garden is 20 m by 12 m. It contains a circular pond with a radius of 3 m. What is the area of the garden not covered by the pond, to the nearest square meter?',
      steps: [['S_1=20\\cdot 12=240', "to'rtburchak"], ['S_2=\\pi\\cdot 3^2=9\\pi', 'hovuz'], ['240-9\\pi\\approx 211.7', 'ayirdik'], ['212', 'javob (m²)']],
      check: '$9\\pi\\approx 28.27$; $240-28.27=211.73$ ✓',
    },
  ],
  trap: {
    title: 'Diametr va radius',
    q: '«diameter 10» — $r$ = ?',
    body: "$r=5$. Diametrni formulaga qo'yish yuzani 4 marta, shar hajmini 8 marta oshirib yuboradi — va bu son variantlarda albatta bor.",
  },
  tip: {
    badge: 'R', short: "formulalar varag'i", title: 'Reference sheet',
    q: "Test boshida bir marta ko'rib chiqing.",
    body: "Unda: doira, to'rtburchak, uchburchak yuzasi; prizma, silindr, shar, konus, piramida hajmi; maxsus uchburchaklar; aylana $360^\\circ=2\\pi$ rad.",
  },
  mistakes: [
    "Diametrni radius o'rniga qo'yish.",
    "Konus va piramida formulasidagi $\\frac{1}{3}$ ni unutish.",
    'Masshtabda yuzani $k$ marta, hajmni $k^2$ marta oshirish.',
    'Birliklarni aralashtirish: sm va m.',
  ],
  practice: [
    ['Kub qirrasi 4. Hajmi va sirt yuzasi?', ''],
    ['Konus: $r=3$, $h=8$. Hajmi?', ''],
    ['Kvadrat tomoni 2 marta oshdi. Yuza necha marta?', ''],
    ['Shar radiusi 3. Hajmi?', ''],
  ],
  answers: ['64 va 96', '$24\\pi$', '4 marta', '$36\\pi$'],
  remember: [
    "Formulalar reference sheet da — radius yoki diametrni o'zingiz tekshiring.",
    'Uzunlik $\\times k$ ⇒ yuza $\\times k^2$, hajm $\\times k^3$.',
    "Murakkab shakl: qo'shing yoki ayiring; $\\pi$ ni oxirigacha saqlang.",
  ],
};
