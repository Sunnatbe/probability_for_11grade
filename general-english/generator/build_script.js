// Dars ssenariysi (video yozish uchun): 11 sahna — vaqt, slayd, ekranda, ko'rsatma, gapiriladigan matn
const fs = require('fs');
const path = require('path');
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const { toHtml, esc } = require('./lib/markup');
const { loadLesson, meta, pad } = require('./lib/common');
const COURSE = require('./lib/course');

const KATEX_CSS = fs.readFileSync(require.resolve('katex/dist/katex.min.css'), 'utf8')
  .replace(/url\(fonts\//g, `url(file://${path.dirname(require.resolve('katex/dist/katex.min.css'))}/fonts/`);
const FD = path.join(__dirname, 'fonts');
const FONTS = [['regular', 400, 'normal'], ['bold', 700, 'normal'], ['italic', 400, 'italic'], ['bolditalic', 700, 'italic']]
  .map(([f, w, st]) => `@font-face{font-family:'LMR';src:url(file://${FD}/lmroman10-${f}.ttf);font-weight:${w};font-style:${st};}`).join('');

const CSS = FONTS + `
@page { size: A4; margin: 13mm 13mm 15mm 13mm; }
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin: 0; font-family: 'LMR', serif; font-size: 10.2pt; color: #1f2937; line-height: 1.36; }
.sans, .hdr, .meta, .scene .bar, .side { font-family: Carlito, sans-serif; }
.hdr { background: #1B1F3B; color: #fff; border-radius: 7px; padding: 11px 16px 10px; }
.hdr .lbl { color: #F59E0B; font-weight: 700; font-size: 7.6pt; letter-spacing: .4px; }
.hdr h1 { font-family: 'LMR', serif; margin: 2px 0 2px; font-size: 19pt; line-height: 1.1; }
.hdr .en { font-family: 'LMR', serif; font-style: italic; color: #C7CCF5; font-size: 9.6pt; }
.meta { display: grid; grid-template-columns: 1.15fr 1fr; gap: 9px; margin: 10px 0 6px; font-size: 8.8pt; }
.meta .box { background: #EEF0FB; border-radius: 6px; padding: 7px 10px; }
.meta .box b { color: #1B1F3B; font-size: 9pt; display: block; margin-bottom: 2px; }
.meta ul { margin: 0; padding-left: 15px; } .meta li { margin: 1px 0; }
.timeline { display: flex; gap: 2px; margin: 4px 0 10px; font-family: Carlito, sans-serif; font-size: 6.8pt; }
.timeline div { background: #C7CCF5; color: #1B1F3B; border-radius: 3px; padding: 2px 3px; text-align: center; overflow: hidden; white-space: nowrap; }
.scene { border: 1px solid #D9DCF5; border-radius: 7px; margin: 0 0 7px; overflow: hidden; }
.scene .bar { display: flex; justify-content: space-between; background: #1B1F3B; color: #fff; padding: 4px 11px; font-size: 9pt; break-after: avoid; }
.scene .bar .t { color: #F59E0B; font-weight: 700; }
.scene .body { display: grid; grid-template-columns: 31% 69%; }
.side { background: #F8FAFC; border-right: 1px solid #E5E7EB; padding: 7px 9px; font-size: 8.4pt; line-height: 1.3; }
.side .h { font-weight: 700; color: #4F46E5; font-size: 8pt; letter-spacing: .3px; margin: 2px 0 2px; }
.side ul { margin: 0 0 5px; padding-left: 13px; } .side li { margin: 1.5px 0; }
.say { padding: 7px 12px 6px; }
.say .h { font-family: Carlito, sans-serif; font-weight: 700; color: #4F46E5; font-size: 8pt; letter-spacing: .3px; margin-bottom: 2px; }
.say p { margin: 0 0 3.5px; }
.say .q { background: #EEF0FB; border-left: 3px solid #4F46E5; padding: 4px 8px; border-radius: 3px; }
.say .stage { font-family: Carlito, sans-serif; color: #B45309; font-size: 8.6pt; font-style: normal; }
.say ul { margin: 0 0 5px; padding-left: 17px; } .say li { margin: 2px 0; }
.say b { color: #1B1F3B; }
.end { background: #D1FAE5; color: #065F46; border-radius: 6px; padding: 7px 12px; font-size: 9.4pt; break-inside: avoid; }
.katex { font-size: 1.03em; }
`;

const h = toHtml;
const ORD = ['Birinchi', 'Ikkinchi', 'Uchinchi', "To'rtinchi"];
const DUR = [40, 50, 90, 60, 90, 75, 105, 75, 75, 45, 45];
const fmt = (sec) => `${Math.floor(sec / 60)}:${String(Math.round(sec % 60)).padStart(2, '0')}`;
const stripMark = (s) => String(s || '').replace(/\s*[✗✓]\s*$/, '');
const end = (s) => { const t = String(s).trim().replace(/:$/, ''); return /[.!?…»)]$/.test(t) ? t : `${t}.`; };
const step = (m) => (COURSE.mathSteps ? toHtml(`$${m}$`) : h(m));
const stage = (s) => `<span class="stage">[${esc(s)}]</span>`;

function stamps(L) {
  const total = (parseInt(L.video, 10) || 12) * 60 + 30;
  const k = total / DUR.reduce((a, b) => a + b, 0);
  let t = 0;
  return DUR.map((d) => { const a = t; t += d * k; return [fmt(a), fmt(t)]; });
}

function scenes(L) {
  const ex = (e, k) => {
    const intro = ["Nazariya tayyor — endi birinchi misolni birga yechamiz.", "Ikkinchi misolga o'tamiz.", "Va nihoyat, uchinchi misol."][k];
    const last = e.steps.length - 1;
    const steps = e.steps.map(([m, c], i) => {
      const lead = i === 0 ? 'Birinchi qadam' : i === last ? 'Javob' : (i === 1 ? 'Keyingi qadam' : 'Shundan keyin');
      const cm = c && !(i === last && c === 'javob') ? ` — ${h(c)}` : '';
      return `<li><b>${lead}:</b> ${step(m)}${cm}</li>`;
    }).join('');
    return {
      title: `${k + 1}-misol: ${h(e.tag)}`,
      screen: [`${COURSE.taskLabel} va strategiya — chapda`, `${e.steps.length} ta qadam — o'ngda (oxirgisi — javob)`, e.check ? 'Yashil qatorda — tekshiruv' : null],
      actions: ['Savolni ekrandan sekin o\'qing.', '3–5 soniya pauza — o\'quvchi o\'ylab olsin.', 'Har bir qadamni kursor bilan ko\'rsating.', 'Javob qatorini alohida ta\'kidlang.'],
      say: [
        `<p>${intro}</p>`,
        `<p class="q"><b>${COURSE.taskLabel}:</b> ${h(e.q)}</p>`,
        `<p>${stage("5 soniya pauza")} Avval o'zingiz o'ylab ko'ring: nimadan boshlaysiz?</p>`,
        `<p><b>Strategiya:</b> ${h(end(e.strat))}</p>`,
        `<ul>${steps}</ul>`,
        e.check ? `<p>${h(end(e.check))}</p>` : '',
        `<p>${['Ko\'rdingizmi, strategiya bo\'lsa, misol bir necha qadamda yechiladi.', 'Asosiysi — har bir qadamni tekshirib borish.', 'Bu turdagi savollar testda albatta uchraydi — shu ketma-ketlikni eslab qoling.'][k]}</p>`,
      ],
    };
  };

  const tipLive = /desmos/i.test(`${L.tip.title} ${L.tip.short || ''}`);
  const tipSound = /talaffuz|intonatsiya/i.test(`${L.tip.title} ${L.tip.short || ''}`);

  return [
    {
      title: 'Kirish', screen: ['Muqova: dars raqami, mavzu, davomiyligi'],
      actions: ['Kameraga qarab, jilmayib salomlashing.', 'Mavzu nomini aniq va sekin ayting.'],
      say: [
        `<p>Assalomu alaykum, aziz o'quvchilar! Kholmurodov Academy'ning «${esc(COURSE.name)}» kursiga, <b>${L.n}-darsga</b> xush kelibsiz.</p>`,
        `<p>Bugungi mavzu — <b>${h(L.title)}</b>, inglizcha «${h(L.en)}».</p>`,
        `<p>${h(L.hook || '')}</p>`,
        `<p>Dars oxirida ${/«/.test(L.trap.title) ? h(stripMark(L.trap.title)) : `«${h(stripMark(L.trap.title))}»`} degan tuzoqni ko'rib chiqamiz — ko'pchilik aynan shu yerda ball yo'qotadi. Diqqat bilan kuzatib boring!</p>`,
      ],
    },
    {
      title: 'Bu darsda', screen: ['3 ta maqsad kartochkasi'],
      actions: ['Har bir kartochkani navbat bilan kursor bilan ko\'rsating.'],
      say: [
        "<p>Bugungi darsda uchta narsani o'rganamiz.</p>",
        `<ul>${L.goals.map(([t, d], i) => `<li><b>${ORD[i]} — ${h(t)}:</b> ${h(end(d))}</li>`).join('')}</ul>`,
        "<p>Har bir qism uchun misollar va qisqa mashq bor, oxirida esa platformada test ishlaysiz. Boshladik!</p>",
      ],
    },
    {
      title: "Kalit so'zlar", screen: ["8 ta kalit so'z kartochkasi: inglizcha, o'zbekcha, misol"],
      actions: [COURSE.kwAction, 'Bir xil sur\'atda, shoshmasdan o\'qing.'],
      say: [
        `<p>${esc(COURSE.kwIntro)}</p>`,
        `<ul>${L.kw.map(([e, u, x]) => `<li><b>${h(e)}</b> — ${h(u)}. <i>${h(x)}</i></li>`).join('')}</ul>`,
        `<p>${esc(COURSE.kwOutro)}</p>`,
      ],
    },
    {
      title: h(L.core.title), screen: ["4 ta qadam / qoida kartochkasi", 'Pastda — sariq izoh'],
      actions: ['Qadamlarni chapdan o\'ngga ko\'rsating — strelkalar ketma-ketlikni bildiradi.', 'Sariq izohni alohida urg\'u bilan o\'qing.'],
      say: [
        `<p>Endi darsning asosiy qismi — <b>${h(L.core.title)}</b>.${L.core.intro ? ' ' + h(L.core.intro) : ''}</p>`,
        `<ul>${L.core.steps.map(([a, b], i) => `<li><b>${ORD[i]} — ${h(a)}.</b> ${h(end(b))}</li>`).join('')}</ul>`,
        L.core.note ? `<p class="q">${h(end(L.core.note))}</p>` : '',
      ],
    },
    ex(L.ex[0], 0),
    ex(L.ex[1], 1),
    {
      title: h(L.cases.title), screen: ['3 ta rangli kartochka (yashil, pushti, binafsha)'],
      actions: ['Kartochkalarni chapdan o\'ngga navbat bilan ko\'rsating.', 'Har biridagi misolni o\'qing.'],
      say: [
        `<p>Endi <b>${h(L.cases.title)}</b> — uchta holatni solishtiramiz. ${h(L.cases.intro)}</p>`,
        `<ul>${L.cases.items.map((c) => `<li><b>${h(c.t)}</b> (${h(c.en)}): ${h(c.rule)}. Misol: ${h(c.ex)}${c.res ? ` — ${h(c.res)}` : ''}.</li>`).join('')}</ul>`,
        "<p>Bu jadvalni konspektda ham topasiz — test oldidan bir qarab chiqing.</p>",
      ],
    },
    ex(L.ex[2], 2),
    {
      title: 'Tuzoq va maslahat', screen: ['Chapda — tuzoq (sariq)', 'O\'ngda — maslahat (binafsha)'],
      actions: ['Avval tuzoqni, keyin maslahatni ko\'rsating.', tipLive ? 'Imkon bo\'lsa, Desmos oynasini ochib jonli ko\'rsating (30–40 soniya).' : tipSound ? 'Talaffuzni avval sekin, keyin tabiiy tezlikda ayting.' : 'Maslahatni shaxsiy misol bilan to\'ldiring.'],
      say: [
        `<p>Endi ehtiyot bo'ladigan joy — <b>${h(L.trap.title)}</b>.</p>`,
        L.trap.q ? `<p class="q">${h(L.trap.q)}</p>` : '',
        `<p>${h(end(L.trap.body))}</p>`,
        `<p>Va bitta foydali maslahat — <b>${h(L.tip.title)}</b>. ${L.tip.q ? h(end(L.tip.q)) + ' ' : ''}${h(end(L.tip.body))}</p>`,
        `<p>Yana ko'p uchraydigan xatolar — ularni konspektda ham belgilab qo'yganmiz:</p>`,
        `<ul>${L.mistakes.map((m) => `<li>${h(m)}</li>`).join('')}</ul>`,
      ],
    },
    {
      title: "O'zingiz sinab ko'ring", screen: ['4 ta topshiriq (a–d) va pauza belgisi'],
      actions: ['Topshiriqlarni o\'qing va pauza belgisini ko\'rsating.', 'Montajda shu yerda 3 soniyalik sukut qoldiring.'],
      say: [
        "<p>Endi navbat sizda! Videoni pauza qiling va to'rtta topshiriqni daftaringizda bajaring.</p>",
        `<ul>${L.practice.map(([t, nt], i) => `<li><b>${'abcd'[i]})</b> ${h(t)}${nt ? ` <i>(${h(nt)})</i>` : ''}</li>`).join('')}</ul>`,
        `<p>${stage('pauza')} Tayyor bo'lsangiz, videoni davom ettiring — javoblarni birga tekshiramiz.</p>`,
      ],
    },
    {
      title: 'Xulosa', screen: ['Javoblar, 3 ta asosiy fikr, keyingi dars'],
      actions: ['Javoblarni bittalab ko\'rsating.', 'Oxirida kameraga qarab xayrlashing.'],
      say: [
        '<p>Javoblarni tekshiramiz:</p>',
        `<ul>${L.answers.map((a, i) => `<li><b>${'abcd'[i]})</b> ${h(a)}</li>`).join('')}</ul>`,
        "<p>Nechtasi to'g'ri chiqdi? To'rttadan to'rtta bo'lsa — a'lo! Xato bo'lsa, tegishli qismni videoda qayta ko'ring.</p>",
        '<p>Bugungi darsdan uchta asosiy fikr:</p>',
        `<ul>${L.remember.map((r) => `<li>${h(r)}</li>`).join('')}</ul>`,
        `<p>Endi platformaga o'ting va ishlang: <b>${h(L.nowText)}</b>. Keyingi darsda: <b>${h(L.next)}</b>. Ko'rishguncha!</p>`,
      ],
    },
  ];
}

function html(L) {
  const st = stamps(L);
  const sc = scenes(L);
  const slideNames = ['Muqova', 'Bu darsda', "Kalit so'zlar", 'Asosiy qism', '1-misol', '2-misol', '3 holat', '3-misol', 'Tuzoq va maslahat', 'Mashq', 'Xulosa'];
  const list = (arr) => `<ul>${arr.filter(Boolean).map((x) => `<li>${x}</li>`).join('')}</ul>`;
  const body = sc.map((s, i) => `<div class="scene">
    <div class="bar"><span><span class="t">${i + 1}-SAHNA</span> · ${st[i][0]}–${st[i][1]} · ${s.title}</span><span>Slayd ${i + 1}: ${slideNames[i]}</span></div>
    <div class="body"><div class="side"><div class="h">EKRANDA</div>${list(s.screen.filter(Boolean).map((x) => h(x)))}<div class="h">KO'RSATMA</div>${list(s.actions.map((a) => h(a)))}</div>
    <div class="say"><div class="h">GAPIRILADIGAN MATN</div>${s.say.join('')}</div></div></div>`).join('');
  const tl = st.map(([a], i) => `<div style="flex:${DUR[i]}">${i + 1} · ${a}</div>`).join('');
  return `<!doctype html><html lang="uz"><head><meta charset="utf-8"><style>${KATEX_CSS}${CSS}</style></head><body>
  <div class="hdr"><div class="lbl">${COURSE.label} · ${esc(L.moduleLabel)} · ${L.n}-DARS · VIDEO SSENARIYSI</div><h1>${h(L.title)}</h1><div class="en">${h(L.en)}</div></div>
  <div class="meta">
    <div class="box"><b>Dars maqsadi</b>${list(L.goals.map(([t, d]) => `<b style="display:inline;font-size:8.8pt">${h(t)}</b> — ${h(d)}`))}</div>
    <div class="box"><b>Video: ${esc(L.video)} · 11 sahna</b>${list([
      `Taqdimot: ${esc(L.fileBase)}.pptx`, `Konspekt: Dars${pad(L.n)}_konspekt.pdf`, `Platformada: ${h(L.nowText)}`, ...COURSE.prep.map(esc)])}</div>
  </div>
  <div class="timeline">${tl}</div>
  ${body}
  <div class="end"><b>Yozib bo'lgach:</b> videoni ko'rib chiqing (ovoz, slayd almashinuvi), platformaga yuklang va dars testini «${esc(L.meta.bank_topic)}» mavzusidan ulang.</div>
  </body></html>`;
}

async function build(nums, outDir, browser) {
  const own = !browser;
  browser = browser || await chromium.launch();
  const page = await browser.newPage();
  for (const n of nums) {
    const L = loadLesson(n);
    if (!L) continue;
    fs.mkdirSync(outDir, { recursive: true });
    const tmp = path.join(__dirname, 'build', `.s${n}.html`);
    fs.mkdirSync(path.dirname(tmp), { recursive: true });
    fs.writeFileSync(tmp, html(L));
    await page.goto('file://' + tmp, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const out = path.join(outDir, `Dars${pad(n)}_ssenariy.pdf`);
    await page.pdf({
      path: out, format: 'A4', printBackground: true, preferCSSPageSize: true,
      displayHeaderFooter: true, headerTemplate: '<span></span>',
      footerTemplate: `<div style="width:100%;font-family:Carlito,sans-serif;font-size:7px;color:#6B7280;padding:0 13mm;display:flex;justify-content:space-between"><span>Kholmurodov Academy · ${COURSE.short} · ${n}-dars video ssenariysi</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
    });
    console.log('ssenariy', out);
  }
  await page.close();
  if (own) await browser.close();
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const nums = args.length > 1 ? args.slice(1).map(Number) : meta.lessons.map((l) => l.n);
  build(nums, args[0]).catch((e) => { console.error(e); process.exit(1); });
}
module.exports = { build };
