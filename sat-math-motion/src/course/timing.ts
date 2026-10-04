import type {Lesson, Slide} from './types';

// Pure timing logic (no React/DOM) so the doc generator can share it.

export const FPS = 30;
/** Narration pace: words per second (≈105 words/min) plus a short pause per beat. */
export const WPS = 1.75;
const GAP = 0.6;
const MIN_BEAT = 2.2;
const LEAD_IN = 0.5;
const TAIL = 0.8;

export const wordCount = (s: string) =>
  s
    .replace(/\$[^$]*\$/g, ' x ')
    .replace(/\*\*/g, '')
    .split(/\s+/)
    .filter(Boolean).length;

export const beatSeconds = (say: string, min = MIN_BEAT) => Math.max(min, wordCount(say) / WPS + GAP);

export type Kind = 'cover' | 'goals' | Slide['type'] | 'recap';

export type TimedSlide = {
  kind: Kind;
  index: number; // 1-based slide number
  slide?: Slide;
  say: string[];
  beats: number[]; // beat start times, seconds, slide-relative
  start: number; // seconds from video start
  duration: number; // seconds
};

/** How many reveals (beats after beat 0) a slide needs. */
export const revealsNeeded = (s: Slide): number => {
  switch (s.type) {
    case 'cards':
      return s.cards.length + (s.banner ? 1 : 0);
    case 'formula':
      return s.formulas.length + (s.banner ? 1 : 0);
    case 'example':
      return s.steps.length + 1 + (s.tip ? 1 : 0);
    case 'compare':
      return s.cards.length + (s.banner ? 1 : 0);
    case 'trap':
      return 2;
    case 'graph':
      return s.items.length;
    case 'table':
      return s.rows.length + (s.banner ? 1 : 0);
    case 'custom':
      return s.beats;
  }
};

const timeBeats = (say: string[], firstMin?: number, lastMin?: number) => {
  const beats: number[] = [];
  let t = LEAD_IN;
  say.forEach((line, i) => {
    beats.push(t);
    let d = beatSeconds(line);
    if (i === 0 && firstMin) d = Math.max(d, firstMin);
    if (i === say.length - 1 && lastMin) d = Math.max(d, lastMin);
    t += d;
  });
  return {beats, duration: t + TAIL};
};

export const buildTimeline = (lesson: Lesson): {slides: TimedSlide[]; total: number} => {
  const out: TimedSlide[] = [];
  let at = 0;
  const push = (kind: Kind, say: string[], need: number, slide?: Slide, firstMin?: number, lastMin?: number) => {
    if (say.length < need + 1) {
      throw new Error(
        `Dars ${lesson.n}, slayd ${out.length + 1} (${kind}${slide && 'title' in slide ? `: ${slide.title}` : ''}): ` +
          `${need + 1} ta "say" kerak, ${say.length} ta berilgan`,
      );
    }
    const {beats, duration} = timeBeats(say, firstMin, lastMin);
    // Round to whole frames so sequences line up exactly.
    const dur = Math.round(duration * FPS) / FPS;
    out.push({kind, index: out.length + 1, slide, say, beats, start: at, duration: dur});
    at += dur;
  };

  push('cover', lesson.cover, 1, undefined, 7);
  push('goals', lesson.goalsSay, 5);
  lesson.slides.forEach((s) => push(s.type, s.say, revealsNeeded(s), s));
  push('recap', lesson.recapSay, 5, undefined, undefined, 4);
  return {slides: out, total: at};
};

export const fmtTime = (s: number) => {
  const m = Math.floor(s / 60);
  const ss = Math.floor(s % 60);
  return `${m}:${ss.toString().padStart(2, '0')}`;
};
