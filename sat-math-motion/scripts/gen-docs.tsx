/**
 * Writes, for every course lesson, the voice-over script (with timecodes that
 * match the rendered video) and the lesson text for the learning platform.
 *
 *   npx tsx scripts/gen-docs.tsx [outDir] [lessonNumbers...]
 */
import fs from 'node:fs';
import path from 'node:path';
import {nextLabel} from '../src/course/catalog';
import {LESSONS} from '../src/course/lessons';
import {buildTimeline, fmtTime, TimedSlide} from '../src/course/timing';
import type {Lesson, Slide} from '../src/course/types';

const outDir = process.argv[2] ?? 'out/course';
const only = process.argv.slice(3).map(Number);
const pad = (n: number) => n.toString().padStart(2, '0');

const plain = (s: string) => s.replace(/\*\*/g, '');

/** Short on-screen cue for beat k of a slide. */
const cue = (t: TimedSlide, k: number, lesson: Lesson): string => {
  const s = t.slide;
  if (t.kind === 'cover') return k === 0 ? 'muqova, «DARS ' + lesson.n + '»' : 'mavzular paydo bo\'ladi';
  if (t.kind === 'goals') return k === 0 ? '«Darsning maqsadi»' : k <= 4 ? `${k}-maqsad` : '«Natija» banneri';
  if (t.kind === 'recap') return ['«Xulosa»', '1-xulosa', '2-xulosa', '3-xulosa', '«Hozir» va «Keyingi»', 'Kholmurodov Academy'][k] ?? '';
  if (!s) return '';
  if (k === 0) return `slayd: «${plain('title' in s && s.title ? s.title : 'Misol')}»`;
  switch (s.type) {
    case 'cards':
      return k <= s.cards.length ? `karta: ${plain(s.cards[k - 1].title)}` : 'banner';
    case 'formula':
      return k <= s.formulas.length ? `formula: ${plain(s.formulas[k - 1].label)}` : 'banner';
    case 'compare':
      return k <= s.cards.length ? `karta: ${plain(s.cards[k - 1].title)}` : 'banner';
    case 'example':
      if (k <= s.steps.length) return `${k}-qadam: $${s.steps[k - 1].m}$`;
      if (k === s.steps.length + 1) return `javob: ${s.answer}`;
      return '«Maslahat» kartasi';
    case 'trap':
      return k === 1 ? `xato javob ✗: ${s.wrong}` : "to'g'ri qoida";
    case 'graph': {
      const it = s.items[k - 1];
      if (!it) return '';
      if (it.kind === 'note') return 'izoh';
      return it.label ? `grafikda: ${it.label}` : `grafikda: ${it.kind}`;
    }
    case 'table':
      return k <= s.rows.length ? `jadval qatori: ${plain(s.rows[k - 1][0])}` : 'banner';
    case 'custom':
      return `${k}-element`;
  }
};

const script = (lesson: Lesson) => {
  const {slides, total} = buildTimeline(lesson);
  const L: string[] = [];
  L.push(`# SAT Math 750+ — ${lesson.n}-dars: ovoz ssenariysi`, '');
  L.push(`**Mavzu:** ${lesson.title} (${lesson.titleEn})  `);
  L.push(`**Video:** \`Dars${pad(lesson.n)}_video.mp4\` · uzunligi ${fmtTime(total)} · 1920×1080 · 30 fps · ovozsiz`, '');
  L.push(
    '**Qanday ishlatish kerak:** har bir blok — videodagi bitta slayd. `[m:ss ▸ ...]` belgisi shu soniyada ekranda nima paydo bo\'lishini ko\'rsatadi; ' +
      "o'sha gapni shu paytdan boshlab ayting. Matn daqiqasiga ≈105 so'z tezlikda o'qilganda vaqtga mos keladi. " +
      "Ovoz uzunroq chiqsa, montajda slayd oxiridagi harakatsiz qismni cho'zing.",
    '',
    '---',
    '',
  );
  slides.forEach((t) => {
    const s = t.slide;
    const name =
      t.kind === 'cover' ? 'Muqova' : t.kind === 'goals' ? 'Darsning maqsadi' : t.kind === 'recap' ? 'Xulosa' : plain(s && 'title' in s && s.title ? s.title : 'Misol');
    L.push(`## ${t.index}-slayd · ${name} — ${fmtTime(t.start)}–${fmtTime(t.start + t.duration)}`, '');
    t.say.forEach((line, k) => {
      L.push(`\`[${fmtTime(t.start + t.beats[k])} ▸ ${cue(t, k, lesson)}]\``);
      L.push(plain(line), '');
    });
    L.push('---', '');
  });
  return L.join('\n');
};

const docSlide = (s: Slide): string[] => {
  const L: string[] = [];
  const title = 'title' in s && s.title ? s.title : 'Misol';
  L.push(`## ${title}`, '');
  switch (s.type) {
    case 'cards':
      s.cards.forEach((c) => L.push(c.text ? `- **${plain(c.title)}** — ${c.text}` : `- **${plain(c.title)}**`));
      if (s.banner) L.push('', `**Muhim:** ${s.banner}`);
      break;
    case 'formula':
      s.formulas.forEach((f) => L.push(`- **${plain(f.label)}:** $${f.tex}$${f.note ? ` — ${f.note}` : ''}`));
      if (s.banner) L.push('', `**Muhim:** ${s.banner}`);
      break;
    case 'compare':
      s.cards.forEach((c) => L.push(`- **${plain(c.title)}:** ${c.rule}${c.example ? ` (masalan: ${c.example})` : ''}`));
      if (s.banner) L.push('', `**Muhim:** ${s.banner}`);
      break;
    case 'example':
      L.push(`**Savol:** ${s.question}`, '');
      if (s.choices) {
        s.choices.forEach((c, i) => L.push(`${'ABCD'[i]}) ${c}  `));
        L.push('');
      }
      L.push('**Yechim:**');
      s.steps.forEach((st, i) => L.push(`${i + 1}. $${st.m}$${st.note ? ` — ${st.note}` : ''}`));
      L.push('', `**Javob:** ${s.answer}`);
      if (s.tip) L.push('', `**Maslahat:** ${s.tip}`);
      break;
    case 'trap':
      L.push(`**Savol:** ${s.question}`, '', `**Xato javob:** ${s.wrong} — ${s.why}`, '', `**To'g'ri:** ${s.right}`);
      break;
    case 'graph':
      s.items.forEach((it) => {
        if (it.note) L.push(`- ${it.note}`);
      });
      break;
    case 'table':
      s.rows.forEach((r) => L.push(`- **${plain(r[0])}:** ${r.slice(1).map((c, i) => `${s.head[i + 1]}: ${c}`).join('; ')}`));
      if (s.banner) L.push('', `**Muhim:** ${s.banner}`);
      break;
    case 'custom':
      L.push(s.doc);
      break;
  }
  L.push('');
  return L;
};

const lessonText = (lesson: Lesson) => {
  const L: string[] = [];
  L.push(`## Darsning maqsadi`, '', 'Bu darsdan keyin siz:');
  lesson.goals.forEach((g) => L.push(`- ${g};`));
  L.push('');
  lesson.slides.forEach((s, i) => {
    const sec = docSlide(s);
    sec[0] = sec[0].replace('## ', `## ${i + 1}. `);
    L.push(...sec);
  });
  L.push('## Xulosa', '');
  lesson.recap.forEach((r) => L.push(`- ${r}`));
  L.push('', `**Hozir:** ${lesson.homework}.`, '', `**Keyingi dars:** ${nextLabel(lesson.n)}`, '');
  return L.join('\n');
};

for (const lesson of LESSONS) {
  if (only.length && !only.includes(lesson.n)) continue;
  const dir = path.join(outDir, `Dars${pad(lesson.n)}`);
  fs.mkdirSync(dir, {recursive: true});
  fs.writeFileSync(path.join(dir, `Dars${pad(lesson.n)}_ovoz_ssenariy.md`), script(lesson));
  fs.writeFileSync(path.join(dir, `Dars${pad(lesson.n)}_dars_matni.md`), lessonText(lesson));
  const {total} = buildTimeline(lesson);
  console.log(`Dars ${pad(lesson.n)}  ${fmtTime(total)}  ${lesson.title}`);
}
