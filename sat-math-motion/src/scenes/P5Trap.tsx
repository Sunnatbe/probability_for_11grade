import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {Background, CheckBadge, FadeUp, prog, useSpring} from '../components';
import {C, MATH_FONT, SHADOW} from '../theme';

const Warning: React.FC<{size: number}> = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <path
      d="M50 8 L94 88 Q96 92 91 92 L9 92 Q4 92 6 88 Z"
      fill={C.amber}
      stroke={C.amber}
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <rect x="45" y="34" width="10" height="32" rx="5" fill={C.navy} />
    <circle cx="50" cy="78" r="6" fill={C.navy} />
  </svg>
);

/** Inline math with italic variables. */
const M: React.FC<{children: string}> = ({children}) => (
  <span style={{fontFamily: MATH_FONT, fontSize: '1.08em', whiteSpace: 'nowrap'}}>
    {Array.from(children).map((ch, i) => (/[a-z]/.test(ch) ? <i key={i}>{ch}</i> : <span key={i}>{ch}</span>))}
  </span>
);

export const P5Trap: React.FC = () => {
  const frame = useCurrentFrame();

  // 0–2 s: triangle drops in and wobbles
  const drop = useSpring(0, {damping: 9, stiffness: 140});
  const wobble = Math.sin(frame / 2.4) * 9 * interpolate(frame, [10, 50], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 2–4 s: example card, wrong root shakes and gets stamped
  const cardIn = prog(frame, 56, 18);
  const shake = Math.sin(frame * 1.9) * 9 * interpolate(frame, [92, 98, 112], [0, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const stamp = useSpring(100, {damping: 10, stiffness: 220});
  const stampOpacity = prog(frame, 100, 4, Easing.linear);

  // 4–8 s: card slides aside, rule slides in
  const aside = prog(frame, 124, 26);
  const rule = prog(frame, 136, 26, Easing.out(Easing.cubic));

  const cardLeft = interpolate(aside, [0, 1], [310, 90]);
  const cardScale = interpolate(aside, [0, 1], [1, 0.82]);

  return (
    <Background>
      {/* Header */}
      <div style={{position: 'absolute', top: 70, left: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 36}}>
        <div style={{transform: `translateY(${(1 - drop) * -360}px) rotate(${wobble}deg)`, transformOrigin: '50% 90%'}}>
          <Warning size={150} />
        </div>
        <div>
          <FadeUp start={18} dur={14} dy={14}>
            <div style={{fontSize: 40, fontWeight: 800, color: C.amber, letterSpacing: 8}}>DIQQAT!</div>
          </FadeUp>
          <FadeUp start={26} dur={16} dy={18}>
            <div style={{fontSize: 76, fontWeight: 800, letterSpacing: -1}}>«Positive» so'zi</div>
          </FadeUp>
        </div>
      </div>

      {/* Tricky example card */}
      <div
        style={{
          position: 'absolute',
          top: 390,
          left: cardLeft,
          width: 1300,
          transformOrigin: '0% 0%',
          opacity: cardIn * interpolate(aside, [0, 1], [1, 0.92]),
          transform: `translateY(${(1 - cardIn) * 40}px) scale(${cardScale})`,
          background: '#F4F5FF',
          color: C.ink,
          borderRadius: 28,
          boxShadow: SHADOW,
          padding: '44px 56px 52px',
        }}
      >
        <div style={{fontSize: 52, fontWeight: 600, lineHeight: 1.3}}>
          What is the <span style={{background: C.amberSoft, borderRadius: 8, padding: '0 8px'}}>positive</span> solution
          to <M>x² − x − 12 = 0</M>?
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 34, marginTop: 40, fontSize: 64}}>
          <span style={{color: C.inkSoft, fontSize: 40, fontWeight: 600}}>Ildizlar:</span>
          <M>x = 4</M>
          <span style={{fontSize: 40, fontWeight: 600, color: C.inkSoft}}>yoki</span>
          <span style={{position: 'relative', display: 'inline-block', transform: `translateX(${shake}px)`}}>
            <span style={{color: frame >= 92 ? C.red : C.ink}}>
              <M>x = −3</M>
            </span>
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              style={{
                position: 'absolute',
                left: '-14%',
                top: '-22%',
                width: '128%',
                height: '144%',
                overflow: 'visible',
                transform: `scale(${2.2 - 1.2 * stamp}) rotate(-6deg)`,
                opacity: stampOpacity,
              }}
            >
              <path d="M6 10 L94 90 M94 10 L6 90" stroke={C.red} strokeWidth={9} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            </svg>
          </span>
        </div>
      </div>

      {/* Correct rule */}
      <div
        style={{
          position: 'absolute',
          top: 390,
          left: 1180,
          width: 650,
          opacity: rule,
          transform: `translateX(${(1 - rule) * 500}px)`,
          background: C.navyCard,
          border: `4px solid ${C.green}`,
          borderRadius: 28,
          boxShadow: SHADOW,
          padding: '44px 44px 48px',
        }}
      >
        <CheckBadge start={150} size={88} />
        <div style={{fontSize: 46, fontWeight: 700, lineHeight: 1.3, marginTop: 28}}>
          Savol bitta ildizni so'raydi: <span style={{color: C.red}}>−3</span> ni belgilash — xato.
        </div>
        <FadeUp start={176} dur={16} dy={12}>
          <div
            style={{
              marginTop: 30,
              display: 'inline-block',
              background: C.green,
              color: C.white,
              fontSize: 46,
              fontWeight: 800,
              borderRadius: 16,
              padding: '12px 30px',
            }}
          >
            Javob: 4
          </div>
        </FadeUp>
      </div>
    </Background>
  );
};
