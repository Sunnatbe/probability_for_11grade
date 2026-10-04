/** Lists every slide whose narration beats don't match its reveals:  npx tsx scripts/check.tsx */
import {LESSONS} from '../src/course/lessons';
import {revealsNeeded} from '../src/course/timing';

let bad = 0;
for (const l of LESSONS) {
  const check = (name: string, need: number, have: number) => {
    if (have < need + 1) {
      bad++;
      console.log(`Dars ${l.n} · ${name}: kerak ${need + 1}, bor ${have}`);
    }
  };
  check('cover', 1, l.cover.length);
  check('goals', 5, l.goalsSay.length);
  l.slides.forEach((s, i) => check(`${i + 1}. ${s.type} «${'title' in s ? s.title : ''}»`, revealsNeeded(s), s.say.length));
  check('recap', 5, l.recapSay.length);
  if (l.goals.length !== 4) console.log(`Dars ${l.n}: goals = ${l.goals.length}`);
  if (l.recap.length !== 3) console.log(`Dars ${l.n}: recap = ${l.recap.length}`);
}
console.log(bad ? `${bad} ta muammo` : 'OK');
process.exit(bad ? 1 : 0);
