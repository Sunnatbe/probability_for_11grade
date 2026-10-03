module.exports = {
  n: 4,
  short: 'Matndan_tenglamaga',
  en: 'Linear equations in one variable: word problems',
  video: '12 min',
  hook: "SAT dagi Algebra savollarining katta qismi matnli: avval inglizcha matnni tenglamaga o'girish kerak, keyin yechish oson. Bugun shu «tarjima» ko'nikmasini o'rganamiz.",
  goals: [
    ["So'z → belgi", 'each, per, total, more than — har biri qaysi amal'],
    ['4 qadamli model', "O'zgaruvchi, ma'lumot, tenglama, javob"],
    ['Tuzoqlar', "«less than» tartibi va savol nimani so'rashi"],
  ],
  kw: [
    ['each', 'har biri', '\\$4 each'],
    ['per', 'har bir … uchun', '\\$12 per hour'],
    ['total', 'jami', 'a total of 50'],
    ['more than', "… dan ko'p", '5 more than $x$: $x+5$'],
    ['less than', '… dan kam', '3 less than $x$: $x-3$'],
    ['twice / times', 'ikki / … marta', 'twice $x$: $2x$'],
    ['fixed fee', "o'zgarmas to'lov", 'a \\$20 fixed fee'],
    ['how many', 'nechta', 'How many hours …?'],
  ],
  core: {
    title: 'Matndan tenglamaga: 4 qadam', en: 'Translating words',
    steps: [
      ["O'zgaruvchini belgila", "$x$ nimani bildiradi — so'z bilan yozing"],
      ["Doimiy va o'zgaruvchan", "Bir martalik to'lov + birlik narx × miqdor"],
      ['Tenglamani tuz', "jami = boshlang'ich + tezlik × miqdor"],
      ['Savolga qayt', "Topilgan son so'ralgan narsami?"],
    ],
    note: "Eslatma: «per», «each» — koeffitsiyent (ko'paytiriladi); «fixed», «initial», «one-time» — ozod had.",
  },
  cases: {
    title: '«Less than» tartibi', en: 'Order matters',
    intro: "Inglizcha iboralarni so'zma-so'z emas, ma'nosi bo'yicha o'giring:",
    items: [
      { badge: '+', t: 'More than', en: '5 more than $x$', rule: '$x+5$', ex: '7 more than twice $n$', res: '$2n+7$' },
      { badge: '−', t: 'Less than', en: '5 less than $x$', rule: '$x-5$', ex: '4 less than $3n$', res: '$3n-4$' },
      { badge: '×', t: 'Times / of', en: '3 times $x$', rule: '$3x$', ex: 'half of $n$', res: '$\\frac{n}{2}$' },
    ],
  },
  ex: [
    {
      tag: 'taksi narxi', strat: "o'zgarmas to'lov + birlik narx × miqdor",
      q: 'A taxi charges a fixed fee of \\$3 plus \\$2 per mile. If a ride cost \\$27, how many miles was the ride?',
      steps: [['3+2m=27', 'tenglama'], ['2m=24', "3 ni o'ngga"], ['m=12', 'javob']],
      check: 'Tekshiruv: $3+2\\cdot 12=27$ ✓',
    },
    {
      tag: 'ikki son', strat: "bitta o'zgaruvchi bilan ikkalasini ifodalang",
      q: 'The sum of two numbers is 48. The larger number is 6 more than twice the smaller number. What is the smaller number?',
      steps: [['s+(2s+6)=48', 'katta son: $2s+6$'], ['3s+6=48', "o'xshash hadlar"], ['3s=42', "6 ni o'ngga"], ['s=14', 'javob']],
      check: 'Tekshiruv: katta son $2\\cdot 14+6=34$, $14+34=48$ ✓',
    },
    {
      tag: 'modelni tanlash', strat: "har bir sonning ma'nosini toping",
      q: 'A gym charges a \\$50 membership fee plus \\$15 per month. Which equation gives the total cost $C$, in dollars, for $m$ months?',
      steps: [['\\text{fee}=50', 'bir martalik — ozod had'], ['\\text{per month}=15', 'koeffitsiyent'], ['C=15m+50', 'javob']],
      check: "Tekshiruv: 2 oy — $15\\cdot 2+50=80$ dollar ✓",
    },
  ],
  trap: {
    title: "«Less than» tuzog'i",
    q: 'Which expression represents 8 less than 3 times a number $n$?',
    body: "To'g'ri javob $3n-8$. $8-3n$ — eng ko'p tanlanadigan xato: «less than» tartibni teskari qiladi.",
  },
  tip: {
    badge: 'T', short: 'tekshiruv', title: "Javobni matnga qo'ying",
    q: 'Topilgan sonni masala shartiga qaytaring.',
    body: "12 mil: $3+2\\cdot 12=27$ ✓. Variantlarda tenglama bo'lsa — kichik son ($m=1$) qo'yib solishtiring.",
  },
  mistakes: [
    '«5 less than $x$» ni $5-x$ deb yozish.',
    "O'zgaruvchi nimani bildirishini yozmaslik va oxirida boshqa kattalikni javob qilish.",
    "O'zgarmas to'lovni koeffitsiyent bilan almashtirish: $50m+15$.",
    'Birliklarni aralashtirish: soat va minut, dollar va sent.',
  ],
  practice: [
    ['A plumber charges \\$40 plus \\$25 per hour. The bill was \\$140. How many hours?', ''],
    ['7 less than 4 times $n$ is 21. Find $n$.', ''],
    ["Ikki son yig'indisi 30, biri ikkinchisidan 8 ta ko'p. Kichigi?", ''],
    ['A plan costs \\$20 plus \\$0.10 per text. Write the cost $C$ for $t$ texts.', ''],
  ],
  answers: ['4 soat', '$n=7$', '11', '$C=0.10t+20$'],
  remember: [
    '«per / each» — koeffitsiyent; «fixed / initial» — ozod had.',
    '«$a$ less than $b$» $=b-a$: tartib teskari!',
    "Oxirida savolni qayta o'qing: qaysi kattalik so'ralgan?",
  ],
};
