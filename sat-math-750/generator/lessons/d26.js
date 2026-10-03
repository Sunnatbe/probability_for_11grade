module.exports = {
  n: 26,
  short: 'Tanlanma_va_xatolik_chegarasi',
  en: 'Inference from sample statistics and margin of error',
  video: '11 min',
  hook: "So'rovnoma natijalari har kuni yangiliklarda: «58% ± 3%». Bugun bu sonlar nimani anglatishini va SAT qaysi xulosalarni to'g'ri deb hisoblashini o'rganamiz.",
  goals: [
    ["Tanlanma → to'plam", "Tasodifiy tanlanmadan butun to'plamga baho"],
    ['Xatolik chegarasi', 'baho ± $E$ — ishonarli oraliq'],
    ['Tanlanma hajmi', 'Katta tanlanma — kichik xatolik'],
  ],
  kw: [
    ['sample', 'tanlanma', '500 voters surveyed'],
    ['population', "bosh to'plam", 'all voters in the city'],
    ['random sample', 'tasodifiy tanlanma', 'selected at random'],
    ['margin of error', 'xatolik chegarasi', '± 3%'],
    ['estimate', 'baho, taxmin', 'about 270 students'],
    ['plausible', 'ishonarli, ehtimolli', 'a plausible value'],
    ['sample size', 'tanlanma hajmi', '$n=400$'],
    ['bias', "og'ish, tanlanma xatosi", 'only club members asked'],
  ],
  core: {
    title: 'Xulosa chiqarish: 4 qadam', en: 'Making an inference',
    steps: [
      ['Tanlanma tasodifiymi?', "Ha bo'lsa — umumlashtirish mumkin"],
      ['Qaysi to\'plamga?', "Faqat tanlanma olingan to'plamga"],
      ['Oraliqni tuz', 'baho ± xatolik chegarasi'],
      ["Ehtiyotkor so'z", '«plausible», «likely» — aniq emas'],
    ],
    note: "Tanlanma hajmi oshsa, xatolik chegarasi kamayadi (taxminan $\\frac{1}{\\sqrt{n}}$ ga proporsional).",
  },
  cases: {
    title: "Qaysi xulosa to'g'ri?", en: 'Valid conclusions',
    intro: "So'rov: tasodifiy 400 talaba; 62% ± 4% sport bilan shug'ullanadi.",
    items: [
      { badge: '✓', t: "To'g'ri", en: 'plausible range', rule: '58%–66%', ex: 'haqiqiy ulush shu oraliqda', res: 'ishonarli' },
      { badge: '✗', t: "Noto'g'ri", en: 'exact claim', rule: 'aynan 62%', ex: '«roppa-rosa 62%»', res: 'xatolik bor' },
      { badge: '✗', t: "Noto'g'ri", en: 'wrong population', rule: 'barcha yoshlar', ex: "faqat talabalar so'ralgan", res: "umumlashtirib bo'lmaydi" },
    ],
  },
  ex: [
    {
      tag: 'oraliq', strat: 'baho ± xatolik',
      q: 'A random sample of 500 voters found that 54% support a proposal, with a margin of error of 3%. Which is a plausible value for the percent of all voters who support it?',
      steps: [['54-3=51', 'pastki chegara'], ['54+3=57', 'yuqori chegara'], ['51\\%\\le p\\le 57\\%', 'javob: shu oraliqdan']],
      check: "Masalan, 52% — ishonarli; 50% — oraliqdan tashqarida.",
    },
    {
      tag: 'bahodan son', strat: "ulush × to'plam hajmi",
      q: 'In a random sample of 80 students at a school of 1,200 students, 18 said they walk to school. About how many students at the school walk to school?',
      steps: [['\\frac{18}{80}=0.225', 'tanlanma ulushi'], ['0.225\\cdot 1200', "to'plamga"], ['270', 'javob']],
      check: "Bu — baho; haqiqiy son biroz farq qilishi mumkin.",
    },
    {
      tag: 'tanlanma hajmi', strat: 'katta $n$ — kichik xatolik',
      q: 'Researchers want to reduce the margin of error of their survey. Which change is most likely to help?',
      steps: [['n\\uparrow', 'tanlanmani kattalashtirish'], ['E\\downarrow', 'xatolik kamayadi'], ['\\text{kattaroq tasodifiy tanlanma}', 'javob']],
      check: "Faqat do'stlardan so'rash yordam bermaydi — tasodifiylikni saqlash shart.",
    },
  ],
  trap: {
    title: 'Kimga umumlashtiramiz?',
    q: "Faqat sport klubi a'zolari so'raldi.",
    body: "Natijani butun maktabga umumlashtirib bo'lmaydi — tanlanma butun maktabdan tasodifiy olinmagan (bias).",
  },
  tip: {
    badge: '±', short: 'xatolik chegarasi', title: "Xatolik chegarasini o'qish",
    q: '«$p\\pm E$» — oraliq $[p-E,\\ p+E]$.',
    body: "Ikki guruh oraliqlari ustma-ust tushsa, ular orasida haqiqiy farq bor deb aytib bo'lmaydi.",
  },
  mistakes: [
    'Bahoni aniq qiymat deb aytish.',
    "Natijani tanlanma olinmagan to'plamga umumlashtirish.",
    "Tanlanma hajmi kattalashsa xatolik ortadi deb o'ylash.",
    "O'zi qatnashgan (ixtiyoriy) so'rovni tasodifiy deb hisoblash.",
  ],
  practice: [
    ['45% ± 5%: ishonarli oraliq', ''],
    ["Tanlanma: 40 dan 6 tasi. 2,000 kishilik to'plamda taxminan?", ''],
    ['48% ± 4% va 53% ± 4%: farq aniqmi?', ''],
    ["So'rov faqat kutubxonada o'tkazildi. Muammo?", ''],
  ],
  answers: ['40%–50%', '300', "yo'q, oraliqlar kesishadi", 'tanlanma tasodifiy emas'],
  remember: [
    "Tasodifiy tanlanma — faqat o'sha to'plamga umumlashtiriladi.",
    'Baho ± xatolik — ishonarli oraliq, aniq qiymat emas.',
    'Kattaroq tanlanma — kichikroq xatolik chegarasi.',
  ],
};
