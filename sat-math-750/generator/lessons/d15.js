module.exports = {
  n: 15,
  short: 'Kvadrat_funksiya_parabola',
  en: 'Quadratic functions and parabolas',
  video: '13 min',
  hook: "Parabola SAT ning eng sevimli grafiklaridan biri: uch nuqtasi, simmetriya o'qi, eng katta yoki eng kichik qiymat — hammasi to'g'ri shaklni tanlashga bog'liq.",
  goals: [
    ['Uchta shakl', "Standart, uch (vertex) va ko'paytuvchi shakl"],
    ['Uch nuqtasi', '$x=-\\frac{b}{2a}$ va eng katta/kichik qiymat'],
    ['Kontekst', "Balandlik va foyda modellarida ma'no"],
  ],
  kw: [
    ['parabola', 'parabola', '$y=x^2$'],
    ['vertex', 'uch nuqtasi', '$(h,\\ k)$'],
    ['axis of symmetry', "simmetriya o'qi", '$x=h$'],
    ['vertex form', 'uch shakli', '$a(x-h)^2+k$'],
    ['factored form', "ko'paytuvchi shakli", '$a(x-p)(x-q)$'],
    ['maximum', 'eng katta qiymat', '$a<0$'],
    ['minimum', 'eng kichik qiymat', '$a>0$'],
    ['opens upward', 'yuqoriga ochiladi', '$a>0$'],
  ],
  core: {
    title: "Parabolani o'qish: 4 narsa", en: 'Reading a parabola',
    steps: [
      ["Yo'nalish", '$a>0$ — yuqoriga (min), $a<0$ — pastga (max)'],
      ['Uch nuqtasi', '$x=-\\frac{b}{2a}$, keyin $y$ ni hisobla'],
      ['$y$-kesishma', '$x=0$ da $y=c$'],
      ['$x$-kesishmalar', "Ildizlar; uch ularning o'rtasida"],
    ],
    note: "Simmetriya: ildizlar $p$ va $q$ bo'lsa, uch nuqtasi $x=\\frac{p+q}{2}$ da yotadi.",
  },
  cases: {
    title: "Uchta shakl — uchta ma'lumot", en: 'Three forms',
    intro: "Uchalasi — bitta parabola! Har bir shakl bitta ma'lumotni «tekin» beradi:",
    items: [
      { badge: 'S', t: 'Standart', en: 'standard form', rule: '$ax^2+bx+c$', ex: '$y=x^2-6x+5$', res: '$y$-kesishma: 5' },
      { badge: 'V', t: 'Uch shakli', en: 'vertex form', rule: '$a(x-h)^2+k$', ex: '$y=(x-3)^2-4$', res: 'uch: $(3,\\ -4)$' },
      { badge: 'F', t: "Ko'paytuvchi", en: 'factored form', rule: '$a(x-p)(x-q)$', ex: '$y=(x-1)(x-5)$', res: 'ildizlar: 1 va 5' },
    ],
  },
  ex: [
    {
      tag: 'uch nuqtasi', strat: "$x=-\\frac{b}{2a}$, keyin $f$ ga qo'ying",
      q: 'The function $f$ is defined by $f(x)=2x^2-12x+7$. What is the minimum value of $f(x)$?',
      steps: [['x=-\\frac{-12}{2\\cdot 2}=3', "uchning $x$ koordinatasi"], ['f(3)=2\\cdot 9-36+7', "qo'ydik"], ['f(3)=-11', 'javob']],
      check: "$a=2>0$ — parabola yuqoriga ochiladi, demak bu minimum ✓",
    },
    {
      tag: 'vertex form', strat: "$a(x-h)^2+k$ dan $(h,\\ k)$ ni o'qing",
      q: 'The graph of $y=-3(x+2)^2+8$ is a parabola. What is the maximum value of $y$?',
      steps: [['h=-2,\\ k=8', '$(x+2)=(x-(-2))$'], ['a=-3<0', 'pastga ochiladi'], ['y_{\\max}=8', 'javob ($x=-2$ da)']],
      check: "Ishora tuzog'i: $(x+2)^2$ da $h=-2$, $+2$ emas!",
    },
    {
      tag: 'kontekst: balandlik', strat: 'maksimal balandlik — uch nuqtasi',
      q: "A ball's height, in meters, $t$ seconds after it is thrown is $h(t)=-5t^2+20t+1$. What is the maximum height of the ball?",
      steps: [['t=-\\frac{20}{2\\cdot(-5)}=2', "uchning $t$ koordinatasi"], ['h(2)=-20+40+1', "qo'ydik"], ['h(2)=21', 'javob (metr)']],
      check: "1 — boshlang'ich balandlik ($t=0$); 2 s — eng yuqori nuqtaga yetish vaqti.",
    },
  ],
  trap: {
    title: '$h$ ning ishorasi',
    q: '$y=(x+5)^2-1$: uch nuqtasi?',
    body: "$(-5,\\ -1)$, $(5,\\ -1)$ emas. $(x-h)$ ichida $h$ ning ishorasi teskari ko'rinadi.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos: uchni bosish',
    q: 'Funksiyani yozing va eng yuqori yoki eng past nuqtani bosing.',
    body: "Desmos uch nuqtasi, kesishmalar va $y$-kesishmani kulrang nuqtalar bilan ko'rsatadi — koordinatalar darhol chiqadi.",
  },
  mistakes: [
    'Vertex formada $h$ ishorasini aralashtirish.',
    '$x=-\\frac{b}{2a}$ da minusni unutish.',
    "Maksimal qiymat so'ralganda $x$ ni (vaqtni) javob qilish.",
    '$a<0$ bo\'lsa ham uchni minimum deb atash.',
  ],
  practice: [
    ['$y=x^2-8x+3$: uch nuqtasi', ''],
    ['$y=2(x-1)^2+5$: eng kichik qiymat', ''],
    ["$y=-(x-2)(x-6)$: simmetriya o'qi", ''],
    ['$h(t)=-16t^2+64t$: maksimal balandlik', ''],
  ],
  answers: ['$(4,\\ -13)$', '5', '$x=4$', '64'],
  remember: [
    '$a>0$ — minimum, $a<0$ — maksimum; uch: $x=-\\frac{b}{2a}$.',
    'Vertex: $a(x-h)^2+k\\to(h,\\ k)$; factored: ildizlar $p$ va $q$.',
    "Kontekstda: «maximum height» — $k$, «qachon» — $h$.",
  ],
};
