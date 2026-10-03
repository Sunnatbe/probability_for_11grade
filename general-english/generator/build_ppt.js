// Dars taqdimoti (11 slayd + spiker matni) — namunaviy 3-dars dizayni asosida
const fs = require('fs');
const path = require('path');
const PptxGenJS = require('pptxgenjs');
const { toPlain, toRuns } = require('./lib/markup');
const { loadLesson, meta } = require('./lib/common');
const { notesFor } = require('./lib/notes');

const C = {
  navy: '1B1F3B', navy2: '2E3470', indigo: '4F46E5', amber: 'F59E0B', green: '10B981', rose: 'E11D48',
  lav: 'EEF0FB', lav2: 'C7CCF5', slate: 'F8FAFC', grey: '6B7280', text: '374151', line: 'CBD5E1',
  mint: 'D1FAE5', pink: 'FFE4E6', cream: 'FEF3C7', dgreen: '065F46', white: 'FFFFFF',
};
const HEAD = 'Cambria';
const BODY = 'Calibri';
const P = toPlain;

const fit = (s, steps) => { const len = P(s).length; for (const [max, size] of steps) if (len <= max) return size; return steps[steps.length - 1][1]; };

function base(pptx, L) {
  pptx.defineSlideMaster({ title: 'DARK', background: { color: C.navy } });
  pptx.defineSlideMaster({
    title: 'CONTENT', background: { color: C.white },
    objects: [{ text: { text: `Kholmurodov Academy · General English · Dars ${L.n}`, options: { x: 0.5, y: 5.2, w: 5, h: 0.25, fontFace: BODY, fontSize: 7, color: C.grey, margin: 0 } } }],
    slideNumber: { x: 9.0, y: 5.2, w: 0.5, h: 0.25, fontFace: BODY, fontSize: 7, color: C.grey, align: 'right' },
  });
}

const tx = (s, text, o) => s.addText(text, { margin: 0, fontFace: BODY, color: C.text, valign: 'top', ...o });
const box = (s, o, fill, extra = {}) => s.addShape('roundRect', { ...o, fill: { color: fill }, line: { color: extra.line || fill, width: extra.lineW || 1 }, rectRadius: extra.r ?? 0.08, ...(extra.shadow ? { shadow: { type: 'outer', color: '000000', opacity: 0.12, blur: 4, offset: 1.5, angle: 90 } } : {}) });
const badge = (s, x, y, d, label, fill, size, font = BODY) => {
  s.addShape('ellipse', { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill } });
  tx(s, label, { x, y, w: d, h: d, align: 'center', valign: 'middle', bold: true, color: C.white, fontSize: size, fontFace: font });
};
const title = (s, t) => tx(s, P(t), { x: 0.5, y: 0.3, w: 9, h: 0.7, fontFace: HEAD, fontSize: fit(t, [[34, 28], [44, 24], [99, 21]]), bold: true, color: C.navy, valign: 'middle' });

function slideTitle(pptx, L) {
  const s = pptx.addSlide({ masterName: 'DARK' });
  tx(s, `GENERAL ENGLISH  ·  ${L.moduleLabel}`, { x: 0.6, y: 0.9, w: 6.6, h: 0.35, fontSize: 10, bold: true, color: C.amber, charSpacing: 2 });
  tx(s, P(L.title), { x: 0.6, y: 1.35, w: 6.4, h: 1.7, fontFace: HEAD, bold: true, color: C.white, valign: 'bottom', fontSize: fit(L.title, [[22, 36], [38, 32], [52, 28], [70, 24], [99, 21]]) });
  tx(s, P(L.en), { x: 0.6, y: 3.1, w: 6.4, h: 0.6, italic: true, fontSize: fit(L.en, [[45, 14], [99, 12]]), color: C.lav2 });
  box(s, { x: 0.6, y: 4.05, w: 1.5, h: 0.45 }, C.navy2);
  tx(s, L.video, { x: 0.6, y: 4.05, w: 1.5, h: 0.45, align: 'center', valign: 'middle', bold: true, fontSize: 11, color: C.white });
  tx(s, 'Video  ·  Konspekt  ·  Dars testi', { x: 2.3, y: 4.05, w: 4.5, h: 0.45, valign: 'middle', fontSize: 11, color: C.lav2 });
  s.addShape('ellipse', { x: 7.25, y: 1.3, w: 2.2, h: 2.2, fill: { color: C.indigo }, line: { color: C.indigo } });
  tx(s, 'DARS', { x: 7.25, y: 1.75, w: 2.2, h: 0.35, align: 'center', bold: true, fontSize: 11, color: C.lav2, charSpacing: 3 });
  tx(s, String(L.n), { x: 7.25, y: 2.05, w: 2.2, h: 1.1, align: 'center', valign: 'middle', bold: true, fontFace: HEAD, fontSize: 54, color: C.white });
  return s;
}

function slideGoals(pptx, L) {
  const s = pptx.addSlide({ masterName: 'CONTENT' });
  title(s, 'Bu darsda');
  L.goals.forEach(([t, d], i) => {
    const x = 0.5 + i * 3.075;
    box(s, { x, y: 1.35, w: 2.85, h: 3.2 }, C.lav);
    badge(s, x + 0.3, 1.65, 0.7, String(i + 1), C.indigo, 20);
    tx(s, P(t), { x: x + 0.3, y: 2.6, w: 2.3, h: 0.75, fontFace: HEAD, bold: true, fontSize: fit(t, [[22, 18], [32, 16], [99, 14]]), color: C.navy, valign: 'top' });
    tx(s, P(d), { x: x + 0.3, y: 3.4, w: 2.3, h: 1.1, fontSize: 11 });
  });
  return s;
}

function slideKeywords(pptx, L) {
  const s = pptx.addSlide({ masterName: 'CONTENT' });
  title(s, "Inglizcha kalit so'zlar");
  L.kw.slice(0, 8).forEach(([en, uz, ex], i) => {
    const col = i % 2; const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.6; const y = 1.2 + row * 0.95;
    box(s, { x, y, w: 4.4, h: 0.82 }, (row + col) % 2 === 0 ? C.lav : C.slate);
    tx(s, P(en), { x: x + 0.2, y: y + 0.1, w: 2.4, h: 0.35, bold: true, fontSize: fit(en, [[24, 13], [32, 11.5], [99, 10]]), color: C.indigo, valign: 'middle' });
    tx(s, P(uz), { x: x + 2.6, y: y + 0.08, w: 1.65, h: 0.4, fontSize: fit(uz, [[22, 11], [36, 9.5], [99, 8.5]]), align: 'right', valign: 'middle' });
    tx(s, P(ex), { x: x + 0.2, y: y + 0.49, w: 4.0, h: 0.28, italic: true, fontSize: 9.5, color: C.grey, valign: 'middle' });
  });
  return s;
}

function slideCore(pptx, L) {
  const s = pptx.addSlide({ masterName: 'CONTENT' });
  title(s, L.core.title);
  const n = L.core.steps.length;
  const gap = 0.333; const w = (9 - gap * (n - 1)) / n;
  L.core.steps.forEach(([hd, bd], i) => {
    const x = 0.5 + i * (w + gap);
    box(s, { x, y: 1.3, w, h: 2.55 }, C.white, { line: 'E5E7EB', shadow: true });
    badge(s, x + w / 2 - 0.35, 1.5, 0.7, String(i + 1), C.indigo, 20);
    tx(s, P(hd), { x: x + 0.12, y: 2.3, w: w - 0.24, h: 0.6, align: 'center', valign: 'middle', bold: true, fontSize: fit(hd, [[20, 13], [30, 12], [99, 11]]), color: C.navy });
    tx(s, P(bd), { x: x + 0.12, y: 2.95, w: w - 0.24, h: 0.85, align: 'center', fontSize: fit(bd, [[40, 10.5], [70, 9.5], [999, 8.5]]) });
    if (i < n - 1) tx(s, '→', { x: x + w, y: 2.25, w: gap, h: 0.5, align: 'center', valign: 'middle', bold: true, fontSize: 20, color: C.amber });
  });
  if (L.core.note) {
    box(s, { x: 0.5, y: 4.15, w: 9.0, h: 0.75 }, C.cream);
    badge(s, 0.7, 4.3, 0.45, '✓', C.amber, 14);
    tx(s, P(L.core.note), { x: 1.35, y: 4.15, w: 7.9, h: 0.75, valign: 'middle', fontSize: fit(L.core.note, [[95, 12], [140, 11], [999, 10]]) });
  }
  return s;
}

function slideExample(pptx, L, k) {
  const e = L.ex[k];
  const s = pptx.addSlide({ masterName: 'CONTENT' });
  title(s, `${k + 1}-misol: ${P(e.tag)}`);
  box(s, { x: 0.5, y: 1.25, w: 3.6, h: 3.65 }, C.navy);
  tx(s, 'TOPSHIRIQ', { x: 0.75, y: 1.45, w: 3.1, h: 0.3, bold: true, fontSize: 9, color: C.amber, charSpacing: 1 });
  tx(s, toRuns(e.q).map((r) => ({ text: r.text, options: { bold: r.bold, color: r.bold ? C.amber : C.white } })), { x: 0.75, y: 1.8, w: 3.1, h: 2.0, fontFace: HEAD, color: C.white, fontSize: fit(e.q, [[60, 16], [110, 14], [170, 12], [999, 11]]) });
  box(s, { x: 0.7, y: 3.85, w: 3.2, h: 0.85 }, C.navy2);
  tx(s, [
    { text: 'STRATEGIYA', options: { bold: true, fontSize: 8, color: C.amber, breakLine: true } },
    { text: P(e.strat).replace(/^./, (c) => c.toUpperCase()), options: { fontSize: fit(e.strat, [[60, 10], [999, 9]]), color: C.white } },
  ], { x: 0.85, y: 3.9, w: 2.95, h: 0.75, valign: 'middle' });

  const n = e.steps.length;
  const top = 1.25; const avail = 2.78; const pitch = avail / n; const rh = pitch - 0.08;
  const maxLen = Math.max(...e.steps.map(([m]) => P(m).length));
  const mw = maxLen > 22 ? 3.35 : 2.55;
  e.steps.forEach(([m, cm], i) => {
    const y = top + i * pitch; const last = i === n - 1;
    box(s, { x: 4.4, y, w: 5.1, h: rh }, last ? C.lav : C.slate, { r: 0.05 });
    badge(s, 4.55, y + rh / 2 - 0.17, 0.34, String(i + 1), last ? C.indigo : '94A3B8', 9);
    const mt = P(m);
    const fs = mt.length <= 18 ? 16 : mt.length <= 26 ? 14 : mt.length <= 34 ? 12.5 : mt.length <= 44 ? 11.5 : 10.5;
    tx(s, toRuns(m).map((r) => ({ text: r.text, options: { bold: r.bold || last, color: r.bold && !last ? C.indigo : C.navy } })), { x: 5.05, y, w: mw, h: rh, valign: 'middle', fontFace: HEAD, fontSize: fs });
    tx(s, P(cm), { x: 5.05 + mw, y, w: 9.4 - 5.05 - mw, h: rh, valign: 'middle', align: 'right', italic: true, color: C.grey, fontSize: fit(cm, [[30, 9], [999, 8]]) });
  });
  if (e.check) {
    box(s, { x: 4.4, y: 4.1, w: 5.1, h: 0.8 }, C.mint);
    tx(s, P(e.check), { x: 4.6, y: 4.1, w: 4.75, h: 0.8, valign: 'middle', color: C.dgreen, fontSize: fit(e.check, [[70, 11], [120, 10], [999, 9]]) });
  }
  return s;
}

function slideCases(pptx, L) {
  const s = pptx.addSlide({ masterName: 'CONTENT' });
  title(s, L.cases.title);
  tx(s, P(L.cases.intro), { x: 0.5, y: 1.05, w: 9, h: 0.5, valign: 'middle', fontSize: fit(L.cases.intro, [[80, 15], [120, 13], [999, 11.5]]) });
  const fills = [C.mint, C.pink, C.lav]; const acc = [C.green, C.rose, C.indigo];
  L.cases.items.forEach((c, i) => {
    const x = 0.5 + i * 3.075;
    box(s, { x, y: 1.65, w: 2.85, h: 3.25 }, fills[i]);
    badge(s, x + 0.25, 1.85, 0.62, c.badge || String(i + 1), acc[i], (c.badge || '').length > 2 ? 11 : (c.badge || '').length > 1 ? 14 : 20);
    tx(s, P(c.t), { x: x + 1.0, y: 1.82, w: 1.75, h: 0.4, bold: true, fontSize: fit(c.t, [[14, 17], [20, 14], [99, 12]]), color: C.navy, valign: 'middle' });
    tx(s, P(c.en), { x: x + 1.0, y: 2.2, w: 1.75, h: 0.3, italic: true, fontSize: fit(c.en, [[24, 11], [99, 9]]), color: C.grey });
    tx(s, P(c.rule), { x: x + 0.25, y: 2.65, w: 2.4, h: 0.6, fontFace: HEAD, bold: true, color: acc[i], valign: 'middle', fontSize: fit(c.rule, [[12, 20], [20, 16], [30, 13], [999, 11]]) });
    tx(s, [
      { text: 'Misol:', options: { fontSize: 9, color: C.grey, breakLine: true } },
      { text: P(c.ex), options: { fontFace: HEAD, fontSize: fit(c.ex, [[22, 15], [34, 12.5], [999, 11]]), color: C.navy } },
    ], { x: x + 0.25, y: 3.35, w: 2.4, h: 0.85 });
    if (c.res) tx(s, P(c.res), { x: x + 0.25, y: 4.25, w: 2.4, h: 0.5, fontFace: HEAD, bold: true, color: C.navy, valign: 'middle', fontSize: fit(c.res, [[18, 15], [30, 12.5], [999, 11]]) });
  });
  return s;
}

function slideTips(pptx, L) {
  const s = pptx.addSlide({ masterName: 'CONTENT' });
  title(s, L.tipsTitle || `Tuzoq va ${P(L.tip.short || 'maslahat')}`);
  [[L.trap, C.cream, C.amber, '!'], [L.tip, C.lav, C.indigo, L.tip.badge || 'D']].forEach(([t, fill, acc, b], i) => {
    const x = 0.5 + i * 4.6;
    box(s, { x, y: 1.25, w: 4.4, h: 3.65 }, fill);
    badge(s, x + 0.3, 1.5, 0.6, b, acc, b.length > 1 ? 12 : 18);
    tx(s, P(t.title), { x: x + 1.05, y: 1.5, w: 3.2, h: 0.6, bold: true, fontSize: fit(t.title, [[30, 15], [44, 13], [99, 12]]), color: C.navy, valign: 'middle' });
    if (t.q) tx(s, P(t.q), { x: x + 0.3, y: 2.3, w: 3.85, h: 0.9, italic: true, fontFace: HEAD, color: C.navy, fontSize: fit(t.q, [[60, 14], [110, 12.5], [999, 11]]) });
    tx(s, P(t.body), { x: x + 0.3, y: t.q ? 3.25 : 2.3, w: 3.85, h: t.q ? 1.55 : 2.5, fontSize: fit(t.body, [[130, 12], [200, 11], [999, 10]]) });
  });
  return s;
}

function slidePractice(pptx, L) {
  const s = pptx.addSlide({ masterName: 'CONTENT' });
  title(s, "O'zingiz sinab ko'ring");
  L.practice.forEach(([t, nt], i) => {
    const y = 1.25 + i * 0.92;
    box(s, { x: 0.5, y, w: 6.0, h: 0.78 }, C.white, { line: 'E5E7EB', shadow: true });
    badge(s, 0.68, y + 0.16, 0.46, 'abcd'[i], C.indigo, 12);
    const runs = [{ text: P(t), options: { fontFace: HEAD, fontSize: fit(t, [[34, 16], [60, 13], [90, 11.5], [999, 10]]), color: C.navy } }];
    if (nt) runs.push({ text: `   (${P(nt)})`, options: { fontSize: 10, italic: true, color: C.grey } });
    tx(s, runs, { x: 1.35, y, w: 5.0, h: 0.78, valign: 'middle' });
  });
  box(s, { x: 6.8, y: 1.25, w: 2.7, h: 3.6 }, C.navy);
  s.addShape('ellipse', { x: 7.6, y: 1.55, w: 1.1, h: 1.1, fill: { color: C.amber }, line: { color: C.amber } });
  s.addShape('rect', { x: 7.92, y: 1.82, w: 0.16, h: 0.56, fill: { color: C.navy }, line: { color: C.navy } });
  s.addShape('rect', { x: 8.22, y: 1.82, w: 0.16, h: 0.56, fill: { color: C.navy }, line: { color: C.navy } });
  tx(s, "Videoni to'xtating va yeching", { x: 7.0, y: 2.85, w: 2.3, h: 0.8, align: 'center', valign: 'middle', bold: true, fontSize: 14, color: C.white });
  tx(s, 'Javoblar keyingi slaydda', { x: 7.0, y: 3.85, w: 2.3, h: 0.6, align: 'center', valign: 'middle', fontSize: 10, color: C.lav2 });
  return s;
}

function slideSummary(pptx, L) {
  const s = pptx.addSlide({ masterName: 'DARK' });
  tx(s, 'Xulosa', { x: 0.5, y: 0.3, w: 9, h: 0.7, fontFace: HEAD, fontSize: 28, bold: true, color: C.white, valign: 'middle' });
  tx(s, 'JAVOBLAR', { x: 0.5, y: 1.1, w: 3, h: 0.3, bold: true, fontSize: 9, color: C.amber, charSpacing: 2 });
  L.answers.forEach((a, i) => {
    const x = 0.5 + i * 2.3;
    box(s, { x, y: 1.45, w: 2.1, h: 0.62 }, C.navy2, { r: 0.05 });
    tx(s, `${'abcd'[i]})  ${P(a)}`, { x: x + 0.15, y: 1.45, w: 1.85, h: 0.62, valign: 'middle', color: C.white, fontSize: fit(a, [[18, 11], [32, 9.5], [999, 8.5]]) });
  });
  L.remember.forEach((r, i) => {
    const y = 2.35 + i * 0.68;
    badge(s, 0.5, y + 0.06, 0.42, '✓', C.green, 12);
    tx(s, P(r), { x: 1.1, y, w: 8.4, h: 0.55, valign: 'middle', color: C.white, fontSize: fit(r, [[80, 13], [110, 12], [999, 11]]) });
  });
  box(s, { x: 0.5, y: 4.45, w: 9.0, h: 0.65 }, C.indigo, { r: 0.05 });
  const now = `Hozir: platformada ${L.nowText}`;
  tx(s, [
    { text: 'Keyingi:  ', options: { bold: true, color: C.amber } },
    { text: `${L.nextShort}   ·   ${now}`, options: { color: C.white } },
  ], { x: 0.75, y: 4.45, w: 8.5, h: 0.65, valign: 'middle', fontSize: (L.nextShort.length + now.length) > 105 ? 9.5 : 11 });
  return s;
}

async function buildOne(L, outFile) {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Kholmurodov Academy';
  pptx.company = 'Kholmurodov Academy';
  pptx.title = `General English · Dars ${L.n} — ${P(L.title)}`;
  pptx.theme = { headFontFace: HEAD, bodyFontFace: BODY };
  base(pptx, L);
  const slides = [
    slideTitle(pptx, L), slideGoals(pptx, L), slideKeywords(pptx, L), slideCore(pptx, L),
    slideExample(pptx, L, 0), slideExample(pptx, L, 1), slideCases(pptx, L), slideExample(pptx, L, 2),
    slideTips(pptx, L), slidePractice(pptx, L), slideSummary(pptx, L),
  ];
  const notes = notesFor(L);
  slides.forEach((s, i) => s.addNotes(notes[i]));
  await pptx.writeFile({ fileName: outFile });
}

async function build(nums, outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  for (const n of nums) {
    const L = loadLesson(n);
    if (!L) { console.log('skip', n); continue; }
    const out = path.join(outDir, `${L.fileBase}.pptx`);
    await buildOne(L, out);
    console.log('pptx', out);
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const nums = args.length > 1 ? args.slice(1).map(Number) : meta.lessons.map((l) => l.n);
  build(nums, args[0]).catch((e) => { console.error(e); process.exit(1); });
}
module.exports = { build };
