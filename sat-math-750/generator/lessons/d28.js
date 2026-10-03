module.exports = {
  n: 28,
  short: 'Chiziqlar_burchaklar_uchburchaklar',
  en: 'Lines, angles, and triangles',
  video: '12 min',
  hook: "Geometriya moduli boshlanadi. Burchak savollari bir nechta qoidaga tayanadi: parallel chiziqlar, uchburchak burchaklari yig'indisi va o'xshashlik. Ularni bilsangiz, bu savollar eng tez yechiladi.",
  goals: [
    ['Parallel chiziqlar', "Kesuvchi hosil qilgan teng va to'ldiruvchi burchaklar"],
    ['Uchburchak burchaklari', "Yig'indi 180°, tashqi burchak"],
    ["O'xshashlik", 'Mos tomonlar proporsional'],
  ],
  kw: [
    ['parallel lines', "parallel to'g'ri chiziqlar", '$\\ell\\parallel m$'],
    ['transversal', 'kesuvchi', 'cuts both lines'],
    ['vertical angles', 'vertikal burchaklar', 'teng'],
    ['supplementary', "yig'indisi 180°", '$x+y=180^\\circ$'],
    ['corresponding angles', 'mos burchaklar', 'parallel ⇒ teng'],
    ['similar triangles', "o'xshash uchburchaklar", '$\\triangle ABC\\sim\\triangle DEF$'],
    ['congruent', 'teng (kongruent)', '$\\triangle ABC\\cong\\triangle DEF$'],
    ['exterior angle', 'tashqi burchak', '$\\angle A+\\angle B$'],
  ],
  core: {
    title: 'Burchak qoidalari', en: 'Angle facts',
    steps: [
      ['Vertikal', 'Qarama-qarshi burchaklar teng'],
      ["To'g'ri chiziq", "Qo'shni burchaklar yig'indisi 180°"],
      ['Parallel + kesuvchi', 'Mos va ichki almashinuvchi burchaklar teng'],
      ['Uchburchak', '$\\angle A+\\angle B+\\angle C=180^\\circ$'],
    ],
    note: "Tashqi burchak = unga qo'shni bo'lmagan ikki ichki burchak yig'indisi.",
  },
  cases: {
    title: "Teng va o'xshash uchburchaklar", en: 'Congruent vs similar',
    intro: 'Ikki uchburchak orasidagi munosabat:',
    items: [
      { badge: '≅', t: 'Teng', en: 'congruent', rule: 'tomonlar ham teng', ex: 'SSS, SAS, ASA', res: 'hamma narsa teng' },
      { badge: '~', t: "O'xshash", en: 'similar', rule: 'burchaklar teng', ex: 'AA yetarli', res: 'tomonlar proporsional' },
      { badge: 'k', t: 'Masshtab', en: 'scale factor', rule: "$\\frac{a'}{a}=k$", ex: 'perimetr $\\times k$', res: 'yuza $\\times k^2$' },
    ],
  },
  ex: [
    {
      tag: 'parallel chiziqlar', strat: "bir tomonli ichki burchaklar yig'indisi 180°",
      q: 'Parallel lines $\\ell$ and $m$ are cut by a transversal. Two same-side interior angles measure $(3x+20)^\\circ$ and $(2x+10)^\\circ$. What is the value of $x$?',
      steps: [['(3x+20)+(2x+10)=180', "yig'indi 180°"], ['5x+30=180', "o'xshash hadlar"], ['x=30', 'javob']],
      check: "Burchaklar: $110^\\circ$ va $70^\\circ$, yig'indisi $180^\\circ$ ✓",
    },
    {
      tag: 'tashqi burchak', strat: "tashqi = ikki uzoq ichki burchak yig'indisi",
      q: 'In triangle $ABC$, the exterior angle at $C$ measures $125^\\circ$ and $\\angle A=48^\\circ$. What is the measure of $\\angle B$?',
      steps: [['\\angle A+\\angle B=125^\\circ', 'tashqi burchak'], ['\\angle B=125^\\circ-48^\\circ', 'ayirdik'], ['\\angle B=77^\\circ', 'javob']],
      check: "$\\angle C=180^\\circ-125^\\circ=55^\\circ$; $48+77+55=180$ ✓",
    },
    {
      tag: "o'xshash uchburchaklar", strat: 'mos tomonlar nisbatini tuzing',
      q: 'Triangle $ABC$ is similar to triangle $DEF$, with $AB=6$, $BC=9$, and $DE=10$. What is the length of $EF$?',
      steps: [['\\frac{DE}{AB}=\\frac{EF}{BC}', 'proporsiya'], ['\\frac{10}{6}=\\frac{EF}{9}', "qo'ydik"], ['EF=15', 'javob']],
      check: 'Masshtab $k=\\frac{5}{3}$: $9\\cdot\\frac{5}{3}=15$ ✓',
    },
  ],
  trap: {
    title: "O'xshashlikda harflar tartibi",
    q: '$\\triangle ABC\\sim\\triangle DEF$',
    body: "Harflar tartibi mos tomonlarni bildiradi: $AB\\leftrightarrow DE$, $BC\\leftrightarrow EF$. Rasmga emas, harflarga qarab moslang.",
  },
  tip: {
    badge: '∠', short: 'chizma', title: 'Chizmaga yozib boring',
    q: 'Har bir topilgan burchakni chizmaga yozing.',
    body: "SAT chizmalari ko'pincha masshtabda emas («not drawn to scale») — ko'z bilan o'lchamang, qoidalardan foydalaning.",
  },
  mistakes: [
    "Bir tomonli ichki burchaklarni teng deb olish (ular 180° ga to'ldiradi).",
    "O'xshash uchburchaklarda mos bo'lmagan tomonlarni nisbatga qo'yish.",
    'Tashqi burchakni unga qo\'shni ichki burchak bilan adashtirish.',
    'Chizmani masshtabda deb o\'lchash.',
  ],
  practice: [
    ['Vertikal burchaklar: $(4x-10)^\\circ$ va $(2x+30)^\\circ$. $x$ = ?', ''],
    ['Uchburchak burchaklari $x$, $2x$, $3x$. Eng kattasi?', ''],
    ["O'xshash, masshtab 3. Kichigining yuzi 5. Kattasiniki?", ''],
    ["Qo'shni burchaklar $x$ va $3x$. $x$ = ?", ''],
  ],
  answers: ['$x=20$', '$90^\\circ$', '45', '$45^\\circ$'],
  remember: [
    "Vertikal — teng; qo'shni — 180°; parallel kesuvchida mos burchaklar teng.",
    "Uchburchak: 180°; tashqi burchak = ikki uzoq ichki burchak yig'indisi.",
    "O'xshashlik: tomonlar $\\times k$, yuza $\\times k^2$.",
  ],
};
