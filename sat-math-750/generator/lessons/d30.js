module.exports = {
  n: 30,
  short: 'Trigonometriya_asoslari',
  en: 'Right-triangle trigonometry and radians',
  video: '12 min',
  hook: "SAT trigonometriyasi murakkab emas: SOH-CAH-TOA, $\\sin x=\\cos(90^\\circ-x)$ va radian. Shu uchta g'oya deyarli barcha savolni qamrab oladi.",
  goals: [
    ['SOH-CAH-TOA', 'sin, cos, tan ni tomonlar orqali'],
    ["To'ldiruvchi burchaklar", '$\\sin x^\\circ=\\cos(90^\\circ-x^\\circ)$'],
    ['Radian', '$180^\\circ=\\pi$ radian'],
  ],
  kw: [
    ['sine', 'sinus', '$\\sin A=\\frac{O}{H}$'],
    ['cosine', 'kosinus', '$\\cos A=\\frac{A}{H}$'],
    ['tangent', 'tangens', '$\\tan A=\\frac{O}{A}$'],
    ['opposite', 'qarama-qarshi katet', 'burchak qarshisida'],
    ['adjacent', 'yopishgan katet', 'burchak yonida'],
    ['hypotenuse', 'gipotenuza', 'eng uzun tomon'],
    ['complementary angles', "to'ldiruvchi burchaklar", '$x+y=90^\\circ$'],
    ['radian', 'radian', '$\\pi\\text{ rad}=180^\\circ$'],
  ],
  core: {
    title: 'SOH-CAH-TOA: 4 qadam', en: 'Trig ratios',
    steps: [
      ['Burchakni tanla', "Qaysi o'tkir burchakka nisbatan?"],
      ['Tomonlarni nomla', 'opposite, adjacent, hypotenuse'],
      ['Nisbatni yoz', '$\\sin=\\frac{O}{H}$, $\\cos=\\frac{A}{H}$, $\\tan=\\frac{O}{A}$'],
      ['Yech', "Noma'lum tomon yoki burchakni top"],
    ],
    note: "Radian ↔ gradus: $\\text{radian}=\\text{gradus}\\cdot\\frac{\\pi}{180}$; masalan, $60^\\circ=\\frac{\\pi}{3}$.",
  },
  cases: {
    title: 'Uchta muhim munosabat', en: 'Key identities',
    intro: "Bu uchtasi SAT da eng ko'p ishlatiladi:",
    items: [
      { badge: '90', t: "To'ldiruvchi", en: 'complementary', rule: '$\\sin x=\\cos(90^\\circ-x)$', ex: '$\\sin 25^\\circ$', res: '$=\\cos 65^\\circ$' },
      { badge: '÷', t: 'Tangens', en: 'tangent', rule: '$\\tan x=\\frac{\\sin x}{\\cos x}$', ex: '$\\sin=0.6,\\ \\cos=0.8$', res: '$\\tan=0.75$' },
      { badge: 'π', t: 'Radian', en: 'radians', rule: '$180^\\circ=\\pi$', ex: '$45^\\circ$', res: '$\\frac{\\pi}{4}$' },
    ],
  },
  ex: [
    {
      tag: 'SOH-CAH-TOA', strat: 'burchakka nisbatan tomonlarni nomlang',
      q: 'In right triangle $ABC$, $\\angle C=90^\\circ$, $AC=8$, $BC=15$, and $AB=17$. What is the value of $\\sin A$?',
      steps: [['\\text{opposite}=BC=15', '$A$ qarshisidagi katet'], ['\\text{hypotenuse}=AB=17', 'gipotenuza'], ['\\sin A=\\frac{15}{17}', 'javob']],
      check: "$\\cos B$ ham $\\frac{15}{17}$ — chunki $A$ va $B$ to'ldiruvchi burchaklar ✓",
    },
    {
      tag: "to'ldiruvchi burchak", strat: '$\\sin x=\\cos(90-x)$',
      q: 'In a right triangle, $\\sin(x^\\circ)=\\cos((2x-30)^\\circ)$. What is the value of $x$?',
      steps: [['x+(2x-30)=90', "burchaklar to'ldiruvchi"], ['3x=120', 'soddalashtirdik'], ['x=40', 'javob']],
      check: 'Tekshiruv: $\\sin 40^\\circ=\\cos 50^\\circ$ ✓',
    },
    {
      tag: 'tomonni topish', strat: "ma'lum va noma'lum tomonni bog'laydigan nisbat",
      q: 'A 10-foot ladder leans against a wall, making a $60^\\circ$ angle with the ground. How high up the wall does the ladder reach?',
      steps: [['\\sin 60^\\circ=\\frac{h}{10}', 'opposite / hypotenuse'], ['h=10\\cdot\\frac{\\sqrt{3}}{2}', "ko'paytirdik"], ['h=5\\sqrt{3}\\approx 8.66', 'javob (fut)']],
      check: '30-60-90 bilan ham: gipotenuza 10 ⇒ uzun katet $5\\sqrt{3}$ ✓',
    },
  ],
  trap: {
    title: 'Qaysi burchakka nisbatan?',
    q: '$\\sin A$ va $\\sin B$',
    body: "Opposite va adjacent burchakka qarab almashadi: $\\sin A=\\cos B$. Avval burchakni belgilang, keyin tomonlarni nomlang.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos: gradus rejimi',
    q: 'Sozlamalar (kalit belgisi) → Degrees.',
    body: "Aks holda Desmos radianda hisoblaydi: $\\sin(30)\\approx -0.988$, 0.5 emas! Radianli savollarda rejimni qaytaring.",
  },
  mistakes: [
    'Opposite va adjacent ni boshqa burchakka nisbatan olish.',
    'Desmos radian rejimida gradusli hisoblash.',
    "$\\sin x=\\cos x$ ni har doim to'g'ri deb o'ylash (faqat $45^\\circ$ da).",
    "Radianni gradusga o'tkazishda $\\frac{180}{\\pi}$ ni teskari olish.",
  ],
  practice: [
    ['Katetlar 3 va 4, gipotenuza 5; $A$ qarshisida 3. $\\cos A$ = ?', ''],
    ['$\\cos 20^\\circ=\\sin k^\\circ$. $k$ = ?', ''],
    ['$\\frac{3\\pi}{4}$ radian — necha gradus?', ''],
    ["$\\tan A=1$, $A$ — o'tkir. $A$ = ?", ''],
  ],
  answers: ['$\\frac{4}{5}$', '70', '$135^\\circ$', '$45^\\circ$'],
  remember: [
    'SOH-CAH-TOA: $\\sin=\\frac{O}{H}$, $\\cos=\\frac{A}{H}$, $\\tan=\\frac{O}{A}$.',
    "$\\sin x^\\circ=\\cos(90^\\circ-x^\\circ)$ — to'ldiruvchi burchaklar.",
    '$180^\\circ=\\pi$ radian; Desmos rejimini tekshiring.',
  ],
};
