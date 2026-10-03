module.exports = {
  n: 29,
  short: 'Pifagor_teoremasi',
  en: 'Right triangles and the Pythagorean theorem',
  video: '12 min',
  hook: "Pifagor teoremasi — geometriyadagi eng ko'p ishlatiladigan formula. SAT da u maxsus uchburchaklar va Pifagor uchliklari bilan birga keladi — ularni bilsangiz, hisoblash shart emas.",
  goals: [
    ['Pifagor teoremasi', '$a^2+b^2=c^2$ — gipotenuza eng uzun'],
    ['Maxsus uchburchaklar', '45-45-90 va 30-60-90 nisbatlari'],
    ['Pifagor uchliklari', '3-4-5, 5-12-13, 8-15-17'],
  ],
  kw: [
    ['right triangle', "to'g'ri burchakli uchburchak", '$90^\\circ$'],
    ['hypotenuse', 'gipotenuza', '$c$'],
    ['leg', 'katet', '$a$, $b$'],
    ['Pythagorean theorem', 'Pifagor teoremasi', '$a^2+b^2=c^2$'],
    ['Pythagorean triple', 'Pifagor uchligi', '5, 12, 13'],
    ['isosceles right triangle', "teng yonli to'g'ri burchakli", '45-45-90'],
    ['30-60-90 triangle', '30-60-90 uchburchak', '$x,\\ x\\sqrt{3},\\ 2x$'],
    ['diagonal', 'diagonal', 'of a square: $s\\sqrt{2}$'],
  ],
  core: {
    title: "To'g'ri burchakli uchburchak", en: 'Solving right triangles',
    steps: [
      ['Gipotenuzani top', "To'g'ri burchak qarshisidagi tomon"],
      ['Maxsusmi?', '45° yoki 30°/60° bormi?'],
      ['Uchlikmi?', '3-4-5 yoki uning karralisi?'],
      ['Pifagor', '$c^2=a^2+b^2$ yoki $a^2=c^2-b^2$'],
    ],
    note: "Reference sheet da $c^2=a^2+b^2$ va maxsus uchburchaklar bor — lekin yod bilish vaqtni tejaydi.",
  },
  cases: {
    title: 'Maxsus uchburchaklar', en: 'Special right triangles',
    intro: "Bitta tomon ma'lum bo'lsa, qolganlari darhol topiladi:",
    items: [
      { badge: '45', t: '45-45-90', en: 'isosceles right', rule: '$x : x : x\\sqrt{2}$', ex: 'katet 5', res: 'gipotenuza $5\\sqrt{2}$' },
      { badge: '30', t: '30-60-90', en: 'half of equilateral', rule: '$x : x\\sqrt{3} : 2x$', ex: 'gipotenuza 10', res: 'katetlar 5 va $5\\sqrt{3}$' },
      { badge: '345', t: 'Uchliklar', en: 'Pythagorean triples', rule: '3-4-5, 5-12-13', ex: '6, 8, ?', res: '10' },
    ],
  },
  ex: [
    {
      tag: 'Pifagor', strat: "gipotenuza — kvadratlar yig'indisining ildizi",
      q: 'A right triangle has legs of length 7 and 24. What is the length of the hypotenuse?',
      steps: [['c^2=7^2+24^2', 'Pifagor'], ['c^2=49+576=625', 'hisobladik'], ['c=25', 'javob']],
      check: '7-24-25 ham Pifagor uchligi ✓',
    },
    {
      tag: '30-60-90', strat: 'qisqa katet $x$, gipotenuza $2x$, uzun katet $x\\sqrt{3}$',
      q: 'In a right triangle, one angle measures $30^\\circ$ and the hypotenuse is 14. What is the length of the side opposite the $60^\\circ$ angle?',
      steps: [['2x=14', 'gipotenuza'], ['x=7', '30° qarshisidagi katet'], ['x\\sqrt{3}=7\\sqrt{3}', 'javob']],
      check: 'Tekshiruv: $7^2+(7\\sqrt{3})^2=49+147=196=14^2$ ✓',
    },
    {
      tag: 'kvadrat diagonali', strat: "diagonal kvadratni ikkita 45-45-90 ga bo'ladi",
      q: 'The diagonal of a square is $8\\sqrt{2}$. What is the area of the square?',
      steps: [['s\\sqrt{2}=8\\sqrt{2}', '45-45-90'], ['s=8', 'tomon'], ['S=8^2=64', 'javob']],
      check: 'Tezkor: $S=\\frac{d^2}{2}=\\frac{128}{2}=64$ ✓',
    },
  ],
  trap: {
    title: 'Gipotenuzani adashtirish',
    q: 'Tomonlar 5 va 13. Uchinchi tomon?',
    body: "Agar 13 gipotenuza bo'lsa: $\\sqrt{169-25}=12$. $\\sqrt{25+169}$ — faqat 13 katet bo'lsa. Chizmadan gipotenuzani aniqlang.",
  },
  tip: {
    badge: '×k', short: 'uchliklar', title: 'Uchliklarning karralilari',
    q: '6-8-10, 9-12-15, 10-24-26 …',
    body: "Tomonlar umumiy ko'paytuvchiga ega bo'lsa — avval bo'ling: 15, 20, ? → 3, 4, 5 → javob 25.",
  },
  mistakes: [
    "Gipotenuza o'rniga katetni $c$ deb olish.",
    '30-60-90 da $\\sqrt{3}$ va 2 ni almashtirish.',
    '$\\sqrt{a^2+b^2}$ ni $a+b$ deb soddalashtirish.',
    "Kvadratga ko'tarishni unutib, $c=a+b$ yozish.",
  ],
  practice: [
    ['Katetlar 9 va 12. Gipotenuza?', ''],
    ['Gipotenuza 17, bir katet 8. Ikkinchi katet?', ''],
    ['45-45-90, gipotenuza 10. Katet?', ''],
    ['Teng tomonli uchburchak tomoni 6. Balandligi?', ''],
  ],
  answers: ['15', '15', '$5\\sqrt{2}$', '$3\\sqrt{3}$'],
  remember: [
    "$a^2+b^2=c^2$; $c$ — to'g'ri burchak qarshisida, eng uzun tomon.",
    '45-45-90: $x,\\ x,\\ x\\sqrt{2}$; 30-60-90: $x,\\ x\\sqrt{3},\\ 2x$.',
    'Uchliklar: 3-4-5, 5-12-13, 8-15-17, 7-24-25 va karralilari.',
  ],
};
