module.exports = {
  n: 3,
  short: 'Chiziqli_tenglamalar',
  en: 'Linear equations in one variable',
  video: '12 min',
  hook: "Bu mavzu oddiy ko'rinadi, lekin SAT da u deyarli har bir testda uchraydi va eng ko'p ball yo'qotiladigan joylardan biri — chunki savol ko'pincha x ni emas, boshqa narsani so'raydi.",
  goals: [
    ['4 qadamda yechish', "Qavs, kasr, o'tkazish, bo'lish — bitta algoritm"],
    ['Yechimlar soni', "Bitta, yo'q yoki cheksiz ko'p — 10 soniyada"],
    ['SAT tuzoqlari', '«value of $2x+1$» savoli, Desmos bilan tekshirish'],
  ],
  kw: [
    ['equation', 'tenglama', '$3x+5=20$'],
    ['solve (for $x$)', '($x$ ga nisbatan) yechmoq', 'Solve for $x$.'],
    ['solution', 'yechim, ildiz', '$x=5$ is the solution.'],
    ['no solution', "yechimi yo'q", '$x+1=x+2$'],
    ['infinitely many solutions', "cheksiz ko'p yechim", '$2x+2=2(x+1)$'],
    ['value of the expression', 'ifodaning qiymati', 'the value of $2x+1$'],
    ['constant', "o'zgarmas son", '$k$ is a constant.'],
    ['satisfies', 'qanoatlantiradi', '$x=4$ satisfies the equation.'],
  ],
  core: {
    title: 'Yechish algoritmi: 4 qadam', en: 'How to solve',
    steps: [
      ['Qavslarni och', '$a(b+c)=ab+ac$'],
      ['Kasrdan qutul', "Ikkala tomonni umumiy maxrajga ko'paytir"],
      ['$x$ larni bir tomonga', "Hadni o'tkazganda ishorasi o'zgaradi"],
      ["Koeffitsiyentga bo'l", '$ax=b\\Rightarrow x=\\frac{b}{a}$'],
    ],
    note: "Oxirida tekshiring: javobni tenglamaga qo'ying — 10 soniya, lekin xatoni ushlaydi.",
  },
  cases: {
    title: 'Nechta yechim bor?', en: 'Number of solutions',
    intro: "Tenglamani $ax+b=cx+d$ ko'rinishiga keltiring va koeffitsiyentlarni taqqoslang:",
    items: [
      { badge: '1', t: 'Bitta yechim', en: 'exactly one solution', rule: '$a\\ne c$', ex: '$3x+1=x+9$', res: '$x=4$' },
      { badge: '∅', t: "Yechim yo'q", en: 'no solution', rule: '$a=c,\\ b\\ne d$', ex: '$2x+5=2x-1$', res: '$5=-1$ ✗' },
      { badge: '∞', t: "Cheksiz ko'p", en: 'infinitely many solutions', rule: '$a=c,\\ b=d$', ex: '$2(x+3)=2x+6$', res: '$6=6$ ✓' },
    ],
  },
  ex: [
    {
      tag: 'qavsli tenglama', strat: "qavs → o'xshash hadlar → $x$ lar bir tomonga",
      q: 'If $3(x-4)+5=2x+7$, what is the value of $x$?',
      steps: [['3x-12+5=2x+7', 'qavsni ochdik'], ['3x-7=2x+7', 'sonlarni jamladik'], ['3x-2x=7+7', "$x$ lar chapga, sonlar o'ngga"], ['x=14', 'javob']],
      check: 'Tekshiruv: $3(14-4)+5=35$ va $2\\cdot 14+7=35$ ✓',
    },
    {
      tag: 'kasrli tenglama', strat: "maxrajlarning EKUKiga ko'paytiring",
      q: 'What value of $x$ satisfies $\\frac{x}{3}+\\frac{x}{4}=14$?',
      steps: [['12\\cdot\\left(\\frac{x}{3}+\\frac{x}{4}\\right)=12\\cdot 14', 'umumiy maxraj 12 — har bir hadga!'], ['4x+3x=168', "kasrlar yo'qoldi"], ['7x=168', "o'xshash hadlar"], ['x=24', 'javob']],
      check: 'Tekshiruv: $\\frac{24}{3}+\\frac{24}{4}=8+6=14$ ✓',
    },
    {
      tag: '$k$ parametr', strat: 'yechmang — koeffitsiyentlarni taqqoslang',
      q: 'In the equation $3(2x+k)=6x+12$, $k$ is a constant. If the equation has infinitely many solutions, what is the value of $k$?',
      steps: [['6x+3k=6x+12', 'qavsni ochdik'], ['3k=12', "$x$ oldida $6=6$ ✓, ozod hadlar ham teng bo'lishi kerak"], ['k=4', 'javob']],
      check: "Agar savol «no solution» desa: $3k\\ne 12$, ya'ni $k\\ne 4$ bo'lgan istalgan son.",
    },
  ],
  trap: {
    title: "«Value of $2x+1$» tuzog'i",
    q: 'If $4x+2=18$, what is the value of $2x+1$?',
    body: "Ikkala tomonni 2 ga bo'ling: $2x+1=9$. $x=4$ deb javob berish — eng ko'p uchraydigan xato.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos bilan tekshirish',
    q: "Chap tomonni $y_1$, o'ng tomonni $y_2$ qilib yozing.",
    body: "Kesishish nuqtasining $x$ koordinatasi — yechim. Parallel chiziqlar — yechim yo'q; ustma-ust — cheksiz ko'p.",
  },
  mistakes: [
    "Kasrdan qutulishda o'ng tomonni ham ko'paytirishni unutish.",
    "Minus oldidagi qavsni ochishda ishorani o'zgartirmaslik: $-(x-3)=-x+3$.",
    'Savol «value of $2x+1$» deganda $x$ ning qiymatini belgilash.',
    '«No solution» va «infinitely many solutions» holatlarini adashtirish.',
  ],
  practice: [
    ['$5x-3=2x+9$', ''],
    ['$2(x+3)=2x+6$', 'nechta yechim?'],
    ['$0.5x+2=0.5x-1$', 'nechta yechim?'],
    ['If $6x-9=21$, what is the value of $2x-3$?', ''],
  ],
  answers: ['$x=4$', "cheksiz ko'p yechim", "yechim yo'q", "7 (ikkala tomonni 3 ga bo'ling)"],
  remember: [
    "4 qadam: qavs → kasr → o'tkazish → bo'lish, oxirida tekshiruv.",
    "$ax+b=cx+d$: $a\\ne c$ — bitta; $a=c,\\ b\\ne d$ — yo'q; $a=c,\\ b=d$ — cheksiz ko'p.",
    "Savol nimani so'rayotganini oxirigacha o'qing: $x$ mi yoki ifoda mi?",
  ],
};
