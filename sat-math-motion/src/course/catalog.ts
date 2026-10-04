// 36-lesson SAT Math 750+ course plan.
export type CatalogEntry = {n: number; module: string; moduleName: string; title: string; titleEn: string};

const M = {
  M0: 'KIRISH',
  M1: 'ALGEBRA',
  M2: 'ADVANCED MATH',
  M3: 'PSDA',
  M4: 'GEOMETRIYA',
  M5: 'STRATEGIYA',
} as const;

const raw: [string, string, string][] = [
  ['M0', 'Digital SAT bilan tanishuv va diagnostik test', 'Digital SAT Math: test format and diagnostic test'],
  ['M0', 'Desmos kalkulyatori va javob kiritish qoidalari', 'Desmos calculator and answer entry rules'],
  ['M1', "Bir noma'lumli chiziqli tenglamalar", 'Linear equations in one variable'],
  ['M1', 'Tenglamalar: yechimlar soni va parametrlar', 'Number of solutions and parameters'],
  ['M1', 'Chiziqli tengsizliklar', 'Linear inequalities'],
  ['M1', 'Chiziqli funksiya: qiyalik va kesishma', 'Linear functions: slope and intercepts'],
  ['M1', "To'g'ri chiziq tenglamasi va grafiklar", 'Equations of lines and their graphs'],
  ['M1', 'Chiziqli modellar va matnli masalalar', 'Linear models and word problems'],
  ['M1', "Ikki noma'lumli tenglamalar sistemasi", 'Systems of linear equations'],
  ['M1', 'Sistemalar: yechimlar soni va tengsizliklar', 'Systems: number of solutions and inequalities'],
  ['M2', "Ko'phadlar va ekvivalent ifodalar", 'Polynomials and equivalent expressions'],
  ['M2', "Ko'paytuvchilarga ajratish", 'Factoring'],
  ['M2', 'Kvadrat tenglamalarni yechish', 'Solving quadratic equations'],
  ['M2', 'Diskriminant va Viyet teoremasi', 'Discriminant, sum and product of roots'],
  ['M2', 'Kvadrat funksiya va parabola', 'Quadratic functions and parabolas'],
  ['M2', 'Darajalar va ildizlar', 'Exponents and radicals'],
  ['M2', "Eksponensial funksiyalar: o'sish va kamayish", 'Exponential growth and decay'],
  ['M2', 'Ratsional ifodalar va tenglamalar', 'Rational expressions and equations'],
  ['M2', 'Radikal va modulli tenglamalar', 'Radical and absolute value equations'],
  ['M2', 'Funksiyalar: belgilash, kompozitsiya va siljitish', 'Function notation, composition and transformations'],
  ['M2', 'Chiziqli va kvadrat sistemalar', 'Linear–quadratic systems'],
  ['M2', "Ko'phad funksiyalar: nollar va grafik", 'Polynomial functions: zeros and graphs'],
  ['M3', 'Nisbat, proporsiya va birliklar', 'Ratios, rates, proportions and units'],
  ['M3', 'Foizlar', 'Percentages'],
  ['M3', "Statistika: o'rtacha, median va tarqoqlik", 'Statistics: center and spread'],
  ['M3', "Grafiklar va ma'lumotlarni talqin qilish", 'Data displays and interpretation'],
  ['M3', 'Ehtimollik va ikki tomonlama jadvallar', 'Probability and two-way tables'],
  ['M3', 'Tanlanma, xulosa va xatolik chegarasi', 'Sampling, inference and margin of error'],
  ['M4', 'Burchaklar, chiziqlar va uchburchaklar', 'Angles, lines and triangles'],
  ['M4', "O'xshash uchburchaklar va Pifagor teoremasi", 'Similar triangles and the Pythagorean theorem'],
  ['M4', "To'g'ri burchakli uchburchak trigonometriyasi", 'Right triangle trigonometry'],
  ['M4', 'Aylana: yoy, sektor va radian', 'Circles: arcs, sectors and radians'],
  ['M4', 'Aylana tenglamasi', 'Equation of a circle'],
  ['M4', 'Yuza va hajm', 'Area and volume'],
  ['M5', '750+ uchun qiyin savollar strategiyasi', 'Hard-question strategies for 750+'],
  ['M5', 'Mock test tahlili va imtihon kuni', 'Mock test review and test-day plan'],
];

export const CATALOG: CatalogEntry[] = raw.map(([module, title, titleEn], i) => ({
  n: i + 1,
  module,
  moduleName: M[module as keyof typeof M],
  title,
  titleEn,
}));

export const nextLabel = (n: number) => {
  const nx = CATALOG.find((c) => c.n === n + 1);
  return nx ? `Dars ${nx.n} — ${nx.title}` : 'Kurs yakunlandi — imtihonda omad!';
};

export const meta = (n: number) => {
  const c = CATALOG.find((x) => x.n === n);
  if (!c) throw new Error(`No catalog entry for lesson ${n}`);
  return {n: c.n, module: c.module, moduleName: c.moduleName, title: c.title, titleEn: c.titleEn};
};
