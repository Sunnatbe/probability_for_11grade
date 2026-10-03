import React, {useEffect, useState} from 'react';
import {continueRender, delayRender, Easing, interpolate, useCurrentFrame} from 'remotion';
import {measureText} from '@remotion/layout-utils';
import {Background, CheckBadge, FadeUp, Pill, prog} from '../components';
import {C, FONT, MATH_FONT, SHADOW, waitForFonts} from '../theme';

const MATH_SIZE = 92;

type Tok = {key: string; text: string; italic?: boolean; tight?: boolean};

// Each line of the solution; tokens sharing a key travel from the previous line into the next.
const LINES: Tok[][] = [
  [
    {key: 'c', text: '2'},
    {key: 'x', text: 'x', italic: true, tight: true},
    {key: 'plus', text: '+'},
    {key: 'three', text: '3'},
    {key: 'eq', text: '='},
    {key: 'rhs', text: '11'},
  ],
  [
    {key: 'c', text: '2'},
    {key: 'x', text: 'x', italic: true, tight: true},
    {key: 'eq', text: '='},
    {key: 'rhs', text: '8'},
  ],
  [
    {key: 'x', text: 'x', italic: true},
    {key: 'eq', text: '='},
    {key: 'rhs', text: '4'},
  ],
];

const ROW_Y = [400, 540, 680];
const CENTER_X = 960;
const GAP = MATH_SIZE * 0.32;
const TIGHT_GAP = MATH_SIZE * 0.04;

const width = (t: Tok) =>
  measureText({
    text: t.text,
    fontFamily: MATH_FONT,
    fontSize: MATH_SIZE,
    fontWeight: '400',
    additionalStyles: t.italic ? {fontStyle: 'italic'} : undefined,
  }).width;

/** x position (left edge) of each token for a centered line. */
const layout = (line: Tok[]) => {
  const ws = line.map(width);
  const gaps = line.map((t, i) => (i === 0 ? 0 : t.tight ? TIGHT_GAP : GAP));
  const total = ws.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
  let x = CENTER_X - total / 2;
  const out: Record<string, {x: number; w: number}> = {};
  line.forEach((t, i) => {
    x += gaps[i];
    out[t.key] = {x, w: ws[i]};
    x += ws[i];
  });
  return {pos: out, left: CENTER_X - total / 2, total};
};

// Timeline (frames @30fps)
const T = {
  line0In: 90,
  cancel0: 125, // "+ 3" fades out on line 0
  morph1: 150, // line 1 slides out of line 0
  cancel1: 215, // coefficient "2" fades out on line 1
  morph2: 240, // line 2 slides out of line 1
  highlight: 300,
  check: 312,
  strip: 360,
};
const MORPH = 42;

const Glyph: React.FC<{t: Tok; x: number; y: number; opacity: number; color?: string; strike?: number}> = ({
  t,
  x,
  y,
  opacity,
  color = C.white,
  strike = 0,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y - MATH_SIZE * 0.62,
      fontFamily: MATH_FONT,
      fontSize: MATH_SIZE,
      fontStyle: t.italic ? 'italic' : 'normal',
      lineHeight: 1.24,
      whiteSpace: 'pre',
      opacity,
      color,
    }}
  >
    {t.text}
    {strike > 0 ? (
      <div
        style={{
          position: 'absolute',
          left: -6,
          top: '52%',
          height: 6,
          borderRadius: 3,
          width: `calc(${strike * 100}% + 12px)`,
          background: C.red,
        }}
      />
    ) : null}
  </div>
);

const MathRows: React.FC = () => {
  const frame = useCurrentFrame();
  const L = LINES.map(layout);
  const nodes: React.ReactNode[] = [];

  LINES.forEach((line, li) => {
    const morphStart = li === 0 ? T.line0In : li === 1 ? T.morph1 : T.morph2;
    const cancelStart = li === 0 ? T.cancel0 : li === 1 ? T.cancel1 : Infinity;
    const cancelKeys = li === 0 ? ['plus', 'three'] : li === 1 ? ['c'] : [];
    const prev = li > 0 ? LINES[li - 1] : null;
    const prevL = li > 0 ? L[li - 1] : null;
    const p = prog(frame, morphStart, li === 0 ? 20 : MORPH);
    if (frame < morphStart) return;

    // Older lines dim slightly once the next line takes focus.
    const nextStart = li === 0 ? T.morph1 : li === 1 ? T.morph2 : Infinity;
    const dim = Number.isFinite(nextStart)
      ? interpolate(frame, [nextStart + 10, nextStart + MORPH], [1, 0.55], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        })
      : 1;

    line.forEach((t) => {
      const end = L[li].pos[t.key];
      const from = prev && prevL ? prevL.pos[t.key] : undefined;
      const prevTok = prev?.find((q) => q.key === t.key);
      const isCancel = cancelKeys.includes(t.key);
      const cp = isCancel ? prog(frame, cancelStart, 22) : 0;
      const tokOpacity = (isCancel ? 1 - 0.75 * cp : 1) * dim;
      const color = isCancel && cp > 0 ? C.red : C.white;
      const strike = isCancel ? prog(frame, cancelStart, 14) : 0;

      if (li === 0) {
        nodes.push(
          <Glyph
            key={`${li}-${t.key}`}
            t={t}
            x={end.x}
            y={ROW_Y[0] + (1 - p) * 30}
            opacity={p * tokOpacity}
            color={color}
            strike={strike}
          />,
        );
        return;
      }

      if (from && prevTok) {
        // Travels from the previous line; if its text changes, cross-fade old → new mid-flight.
        const x = interpolate(p, [0, 1], [from.x, end.x]);
        const y = interpolate(p, [0, 1], [ROW_Y[li - 1], ROW_Y[li]]);
        if (prevTok.text !== t.text) {
          const swap = interpolate(p, [0.25, 0.75], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
          nodes.push(<Glyph key={`${li}-${t.key}-old`} t={prevTok} x={x} y={y} opacity={(1 - swap) * dim} />);
          nodes.push(
            <Glyph
              key={`${li}-${t.key}`}
              t={t}
              x={x}
              y={y}
              opacity={swap * dim}
              color={li === 2 ? C.amber : C.white}
            />,
          );
        } else {
          nodes.push(
            <Glyph key={`${li}-${t.key}`} t={t} x={x} y={y} opacity={tokOpacity} color={color} strike={strike} />,
          );
        }
      } else {
        nodes.push(<Glyph key={`${li}-${t.key}`} t={t} x={end.x} y={ROW_Y[li]} opacity={p * tokOpacity} />);
      }
    });
  });

  // Amber highlight box around the final line
  const hb = prog(frame, T.highlight, 16);
  const last = L[2];
  const padX = 46;
  nodes.push(
    <div
      key="hl"
      style={{
        position: 'absolute',
        left: last.left - padX,
        top: ROW_Y[2] - MATH_SIZE * 0.78,
        width: last.total + padX * 2,
        height: MATH_SIZE * 1.42,
        border: `5px solid ${C.amber}`,
        borderRadius: 22,
        background: 'rgba(245,158,11,0.12)',
        opacity: hb,
        transform: `scale(${0.9 + 0.1 * hb})`,
      }}
    />,
  );
  nodes.push(
    <div key="ck" style={{position: 'absolute', left: last.left + last.total + padX + 30, top: ROW_Y[2] - 50}}>
      <CheckBadge start={T.check} size={84} />
    </div>,
  );
  return <>{nodes}</>;
};

export const P3Solution: React.FC = () => {
  const frame = useCurrentFrame();
  const [handle] = useState(() => delayRender('Loading fonts for text measurement'));
  const [ready, setReady] = useState(false);
  useEffect(() => {
    waitForFonts().then(() => {
      setReady(true);
      continueRender(handle);
    });
  }, [handle]);

  const card = prog(frame, 0, 22);
  const strip = prog(frame, T.strip, 22, Easing.out(Easing.cubic));

  return (
    <Background>
      {/* Problem card */}
      <div
        style={{
          position: 'absolute',
          left: 260,
          right: 260,
          top: 70,
          opacity: card,
          transform: `translateY(${(1 - card) * -40}px)`,
          background: C.navyCard,
          borderRadius: 28,
          boxShadow: SHADOW,
          border: '2px solid rgba(199,204,245,0.18)',
          padding: '34px 48px 40px',
        }}
      >
        <FadeUp start={8} dur={14} dy={10}>
          <Pill>SAT SAVOLI</Pill>
        </FadeUp>
        <div style={{fontSize: 54, fontWeight: 500, marginTop: 22, letterSpacing: -0.3}}>
          If <M>2x</M> + 3 = 11, what is the value of <M>x</M>?
        </div>
      </div>

      {ready ? <MathRows /> : null}

      {/* Check strip */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 70,
          display: 'flex',
          justifyContent: 'center',
          opacity: strip,
          transform: `translateY(${(1 - strip) * 120}px)`,
        }}
      >
        <div
          style={{
            background: C.greenSoft,
            color: C.greenDark,
            borderRadius: 18,
            padding: '20px 46px',
            fontSize: 44,
            fontWeight: 700,
            boxShadow: SHADOW,
            fontFamily: FONT,
          }}
        >
          Tekshiruv: 2 · 4 + 3 = 11 ✓
        </div>
      </div>
    </Background>
  );
};

/** Inline math run inside prose: serif with italic variables. */
const M: React.FC<{children: string}> = ({children}) => (
  <span style={{fontFamily: MATH_FONT, fontSize: '1.08em'}}>
    {Array.from(children).map((ch, i) =>
      /[a-z]/.test(ch) ? (
        <i key={i}>{ch}</i>
      ) : (
        <span key={i}>{ch}</span>
      ),
    )}
  </span>
);
