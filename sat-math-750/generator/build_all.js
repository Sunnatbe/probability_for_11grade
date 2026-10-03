// Barcha 36 dars: PPTX + PDF konspekt → modul papkalari → bitta ZIP
// Ishlatish: node build_all.js [chiqish_papkasi]
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { meta, loadLesson } = require('./lib/common');
const pdf = require('./build_pdf');
const ppt = require('./build_ppt');

const MODULE_DIR = {
  M0: 'M0_Kirish_Digital_SAT_va_Desmos',
  M1: 'M1_Algebra',
  M2: 'M2_Advanced_Math',
  M3: 'M3_Problem_Solving_va_Data_Analysis',
  M4: 'M4_Geometry_va_Trigonometry',
  M5: 'M5_Strategiya_va_Mock_testlar',
};
const ROOT_NAME = 'SAT_Math_750_darslar';

function readme(lessons) {
  const lines = [
    'KHOLMURODOV ACADEMY — SAT Math 750+',
    "Darslar to'plami: har bir dars uchun taqdimot (PPTX) va konspekt (PDF)",
    '',
    "Tuzilma «SAT_Math_kurs_tuzilmasi.xlsx» faylining «Darslar» varag'i asosida: 6 modul, 36 dars.",
    '',
    "Har bir dars papkasida:",
    "  • DarsNN_<mavzu>.pptx — 11 slayd, 16:9; har bir slayd ostida video uchun spiker matni (Notes) va vaqt belgilari.",
    "    Slaydlar: muqova · Bu darsda · Inglizcha kalit so'zlar · Asosiy algoritm · 1-misol · 2-misol · 3 holat ·",
    "    3-misol · SAT tuzog'i va maslahat · O'zingiz sinab ko'ring · Xulosa (javoblar va keyingi dars).",
    "  • DarsNN_konspekt.pdf — A4, 2 sahifa: kalit so'zlar jadvali, algoritm, namunaviy misollar, tuzoqlar, mini-mashq, «Eslab qoling».",
    '',
    'Darslar ro\'yxati:',
  ];
  let mod = '';
  for (const L of lessons) {
    if (L.meta.module !== mod) {
      mod = L.meta.module;
      lines.push('', `${mod} — ${meta.modules[mod]}`);
    }
    lines.push(`  ${String(L.n).padStart(2, '0')}. ${L.meta.title}  (${L.meta.week}-hafta; dars testi: ${L.meta.test})`);
  }
  lines.push('', "Fayllar avtomatik generatsiya qilingan; manba kodi: sat-math-750/generator (node build_all.js).", '');
  return lines.join('\r\n');
}

async function main() {
  const outBase = path.resolve(process.argv[2] || path.join(__dirname, 'build'));
  const root = path.join(outBase, ROOT_NAME);
  fs.rmSync(root, { recursive: true, force: true });
  const lessons = meta.lessons.map((m) => loadLesson(m.n));
  const missing = meta.lessons.filter((m, i) => !lessons[i]).map((m) => m.n);
  if (missing.length) throw new Error(`Mazmuni yo'q darslar: ${missing.join(', ')}`);

  for (const L of lessons) {
    const dir = path.join(root, MODULE_DIR[L.meta.module], L.fileBase);
    fs.mkdirSync(dir, { recursive: true });
    await ppt.build([L.n], dir);
    await pdf.build([L.n], dir);
  }
  fs.writeFileSync(path.join(root, '00_Mundarija.txt'), '﻿' + readme(lessons));

  const zip = path.join(outBase, `${ROOT_NAME}.zip`);
  fs.rmSync(zip, { force: true });
  const walk = (d) => fs.readdirSync(path.join(outBase, d)).sort().flatMap((f) => {
    const rel = path.join(d, f);
    return fs.statSync(path.join(outBase, rel)).isDirectory() ? [rel + '/', ...walk(rel)] : [rel];
  });
  execFileSync('zip', ['-q', '-X', '-D', zip, ...walk(ROOT_NAME)], { cwd: outBase });
  console.log('ZIP:', zip);
}

main().catch((e) => { console.error(e); process.exit(1); });
