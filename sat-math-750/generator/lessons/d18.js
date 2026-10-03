module.exports = {
  n: 18,
  short: 'Ildizli_va_kasrli_tenglamalar',
  en: 'Radical and rational equations',
  video: '12 min',
  hook: "Ildizli va kasrli tenglamalarda bitta xavf bor — chet ildizlar. Ular algebrada to'g'ri chiqadi, lekin asl tenglamani qanoatlantirmaydi. Bugun ularni ushlashni o'rganamiz.",
  goals: [
    ['Ildizli tenglama', "Ildizni yolg'izlab, kvadratga ko'tarish"],
    ['Kasrli tenglama', "Umumiy maxrajga ko'paytirib, kasrdan qutulish"],
    ['Chet ildiz', 'Har bir javobni asl tenglamada tekshirish'],
  ],
  kw: [
    ['radical equation', 'ildizli tenglama', '$\\sqrt{x+3}=x-3$'],
    ['rational equation', 'kasrli tenglama', '$\\frac{3}{x}+\\frac{1}{2}=\\frac{5}{x}$'],
    ['extraneous solution', 'chet ildiz', "tekshiruvdan o'tmaydi"],
    ['square both sides', "kvadratga ko'tarmoq", '$(\\sqrt{A})^2=A$'],
    ['isolate', "yolg'izlamoq", 'isolate the radical'],
    ['cross-multiply', "krest ko'paytirish", '$\\frac{a}{b}=\\frac{c}{d}\\Rightarrow ad=bc$'],
    ['solution set', "yechimlar to'plami", '$\\{1\\}$'],
    ['check', 'tekshirmoq', 'check in the original'],
  ],
  core: {
    title: 'Ildizli tenglama: 4 qadam', en: 'Solving radical equations',
    steps: [
      ["Ildizni yolg'izla", "$\\sqrt{\\ldots}=\\ldots$ ko'rinishiga"],
      ["Kvadratga ko'tar", 'Ikkala tomonni — butunligicha'],
      ['Yech', 'Odatda kvadrat tenglama chiqadi'],
      ['Tekshir!', "Har bir ildizni asl tenglamaga qo'y"],
    ],
    note: "Qoida: $\\sqrt{A}=B$ bo'lsa, $B\\ge 0$ bo'lishi shart — manfiy $B$ beradigan ildiz chet ildizdir.",
  },
  cases: {
    title: 'Tekshiruv natijalari', en: 'After checking',
    intro: "Kvadratga ko'tarish yoki maxrajga ko'paytirishdan keyin har bir ildizni tekshiring:",
    items: [
      { badge: '✓', t: 'Haqiqiy', en: 'valid solution', rule: 'tenglik bajariladi', ex: '$\\sqrt{x+3}=x-3$, $x=6$', res: '$3=3$ ✓' },
      { badge: '✗', t: 'Chet ildiz', en: 'extraneous', rule: 'tenglik buziladi', ex: '$\\sqrt{x+3}=x-3$, $x=1$', res: '$2=-2$ ✗' },
      { badge: '0', t: 'Maxraj nol', en: 'undefined', rule: 'maxraj $=0$', ex: '$\\frac{x}{x-2}=\\frac{2}{x-2}$, $x=2$', res: 'aniqlanmagan ✗' },
    ],
  },
  ex: [
    {
      tag: 'chet ildiz', strat: "kvadratga ko'tar → yech → tekshir",
      q: 'What is the solution set of $\\sqrt{2x+7}=x+2$?',
      steps: [['2x+7=x^2+4x+4', "kvadratga ko'tardik"], ['x^2+2x-3=0', 'nolga keltirdik'], ['x=1\\ \\text{yoki}\\ x=-3', '$(x+3)(x-1)=0$'], ['x=1', 'javob ($-3$ — chet)']],
      check: "$x=-3$: $\\sqrt{1}=1$, lekin $-3+2=-1$ ✗ — chet ildiz.",
    },
    {
      tag: 'kasrli tenglama', strat: "umumiy maxrajga ko'paytiring",
      q: 'What value of $x$ satisfies $\\frac{3}{x}+\\frac{1}{2}=\\frac{5}{x}$?',
      steps: [['2x\\cdot\\frac{3}{x}+2x\\cdot\\frac{1}{2}=2x\\cdot\\frac{5}{x}', 'umumiy maxraj $2x$'], ['6+x=10', 'kasrlar yo\'qoldi'], ['x=4', 'javob']],
      check: 'Tekshiruv: $\\frac{3}{4}+\\frac{1}{2}=\\frac{5}{4}$ ✓',
    },
    {
      tag: 'proporsiya', strat: "krest ko'paytirish, keyin maxrajni tekshirish",
      q: 'If $\\frac{x+1}{x-3}=\\frac{x-1}{x-4}$, what is the value of $x$?',
      steps: [['(x+1)(x-4)=(x-1)(x-3)', 'krest'], ['x^2-3x-4=x^2-4x+3', 'ochdik'], ['x=7', 'javob']],
      check: 'Tekshiruv: $\\frac{8}{4}=2$ va $\\frac{6}{3}=2$ ✓; maxrajlar $\\ne 0$.',
    },
  ],
  trap: {
    title: "Tekshirmaslik tuzog'i",
    q: '$\\sqrt{x}=-4$ ning yechimi?',
    body: "Kvadratga ko'tarsak $x=16$ chiqadi, lekin $\\sqrt{16}=4\\ne -4$. Yechim yo'q! Kvadrat ildiz hech qachon manfiy emas.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: "Desmos chet ildizni ko'rsatmaydi",
    q: '$y_1=\\sqrt{2x+7}$ va $y_2=x+2$ ni chizing.',
    body: "Grafiklar faqat haqiqiy yechimda kesishadi ($x=1$). $x=-3$ da kesishish yo'q — demak u chet ildiz.",
  },
  mistakes: [
    "Ildizni yolg'izlamasdan kvadratga ko'tarish: $(\\sqrt{x}+1)^2\\ne x+1$.",
    '$(x+2)^2$ ni $x^2+4$ deb ochish.',
    "Chet ildizni javobga qo'shish.",
    'Kasrli tenglamada maxrajni nolga aylantiradigan qiymatni qabul qilish.',
  ],
  practice: [
    ['$\\sqrt{x-1}=3$', ''],
    ['$\\sqrt{x+6}=x$', ''],
    ['$\\frac{4}{x+1}=\\frac{2}{x-1}$', ''],
    ['$\\frac{x}{x-5}=\\frac{5}{x-5}$', ''],
  ],
  answers: ['$x=10$', '$x=3$ ($-2$ — chet)', '$x=3$', "yechim yo'q"],
  remember: [
    "Ildizni yolg'izlang → kvadratga ko'taring → yeching → TEKSHIRING.",
    "Kasrli: umumiy maxrajga ko'paytiring; maxraj $\\ne 0$.",
    'Chet ildiz algebrada chiqadi, lekin asl tenglamada bajarilmaydi.',
  ],
};
