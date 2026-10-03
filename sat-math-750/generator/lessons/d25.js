module.exports = {
  n: 25,
  short: 'Ehtimollik',
  en: 'Probability and conditional probability',
  video: '12 min',
  hook: "SAT dagi ehtimollik savollarining aksariyati ikki o'lchovli jadval bilan keladi. Asosiy mahorat — «given that» iborasidan keyin maxrajni to'g'ri tanlash.",
  goals: [
    ['Ehtimollik', '$P=\\frac{\\text{qulay}}{\\text{jami}}$'],
    ["Ikki o'lchovli jadval", "Satr, ustun va jami kataklarni o'qish"],
    ['Shartli ehtimollik', '«given that» — maxraj guruh bilan cheklanadi'],
  ],
  kw: [
    ['probability', 'ehtimollik', '$P=\\frac{1}{2}$'],
    ['selected at random', 'tasodifiy tanlangan', 'a person is selected at random'],
    ['two-way table', "ikki o'lchovli jadval", 'men / women × tea / coffee'],
    ['given that', "… ekani ma'lum bo'lsa", 'given that the person is a woman'],
    ['conditional probability', 'shartli ehtimollik', '$P(A\\mid B)$'],
    ['outcome', 'natija', 'rolling a 6'],
    ['total', 'jami', 'row total, column total'],
    ['proportion', 'ulush', '35 out of 100'],
  ],
  core: {
    title: 'Jadval bilan ehtimollik: 4 qadam', en: 'Two-way table method',
    steps: [
      ['Guruhni aniqla', '«given that …» yoki «of the …» — maxraj'],
      ['Maxrajni top', 'Shu guruhning jami (satr yoki ustun)'],
      ['Suratni top', 'Guruh ichidagi qulay holatlar'],
      ["Bo'l", '$P=\\frac{\\text{surat}}{\\text{maxraj}}$'],
    ],
    note: "«Selected at random from all» — maxraj umumiy jami; «given that» — faqat shu guruhning jami.",
  },
  cases: {
    title: 'Uch xil maxraj', en: 'Three denominators',
    intro: "Jadval: 60 o'quvchi; 32 tasi qiz; 25 tasi sportchi, ulardan 15 tasi qiz.",
    items: [
      { badge: 'Σ', t: 'Umumiy', en: 'from all students', rule: '$P(\\text{qiz})$', ex: '$\\frac{32}{60}$', res: '$\\approx 0.53$' },
      { badge: '|', t: 'Shartli', en: 'given: sportchi', rule: '$P(\\text{qiz}\\mid\\text{sport})$', ex: '$\\frac{15}{25}$', res: '$0.6$' },
      { badge: '|', t: 'Teskari shart', en: 'given: qiz', rule: '$P(\\text{sport}\\mid\\text{qiz})$', ex: '$\\frac{15}{32}$', res: '$\\approx 0.47$' },
    ],
  },
  ex: [
    {
      tag: 'umumiy ehtimollik', strat: 'maxraj — hamma (200)',
      q: 'In a survey of 200 people, 35 of the 90 men and 65 of the 110 women prefer tea. If a person is selected at random, what is the probability that the person prefers tea?',
      steps: [['35+65=100', 'choy ichuvchilar'], ['\\frac{100}{200}', 'hammaga'], ['0.5', 'javob']],
      check: 'SPR ga 1/2 yoki .5 deb kiritish mumkin.',
    },
    {
      tag: '«given that»', strat: 'maxraj — faqat ayollar',
      q: 'In the same survey, if a woman is selected at random, what is the probability that she prefers tea?',
      steps: [['\\text{ayollar}=110', 'maxraj'], ['\\text{choy}=65', 'surat'], ['\\frac{65}{110}=\\frac{13}{22}', 'javob']],
      check: "$\\approx 0.59$ — umumiy ehtimollik (0.5) dan farq qiladi.",
    },
    {
      tag: 'teskari shart', strat: 'endi guruh — choy ichuvchilar',
      q: 'Given that a selected person prefers tea, what is the probability that the person is a man?',
      steps: [['\\text{choy}=100', 'maxraj'], ['\\text{erkak}=35', 'surat'], ['\\frac{35}{100}=0.35', 'javob']],
      check: "$P(\\text{choy}\\mid\\text{erkak})=\\frac{35}{90}\\approx 0.39$ — bu boshqa savol!",
    },
  ],
  trap: {
    title: "Maxraj tuzog'i",
    q: '$P(A\\mid B)$ va $P(B\\mid A)$',
    body: "Ular odatda teng emas. «Given that» dan keyin kelgan guruh — maxraj. Savolni o'qishingiz bilan maxrajni yozib qo'ying.",
  },
  tip: {
    badge: 'T', short: 'jadval', title: "Jadvalni to'ldiring",
    q: 'Avval jami satr va ustunni hisoblang.',
    body: "Ko'p savolda bir-ikki katak bo'sh bo'ladi — ayirish orqali toping. Keyin har bir ehtimollik bitta bo'lish amali.",
  },
  mistakes: [
    'Shartli ehtimollikda umumiy jamiga bo\'lish.',
    '$P(A\\mid B)$ va $P(B\\mid A)$ ni adashtirish.',
    "Jadvaldagi «Total» satrini ham qo'shib yuborish.",
    'Ehtimollik 1 dan katta chiqsa ham tekshirmaslik.',
  ],
  practice: [
    ["Qutida 4 qizil, 6 ko'k shar. $P(\\text{qizil})$ = ?", ''],
    ["50 o'quvchi: 20 tasi 11-sinf, ulardan 12 tasi qiz. $P(\\text{qiz}\\mid 11\\text{-sinf})$", ''],
    ["Shu jadvalda 11-sinf o'quvchisi chiqish ehtimolligi", ''],
    ["Zar tashlandi, juft son chiqqani ma'lum. 6 bo'lish ehtimolligi?", ''],
  ],
  answers: ['0.4', '0.6', '0.4', '$\\frac{1}{3}$'],
  remember: [
    '$P=\\frac{\\text{qulay}}{\\text{jami}}$; maxraj — kim orasidan tanlanyapti.',
    '«Given that X» — maxraj faqat X guruh.',
    '$P(A\\mid B)\\ne P(B\\mid A)$ — guruhni almashtirmang.',
  ],
};
