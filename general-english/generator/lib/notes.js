// Har bir slayd uchun spiker matni (video ssenariysi) — dars mazmunidan yig'iladi
const { toPlain } = require('./markup');

const P = (s) => toPlain(s);
const ORD = ['Birinchi', 'Ikkinchi', 'Uchinchi', "To'rtinchi", 'Beshinchi'];
// namunaviy 3-dars vaqt taqsimoti (soniya), video uzunligiga moslab cho'ziladi
const DUR = [40, 50, 90, 60, 90, 75, 105, 75, 75, 45, 45];

const fmt = (sec) => `${Math.floor(sec / 60)}:${String(Math.round(sec % 60)).padStart(2, '0')}`;
const dot = (s) => { const t = s.trim().replace(/:$/, ''); return /[.!?…]$/.test(t) ? t : `${t}.`; };

function exampleNote(e, k) {
  const steps = e.steps.map(([m, c], i) => {
    const mm = P(m);
    if (c === 'javob' || (i === e.steps.length - 1 && !c)) return `Javob: ${dot(mm)}`;
    if (!c) return dot(mm);
    return `${mm} — ${P(c)}.`;
  }).join(' ');
  return `${k + 1}-misol — ${P(e.tag)}. Topshiriqni o'qiymiz: «${P(e.q)}» Strategiya: ${dot(P(e.strat))} ${steps}${e.check ? ' ' + dot(P(e.check)) : ''}${e.say ? ' ' + e.say : ''}`;
}

function notesFor(L) {
  const total = (parseInt(L.video, 10) || 12) * 60 + 30;
  const scale = total / DUR.reduce((a, b) => a + b, 0);
  let t = 0;
  const stamps = DUR.map((d) => { const a = t; t += d * scale; return `[${fmt(a)}–${fmt(t)}]`; });

  const n = [];
  n.push(`Assalomu alaykum! Kholmurodov Academy, General English kursining ${L.n}-darsiga xush kelibsiz. Bugun ${L.moduleSpoken} mavzusi — ${P(L.title)}, inglizcha «${P(L.en)}». ${L.hook || ''}`);
  n.push(`Dars oxirida uchta narsani bilasiz. ${L.goals.map(([a, b], i) => `${ORD[i]} — ${P(a)}: ${dot(P(b))}`).join(' ')}`);
  n.push(`Avval darsning kalit so'zlari va iboralari. ${L.kw.map(([e, u, x]) => `«${P(e)}» — ${P(u)}, masalan: ${P(x).replace(/\.$/, '')}`).join('. ')}. Har bir so'zni men bilan birga ovoz chiqarib takrorlang va lug'at daftaringizga misoli bilan yozing.`);
  n.push(`${P(L.core.title)}. ${L.core.intro ? dot(P(L.core.intro)) + ' ' : ''}${L.core.steps.map(([a, b], i) => `${ORD[i]} — ${P(a)}: ${dot(P(b))}`).join(' ')}${L.core.note ? ' ' + dot(P(L.core.note)) : ''}`);
  n.push(exampleNote(L.ex[0], 0));
  n.push(exampleNote(L.ex[1], 1));
  n.push(`${P(L.cases.title)} ${dot(P(L.cases.intro))} ${L.cases.items.map((c) => `${P(c.t)} — «${P(c.en)}»: ${P(c.rule)}. Masalan, ${P(c.ex)}${c.res ? ', natija: ' + P(c.res) : ''}.`).join(' ')}`);
  n.push(exampleNote(L.ex[2], 2));
  n.push(`Ikki maslahat. Birinchisi — tuzoq: ${P(L.trap.title)}. ${L.trap.q ? P(L.trap.q) + ' ' : ''}${dot(P(L.trap.body))} Ikkinchisi — ${P(L.tip.title)}. ${L.tip.q ? dot(P(L.tip.q)) + ' ' : ''}${dot(P(L.tip.body))} Ko'p uchraydigan xatolar ro'yxati konspektda — ularni albatta o'qib chiqing.`);
  n.push(`Videoni to'xtatib, to'rtta topshiriqni o'zingiz bajaring. ${L.practice.map(([a, b], i) => `${'abcd'[i]}) ${P(a)}${b ? ' — ' + P(b) : ''}`).join('; ')}. Javoblar keyingi slaydda.`);
  const now = `Endi platformada ishlang: ${L.nowText}.`;
  n.push(`Javoblar: ${L.answers.map((a, i) => `${'abcd'[i]}) ${P(a)}`).join('; ')}. Xulosa: ${L.remember.map((r) => P(r).replace(/\.$/, '')).join('; ')}. ${now} Keyingi dars: ${P(L.next)}. Ko'rishguncha!`);

  return n.map((s, i) => `${stamps[i]} ${(L.script && L.script[i]) || s}`.replace(/\s+/g, ' ').trim());
}

module.exports = { notesFor };
