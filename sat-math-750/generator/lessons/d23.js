module.exports = {
  n: 23,
  short: 'Markaz_va_tarqoqlik',
  en: 'One-variable data: distributions, center and spread',
  video: '12 min',
  hook: "Statistika savollari ko'proq tushuncha savollari: o'rtacha qachon o'zgaradi, mediana qachon o'zgarmaydi, qaysi to'plamning tarqoqligi kattaroq.",
  goals: [
    ["O'rtacha va mediana", 'Hisoblash va qachon farq qilishi'],
    ['Chetga chiqqan qiymat', "Outlier o'rtachani tortadi, medianani deyarli yo'q"],
    ['Tarqoqlik', 'Range va standart chetlanishni solishtirish'],
  ],
  kw: [
    ['mean', "o'rtacha arifmetik", "yig'indi ÷ soni"],
    ['median', 'mediana', "tartiblangandagi o'rtadagi son"],
    ['mode', 'moda', "eng ko'p uchraydigan"],
    ['range', 'qamrov (kenglik)', 'max − min'],
    ['standard deviation', 'standart chetlanish', "o'rtachadan tarqalish"],
    ['outlier', 'chetga chiqqan qiymat', '10, 12, 13, 15, 50'],
    ['histogram', 'gistogramma', 'ustun = chastota'],
    ['box plot', 'quti diagrammasi', 'kvartillar, mediana'],
  ],
  core: {
    title: 'Markaz va tarqoqlik', en: 'Measures of center and spread',
    steps: [
      ["O'rtacha", "Yig'indi ÷ soni"],
      ['Mediana', "Tartiblang; o'rtadagisi (juft bo'lsa — ikkitasining o'rtachasi)"],
      ['Range', 'Eng katta − eng kichik'],
      ['Standart chetlanish', "Qiymatlar o'rtachadan qanchalik uzoq"],
    ],
    note: "Yig'indi formulasi: yig'indi = o'rtacha × soni. Qiymat qo'shilsa yoki olib tashlansa — shu formuladan boshlang.",
  },
  cases: {
    title: "Outlier ta'siri", en: 'Effect of an outlier',
    intro: "To'plam: 10, 12, 13, 15, 50. Katta qiymat 50 nimaga ta'sir qiladi?",
    items: [
      { badge: 'Σ', t: "O'rtacha", en: 'mean', rule: '$\\frac{100}{5}=20$', ex: '50 siz: 12.5', res: 'kuchli ortadi' },
      { badge: 'M', t: 'Mediana', en: 'median', rule: '13', ex: '50 siz: 12.5', res: "deyarli o'zgarmaydi" },
      { badge: 'σ', t: 'Tarqoqlik', en: 'range and SD', rule: 'range $=40$', ex: '50 siz: 5', res: 'kuchli ortadi' },
    ],
  },
  ex: [
    {
      tag: "yig'indi usuli", strat: "yig'indi = o'rtacha × soni",
      q: 'The mean of 6 numbers is 15. When one number is removed, the mean of the remaining numbers is 13. What number was removed?',
      steps: [['6\\cdot 15=90', "eski yig'indi"], ['5\\cdot 13=65', "yangi yig'indi"], ['90-65=25', 'javob']],
      check: "O'rtacha kamaydi — demak olib tashlangan son o'rtachadan katta edi ✓",
    },
    {
      tag: 'mediana (juft soni)', strat: "tartiblang, o'rtadagi ikkitasining o'rtachasi",
      q: 'What is the median of the data set 7, 3, 9, 12, 4, 10?',
      steps: [['3,\\ 4,\\ 7,\\ 9,\\ 10,\\ 12', 'tartibladik'], ['\\frac{7+9}{2}', "o'rtadagi ikkitasi"], ['8', 'javob']],
      check: "O'rtacha esa $\\frac{45}{6}=7.5$ — mediana bilan bir xil emas.",
    },
    {
      tag: 'standart chetlanish', strat: "hisoblamang — tarqalishni ko'z bilan solishtiring",
      q: 'Data set A: 20, 20, 20, 20. Data set B: 5, 15, 25, 35. Which data set has the greater standard deviation?',
      steps: [['\\bar{x}_A=20,\\ \\bar{x}_B=20', "o'rtachalar teng"], ['\\text{A: hammasi 20}', 'tarqoqlik 0'], ['\\text{B}', 'javob']],
      check: "B da qiymatlar o'rtacha 20 dan 5–15 birlik uzoqda — tarqoqlik katta.",
    },
  ],
  trap: {
    title: "Mediana yoki o'rtacha?",
    q: "Outlier qo'shildi — qaysi biri ko'proq o'zgaradi?",
    body: "O'rtacha. Mediana faqat tartibdagi o'rinni hisobga oladi, shuning uchun chetdagi katta qiymat uni deyarli siljitmaydi.",
  },
  tip: {
    badge: 'D', short: 'Desmos', title: 'Desmos statistikasi',
    q: 'mean(), median(), stdev() funksiyalari.',
    body: "Ro'yxat yozing: $L=[3,4,7,9,10,12]$, keyin mean(L) va median(L). Gistogrammada ustun balandligi — chastota.",
  },
  mistakes: [
    'Medianani tartiblamasdan topish.',
    "Juft sonli to'plamda o'rtadagi ikkitaning o'rtachasini olmaslik.",
    "Gistogrammada ustun balandligini qiymat deb o'qish (u — chastota).",
    "Bir xil qiymatlar ko'p bo'lsa ham standart chetlanish katta deb o'ylash.",
  ],
  practice: [
    ['5, 8, 8, 11, 13: mean, median, mode', ''],
    ["4 ta son o'rtachasi 10. Beshinchi son 20. Yangi o'rtacha?", ''],
    ['2, 4, 6, 100: markazni nima yaxshi ifodalaydi?', ''],
    ['{10, 10, 10} va {0, 10, 20}: SD qaysinisida katta?', ''],
  ],
  answers: ['9; 8; 8', '12', 'mediana (5)', 'ikkinchisida'],
  remember: [
    "Yig'indi = o'rtacha × soni — qo'shish/olib tashlash masalalari kaliti.",
    "Outlier o'rtacha va tarqoqlikni o'zgartiradi, medianani deyarli yo'q.",
    "Standart chetlanish — o'rtachadan uzoqlik; barcha qiymatlar teng bo'lsa — 0.",
  ],
};
