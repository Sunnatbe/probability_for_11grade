// Dars konspekti: HTML (KaTeX formulalar) -> Chromium orqali A4 PDF
const fs = require('fs');
const path = require('path');
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const { toHtml, mathHtml, esc } = require('./lib/markup');
const { loadLesson, meta } = require('./lib/common');

const KATEX_CSS = fs.readFileSync(require.resolve('katex/dist/katex.min.css'), 'utf8')
  .replace(/url\(fonts\//g, `url(file://${path.dirname(require.resolve('katex/dist/katex.min.css'))}/fonts/`);

const FD = path.join(__dirname, 'fonts');
const FONTS = [['regular', 400, 'normal'], ['bold', 700, 'normal'], ['italic', 400, 'italic'], ['bolditalic', 700, 'italic']]
  .map(([f, w, st]) => `@font-face{font-family:'LMR';src:url(file://${FD}/lmroman10-${f}.ttf);font-weight:${w};font-style:${st};}`).join('');

const CSS = FONTS + `
@page { size: A4; margin: 14mm 13mm 16mm 13mm; }
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin: 0; font-family: 'LMR', serif; font-size: 10.6pt; color: #1f2937; line-height: 1.32; }
.katex { font-size: 1.04em; }
.sans { font-family: Carlito, Calibri, sans-serif; }
.hdr { background: #1B1F3B; color: #fff; border-radius: 7px; padding: 11px 16px 10px; display: flex; justify-content: space-between; align-items: flex-end; }
.hdr .lbl { font-family: Carlito, sans-serif; font-weight: 700; color: #F59E0B; font-size: 7.6pt; letter-spacing: .4px; }
.hdr h1 { margin: 1px 0 2px; font-size: 20.5pt; font-weight: 700; line-height: 1.08; }
.hdr .en { font-style: italic; color: #C7CCF5; font-size: 9.6pt; }
.hdr .right { font-family: Carlito, sans-serif; font-size: 8.4pt; color: #E5E7EB; white-space: nowrap; padding-left: 12px; }
.goals { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 9px; margin: 11px 0 4px; }
.goal { background: #EEF0FB; border-radius: 6px; padding: 7px 9px; font-family: Carlito, sans-serif; font-size: 8.6pt; line-height: 1.22; }
.goal b { font-size: 8.8pt; color: #1B1F3B; }
.badge { display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: #4F46E5; color: #fff; font-family: Carlito, sans-serif; font-weight: 700; flex: none; }
.goal .badge { width: 15px; height: 15px; font-size: 8pt; margin-right: 5px; vertical-align: -2px; }
h2 { font-family: Carlito, sans-serif; font-size: 14.2pt; margin: 13px 0 5px; color: #1B1F3B; break-after: avoid; }
h2 small { font-family: 'LMR', serif; font-style: italic; font-weight: 400; color: #9CA3AF; font-size: 8.6pt; margin-left: 6px; }
table.kw { width: 100%; border-collapse: collapse; font-size: 9pt; }
table.kw th { font-family: Carlito, sans-serif; text-align: left; font-size: 8.5pt; border-top: 1.2px solid #1B1F3B; border-bottom: 0.8px solid #1B1F3B; padding: 4px 6px; }
table.kw td { padding: 2.2px 6px; }
table.kw tr:last-child td { border-bottom: 1.2px solid #1B1F3B; padding-bottom: 4px; }
table.kw td.e { font-family: Carlito, sans-serif; color: #4F46E5; font-weight: 700; width: 33%; }
table.kw td.e .katex { color: #4F46E5; }
table.kw td.x { font-style: italic; }
.steps { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 22px; margin: 6px 0 9px; }
.step { display: flex; gap: 9px; align-items: flex-start; }
.step .badge { width: 17px; height: 17px; font-size: 9pt; margin-top: 1px; }
.callout { background: #D1FAE5; color: #065F46; border-radius: 5px; padding: 7px 12px; font-size: 9.8pt; break-inside: avoid; }
.callout b { color: #065F46; }
.cases { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-top: 6px; break-inside: avoid; }
.case { border-radius: 6px; padding: 8px 8px 9px; text-align: center; }
.case .t { font-family: Carlito, sans-serif; font-weight: 700; font-size: 9.6pt; color: #1B1F3B; }
.case .en2 { font-style: italic; color: #6B7280; font-size: 8.2pt; }
.case .rule { font-size: 12.5pt; margin: 3px 0 4px; }
.case .exm { font-size: 9.6pt; }
.c0 { background: #D1FAE5; } .c0 .rule { color: #10B981; }
.c1 { background: #FFE4E6; } .c1 .rule { color: #E11D48; }
.c2 { background: #EEF0FB; } .c2 .rule { color: #4F46E5; }
.exbox { border: 1px solid #C7CCF5; border-radius: 7px; margin: 7px 0 9px; break-inside: avoid; overflow: hidden; }
.exbox .bar { background: #EEF0FB; display: flex; justify-content: space-between; gap: 12px; padding: 4px 11px; }
.exbox .bar .tg { font-family: Carlito, sans-serif; font-weight: 700; color: #4F46E5; font-size: 9.3pt; white-space: nowrap; }
.exbox .bar .tg .katex { color: #4F46E5; }
.exbox .bar .st { font-style: italic; color: #6B7280; font-size: 8.8pt; text-align: right; }
.exbox .body { padding: 7px 14px 8px; }
.exbox .q { font-weight: 700; margin-bottom: 5px; }
table.sol { margin: 2px auto 4px 9%; border-collapse: collapse; }
table.sol td { padding: 1.6px 4px; vertical-align: middle; }
table.sol td.l { text-align: right; }
table.sol td.r { text-align: left; }
table.sol td.c { color: #6B7280; font-size: 9pt; padding-left: 34px; }
.exbox .q b { color: #4F46E5; }
table.tsol { margin: 2px 0 4px 2%; border-collapse: collapse; width: 96%; }
table.tsol td { padding: 2px 5px; vertical-align: middle; }
table.tsol td.n { width: 22px; }
table.tsol .sb { display: inline-flex; width: 15px; height: 15px; border-radius: 50%; background: #94A3B8; color: #fff; font-family: Carlito, sans-serif; font-size: 8pt; font-weight: 700; align-items: center; justify-content: center; }
table.tsol .sb.last { background: #4F46E5; }
table.tsol td.t b { color: #4F46E5; }
table.tsol tr:last-child td { background: #EEF0FB; } table.tsol td.ans { font-weight: 700; color: #1B1F3B; } table.tsol td.ans span.box { border: 0.9px solid #1f2937; padding: 1px 4px; }
table.tsol td.c { color: #6B7280; font-size: 9pt; text-align: right; font-style: italic; }
.ansbox { border: 0.9px solid #1f2937; padding: 0 3px; }
.chk { color: #059669; font-size: 9.4pt; margin-top: 3px; }
.chk .katex { color: #059669; }
.tips { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 6px; break-inside: avoid; }
.tip { border-radius: 7px; padding: 9px 12px; }
.tip.y { background: #FEF3C7; } .tip.b { background: #EEF0FB; }
.tip .h { font-family: Carlito, sans-serif; font-weight: 700; font-size: 10pt; color: #1B1F3B; display: flex; align-items: center; gap: 7px; margin-bottom: 3px; }
.tip .badge { width: 18px; height: 18px; font-size: 9.5pt; }
.tip.y .badge { background: #F59E0B; }
.tip .q { font-style: italic; }
.mist { font-family: Carlito, sans-serif; font-weight: 700; font-size: 10pt; margin: 9px 0 2px; color: #1B1F3B; }
ul.m { margin: 2px 0 0; padding-left: 18px; font-size: 9.8pt; }
ul.m li { margin: 1.5px 0; } ul.m li::marker { color: #E11D48; }
.prac { display: grid; grid-template-columns: 1fr 1fr; gap: 7px 24px; margin: 6px 0 6px; }
.pr { display: flex; gap: 10px; align-items: flex-start; }
.pr .badge { width: 17px; height: 17px; font-size: 9pt; margin-top: 1px; }
.pr .nt { color: #6B7280; font-style: italic; font-size: 9pt; margin-left: 6px; }
.ans { color: #6B7280; font-size: 8.8pt; }
.rem { background: #1B1F3B; color: #fff; border-radius: 7px; padding: 10px 16px 9px; margin-top: 12px; break-inside: avoid; }
.rem .h { font-family: Carlito, sans-serif; color: #F59E0B; font-weight: 700; font-size: 9.6pt; margin-bottom: 3px; }
.rem .li { margin: 2.5px 0; font-size: 9.9pt; } .rem .li .ck { color: #F59E0B; font-weight: 700; margin-right: 6px; }
.rem .nx { font-family: Carlito, sans-serif; color: #C7CCF5; font-size: 8.6pt; margin-top: 6px; }
.keep { break-inside: avoid; }
.extra { margin: 4px 0 6px; font-size: 10pt; }
`;

const h = toHtml;
const dfrac = (t) => (t || '').replace(/\\frac/g, '\\dfrac');

function solTable(steps) {
  const rows = steps.map(([tex, cm], i) => {
    const last = i === steps.length - 1;
    // birinchi yuqori darajadagi munosabat belgisidan bo'lish
    let depth = 0; let at = -1; let rel = '';
    const rels = ['\\Rightarrow', '\\le', '\\ge', '\\ne', '=', '<', '>'];
    for (let k = 0; k < tex.length && at < 0; k++) {
      const ch = tex[k];
      if (ch === '{' || ch === '(') depth++;
      else if (ch === '}' || ch === ')') depth--;
      else if (depth === 0) {
        for (const r of rels) {
          if (tex.startsWith(r, k) && !(r === '\\le' && tex.startsWith('\\left', k)) && !(r === '\\ge' && /^\\ge[a-z]/.test(tex.slice(k, k + 4)) && !tex.startsWith('\\geq', k))) { at = k; rel = r; break; }
        }
      }
    }
    let l = ''; let r;
    if (at >= 0) {
      l = mathHtml(tex.slice(0, at));
      let rhs = tex.slice(at + rel.length);
      if (last && !/\\boxed/.test(rhs)) rhs = `\\boxed{${rhs}}`;
      r = mathHtml(`{}${rel === '\\le' || rel === '\\ge' || rel === '\\ne' || rel === '\\Rightarrow' ? rel + ' ' : rel}${rhs}`);
    } else {
      r = mathHtml(last && !/\\boxed/.test(tex) ? `\\boxed{${tex}}` : tex);
    }
    return `<tr><td class="l">${l}</td><td class="r">${r}</td><td class="c">${h(last && cm === 'javob' ? '' : cm)}</td></tr>`;
  });
  return `<table class="sol">${rows.join('')}</table>`;
}

const COMPACT = `
body { font-size: 10pt; line-height: 1.27; }
h2 { font-size: 13.4pt; margin: 9px 0 4px; }
.goals { margin: 8px 0 2px; }
table.kw td { padding: 1.4px 6px; }
.steps { margin: 4px 0 6px; gap: 5px 20px; }
.exbox { margin: 5px 0 6px; }
.exbox .body { padding: 5px 14px 6px; }
table.sol td { padding: 1px 4px; }
.cases { margin-top: 4px; } .case { padding: 6px 8px 7px; }
.tip { padding: 7px 11px; }
.rem { margin-top: 9px; padding: 8px 16px 8px; }
`;
const BREAKABLE = `.exbox, .keep, .tips { break-inside: auto; } .exbox .bar, .exbox .q { break-after: avoid; } table.sol tr { break-inside: avoid; }`;

function textSteps(steps) {
  const rows = steps.map(([t, cm], i) => {
    const last = i === steps.length - 1;
    return `<tr><td class="n"><span class="sb${last ? ' last' : ''}">${i + 1}</span></td><td class="t${last ? ' ans' : ''}">${h(t)}</td><td class="c">${h(last && cm === 'javob' ? '' : cm)}</td></tr>`;
  });
  return `<table class="tsol">${rows.join('')}</table>`;
}

function html(L, mode = 0) {
  const n = L.n;
  const steps = L.core.steps.map(([a, b], i) => `<div class="step"><span class="badge">${i + 1}</span><div><b>${h(a)}:</b> ${h(b)}</div></div>`).join('');
  const cases = L.cases.items.map((c, i) => `<div class="case c${i}"><div class="t">${h(c.t)}</div><div class="en2">${h(c.en)}</div>
    <div class="rule">${h(c.rule)}</div><div class="exm">${h(c.ex)}</div><div class="exm">${c.res ? '⇒ ' + h(c.res) : ''}</div></div>`).join('');
  const exs = L.ex.map((e, i) => `<div class="exbox"><div class="bar"><span class="tg">${i + 1}-misol · ${h(e.tag)}</span><span class="st">Strategiya: ${h(e.strat)}</span></div>
    <div class="body"><div class="q">${h(e.q)}</div>${textSteps(e.steps)}${e.check ? `<div class="chk">${h(e.check)}</div>` : ''}</div></div>`);
  const prac = L.practice.map(([t, nt], i) => `<div class="pr"><span class="badge">${'abcd'[i]}</span><div>${h(t)}${nt ? `<span class="nt">(${h(nt)})</span>` : ''}</div></div>`);
  // 2×2 tartib: a, c chapda; b, d o'ngda (namunadagidek)
  const pracGrid = [prac[0], prac[2], prac[1], prac[3]].filter(Boolean).join('');
  const kw = L.kw.map(([e, u, x]) => `<tr><td class="e">${h(e)}</td><td>${h(u)}</td><td class="x">${h(x)}</td></tr>`).join('');

  return `<!doctype html><html lang="uz"><head><meta charset="utf-8"><style>${KATEX_CSS}${CSS}${mode >= 1 ? COMPACT : ''}${mode >= 2 ? BREAKABLE : ''}</style></head><body>
  <div class="hdr"><div><div class="lbl">GENERAL ENGLISH · ${esc(L.moduleLabel)} · ${n}-DARS</div><h1>${h(L.title)}</h1><div class="en">${h(L.en)}</div></div>
    <div class="right">Video ${esc(L.video)} · Konspekt · Dars testi</div></div>
  <div class="goals">${L.goals.map(([t, d], i) => `<div class="goal"><b><span class="badge">${i + 1}</span>${h(t)}</b><br>${h(d)}</div>`).join('')}</div>

  <h2>Kalit so’zlar<small>Key words</small></h2>
  <table class="kw"><tr><th>English</th><th>O’zbekcha</th><th>Misol</th></tr>${kw}</table>

  <div class="keep"><h2>${h(L.core.title)}<small>${h(L.core.en)}</small></h2>
  ${L.core.intro ? `<div class="extra">${h(L.core.intro)}</div>` : ''}
  <div class="steps">${steps}</div>
  ${L.core.note ? `<div class="callout"><b>${h(L.core.note.split(':')[0])}:</b>${h(L.core.note.split(':').slice(1).join(':'))}</div>` : ''}</div>

  <div class="keep"><h2>${h(L.cases.title)}<small>${h(L.cases.en)}</small></h2>
  <div>${h(L.cases.intro)}</div>
  <div class="cases">${cases}</div></div>

  <h2>Namunaviy misollar<small>Worked examples</small></h2>
  ${exs.join('')}

  <div class="keep"><h2>Tuzoqlar va maslahatlar<small>Traps &amp; tips</small></h2>
  <div class="tips">
    <div class="tip y"><div class="h"><span class="badge">!</span><span>${h(L.trap.title)}</span></div><div class="q">${h(L.trap.q)}</div><div>${h(L.trap.body)}</div></div>
    <div class="tip b"><div class="h"><span class="badge">${esc(L.tip.badge || 'D')}</span><span>${h(L.tip.title)}</span></div><div>${h(L.tip.q || '')}</div><div>${h(L.tip.body)}</div></div>
  </div></div>
  <div class="keep"><div class="mist">Ko’p uchraydigan xatolar:</div>
  <ul class="m">${L.mistakes.map((m) => `<li>${h(m)}</li>`).join('')}</ul></div>

  <div class="keep"><h2>Mini-mashq<small>Practice</small></h2>
  <div class="prac">${pracGrid}</div>
  <div class="ans">Javoblar: ${L.answers.map((a, i) => `${'abcd'[i]}) ${h(a)}`).join('; ')}.</div></div>

  <div class="rem"><div class="h">ESLAB QOLING</div>
    ${L.remember.map((r) => `<div class="li"><span class="ck">✓</span>${h(r)}</div>`).join('')}
    <div class="nx">Keyingi: ${h(L.next)} · Platformada: ${h(L.nowText)}</div></div>
  </body></html>`;
}

async function build(nums, outDir) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const n of nums) {
    const L = loadLesson(n);
    if (!L) { console.log('skip', n); continue; }
    const dir = path.join(outDir, L.dirName || '');
    fs.mkdirSync(dir, { recursive: true });
    const out = path.join(outDir, `Dars${String(n).padStart(2, '0')}_konspekt.pdf`);
    // 2 sahifaga sig'dirishga harakat: oddiy → ixcham → ixcham + bo'linadigan bloklar
    let buf; let pages; let mode;
    for (mode = 0; mode <= 2; mode++) {
      const tmp = path.join(__dirname, 'build', `.d${n}.html`);
      fs.mkdirSync(path.dirname(tmp), { recursive: true });
      fs.writeFileSync(tmp, html(L, mode));
      await page.goto('file://' + tmp, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      buf = await page.pdf({
        format: 'A4', printBackground: true, preferCSSPageSize: true,
        displayHeaderFooter: true, headerTemplate: '<span></span>',
        footerTemplate: `<div style="width:100%;font-family:Carlito,sans-serif;font-size:7px;color:#6B7280;padding:0 13mm;display:flex;justify-content:space-between"><span>Kholmurodov Academy · General English · ${n}-dars konspekti</span><span class="pageNumber"></span></div>`,
      });
      pages = (buf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
      if (pages <= 2) break;
    }
    fs.writeFileSync(out, buf);
    console.log('pdf', out, `${pages} sahifa`, `rejim ${Math.min(mode, 2)}`);
  }
  await browser.close();
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const outDir = args[0];
  const nums = args.length > 1 ? args.slice(1).map(Number) : meta.lessons.map((l) => l.n);
  build(nums, outDir).catch((e) => { console.error(e); process.exit(1); });
}
module.exports = { build, html };
