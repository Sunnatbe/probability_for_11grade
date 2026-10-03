module.exports = {
  n: 21,
  short: 'Nisbat_tezlik_birliklar',
  en: 'Ratios, rates, proportional relationships and units',
  video: '12 min',
  hook: "Problem-Solving & Data Analysis moduli boshlanadi. Nisbat va birlik masalalari SAT ning eng «hayotiy» savollari: tezlik, narx, zichlik, retsept.",
  goals: [
    ['Nisbat va proporsiya', '$a:b$ va $\\frac{a}{b}=\\frac{c}{d}$'],
    ["Birlik o'tkazish", 'Kasr zanjiri: keraksiz birliklar qisqaradi'],
    ['Tezlik va zichlik', '$d=rt$, zichlik $=\\frac{m}{V}$'],
  ],
  kw: [
    ['ratio', 'nisbat', '3 : 5'],
    ['rate', "tezlik, sur'at", '60 miles per hour'],
    ['proportion', 'proporsiya', '$\\frac{3}{2}=\\frac{f}{7}$'],
    ['unit conversion', "birlik o'tkazish", 'km/h → m/s'],
    ['density', 'zichlik', '2.7 g/cm³'],
    ['directly proportional', "to'g'ri proporsional", '$y=kx$'],
    ['inversely proportional', 'teskari proporsional', '$y=\\frac{k}{x}$'],
    ['unit rate', 'birlik narx', '\\$1.50 per pound'],
  ],
  core: {
    title: 'Birlik zanjiri: 4 qadam', en: 'Unit conversion chain',
    steps: [
      ['Berilganni yoz', 'Son + birlik: 72 km/soat'],
      ["Kasr ko'paytuvchilar", '$\\frac{1000\\text{ m}}{1\\text{ km}}$, $\\frac{1\\text{ soat}}{3600\\text{ s}}$'],
      ['Qisqartir', 'Surat va maxrajdagi bir xil birliklar'],
      ['Hisobla', 'Qolgan birlik — kerakli birlik'],
    ],
    note: "Kvadrat birliklarda koeffitsiyent ham kvadratga ko'tariladi: $1\\text{ m}^2=100^2\\text{ cm}^2=10{,}000\\text{ cm}^2$.",
  },
  cases: {
    title: 'Proporsional munosabatlar', en: 'Proportional relationships',
    intro: "Uch xil bog'lanishni farqlang:",
    items: [
      { badge: '∝', t: "To'g'ri", en: 'directly proportional', rule: '$y=kx$', ex: 'narx va miqdor', res: "$\\frac{y}{x}$ o'zgarmas" },
      { badge: '1/x', t: 'Teskari', en: 'inversely proportional', rule: '$y=\\frac{k}{x}$', ex: 'tezlik va vaqt', res: "$xy$ o'zgarmas" },
      { badge: ':', t: 'Nisbat', en: 'part-to-part ratio', rule: '$a:b=3:5$', ex: 'jami 40 ta', res: '15 va 25' },
    ],
  },
  ex: [
    {
      tag: "birlik o'tkazish", strat: "kerakli birlik qolguncha kasrlarga ko'paytiring",
      q: 'A car travels at 72 kilometers per hour. What is its speed in meters per second?',
      steps: [['72\\cdot\\frac{1000}{1}\\cdot\\frac{1}{3600}', 'km → m, soat → s'], ['\\frac{72000}{3600}', 'hisobladik'], ['20\\ \\text{m/s}', 'javob']],
      check: "Tezkor: km/soat → m/s uchun 3.6 ga bo'ling: $72\\div 3.6=20$ ✓",
    },
    {
      tag: 'proporsiya', strat: "bir xil kattaliklarni bir xil o'ringa qo'ying",
      q: 'A recipe uses 3 cups of flour for every 2 cups of sugar. How many cups of flour are needed for 7 cups of sugar?',
      steps: [['\\frac{3}{2}=\\frac{f}{7}', 'un : shakar'], ['2f=21', "krest ko'paytirish"], ['f=10.5', 'javob']],
      check: 'Nisbat saqlandi: $\\frac{10.5}{7}=1.5=\\frac{3}{2}$ ✓',
    },
    {
      tag: 'zichlik', strat: 'zichlik $=\\frac{\\text{massa}}{\\text{hajm}}$ — birliklarga qarang',
      q: 'A metal block has a mass of 540 grams and a density of 2.7 grams per cubic centimeter. What is its volume, in cubic centimeters?',
      steps: [['V=\\frac{m}{\\rho}', 'formula'], ['V=\\frac{540}{2.7}', "qo'ydik"], ['V=200', 'javob (cm³)']],
      check: 'Birlik tekshiruvi: $\\frac{\\text{g}}{\\text{g/cm}^3}=\\text{cm}^3$ ✓',
    },
  ],
  trap: {
    title: '«Jami» bilan nisbat',
    q: "Qizil : ko'k = 3 : 5, jami 40 ta. Qizil nechta?",
    body: "$\\frac{3}{8}\\cdot 40=15$. $\\frac{3}{5}\\cdot 40=24$ — xato: qism va butunni aralashtirish.",
  },
  tip: {
    badge: 'U', short: 'birliklar', title: 'Birliklarni yozib boring',
    q: 'Har bir son yoniga birligini yozing.',
    body: "Natija birligi so'ralganiga mos kelmasa — qayerdadir kasr teskari. Bu xatoni hisoblashdan oldin ushlaydi.",
  },
  mistakes: [
    "Kvadrat yoki kub birliklarda koeffitsiyentni kvadrat/kubga ko'tarmaslik.",
    'Qismga nisbatni butunga nisbat deb olish.',
    "Kasr ko'paytuvchini teskari yozish (birliklar qisqarmaydi).",
    "Tezlik masalasida vaqt birligini o'tkazmaslik (minut va soat).",
  ],
  practice: [
    ['5 km/soat — necha m/min?', ''],
    ['8 ta daftar \\$12. 20 tasi necha pul?', ''],
    ["O'g'il : qiz = 4 : 5, sinfda 36 o'quvchi. Qizlar?", ''],
    ['2 m² — necha cm²?', ''],
  ],
  answers: ['≈83.3 m/min', '\\$30', '20', '20,000 cm²'],
  remember: [
    "Birlik zanjiri: keraksiz birliklar qisqaradigan qilib kasrlarga ko'paytiring.",
    "Nisbat $a:b$ da butun — $a+b$ qism; $y=kx$ — to'g'ri proporsional.",
    'Kvadrat birlik — koeffitsiyent kvadrati, kub birlik — kubi.',
  ],
};
