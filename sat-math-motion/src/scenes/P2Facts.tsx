import React from 'react';
import {Easing, useCurrentFrame} from 'remotion';
import {Background, CheckBadge, FadeUp, prog, useSpring} from '../components';
import {C, SHADOW} from '../theme';

const FACTS = [
  {title: '44 savol', text: '2 modul × 22 savol'},
  {title: '70 minut', text: 'Har modul 35 min: savolga ≈1,5 min'},
  {title: 'Adaptiv', text: "2-modul qiyinligi 1-modul natijasiga bog'liq"},
  {title: 'Kalkulyator', text: 'Desmos butun test davomida ochiq'},
];

const CARD_W = 372;
const GAP = 84;
const LEFT = (1920 - (CARD_W * 4 + GAP * 3)) / 2;
const CARD_TOP = 300;
const CARD_H = 380;
const CARD_START = 18;
const CARD_STEP = 54;

const FactCard: React.FC<{i: number}> = ({i}) => {
  const start = CARD_START + i * CARD_STEP;
  const s = useSpring(start, {damping: 9, stiffness: 120});
  const frame = useCurrentFrame();
  const o = prog(frame, start, 10, Easing.linear);
  const {title, text} = FACTS[i];
  return (
    <div
      style={{
        position: 'absolute',
        left: LEFT + i * (CARD_W + GAP),
        top: CARD_TOP,
        width: CARD_W,
        height: CARD_H,
        background: C.white,
        borderRadius: 28,
        boxShadow: SHADOW,
        padding: '40px 34px',
        boxSizing: 'border-box',
        opacity: o,
        transform: `scale(${0.6 + 0.4 * s})`,
        color: C.ink,
      }}
    >
      <div
        style={{
          width: 76,
          height: 76,
          borderRadius: '50%',
          background: C.indigo,
          color: C.white,
          fontSize: 40,
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 16px rgba(79,70,229,0.35)',
        }}
      >
        {i + 1}
      </div>
      <div style={{fontSize: 52, fontWeight: 800, marginTop: 34, letterSpacing: -0.5}}>{title}</div>
      <div style={{fontSize: 30, fontWeight: 500, marginTop: 16, lineHeight: 1.3, color: C.inkSoft}}>
        {/* keep "1-modul" style words from breaking at the hyphen */}
        {text.split(/(\d-\S+)/).map((part, k) =>
          /^\d-/.test(part) ? (
            <span key={k} style={{whiteSpace: 'nowrap'}}>
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </div>
    </div>
  );
};

const Arrow: React.FC<{i: number}> = ({i}) => {
  const frame = useCurrentFrame();
  const start = CARD_START + i * CARD_STEP + 26;
  const p = prog(frame, start, 22);
  const x = LEFT + i * (CARD_W + GAP) + CARD_W + 10;
  const len = GAP - 20;
  const lineLen = len - 18;
  return (
    <svg
      style={{position: 'absolute', left: x, top: CARD_TOP + CARD_H / 2 - 20}}
      width={len}
      height={40}
      viewBox={`0 0 ${len} 40`}
    >
      <line
        x1={0}
        y1={20}
        x2={lineLen}
        y2={20}
        stroke={C.amber}
        strokeWidth={7}
        strokeLinecap="round"
        strokeDasharray={lineLen}
        strokeDashoffset={lineLen * (1 - p)}
      />
      <path
        d={`M${len - 22} 8 L${len - 4} 20 L${len - 22} 32`}
        fill="none"
        stroke={C.amber}
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={prog(frame, start + 16, 6, Easing.linear)}
      />
    </svg>
  );
};

export const P2Facts: React.FC = () => {
  const frame = useCurrentFrame();
  const banner = prog(frame, 270, 24, Easing.out(Easing.cubic));
  return (
    <Background>
      <FadeUp start={0} dur={18} style={{position: 'absolute', top: 120, width: '100%', textAlign: 'center'}}>
        <div style={{fontSize: 72, fontWeight: 800, letterSpacing: -1}}>SAT Math tuzilmasi: 4 fakt</div>
        <div style={{width: 120, height: 8, borderRadius: 4, background: C.amber, margin: '24px auto 0'}} />
      </FadeUp>

      {[0, 1, 2].map((i) => (
        <Arrow key={`a${i}`} i={i} />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <FactCard key={i} i={i} />
      ))}

      {/* Key rule banner */}
      <div
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          top: 790,
          opacity: banner,
          transform: `translateY(${(1 - banner) * 200}px)`,
          background: C.navyCard,
          border: `4px solid ${C.amber}`,
          borderRadius: 26,
          boxShadow: SHADOW,
          padding: '30px 44px',
          display: 'flex',
          alignItems: 'center',
          gap: 32,
        }}
      >
        <CheckBadge start={282} size={78} pulseAt={300} />
        <div>
          <div style={{fontSize: 32, fontWeight: 800, color: C.amber}}>Muhim:</div>
          <div style={{fontSize: 38, fontWeight: 600, lineHeight: 1.3, marginTop: 4}}>
            noto'g'ri javob uchun ball ayirilmaydi — hech bir savolni bo'sh qoldirmang
          </div>
        </div>
      </div>
    </Background>
  );
};
