module.exports = {
  n: 12,
  short: 'Daraja_va_ildizlar',
  en: 'Equivalent expressions: exponents and radicals',
  video: '12 min',
  hook: "Daraja va ildiz savollari qo'rqinchli ko'rinadi, lekin hammasi bir nechta qoidaga tayanadi. Bugun shu qoidalarni va $a^{m/n}$ yozuvini o'rganamiz.",
  goals: [
    ['Daraja qoidalari', "Ko'paytirish, bo'lish, darajaga ko'tarish"],
    ["Kasr ko'rsatkich", '$a^{\\frac{m}{n}}=\\sqrt[n]{a^m}$'],
    ['Ildizni soddalashtirish', '$\\sqrt{72}=6\\sqrt{2}$'],
  ],
  kw: [
    ['exponent', "daraja ko'rsatkichi", '5 in $x^5$'],
    ['power', 'daraja', 'to the third power'],
    ['base', 'asos', '$x$ in $x^5$'],
    ['radical', 'ildiz', '$\\sqrt{x}$, $\\sqrt[3]{x}$'],
    ['square root', 'kvadrat ildiz', '$\\sqrt{49}=7$'],
    ['rational exponent', "kasr ko'rsatkich", '$x^{\\frac{1}{2}}$'],
    ['negative exponent', "manfiy ko'rsatkich", '$x^{-2}=\\frac{1}{x^2}$'],
    ['simplify', 'soddalashtirmoq', '$\\sqrt{50}=5\\sqrt{2}$'],
  ],
  core: {
    title: 'Daraja qoidalari', en: 'Laws of exponents',
    steps: [
      ["Ko'paytirish", '$a^m\\cdot a^n=a^{m+n}$'],
      ["Bo'lish", '$\\frac{a^m}{a^n}=a^{m-n}$'],
      ["Darajani darajaga", '$(a^m)^n=a^{mn}$'],
      ['Nol va manfiy', '$a^0=1$, $a^{-n}=\\frac{1}{a^n}$'],
    ],
    note: "Kasr ko'rsatkich: $a^{\\frac{m}{n}}=\\sqrt[n]{a^m}$ — maxraj ildiz darajasi, surat — daraja.",
  },
  cases: {
    title: 'Ildiz ↔ daraja', en: 'Radicals as exponents',
    intro: "Ildizni kasr ko'rsatkichga aylantirsangiz, daraja qoidalari ishlaydi:",
    items: [
      { badge: '½', t: 'Kvadrat ildiz', en: 'square root', rule: '$\\sqrt{x}=x^{\\frac{1}{2}}$', ex: '$\\sqrt{x^6}$', res: '$x^3$' },
      { badge: '⅓', t: 'Kub ildiz', en: 'cube root', rule: '$\\sqrt[3]{x}=x^{\\frac{1}{3}}$', ex: '$\\sqrt[3]{8x^3}$', res: '$2x$' },
      { badge: 'm/n', t: 'Umumiy', en: 'rational exponent', rule: '$\\sqrt[n]{x^m}=x^{\\frac{m}{n}}$', ex: '$\\sqrt[4]{x^3}$', res: '$x^{\\frac{3}{4}}$' },
    ],
  },
  ex: [
    {
      tag: 'daraja qoidalari', strat: 'koeffitsiyent alohida, har bir harf alohida',
      q: 'Which expression is equivalent to $\\frac{(2x^3y)^2}{4xy^5}$, where $x>0$ and $y>0$?',
      steps: [['\\frac{4x^6y^2}{4xy^5}', "darajaga ko'tardik"], ['x^{6-1}y^{2-5}', "bo'lish qoidasi"], ['x^5y^{-3}', "manfiy ko'rsatkich"], ['\\frac{x^5}{y^3}', 'javob']],
      check: 'Tekshiruv: $x=1,\\ y=2$: $\\frac{16}{128}=\\frac{1}{8}$ va $\\frac{1}{2^3}=\\frac{1}{8}$ ✓',
    },
    {
      tag: "kasr ko'rsatkich", strat: 'ildizni $x^{\\frac{m}{n}}$ ga aylantiring',
      q: 'For $x>0$, which expression is equivalent to $\\sqrt[3]{x^2}\\cdot\\sqrt{x}$?',
      steps: [['x^{\\frac{2}{3}}\\cdot x^{\\frac{1}{2}}', "kasr ko'rsatkich"], ['x^{\\frac{2}{3}+\\frac{1}{2}}', "ko'rsatkichlarni qo'shamiz"], ['x^{\\frac{7}{6}}', 'javob']],
      check: '$\\frac{2}{3}+\\frac{1}{2}=\\frac{4}{6}+\\frac{3}{6}=\\frac{7}{6}$ ✓',
    },
    {
      tag: 'ildizni soddalashtirish', strat: "eng katta to'liq kvadratni ajrating",
      q: 'Which is equivalent to $\\sqrt{72}+\\sqrt{50}$?',
      steps: [['\\sqrt{36\\cdot 2}+\\sqrt{25\\cdot 2}', "to'liq kvadratlar"], ['6\\sqrt{2}+5\\sqrt{2}', "o'xshash ildizlar"], ['11\\sqrt{2}', 'javob']],
      check: "Diqqat: $\\sqrt{72}+\\sqrt{50}\\ne\\sqrt{122}$ — ildizlarni qo'shib bo'lmaydi!",
    },
  ],
  trap: {
    title: '$(x^3)^2$ va $x^3\\cdot x^2$',
    q: 'Qaysi biri $x^6$ ga teng?',
    body: "$(x^3)^2=x^6$ (ko'paytiriladi), $x^3\\cdot x^2=x^5$ (qo'shiladi). Shuningdek $\\sqrt{a+b}\\ne\\sqrt{a}+\\sqrt{b}$.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos: grafiklar ustma-ustmi?',
    q: 'Ikkala ifodani $y_1$, $y_2$ qilib yozing.',
    body: "Grafiklar to'liq ustma-ust tushsa — ifodalar teng kuchli. Faqat $x>0$ kabi shartlarni hisobga oling.",
  },
  mistakes: [
    "$a^m\\cdot a^n$ da ko'rsatkichlarni ko'paytirish (qo'shish kerak).",
    '$(2x)^3$ ni $2x^3$ deb yozish (to\'g\'risi $8x^3$).',
    '$x^{-2}$ ni $-x^2$ deb tushunish.',
    "$a^{\\frac{m}{n}}$ da surat va maxrajni almashtirish.",
  ],
  practice: [
    ['$(3x^2)^3$', ''],
    ['$\\frac{x^7}{x^{10}}$', "musbat ko'rsatkich bilan"],
    ["$\\sqrt{x^5}$ ni daraja ko'rinishida", ''],
    ['$\\sqrt{48}-\\sqrt{12}$', ''],
  ],
  answers: ['$27x^6$', '$\\frac{1}{x^3}$', '$x^{\\frac{5}{2}}$', '$2\\sqrt{3}$'],
  remember: [
    "Ko'paytirish — qo'shish, bo'lish — ayirish, darajaga ko'tarish — ko'paytirish.",
    '$a^{-n}=\\frac{1}{a^n}$, $a^{\\frac{m}{n}}=\\sqrt[n]{a^m}$.',
    "Ildizlarni qo'shib bo'lmaydi: to'liq kvadratni ajratib, o'xshashlarini jamlang.",
  ],
};
