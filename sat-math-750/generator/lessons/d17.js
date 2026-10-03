module.exports = {
  n: 17,
  short: 'Polinomial_funksiyalar',
  en: 'Polynomial functions and their graphs',
  video: '12 min',
  hook: "Bu darsning asosiy g'oyasi bitta: ildiz va ko'paytuvchi — bir xil narsa. Shuni tushunsangiz, polinom grafiklari bo'yicha savollar juda tez yechiladi.",
  goals: [
    ["Ildiz ↔ ko'paytuvchi", "$p(c)=0\\Leftrightarrow (x-c)$ — ko'paytuvchi"],
    ["Grafikdan o'qish", "$x$-kesishmalar va ko'paytuvchilar"],
    ['Qoldiq teoremasi', "$p(x)$ ni $(x-c)$ ga bo'lgandagi qoldiq $=p(c)$"],
  ],
  kw: [
    ['polynomial', "ko'phad, polinom", '$x^3-4x^2+2x+5$'],
    ['factor', "ko'paytuvchi", '$(x-3)$'],
    ['zero', 'nol, ildiz', '$p(3)=0$'],
    ['x-intercept', "$Ox$ bilan kesishish", '$(3,\\ 0)$'],
    ['remainder', 'qoldiq', 'divided by $x-3$'],
    ['divisible by', "… ga bo'linadi", 'remainder is 0'],
    ['degree', 'daraja', 'degree 3'],
    ['double root', 'karrali ildiz', '$(x-2)^2$'],
  ],
  core: {
    title: "Ildiz va ko'paytuvchi", en: 'Zeros and factors',
    steps: [
      ["Ildiz → ko'paytuvchi", "$p(3)=0$ ⇒ $(x-3)$ ko'paytuvchi"],
      ["Ko'paytuvchi → ildiz", '$(2x+1)$ ⇒ $x=-\\frac{1}{2}$'],
      ['Grafikdan', "$x$ o'qini kesgan nuqta — ildiz"],
      ['Qoldiq', "$p(x)\\div(x-c)$ qoldig'i $=p(c)$"],
    ],
    note: "Qisqa: $p(c)=0$ ⇔ $(x-c)$ — ko'paytuvchi ⇔ grafik $(c,\\ 0)$ nuqtadan o'tadi.",
  },
  cases: {
    title: 'Ildiz grafikda', en: 'Behavior at a zero',
    intro: "Ko'paytuvchining darajasi grafik ildizda o'zini qanday tutishini ko'rsatadi:",
    items: [
      { badge: '×', t: 'Oddiy ildiz', en: 'single zero', rule: '$(x-a)$', ex: '$y=(x-1)(x+2)$', res: "o'qni kesib o'tadi" },
      { badge: '²', t: 'Karrali ildiz', en: 'double zero', rule: '$(x-a)^2$', ex: '$y=(x-3)^2(x+1)$', res: "$x=3$ da o'qqa tegadi" },
      { badge: '∅', t: 'Ildizsiz', en: 'no real zero', rule: '$x^2+k,\\ k>0$', ex: '$y=x^2+4$', res: "o'qni kesmaydi" },
    ],
  },
  ex: [
    {
      tag: "grafikdan ko'paytuvchi", strat: "har bir $x$-kesishma $c$ uchun $(x-c)$",
      q: 'The graph of polynomial $p$ crosses the $x$-axis only at $-2$, $1$, and $4$. Which could be $p(x)$?',
      steps: [['x=-2\\Rightarrow (x+2)', 'ishora teskari'], ['x=1\\Rightarrow (x-1)', ''], ['x=4\\Rightarrow (x-4)', ''], ['p(x)=(x+2)(x-1)(x-4)', 'javob']],
      check: 'Tekshiruv: $p(-2)=0\\cdot(-3)\\cdot(-6)=0$ ✓',
    },
    {
      tag: 'qoldiq teoremasi', strat: "bo'lmang — $p(c)$ ni hisoblang",
      q: 'What is the remainder when $p(x)=x^3-4x^2+2x+5$ is divided by $x-3$?',
      steps: [['x-3=0\\Rightarrow x=3', '$c=3$'], ['p(3)=27-36+6+5', "qo'ydik"], ['p(3)=2', 'javob']],
      check: "Agar $p(3)=0$ bo'lganida edi — $(x-3)$ ko'paytuvchi bo'lardi.",
    },
    {
      tag: "noma'lum koeffitsiyent", strat: "ko'paytuvchi ⇒ ildiz ⇒ $p(c)=0$",
      q: 'If $x-2$ is a factor of $p(x)=x^3+kx^2-4x+8$, what is the value of $k$?',
      steps: [['p(2)=0', "ko'paytuvchi sharti"], ['8+4k-8+8=0', "$x=2$ ni qo'ydik"], ['4k=-8', ''], ['k=-2', 'javob']],
      check: 'Tekshiruv: $x^3-2x^2-4x+8=(x-2)^2(x+2)$ ✓',
    },
  ],
  trap: {
    title: "Ishora tuzog'i",
    q: "Ildiz $x=-5$. Ko'paytuvchi qaysi?",
    body: "$(x+5)$, $(x-5)$ emas. Tekshirish: $x=-5$ ni qo'ying — ko'paytuvchi 0 ga teng bo'lishi kerak.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos: variantlarni solishtirish',
    q: 'Har bir variantni grafik qiling.',
    body: "Berilgan nuqtalardan ($x$-kesishmalar, $y$-kesishma) o'tadigan yagona grafikni tanlang. Oldidagi son $y$-kesishmani o'zgartiradi.",
  },
  mistakes: [
    "Ildiz va ko'paytuvchi ishorasini aralashtirish.",
    "Qoldiq so'ralganda uzoq bo'lish bilan vaqt yo'qotish.",
    'Karrali ildizda grafik o\'qni kesmasdan faqat tegishini unutish.',
    "$(2x-1)$ ko'paytuvchining ildizini 1 deb olish ($\\frac{1}{2}$ to'g'ri).",
  ],
  practice: [
    ['$p(x)=(x-3)(2x+5)$: ildizlar', ''],
    ["$x^3-2x+7$ ni $x+1$ ga bo'lgandagi qoldiq", ''],
    ["$p(4)=0$. Qaysi ko'paytuvchi aniq bor?", ''],
    ["$x+1$ — $x^2+kx-3$ ning ko'paytuvchisi. $k$ = ?", ''],
  ],
  answers: ['$3$ va $-\\frac{5}{2}$', '8', '$x-4$', '$k=-2$'],
  remember: [
    "$p(c)=0$ ⇔ $(x-c)$ ko'paytuvchi ⇔ grafik $(c,\\ 0)$ dan o'tadi.",
    "Qoldiq teoremasi: $p(x)\\div(x-c)$ qoldig'i $=p(c)$.",
    "Ko'paytuvchi $(ax-b)$ — ildiz $\\frac{b}{a}$.",
  ],
};
