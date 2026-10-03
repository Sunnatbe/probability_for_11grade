// Motion video promptlari: har bir dars videosiga qo'yiladigan animatsiyalar uchun tayyor promptlar
// Ishlatish: node motion/build_motion.js  →  motion/build/Motion_promptlar/...
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'build', 'Motion_promptlar');
const STYLE = 'Style: clean flat 2D motion graphics for an online lesson; deep navy background #1B1F3B; indigo #4F46E5 and amber #F59E0B accents; white and light-lavender #C7CCF5 text; rounded cards with soft shadows; smooth ease-in-out motion; 16:9, 1920x1080, 30 fps; no people, no voiceover, no background music; render all on-screen text exactly as written in quotes.';
const DUR = [40, 50, 90, 60, 90, 75, 105, 75, 75, 45, 45]; // ssenariydagi 11 sahna

const COURSES = [
  {
    key: 'SAT_Math', name: 'SAT Math 750+', label: 'SAT MATH', gen: path.join(__dirname, '..', 'sat-math-750', 'generator'), math: true,
    dirs: { M0: 'M0_Kirish', M1: 'M1_Algebra', M2: 'M2_Advanced_Math', M3: 'M3_Problem_Solving_va_Data_Analysis', M4: 'M4_Geometry_va_Trigonometry', M5: 'M5_Strategiya_va_Mock' },
    motif: {
      M0: 'floating clock, target and calculator icons', M1: 'a faint coordinate grid, straight lines and equals signs',
      M2: 'parabolas, smooth curves and exponent symbols', M3: 'bar charts, scatter dots and percent signs',
      M4: 'triangles, circles, a protractor and angle arcs', M5: 'a stopwatch, a checklist and a trophy',
    },
  },
  {
    key: 'General_English', name: 'General English: A2 → B1', label: 'GENERAL ENGLISH', gen: path.join(__dirname, '..', 'general-english', 'generator'), math: false,
    dirs: { M0: 'M0_Kirish', M1: 'M1_People_and_Daily_Life', M2: 'M2_Past_and_Experiences', M3: 'M3_Future_Plans_and_Work', M4: 'M4_Rules_Advice_and_Conditions', M5: 'M5_Takrorlash_va_Mock' },
    motif: {
      M0: 'speech bubbles, headphones, an open book and a pencil', M1: 'everyday-life icons: a sun, a house, a bus and speech bubbles',
      M2: 'a timeline arrow pointing back, a travel suitcase and a photo album', M3: 'a calendar, a briefcase and a forward arrow',
      M4: 'a traffic light, a lightbulb and a road sign', M5: 'a stopwatch, a checklist and a trophy',
    },
  },
];

const fmt = (sec) => `${Math.floor(sec / 60)}:${String(Math.round(sec % 60)).padStart(2, '0')}`;
function sceneStarts(video) {
  const total = (parseInt(video, 10) || 12) * 60 + 30;
  const k = total / DUR.reduce((a, b) => a + b, 0);
  let t = 0;
  return DUR.map((d) => { const a = t; t += d * k; return fmt(a); });
}
const q = (s) => `"${String(s).replace(/"/g, "'").replace(/\s+/g, ' ').trim()}"`;
const trimEnd = (s) => String(s).trim().replace(/[.:;]$/, '');
const firstSentence = (s) => { const m = String(s).match(/^.*?[.!?](\s|$)/); return (m ? m[0] : String(s)).trim(); };
const boldWords = (s) => (String(s).match(/\*\*([^*]+)\*\*/g) || []).map((w) => w.slice(2, -2));

function promptsFor(C, L, P) {
  const st = sceneStarts(L.video);
  const m = L.meta.module;
  const motif = C.motif[m] + (L.emoji && L.emoji.strip ? ` and these icons: ${L.emoji.strip}` : '');
  const id = (k) => `${C.key === 'SAT_Math' ? 'SAT' : 'ENG'}-${String(L.n).padStart(2, '0')}-P${k}`;
  const ex = L.ex[0];
  const exPlain = (s) => (C.math ? P(`$${s}$`) : P(s));
  const out = [];

  // P1 — intro
  out.push({
    id: id(1), name: 'Intro (dars ochilishi)', at: '0:00', scene: '1-sahna, Slayd 1 (muqova)', dur: 6,
    goal: "Video boshida brendli ochilish: dars raqami va mavzu.",
    texts: [`DARS ${L.n}`, `${C.label} · ${L.moduleLabel}`, P(L.title), P(L.en)],
    prompt: `6-second animated title opener for an online lesson. 0–2 s: ${motif} drift in softly from the edges of a navy background. 2–3.5 s: an indigo circle badge pops in on the right with the text ${q(`DARS ${L.n}`)}; a small amber label slides in at top-left: ${q(`${C.label} · ${L.moduleLabel}`)}. 3.5–5 s: the lesson title types in, large and bold, white: ${q(P(L.title))}; below it fades in a lavender italic subtitle: ${q(P(L.en))}. 5–6 s: hold the final frame still (clean cut point). ${STYLE}`,
  });

  // P2 — asosiy qoida
  const steps = L.core.steps.map(([a, b], i) => `card ${i + 1} ${q(P(a))} with small text ${q(trimEnd(P(b)))}`).join('; ');
  out.push({
    id: id(2), name: "Asosiy qoida animatsiyasi", at: st[3], scene: '4-sahna, Slayd 4 (asosiy qism)', dur: 12,
    goal: `«${P(L.core.title)}» ni vizual ketma-ketlik sifatida ko'rsatish.`,
    texts: [P(L.core.title), ...L.core.steps.map(([a, b]) => `${P(a)} — ${trimEnd(P(b))}`), L.core.note ? trimEnd(P(L.core.note)) : null].filter(Boolean),
    prompt: `12-second explainer animation for the concept ${q(P(L.en))}. Title at top: ${q(P(L.core.title))}. Four numbered white cards with indigo number circles appear one by one from left to right, connected by amber arrows that draw themselves between them: ${steps}. Each card gently scales up when it appears, then settles.${L.core.note ? ` 9–12 s: an amber-bordered banner slides up from the bottom with the key rule: ${q(trimEnd(P(L.core.note)))}, and a checkmark pulses once.` : ''} ${STYLE}`,
  });

  // P3 — yechilgan misol
  const lines = ex.steps.map(([s]) => q(exPlain(s)));
  const last = exPlain(ex.steps[ex.steps.length - 1][0]);
  out.push({
    id: id(3), name: `1-misol animatsiyasi (${P(ex.tag)})`, at: st[4], scene: '5-sahna, Slayd 5 (1-misol)', dur: 15,
    goal: "Yechimni qadamma-qadam «jonli» ko'rsatish — o'quvchi ketma-ketlikni ko'radi.",
    texts: [P(ex.q), ...ex.steps.map(([s]) => exPlain(s)), ex.check ? trimEnd(P(ex.check)) : null].filter(Boolean),
    prompt: C.math
      ? `15-second step-by-step math solution animation. 0–3 s: the problem appears at the top in a navy card with an amber label ${q('SAT SAVOLI')}: ${q(P(ex.q))}. 3–12 s: below it, solution lines appear one at a time, each one morphing smoothly out of the previous line (terms slide to their new positions, cancelled terms fade out): ${lines.join(' → ')}. The final line ${q(last)} gets an amber highlight box and a checkmark pops in. 12–15 s: a small green strip at the bottom shows the check: ${q(trimEnd(P(ex.check || 'Tekshiruv ✓')))}. Use a clean, readable math font. ${STYLE}`
      : `15-second sentence-building animation for an English grammar lesson. 0–3 s: the task appears at the top in a navy card with an amber label ${q('TOPSHIRIQ')}: ${q(P(ex.q))}. 3–12 s: reasoning steps appear one by one as small cards: ${lines.join(' → ')}. In the final sentence ${q(last)}, the key word(s) ${boldWords(ex.steps[ex.steps.length - 1][0]).map(q).join(', ') || q(last)} glow indigo and gently bounce. 12–15 s: a green strip at the bottom shows: ${q(trimEnd(P(ex.check || '✓')))}. ${STYLE}`,
  });

  // P4 — 3 holat
  const cards = L.cases.items.map((c, i) => `${['green', 'pink', 'lavender'][i]} card titled ${q(P(c.t))} with the rule ${q(P(c.rule))} and the example ${q(P(c.ex))}`).join('; ');
  out.push({
    id: id(4), name: `3 holat taqqoslash (${P(L.cases.title)})`, at: st[6], scene: '7-sahna, Slayd 7 (3 holat)', dur: 10,
    goal: "Uch holat orasidagi farqni bir qarashda ko'rsatish.",
    texts: [P(L.cases.title), ...L.cases.items.map((c) => `${P(c.t)}: ${P(c.rule)} — ${P(c.ex)}`)],
    prompt: `10-second comparison animation. Title at top: ${q(P(L.cases.title))}. Three cards flip in one after another (about 2 s each): ${cards}. After all three are visible, they line up side by side and a thin amber outline briefly highlights each card in turn. Clean, minimal, easy to read. ${STYLE}`,
  });

  // P5 — tuzoq
  out.push({
    id: id(5), name: `Tuzoq: ${P(L.trap.title)}`, at: st[8], scene: '9-sahna, Slayd 9 (tuzoq va maslahat)', dur: 8,
    goal: "Ko'p uchraydigan xatoni esda qoladigan qilib ko'rsatish.",
    texts: ['DIQQAT!', P(L.trap.title), L.trap.q ? P(L.trap.q) : null, firstSentence(P(L.trap.body))].filter(Boolean),
    prompt: `8-second "common mistake" warning animation. 0–2 s: an amber warning triangle with "!" drops in and wobbles; the label ${q('DIQQAT!')} and the title ${q(P(L.trap.title))} appear.${L.trap.q ? ` 2–4 s: the tricky example appears in a light card: ${q(P(L.trap.q))}; any part marked ✗ shakes and gets a red cross stamp.` : ''} 4–8 s: the card slides aside and the correct rule slides in with a green checkmark: ${q(firstSentence(P(L.trap.body)))}. ${STYLE}`,
  });

  // P6 — xulosa
  out.push({
    id: id(6), name: 'Xulosa va keyingi dars', at: st[10], scene: '11-sahna, Slayd 11 (xulosa)', dur: 8,
    goal: "Darsni yakunlash: 3 ta asosiy fikr, platformadagi topshiriq, keyingi dars.",
    texts: ['Xulosa', ...L.remember.map((r) => trimEnd(P(r))), `Hozir: platformada ${P(L.nowText)}`, `Keyingi: ${P(L.nextShort)}`],
    prompt: `8-second lesson recap and outro. 0–4 s: the heading ${q('Xulosa')} and three green checkmarks tick in one by one, each followed by a short line: ${L.remember.map((r) => q(trimEnd(P(r)))).join('; ')}. 4–6 s: an indigo bar slides up from the bottom: ${q(`Keyingi: ${P(L.nextShort)}`)}; above it a small amber pill: ${q(`Hozir: platformada ${P(L.nowText)}`)}. 6–8 s: subtle confetti burst, then the Kholmurodov Academy wordmark ${q('Kholmurodov Academy')} fades in at the center and holds. ${STYLE}`,
  });

  // P7 — qo'shimcha: Desmos yoki talaffuz
  const tipText = `${L.tip.title} ${L.tip.short || ''}`;
  if (/desmos/i.test(tipText)) {
    out.push({
      id: id(7), name: `Desmos vizualizatsiyasi (${P(L.tip.title)})`, at: st[8], scene: '9-sahna, maslahat qismi', dur: 10,
      goal: "Desmos usulini grafik animatsiya bilan ko'rsatish (jonli Desmos o'rniga yoki qo'shimcha).",
      texts: [P(L.tip.title), L.tip.q ? P(L.tip.q) : null, firstSentence(P(L.tip.body))].filter(Boolean),
      prompt: `10-second graphing-calculator style animation (in the spirit of Desmos, but no logos). A white coordinate plane with light gridlines fills a rounded card on the navy background. Title: ${q(P(L.tip.title))}. ${L.tip.q ? `A small input panel on the left shows: ${q(P(L.tip.q))}. ` : ''}The graph(s) draw themselves smoothly from left to right in indigo and amber; when the key point appears (intersection, vertex or x-intercept), a pulsing dot marks it and a coordinate label pops up. Caption at the bottom: ${q(firstSentence(P(L.tip.body)))}. ${STYLE}`,
    });
  } else if (/talaffuz|intonatsiya/i.test(tipText)) {
    out.push({
      id: id(7), name: `Talaffuz animatsiyasi (${P(L.tip.title)})`, at: st[8], scene: '9-sahna, maslahat qismi', dur: 10,
      goal: "Talaffuz qoidasini tovush to'lqinlari va urg'u bilan vizual ko'rsatish.",
      texts: [P(L.tip.title), L.tip.q ? P(L.tip.q) : null].filter(Boolean),
      prompt: `10-second pronunciation animation. Title: ${q(P(L.tip.title))}. ${L.tip.q ? `The words / phonetic symbols appear one by one in large type: ${q(P(L.tip.q))}. ` : ''}Under each word an animated sound wave pulses; the stressed part or ending sound is highlighted in amber and enlarged slightly; small arrows show rising or falling intonation where relevant. Caption at the bottom: ${q(firstSentence(P(L.tip.body)))}. Leave silent gaps so the teacher's voice can be laid over in editing. ${STYLE}`,
    });
  }
  for (const p of out) p.prompt = p.prompt.replace(/([.!?✓])"\./g, '$1"');
  return out;
}

function main() {
  fs.rmSync(ROOT, { recursive: true, force: true });
  const index = [];
  for (const C of COURSES) {
    const { loadLesson, meta } = require(path.join(C.gen, 'lib', 'common'));
    const { toPlain } = require(path.join(C.gen, 'lib', 'markup'));
    for (const lm of meta.lessons) {
      const L = loadLesson(lm.n);
      const prompts = promptsFor(C, L, toPlain);
      const base = `${C.key}_${L.fileBase}_motion`;
      const dir = path.join(ROOT, C.key, C.dirs[lm.module]);
      fs.mkdirSync(dir, { recursive: true });
      const sep = '='.repeat(78);
      const lines = [
        `${C.name} — ${L.n}-dars: ${toPlain(L.title)}`,
        `(${toPlain(L.en)}) · ${L.meta.module} · video ${L.video}`,
        `Fayl: ${base}.txt · Promptlar soni: ${prompts.length}`,
        '',
        "Qo'yiladigan vaqtlar ssenariydagi sahnalarga mos (DarsNN_ssenariy.pdf). Yozilgan videoning",
        "haqiqiy vaqtiga montajda moslang. PROMPT qismini to'liq nusxalab, video generatorga bering.",
        '',
      ];
      for (const p of prompts) {
        lines.push(sep, `${p.id} · ${p.name}`, sep,
          `Qayerga: ${p.at} (${p.scene})`, `Davomiyligi: ~${p.dur} soniya`, `Maqsad: ${p.goal}`,
          'Ekrandagi matnlar:', ...p.texts.map((t) => `  • ${t}`), '', 'PROMPT:', p.prompt, '');
        index.push({ course: C.name, lesson: L.n, title: toPlain(L.title), id: p.id, name: p.name, at: p.at, scene: p.scene, dur: p.dur, file: `${C.key}/${C.dirs[lm.module]}/${base}.txt`, prompt: p.prompt });
      }
      fs.writeFileSync(path.join(dir, `${base}.txt`), '﻿' + lines.join('\r\n'));
    }
  }
  fs.writeFileSync(path.join(__dirname, 'build', 'index.json'), JSON.stringify(index, null, 1));
  console.log('promptlar:', index.length);
}

main();
