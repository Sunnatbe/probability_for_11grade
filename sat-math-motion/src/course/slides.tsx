import React from 'react';
import {AbsoluteFill, Easing, interpolate, random, useCurrentFrame} from 'remotion';
import {Background, CheckBadge, Pill, TypeIn, prog, useSpring} from '../components';
import {C, MATH_FONT, SHADOW} from '../theme';
import {
  Card as Box,
  IconBolt,
  IconBook,
  IconBulb,
  IconCalc,
  IconChart,
  IconClockFast,
  IconDice,
  IconFlag,
  IconLaptop,
  IconQuestion,
  IconTarget,
  IconTimer,
  NumDot,
  Reveal,
  sec,
  SlideFrame,
} from '../lesson/ui';
import {MathBlock, Tx} from './Tx';
import type {GraphItem, IconName, Lesson, Slide} from './types';
import type {TimedSlide} from './timing';

export type SlideProps = {t: TimedSlide; lesson: Lesson; total: number};

const b = (t: TimedSlide) => (i: number) => t.beats[Math.min(i, t.beats.length - 1)];

const Frame: React.FC<SlideProps & {kicker: string; title: string; children: React.ReactNode}> = ({
  t,
  lesson,
  total,
  kicker,
  title,
  children,
}) => (
  <SlideFrame
    n={t.index}
    total={total}
    kicker={kicker}
    title={<Tx>{title}</Tx>}
    duration={sec(t.duration)}
    footer={`Kholmurodov Academy · SAT Math · Dars ${lesson.n}`}
  >
    {children}
  </SlideFrame>
);

const ICONS: Record<IconName, React.FC<{size?: number; color?: string}>> = {
  timer: IconTimer,
  calc: IconCalc,
  book: IconBook,
  flag: IconFlag,
  laptop: IconLaptop,
  target: IconTarget,
  chart: IconChart,
  clock: IconClockFast,
  dice: IconDice,
  question: IconQuestion,
  bolt: IconBolt,
  bulb: IconBulb,
  check: ({size = 56}) => <CheckSvg size={size} />,
  warn: ({size = 56}) => <WarnSvg size={size} />,
};

const CheckSvg: React.FC<{size?: number}> = ({size = 52}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" style={{flexShrink: 0}}>
    <circle cx="32" cy="32" r="30" fill={C.green} />
    <path d="M18 33 L28 43 L47 22" fill="none" stroke="#fff" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WarnSvg: React.FC<{size?: number}> = ({size = 52}) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{flexShrink: 0}}>
    <path d="M50 8 L94 88 Q96 92 91 92 L9 92 Q4 92 6 88 Z" fill={C.amber} stroke={C.amber} strokeWidth="6" strokeLinejoin="round" />
    <rect x="45" y="34" width="10" height="32" rx="5" fill={C.navy} />
    <circle cx="50" cy="78" r="6" fill={C.navy} />
  </svg>
);

const Banner: React.FC<{at: number; top?: number; color?: string; children: string}> = ({at, top = 860, color = C.amber, children}) => (
  <Reveal at={at} dy={60} style={{position: 'absolute', left: 120, right: 120, top}}>
    <div
      style={{
        background: C.navyCard,
        border: `4px solid ${color}`,
        borderRadius: 24,
        boxShadow: SHADOW,
        padding: '22px 34px',
        display: 'flex',
        alignItems: 'center',
        gap: 26,
        fontSize: 36,
        fontWeight: 700,
        lineHeight: 1.3,
      }}
    >
      <IconTarget size={54} />
      <Tx>{children}</Tx>
    </div>
  </Reveal>
);

// ---------------------------------------------------------------------------
// Cover
const DriftIcons: React.FC = () => {
  const frame = useCurrentFrame();
  const icons: {I: React.FC<{size?: number; color?: string}>; x: number; y: number; s: number; from: [number, number]; c: string; o: number}[] = [
    {I: IconTimer, x: 1380, y: 110, s: 110, from: [300, -260], c: C.lavender, o: 0.28},
    {I: IconTarget, x: 120, y: 900, s: 130, from: [-320, 200], c: C.amber, o: 0.3},
    {I: IconCalc, x: 1720, y: 800, s: 120, from: [320, 220], c: C.lavender, o: 0.26},
    {I: IconChart, x: 980, y: 80, s: 84, from: [0, -260], c: C.indigoLight, o: 0.45},
    {I: IconClockFast, x: 760, y: 940, s: 90, from: [0, 300], c: C.indigoLight, o: 0.4},
  ];
  const amp = interpolate(frame, [40, 150], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <>
      {icons.map(({I, x, y, s, from, c, o}, i) => {
        const p = prog(frame, i * 4, 55, Easing.out(Easing.cubic));
        const fx = Math.sin((frame + i * 20) / 22) * 10 * amp;
        const fy = Math.cos((frame + i * 13) / 26) * 12 * amp;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x - s / 2,
              top: y - s / 2,
              opacity: o * p,
              transform: `translate(${(1 - p) * from[0] + fx}px, ${(1 - p) * from[1] + fy}px)`,
            }}
          >
            <I size={s} color={c} />
          </div>
        );
      })}
    </>
  );
};

export const CoverSlide: React.FC<SlideProps> = ({t, lesson}) => {
  const frame = useCurrentFrame();
  const badge = useSpring(60, {damping: 11, stiffness: 140});
  const label = prog(frame, 66, 20);
  const out = 1 - prog(frame, sec(t.duration) - 10, 10);
  const long = lesson.title.length > 44;
  return (
    <Background>
      <AbsoluteFill style={{opacity: out}}>
        <DriftIcons />
        <div style={{position: 'absolute', left: 140, top: 130, opacity: label, transform: `translateX(${(1 - label) * -60}px)`}}>
          <Pill>{`SAT MATH · ${lesson.module} · ${lesson.moduleName}`}</Pill>
        </div>
        <AbsoluteFill style={{justifyContent: 'center', paddingLeft: 140, paddingRight: 560}}>
          <div style={{fontSize: long ? 76 : 88, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5}}>
            <TypeIn text={lesson.title} start={105} dur={36} />
          </div>
          <Reveal at={128 / 30} dur={0.7} dy={20} style={{marginTop: 30}}>
            <div style={{fontSize: 42, fontStyle: 'italic', color: C.lavender}}>{lesson.titleEn}</div>
          </Reveal>
          <div style={{display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 40}}>
            {lesson.topics.map((tp, i) => (
              <Reveal key={tp} at={t.beats[1] + i * 0.8} dy={18} pop>
                <div
                  style={{
                    fontSize: 27,
                    fontWeight: 600,
                    color: C.lavender,
                    border: '2px solid rgba(199,204,245,0.35)',
                    borderRadius: 999,
                    padding: '9px 22px',
                    background: 'rgba(42,48,96,0.7)',
                  }}
                >
                  {tp}
                </div>
              </Reveal>
            ))}
          </div>
        </AbsoluteFill>
        <div
          style={{
            position: 'absolute',
            left: 1420,
            top: 350,
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: `radial-gradient(circle at 35% 30%, ${C.indigoLight}, ${C.indigo} 70%)`,
            boxShadow: `${SHADOW}, 0 0 0 14px rgba(79,70,229,0.18)`,
            transform: `scale(${badge})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{fontSize: 46, fontWeight: 700, letterSpacing: 10, color: C.lavender}}>DARS</div>
          <div style={{fontSize: 170, fontWeight: 800, lineHeight: 1}}>{lesson.n}</div>
        </div>
      </AbsoluteFill>
    </Background>
  );
};

// ---------------------------------------------------------------------------
// Goals
const GOAL_ICONS = [IconLaptop, IconChart, IconTimer, IconTarget];
export const GoalsSlide: React.FC<SlideProps> = (p) => {
  const {t, lesson} = p;
  const B = b(t);
  return (
    <Frame {...p} kicker="KIRISH" title="Darsning maqsadi">
      <div style={{position: 'absolute', left: 120, right: 120, top: 270, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 34}}>
        {lesson.goals.map((g, i) => {
          const I = GOAL_ICONS[i % 4];
          return (
            <Reveal key={i} at={B(i + 1)} dy={40}>
              <Box style={{display: 'flex', alignItems: 'center', gap: 26, height: 200}}>
                <NumDot n={i + 1} size={70} />
                <div style={{fontSize: 38, fontWeight: 700, lineHeight: 1.25, flex: 1}}>
                  <Tx>{g}</Tx>
                </div>
                <I />
              </Box>
            </Reveal>
          );
        })}
      </div>
      <Banner at={B(5)} top={780}>
        {`Natija: ${lesson.goalsResult}`}
      </Banner>
    </Frame>
  );
};

// ---------------------------------------------------------------------------
// Cards
export const CardsSlide: React.FC<SlideProps> = (p) => {
  const s = p.t.slide as Extract<Slide, {type: 'cards'}>;
  const B = b(p.t);
  const n = s.cards.length;
  const cols = s.cols ?? (n <= 3 ? n : n === 4 ? 2 : 3);
  const rows = Math.ceil(n / cols);
  const big = rows === 1;
  return (
    <Frame {...p} kicker={s.kicker} title={s.title}>
      <div
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          top: big ? 300 : 260,
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: 30,
        }}
      >
        {s.cards.map((c, i) => {
          const I = c.icon ? ICONS[c.icon] : null;
          return (
            <Reveal key={i} at={B(i + 1)} dy={40}>
              <Box style={{minHeight: big ? 380 : rows === 2 ? 250 : 170, padding: big ? '36px 38px' : '26px 32px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
                  {I ? <I size={big ? 60 : 50} /> : <NumDot n={i + 1} size={big ? 62 : 52} />}
                  <div style={{fontSize: big ? 42 : 36, fontWeight: 800, lineHeight: 1.2}}>
                    <Tx>{c.title}</Tx>
                  </div>
                </div>
                {c.text ? (
                  <div style={{fontSize: big ? 34 : 30, fontWeight: 500, lineHeight: 1.38, marginTop: big ? 26 : 16, color: C.lavender}}>
                    <Tx>{c.text}</Tx>
                  </div>
                ) : null}
              </Box>
            </Reveal>
          );
        })}
      </div>
      {s.banner ? <Banner at={B(n + 1)}>{s.banner}</Banner> : null}
    </Frame>
  );
};

// ---------------------------------------------------------------------------
// Formulas
export const FormulaSlide: React.FC<SlideProps> = (p) => {
  const s = p.t.slide as Extract<Slide, {type: 'formula'}>;
  const B = b(p.t);
  const n = s.formulas.length;
  return (
    <Frame {...p} kicker={s.kicker} title={s.title}>
      <div style={{position: 'absolute', left: 120, right: 120, top: 250, display: 'flex', flexDirection: 'column', gap: 26}}>
        {s.formulas.map((f, i) => (
          <Reveal key={i} at={B(i + 1)} dx={-60} dy={0}>
            <div
              style={{
                background: C.white,
                color: C.ink,
                borderRadius: 26,
                boxShadow: SHADOW,
                padding: n > 2 ? '20px 40px' : '30px 44px',
                display: 'flex',
                alignItems: 'center',
                gap: 40,
                borderLeft: `14px solid ${C.amber}`,
              }}
            >
              <div style={{width: 360, flexShrink: 0}}>
                <div style={{fontSize: 30, fontWeight: 800, color: C.indigo}}>
                  <Tx>{f.label}</Tx>
                </div>
                {f.note ? (
                  <div style={{fontSize: 26, fontWeight: 500, color: C.inkSoft, marginTop: 8, lineHeight: 1.3}}>
                    <Tx>{f.note}</Tx>
                  </div>
                ) : null}
              </div>
              <MathBlock tex={f.tex} style={{fontSize: n > 2 ? 54 : 64, flex: 1}} />
            </div>
          </Reveal>
        ))}
      </div>
      {s.banner ? <Banner at={B(n + 1)}>{s.banner}</Banner> : null}
    </Frame>
  );
};

// ---------------------------------------------------------------------------
// Worked example
export const ExampleSlide: React.FC<SlideProps> = (p) => {
  const s = p.t.slide as Extract<Slide, {type: 'example'}>;
  const B = b(p.t);
  const frame = useCurrentFrame();
  const ansAt = B(s.steps.length + 1);
  const chosen = s.choices ? 'ABCD'.indexOf(s.answer.trim()[0]) : -1;
  const hl = prog(frame, sec(ansAt), sec(0.5));
  // Long answer choices get two columns instead of four.
  const wide = (s.choices ?? []).some((c) => c.replace(/\\[a-z]+|[{}$]/g, '').length > 20);
  return (
    <Frame {...p} kicker={s.kicker} title={s.title ?? 'Misol'}>
      <div style={{position: 'absolute', left: 120, right: 120, top: 230, display: 'flex', flexDirection: 'column', gap: 26}}>
        <Reveal at={0.2} dy={-30}>
          <div
            style={{
              background: C.navyCard,
              borderRadius: 26,
              border: '2px solid rgba(199,204,245,0.18)',
              boxShadow: SHADOW,
              padding: '24px 40px 30px',
            }}
          >
            <Pill style={{fontSize: 22}}>{s.label ?? 'SAT SAVOLI'}</Pill>
            <div style={{fontSize: 40, fontWeight: 500, marginTop: 16, lineHeight: 1.35}}>
              <Tx>{s.question}</Tx>
            </div>
            {s.choices ? (
              <div style={{display: 'grid', gridTemplateColumns: `repeat(${wide ? 2 : 4}, 1fr)`, gap: 14, marginTop: 18}}>
                {s.choices.map((c, i) => {
                  const sel = i === chosen;
                  return (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14,
                        borderRadius: 14,
                        padding: '10px 16px',
                        fontSize: 32,
                        border: `3px solid ${sel ? interpolateColor(hl) : 'rgba(199,204,245,0.25)'}`,
                        background: sel ? `rgba(34,197,94,${0.18 * hl})` : 'transparent',
                      }}
                    >
                      <NumDot n={'ABCD'[i]} size={40} color={sel && hl > 0.5 ? C.green : '#5A60A0'} />
                      <Tx>{c}</Tx>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </Reveal>

        <div style={{display: 'flex', gap: 40, alignItems: 'flex-start'}}>
          <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 14}}>
            {s.steps.map((st, i) => (
              <Reveal key={i} at={B(i + 1)} dx={-40} dy={0}>
                <div style={{display: 'flex', alignItems: 'center', gap: 22}}>
                  <NumDot n={i + 1} size={46} color={C.indigo} />
                  <MathBlock tex={st.m} style={{fontSize: 46, color: C.white}} />
                  {st.note ? (
                    <div style={{fontSize: 28, color: C.lavender, fontWeight: 500, marginLeft: 10}}>
                      <Tx>{st.note}</Tx>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            ))}
            <Reveal at={ansAt} pop>
              <div style={{display: 'flex', alignItems: 'center', gap: 22, marginTop: 8}}>
                <div
                  style={{
                    border: `5px solid ${C.amber}`,
                    background: 'rgba(245,158,11,0.14)',
                    borderRadius: 18,
                    padding: '10px 30px',
                    fontSize: 44,
                    fontWeight: 800,
                    color: C.amber,
                  }}
                >
                  Javob: <Tx>{s.answer}</Tx>
                </div>
                <CheckBadge start={sec(ansAt) + 8} size={70} />
              </div>
            </Reveal>
          </div>
          {s.tip ? (
            <Reveal at={B(s.steps.length + 2)} dx={60} dy={0} style={{width: 520}}>
              <Box accent={C.amber}>
                <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                  <IconBulb size={44} />
                  <div style={{fontSize: 30, fontWeight: 800, color: C.amber}}>Maslahat</div>
                </div>
                <div style={{fontSize: 30, fontWeight: 600, lineHeight: 1.38, marginTop: 14}}>
                  <Tx>{s.tip}</Tx>
                </div>
              </Box>
            </Reveal>
          ) : null}
        </div>
      </div>
    </Frame>
  );
};

const interpolateColor = (p: number) => (p > 0.5 ? C.green : 'rgba(199,204,245,0.25)');

// ---------------------------------------------------------------------------
// Compare (coloured cards)
const PALETTE = [
  {bg: C.greenSoft, accent: C.greenDark},
  {bg: C.pinkSoft, accent: C.pinkDark},
  {bg: C.lavender, accent: C.indigo},
  {bg: '#FDE7B0', accent: '#B45309'},
];

export const CompareSlide: React.FC<SlideProps> = (p) => {
  const s = p.t.slide as Extract<Slide, {type: 'compare'}>;
  const B = b(p.t);
  const frame = useCurrentFrame();
  const n = s.cards.length;
  return (
    <Frame {...p} kicker={s.kicker} title={s.title}>
      <div style={{position: 'absolute', left: 120, right: 120, top: 270, display: 'grid', gridTemplateColumns: `repeat(${n}, 1fr)`, gap: 36}}>
        {s.cards.map((c, i) => {
          const flip = prog(frame, sec(B(i + 1)), 22, Easing.out(Easing.back(1.2)));
          const col = PALETTE[i % PALETTE.length];
          return (
            <div key={i} style={{perspective: 1400, opacity: flip > 0 ? 1 : 0}}>
              <div
                style={{
                  transform: `rotateY(${(1 - flip) * 90}deg)`,
                  background: col.bg,
                  color: C.ink,
                  borderRadius: 30,
                  boxShadow: SHADOW,
                  padding: '38px 40px',
                  minHeight: 480,
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{width: 64, height: 10, borderRadius: 5, background: col.accent}} />
                <div style={{fontSize: 46, fontWeight: 800, marginTop: 24, color: col.accent, lineHeight: 1.15}}>
                  <Tx>{c.title}</Tx>
                </div>
                <div style={{fontSize: 36, fontWeight: 700, marginTop: 26, lineHeight: 1.35}}>
                  <Tx>{c.rule}</Tx>
                </div>
                <div style={{flex: 1}} />
                {c.example ? (
                  <div style={{fontSize: 30, fontWeight: 500, color: C.inkSoft, background: 'rgba(255,255,255,0.65)', borderRadius: 16, padding: '16px 20px', marginTop: 20}}>
                    <Tx>{c.example}</Tx>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      {s.banner ? <Banner at={B(n + 1)} top={800}>{s.banner}</Banner> : null}
    </Frame>
  );
};

// ---------------------------------------------------------------------------
// Trap
export const TrapSlide: React.FC<SlideProps> = (p) => {
  const s = p.t.slide as Extract<Slide, {type: 'trap'}>;
  const B = b(p.t);
  const frame = useCurrentFrame();
  const drop = useSpring(0, {damping: 9, stiffness: 140});
  const wobble = Math.sin(frame / 2.4) * 9 * interpolate(frame, [10, 50], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const stampStart = sec(B(1)) + 15;
  const stamp = useSpring(stampStart, {damping: 10, stiffness: 220});
  const stampO = prog(frame, stampStart, 4, Easing.linear);
  const out = 1 - prog(frame, sec(p.t.duration) - 10, 10);
  return (
    <Background>
      <AbsoluteFill style={{opacity: Math.min(out, prog(frame, 0, 12))}}>
        <div style={{position: 'absolute', top: 70, left: 120, display: 'flex', alignItems: 'center', gap: 32}}>
          <div style={{transform: `translateY(${(1 - drop) * -300}px) rotate(${wobble}deg)`, transformOrigin: '50% 90%'}}>
            <WarnSvg size={130} />
          </div>
          <div>
            <div style={{fontSize: 36, fontWeight: 800, color: C.amber, letterSpacing: 8}}>DIQQAT! TUZOQ</div>
            <div style={{fontSize: 64, fontWeight: 800, letterSpacing: -1}}>
              <Tx>{s.title}</Tx>
            </div>
          </div>
        </div>

        <Reveal at={0.5} dy={40} style={{position: 'absolute', left: 120, top: 300, width: 1000}}>
          <div style={{background: '#F4F5FF', color: C.ink, borderRadius: 28, boxShadow: SHADOW, padding: '36px 44px'}}>
            <div style={{fontSize: 40, fontWeight: 600, lineHeight: 1.35}}>
              <Tx>{s.question}</Tx>
            </div>
            <Reveal at={B(1)} dy={10} style={{marginTop: 30}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
                <span style={{fontSize: 30, fontWeight: 700, color: C.inkSoft}}>Ko'p uchraydigan javob:</span>
                <span style={{position: 'relative', display: 'inline-block', fontSize: 50, color: C.red}}>
                  <Tx>{s.wrong}</Tx>
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    style={{
                      position: 'absolute',
                      left: '-10%',
                      top: '-15%',
                      width: '120%',
                      height: '130%',
                      overflow: 'visible',
                      transform: `scale(${2.2 - 1.2 * stamp}) rotate(-6deg)`,
                      opacity: stampO,
                    }}
                  >
                    <path d="M6 10 L94 90 M94 10 L6 90" stroke={C.red} strokeWidth={9} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  </svg>
                </span>
              </div>
              <div style={{fontSize: 30, fontWeight: 500, color: C.inkSoft, marginTop: 18, lineHeight: 1.35, opacity: stampO}}>
                <Tx>{s.why}</Tx>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <Reveal at={B(2)} dx={300} dy={0} style={{position: 'absolute', left: 1170, top: 300, width: 630}}>
          <div style={{background: C.navyCard, border: `4px solid ${C.green}`, borderRadius: 28, boxShadow: SHADOW, padding: '38px 40px'}}>
            <CheckBadge start={sec(B(2)) + 10} size={80} />
            <div style={{fontSize: 40, fontWeight: 700, lineHeight: 1.35, marginTop: 24}}>
              <Tx>{s.right}</Tx>
            </div>
          </div>
        </Reveal>
        <div style={{position: 'absolute', left: 120, right: 120, bottom: 34, display: 'flex', justifyContent: 'space-between', fontSize: 22, fontWeight: 600, color: 'rgba(199,204,245,0.55)'}}>
          <span>{`Kholmurodov Academy · SAT Math · Dars ${p.lesson.n}`}</span>
          <span>
            {p.t.index} / {p.total}
          </span>
        </div>
      </AbsoluteFill>
    </Background>
  );
};

// ---------------------------------------------------------------------------
// Graph
const GW = 880;
const GH = 720;
const GRAPH_COLORS = [C.amber, C.green, C.pink, C.indigoLight, C.lavender];

export const GraphSlide: React.FC<SlideProps> = (p) => {
  const s = p.t.slide as Extract<Slide, {type: 'graph'}>;
  const B = b(p.t);
  const frame = useCurrentFrame();
  const [x0, x1] = s.x;
  const [y0, y1] = s.y;
  const X = (x: number) => ((x - x0) / (x1 - x0)) * GW;
  const Y = (y: number) => GH - ((y - y0) / (y1 - y0)) * GH;
  // Pick a "nice" grid step giving at most ~12 grid lines.
  const step = (span: number) => [0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000].find((st) => span / st <= 12) ?? 1000;
  const xs = step(x1 - x0);
  const ys = step(y1 - y0);
  const ticksX: number[] = [];
  for (let v = Math.ceil(x0 / xs) * xs; v <= x1; v += xs) ticksX.push(v);
  const ticksY: number[] = [];
  for (let v = Math.ceil(y0 / ys) * ys; v <= y1; v += ys) ticksY.push(v);
  const axesIn = prog(frame, 6, 18);
  let colorIdx = 0;

  const renderItem = (it: GraphItem, i: number) => {
    const at = sec(B(i + 1));
    const pr = prog(frame, at, sec(1.2), Easing.inOut(Easing.quad));
    if (it.kind === 'note') return null;
    const color = ('color' in it && it.color) || GRAPH_COLORS[colorIdx++ % GRAPH_COLORS.length];
    if (it.kind === 'fn') {
      const [a, z] = it.domain ?? [x0, x1];
      const pts: string[] = [];
      const N = 240;
      let pen = false;
      for (let k = 0; k <= N; k++) {
        const x = a + ((z - a) * k) / N;
        const y = it.f(x);
        if (!Number.isFinite(y) || y < y0 - (y1 - y0) || y > y1 + (y1 - y0)) {
          pen = false;
          continue;
        }
        pts.push(`${pen ? 'L' : 'M'}${X(x).toFixed(1)} ${Y(y).toFixed(1)}`);
        pen = true;
      }
      return (
        <g key={i}>
          <path d={pts.join(' ')} fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - pr} />
        </g>
      );
    }
    if (it.kind === 'region') {
      const N = 160;
      const pts: string[] = [];
      for (let k = 0; k <= N; k++) {
        const x = x0 + ((x1 - x0) * k) / N;
        const y = Math.max(y0 - 1, Math.min(y1 + 1, it.f(x)));
        pts.push(`${k ? 'L' : 'M'}${X(x).toFixed(1)} ${Y(y).toFixed(1)}`);
      }
      const edge = it.above ? -10 : GH + 10;
      const area = `${pts.join(' ')} L${GW + 10} ${edge} L-10 ${edge} Z`;
      const fo = prog(frame, at + 10, sec(0.8));
      return (
        <g key={i}>
          <path d={area} fill={color} opacity={0.22 * fo} />
          <path
            d={pts.join(' ')}
            fill="none"
            stroke={color}
            strokeWidth={5}
            strokeDasharray={it.dashed ? '16 12' : undefined}
            opacity={pr > 0 ? 1 : 0}
            style={{clipPath: `inset(0 ${(1 - pr) * 100}% 0 0)`}}
          />
        </g>
      );
    }
    if (it.kind === 'points') {
      return (
        <g key={i}>
          {it.pts.map(([px, py], k) => {
            const sc = prog(frame, at + k * 3, 10, Easing.out(Easing.back(2)));
            return <circle key={k} cx={X(px)} cy={Y(py)} r={10 * sc} fill={color} stroke={C.navy} strokeWidth={3} />;
          })}
        </g>
      );
    }
    if (it.kind === 'point') {
      const sc = prog(frame, at, 12, Easing.out(Easing.back(2)));
      return (
        <g key={i} transform={`translate(${X(it.x)} ${Y(it.y)}) scale(${sc})`}>
          <circle r={11} fill={color} stroke={C.navy} strokeWidth={4} />
        </g>
      );
    }
    if (it.kind === 'circle') {
      return (
        <ellipse
          key={i}
          cx={X(it.h)}
          cy={Y(it.k)}
          rx={(it.r / (x1 - x0)) * GW}
          ry={(it.r / (y1 - y0)) * GH}
          fill="none"
          stroke={color}
          strokeWidth={6}
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - pr}
        />
      );
    }
    return (
      <line
        key={i}
        x1={X(it.from[0])}
        y1={Y(it.from[1])}
        x2={X(it.from[0] + (it.to[0] - it.from[0]) * pr)}
        y2={Y(it.from[1] + (it.to[1] - it.from[1]) * pr)}
        stroke={color}
        strokeWidth={5}
        strokeDasharray={it.dashed ? '14 12' : undefined}
        strokeLinecap="round"
      />
    );
  };

  // Labels for points/curves (HTML so KaTeX works)
  colorIdx = 0;
  const labels = s.items.map((it, i) => {
    if (it.kind === 'note' || !('label' in it) || !it.label) {
      if (it.kind !== 'note') colorIdx++;
      return null;
    }
    const color = it.color || GRAPH_COLORS[colorIdx++ % GRAPH_COLORS.length];
    let lx = 0;
    let ly = 0;
    if (it.kind === 'point') {
      lx = X(it.x) + 18;
      ly = Y(it.y) - 52;
    } else if (it.kind === 'fn' || it.kind === 'region') {
      const [a, z] = it.kind === 'fn' && it.domain ? it.domain : [x0, x1];
      // place near the right end where the curve is still inside the plot
      let xl = z;
      for (let k = 0; k <= 60; k++) {
        const x = z - ((z - a) * k) / 60;
        const y = it.f(x);
        // inside the plot with some margin from the top/bottom edges
        if (y >= y0 + (y1 - y0) * 0.1 && y <= y1 - (y1 - y0) * 0.12) {
          xl = x;
          break;
        }
      }
      lx = Math.max(10, Math.min(X(xl) + 14, GW - 300));
      ly = Math.max(10, Math.min(GH - 60, Y(it.f(xl)) - 30));
    } else if (it.kind === 'circle') {
      lx = X(it.h + it.r * 0.72) + 10;
      ly = Y(it.k + it.r * 0.72) - 50;
    } else if (it.kind === 'segment') {
      lx = (X(it.from[0]) + X(it.to[0])) / 2 + 12;
      ly = (Y(it.from[1]) + Y(it.to[1])) / 2 - 50;
    }
    return (
      <Reveal key={`l${i}`} at={B(i + 1) + 0.8} dy={8} style={{position: 'absolute', left: lx, top: ly}}>
        <div style={{fontSize: 30, fontWeight: 700, color, background: 'rgba(27,31,59,0.82)', borderRadius: 10, padding: '2px 10px', whiteSpace: 'nowrap'}}>
          <Tx>{it.label}</Tx>
        </div>
      </Reveal>
    );
  });

  return (
    <Frame {...p} kicker={s.kicker} title={s.title}>
      <div style={{position: 'absolute', left: 150, top: 240, width: GW, height: GH, opacity: axesIn}}>
        <svg width={GW} height={GH} style={{position: 'absolute', overflow: 'visible'}}>
          <rect width={GW} height={GH} rx={18} fill="rgba(42,48,96,0.55)" />
          {ticksX.map((v) => (
            <line key={`gx${v}`} x1={X(v)} x2={X(v)} y1={0} y2={GH} stroke="rgba(199,204,245,0.09)" strokeWidth={2} />
          ))}
          {ticksY.map((v) => (
            <line key={`gy${v}`} y1={Y(v)} y2={Y(v)} x1={0} x2={GW} stroke="rgba(199,204,245,0.09)" strokeWidth={2} />
          ))}
          {x0 <= 0 && x1 >= 0 ? <line x1={X(0)} x2={X(0)} y1={0} y2={GH} stroke={C.lavender} strokeWidth={3} /> : null}
          {y0 <= 0 && y1 >= 0 ? <line y1={Y(0)} y2={Y(0)} x1={0} x2={GW} stroke={C.lavender} strokeWidth={3} /> : null}
          {ticksX
            .filter((v) => v !== 0)
            .map((v) => (
              <text key={`tx${v}`} x={X(v)} y={Math.min(GH - 8, Math.max(24, Y(0) + 30))} fill={C.lavender} fontSize={22} textAnchor="middle" fontFamily="Inter">
                {v}
              </text>
            ))}
          {ticksY
            .filter((v) => v !== 0)
            .map((v) => (
              <text key={`ty${v}`} x={Math.max(26, Math.min(GW - 10, X(0) - 14))} y={Y(v) + 8} fill={C.lavender} fontSize={22} textAnchor="end" fontFamily="Inter">
                {v}
              </text>
            ))}
          <defs>
            <clipPath id={`plot${p.t.index}`}>
              <rect width={GW} height={GH} rx={18} />
            </clipPath>
          </defs>
          <g clipPath={`url(#plot${p.t.index})`}>{s.items.map(renderItem)}</g>
        </svg>
        {labels}
      </div>
      <div style={{position: 'absolute', left: 1100, right: 120, top: 250, display: 'flex', flexDirection: 'column', gap: 18}}>
        {s.items.map((it, i) =>
          'note' in it && it.note ? (
            <Reveal key={i} at={B(i + 1)} dx={40} dy={0}>
              <Box style={{padding: '20px 26px'}}>
                <div style={{fontSize: 30, fontWeight: 600, lineHeight: 1.35}}>
                  <Tx>{it.note}</Tx>
                </div>
              </Box>
            </Reveal>
          ) : null,
        )}
      </div>
    </Frame>
  );
};

// ---------------------------------------------------------------------------
// Table
export const TableSlide: React.FC<SlideProps> = (p) => {
  const s = p.t.slide as Extract<Slide, {type: 'table'}>;
  const B = b(p.t);
  const cols = s.head.length;
  const cell = (txt: string, head: boolean, first: boolean): React.ReactNode => (
    <div
      style={{
        padding: '18px 22px',
        fontSize: head ? 30 : 34,
        fontWeight: head || first ? 800 : 500,
        color: head ? C.ink : C.white,
        background: head ? C.lavender : first ? 'rgba(79,70,229,0.25)' : 'transparent',
        textAlign: first ? 'left' : 'center',
        borderBottom: '2px solid rgba(199,204,245,0.15)',
      }}
    >
      <Tx>{txt}</Tx>
    </div>
  );
  return (
    <Frame {...p} kicker={s.kicker} title={s.title}>
      <Reveal at={0.3} style={{position: 'absolute', left: 120, right: 120, top: 260}}>
        <div style={{background: C.navyCard, borderRadius: 24, overflow: 'hidden', boxShadow: SHADOW}}>
          <div style={{display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`}}>
            {s.head.map((h, i) => (
              <React.Fragment key={i}>{cell(h, true, i === 0)}</React.Fragment>
            ))}
          </div>
          {s.rows.map((r, ri) => (
            <Reveal key={ri} at={B(ri + 1)} dx={-30} dy={0}>
              <div style={{display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`}}>
                {r.map((c, ci) => (
                  <React.Fragment key={ci}>{cell(c, false, ci === 0)}</React.Fragment>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
      {s.banner ? <Banner at={B(s.rows.length + 1)}>{s.banner}</Banner> : null}
    </Frame>
  );
};

// ---------------------------------------------------------------------------
// Custom
export const CustomSlide: React.FC<SlideProps> = (p) => {
  const s = p.t.slide as Extract<Slide, {type: 'custom'}>;
  return (
    <Frame {...p} kicker={s.kicker} title={s.title}>
      {s.render(b(p.t))}
    </Frame>
  );
};

// ---------------------------------------------------------------------------
// Recap / outro
const CONFETTI = [C.amber, C.indigoLight, C.lavender, C.green, C.pink, C.white];
const Confetti: React.FC<{start: number}> = ({start}) => {
  const frame = useCurrentFrame();
  const t = frame - start;
  if (t < 0 || t > 50) return null;
  return (
    <>
      {Array.from({length: 70}).map((_, i) => {
        const angle = random(`a${i}`) * Math.PI * 2;
        const speed = 14 + random(`s${i}`) * 16;
        const drag = (1 - Math.pow(0.93, t)) / 0.07;
        const x = 960 + Math.cos(angle) * speed * drag;
        const y = 470 + (Math.sin(angle) * speed - 8) * drag + 0.175 * t * t;
        const size = 10 + random(`z${i}`) * 12;
        const o = interpolate(t, [0, 4, 32, 50], [0, 1, 0.9, 0], {extrapolateRight: 'clamp'});
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: size,
              height: size * 0.5,
              borderRadius: 2,
              background: CONFETTI[i % CONFETTI.length],
              opacity: o,
              transform: `rotate(${random(`r${i}`) * 360 + t * (random(`w${i}`) * 20 - 10)}deg)`,
            }}
          />
        );
      })}
    </>
  );
};

export const RecapSlide: React.FC<SlideProps & {next: string}> = ({t, lesson, next}) => {
  const frame = useCurrentFrame();
  const B = b(t);
  const barAt = sec(B(4));
  const bar = prog(frame, barAt, 22, Easing.out(Easing.cubic));
  const pill = prog(frame, barAt + 18, 18, Easing.out(Easing.back(1.4)));
  const markAt = sec(B(5));
  const recapOut = prog(frame, markAt - 6, 20);
  const mark = prog(frame, markAt + 4, 26);
  return (
    <Background>
      <AbsoluteFill style={{opacity: prog(frame, 0, 12)}}>
        <div
          style={{
            position: 'absolute',
            left: 200,
            right: 200,
            top: 90,
            opacity: 1 - recapOut,
            transform: `scale(${1 - 0.06 * recapOut})`,
            filter: `blur(${recapOut * 6}px)`,
          }}
        >
          <Reveal at={0.2}>
            <div style={{fontSize: 80, fontWeight: 800, letterSpacing: -1}}>Xulosa</div>
            <div style={{width: 110, height: 8, borderRadius: 4, background: C.amber, marginTop: 18}} />
          </Reveal>
          <div style={{marginTop: 44, display: 'flex', flexDirection: 'column', gap: 30}}>
            {lesson.recap.map((r, i) => (
              <div key={i} style={{display: 'flex', alignItems: 'center', gap: 30}}>
                <CheckBadge start={sec(B(i + 1))} size={64} />
                <Reveal at={B(i + 1) + 0.2} dy={0}>
                  <div style={{fontSize: 40, fontWeight: 600, lineHeight: 1.3}}>
                    <Tx>{r}</Tx>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
        <div style={{position: 'absolute', left: 0, right: 0, bottom: 210, display: 'flex', justifyContent: 'center', opacity: pill, transform: `translateY(${(1 - pill) * 30}px) scale(${0.8 + 0.2 * pill})`}}>
          <div style={{background: C.amber, color: C.ink, fontSize: 34, fontWeight: 800, padding: '14px 34px', borderRadius: 999, boxShadow: SHADOW, maxWidth: 1600, textAlign: 'center'}}>
            Hozir: <Tx>{lesson.homework}</Tx>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 170,
            background: C.indigo,
            boxShadow: '0 -14px 40px rgba(5,8,30,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `translateY(${(1 - bar) * 180}px)`,
            fontSize: 44,
            fontWeight: 700,
            padding: '0 80px',
            textAlign: 'center',
          }}
        >
          <span style={{color: C.amberSoft, marginRight: 14}}>Keyingi:</span> {next}
        </div>
        <Confetti start={markAt} />
        <div style={{position: 'absolute', left: 0, right: 0, top: 330, textAlign: 'center', opacity: mark, transform: `scale(${0.92 + 0.08 * mark})`}}>
          <div style={{fontSize: 118, fontWeight: 800, letterSpacing: -2}}>
            Kholmurodov <span style={{color: C.amber}}>Academy</span>
          </div>
          <div style={{width: 160 * mark, height: 8, borderRadius: 4, background: C.indigoLight, margin: '26px auto 0'}} />
        </div>
      </AbsoluteFill>
    </Background>
  );
};
