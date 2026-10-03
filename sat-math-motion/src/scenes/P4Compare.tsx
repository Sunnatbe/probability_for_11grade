import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {Background, FadeUp, prog} from '../components';
import {C, SHADOW} from '../theme';

const CARDS = [
  {title: 'Algebra', rule: '≈35% · ~15 savol', example: 'chiziqli tenglama, sistema', bg: C.greenSoft, accent: C.greenDark},
  {title: 'Advanced Math', rule: '≈35% · ~15 savol', example: 'kvadrat, eksponent', bg: C.pinkSoft, accent: C.pinkDark},
  {title: 'PSDA + Geom.', rule: '≈15% + 15%', example: 'foiz, statistika, aylana', bg: C.lavender, accent: C.indigo},
];

const CARD_W = 500;
const CARD_H = 470;
const GAP = 60;
const LEFT = (1920 - (CARD_W * 3 + GAP * 2)) / 2;
const SLOT_TOP = 330;
const STEP = 60; // ~2 s per card
const FLIP = 22;

const Card: React.FC<{i: number}> = ({i}) => {
  const frame = useCurrentFrame();
  const start = 12 + i * STEP;
  const flip = prog(frame, start, FLIP, Easing.out(Easing.back(1.2)));
  const lineUp = prog(frame, 168, 26);
  const {title, rule, example, bg, accent} = CARDS[i];

  // Cards flip in loosely scattered, then straighten into one tidy row.
  const SCATTER = [
    {dy: -34, rot: -4},
    {dy: 30, rot: 3},
    {dy: -14, rot: -2.5},
  ][i];
  const x = LEFT + i * (CARD_W + GAP);
  const y = SLOT_TOP + SCATTER.dy * (1 - lineUp);
  const rot = SCATTER.rot * (1 - lineUp);
  const scale = 1;

  // Amber outline highlights each card in turn once all three are lined up.
  const hlStart = 204 + i * 28;
  const hl = interpolate(frame, [hlStart, hlStart + 8, hlStart + 22, hlStart + 30], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  if (frame < start) return null;
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: CARD_W,
        height: CARD_H,
        perspective: 1400,
        zIndex: 10 + i,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          transform: `scale(${scale * (1 + 0.035 * hl)}) rotateZ(${rot}deg) rotateY(${(1 - flip) * 90}deg)`,
          background: bg,
          borderRadius: 30,
          boxShadow: `${SHADOW}, 0 0 0 ${7 * hl}px ${C.amber}`,
          color: C.ink,
          padding: '46px 44px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          backfaceVisibility: 'hidden',
        }}
      >
        <div style={{width: 64, height: 10, borderRadius: 5, background: accent}} />
        <div style={{fontSize: 56, fontWeight: 800, marginTop: 30, color: accent, letterSpacing: -0.5}}>{title}</div>
        <div style={{fontSize: 46, fontWeight: 700, marginTop: 34}}>{rule}</div>
        <div style={{flex: 1}} />
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: C.inkSoft,
            background: 'rgba(255,255,255,0.65)',
            borderRadius: 16,
            padding: '18px 22px',
          }}
        >
          {example}
        </div>
      </div>
    </div>
  );
};

export const P4Compare: React.FC = () => (
  <Background>
    <FadeUp start={0} dur={16} style={{position: 'absolute', top: 120, width: '100%', textAlign: 'center'}}>
      <div style={{fontSize: 76, fontWeight: 800, letterSpacing: -1}}>Ballar qayerdan keladi?</div>
      <div style={{width: 120, height: 8, borderRadius: 4, background: C.amber, margin: '24px auto 0'}} />
    </FadeUp>
    {[0, 1, 2].map((i) => (
      <Card key={i} i={i} />
    ))}
  </Background>
);
