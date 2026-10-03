module.exports = {
  n: 16,
  short: 'Korsatkichli_funksiyalar',
  en: 'Exponential functions: growth and decay',
  video: '12 min',
  hook: "Bank foizi, aholi soni, dori miqdori — bularning hammasi ko'rsatkichli funksiya. SAT da bu mavzu modelni tanish va foizni to'g'ri o'qish bilan bog'liq.",
  goals: [
    ['$a\\cdot b^x$ modeli', "$a$ — boshlang'ich, $b$ — o'sish ko'paytuvchisi"],
    ["Foizli o'zgarish", '$b=1+r$ yoki $b=1-r$'],
    ["Chiziqli vs ko'rsatkichli", "Teng qo'shilsa — chiziqli, teng ko'paytirilsa — ko'rsatkichli"],
  ],
  kw: [
    ['exponential growth', "eksponensial o'sish", '$b>1$'],
    ['exponential decay', 'eksponensial kamayish', '$0<b<1$'],
    ['percent increase', 'foizli ortish', '5% per year'],
    ['initial amount', "boshlang'ich miqdor", '$a$ in $a\\cdot b^x$'],
    ['growth factor', "o'sish ko'paytuvchisi", '$b=1.05$'],
    ['doubles', 'ikki barobar ortadi', '$2^{\\frac{t}{5}}$'],
    ['half-life', 'yarim yemirilish davri', '$(\\frac{1}{2})^{\\frac{t}{h}}$'],
    ['compounded annually', 'yillik murakkab foiz', '$P(1+r)^t$'],
  ],
  core: {
    title: "Modelni o'qish: 4 qadam", en: 'Reading $f(x)=a\\cdot b^x$',
    steps: [
      ['$a$ ni top', '$x=0$ dagi qiymat: $f(0)=a$'],
      ['$b$ ni top', "Har bir qadamda nechaga ko'paytiriladi"],
      ["Foizga o'gir", "$b=1.07$ — 7% o'sish; $b=0.85$ — 15% kamayish"],
      ['Davrni tekshir', '$b^{\\frac{x}{5}}$ — har 5 yilda bir marta'],
    ],
    note: "Formula: o'sish $a(1+r)^t$, kamayish $a(1-r)^t$, bu yerda $r$ — foiz o'nli kasrda.",
  },
  cases: {
    title: 'Qaysi model?', en: 'Linear or exponential?',
    intro: "Jadvaldagi ketma-ket qiymatlarni solishtiring:",
    items: [
      { badge: '+', t: 'Chiziqli', en: 'linear', rule: "teng qo'shiladi", ex: '5, 8, 11, 14', res: '$+3$: $y=3x+5$' },
      { badge: '×', t: "O'sish", en: 'exponential growth', rule: "teng ko'paytiriladi", ex: '5, 10, 20, 40', res: '$\\times 2$: $5\\cdot 2^x$' },
      { badge: '÷', t: 'Kamayish', en: 'exponential decay', rule: "$b<1$ ga ko'paytiriladi", ex: '80, 40, 20, 10', res: '$80\\cdot 0.5^x$' },
    ],
  },
  ex: [
    {
      tag: "foizli o'sish", strat: "$b=1+r$ — foizni o'nli kasrga",
      q: "A town's population was 12,000 in 2020 and grows by 3% each year. Which function gives the population $P$ after $t$ years?",
      steps: [['a=12000', "boshlang'ich"], ['b=1+0.03=1.03', "3% o'sish"], ['P(t)=12000(1.03)^t', 'javob']],
      check: "Tekshiruv: $t=1$: $12000\\cdot 1.03=12360$ — 360 kishi ko'paydi ✓",
    },
    {
      tag: 'kamayish', strat: '$b<1$ ⇒ $1-b$ — kamayish ulushi',
      q: 'The value of a car is modeled by $V(t)=24000(0.85)^t$, where $t$ is years after purchase. By what percent does the value decrease each year?',
      steps: [['b=0.85', 'har yili'], ['1-0.85=0.15', 'kamayish ulushi'], ['15\\%', 'javob']],
      check: 'Tekshiruv: $24000\\cdot 0.85=20400$ — 1-yilda \\$3,600 ga arzonladi ✓',
    },
    {
      tag: 'ikki barobar', strat: "ko'rsatkichdagi $\\frac{t}{d}$ — har $d$ birlikda",
      q: 'A bacteria culture starts with 500 cells and doubles every 4 hours. How many cells are there after 12 hours?',
      steps: [['N=500\\cdot 2^{\\frac{t}{4}}', 'model'], ['2^{\\frac{12}{4}}=2^3=8', '3 marta ikkilandi'], ['N=4000', 'javob']],
      check: '4 soat: 1000, 8 soat: 2000, 12 soat: 4000 ✓',
    },
  ],
  trap: {
    title: '$1.2^t$ va 20%',
    q: "$f(t)=300(1.2)^t$ — o'sish necha foiz?",
    body: "20%, 120% emas! $b=1.2=1+0.2$. Kamayishda ham: $0.7^t$ — 30% kamayish, 70% emas.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos: jadvaldan model',
    q: "Jadvalga ma'lumotlarni kiriting.",
    body: "$y_1\\sim ab^{x_1}$ yozing — Desmos $a$ va $b$ ni topadi. Chiziqli model — to'g'ri chiziq, ko'rsatkichli — tobora tiklashadigan egri.",
  },
  mistakes: [
    "$b$ ni foiz deb o'qish: 1.05 — 105% emas, 5% o'sish.",
    "Kamayishda $1+r$ yozish: 20% kamayish — 0.8, 1.2 emas.",
    "«Har 4 soatda» shartida ko'rsatkichni $t$ deb qoldirish ($\\frac{t}{4}$ kerak).",
    "Teng qo'shilayotgan jadvalni ko'rsatkichli deb o'ylash.",
  ],
  practice: [
    ['\\$2,000 at 5% annual interest. Formula?', ''],
    ['$f(t)=900(0.6)^t$: kamayish foizi', ''],
    ['Jadval: 3, 12, 48, 192 — model?', ''],
    ['200 g, half-life 3 kun. 9 kundan keyin?', ''],
  ],
  answers: ['$2000(1.05)^t$', '40%', '$3\\cdot 4^x$', '25 g'],
  remember: [
    "$f(x)=a\\cdot b^x$: $a$ — boshlang'ich, $b>1$ — o'sish, $0<b<1$ — kamayish.",
    "$r$ foiz o'sish: $b=1+r$; kamayish: $b=1-r$.",
    "Teng qo'shiladi — chiziqli; teng ko'paytiriladi — ko'rsatkichli.",
  ],
};
