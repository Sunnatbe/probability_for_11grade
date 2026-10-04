import React from 'react';
import {AbsoluteFill, Easing, Freeze, interpolate, Sequence, useCurrentFrame} from 'remotion';
import {Background, prog} from '../components';
import {C, FPS, SHADOW} from '../theme';

export const TOTAL_SLIDES = 11;

/** Seconds → frames. */
export const sec = (s: number) => Math.round(s * FPS);

/** Fades/slides its children in at `at` seconds (relative to the enclosing Sequence). */
export const Reveal: React.FC<{
  at: number;
  dur?: number;
  dx?: number;
  dy?: number;
  pop?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({at, dur = 0.6, dx = 0, dy = 26, pop = false, style, children}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, sec(at), sec(dur), pop ? Easing.out(Easing.back(1.6)) : undefined);
  const o = prog(frame, sec(at), sec(dur) * 0.7, Easing.linear);
  const s = pop ? 0.7 + 0.3 * p : 1;
  return (
    <div
      style={{
        opacity: o,
        transform: `translate(${(1 - p) * dx}px, ${(1 - p) * dy}px) scale(${s})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/** Standard lesson slide: kicker pill, title, footer, and a soft fade at both ends. */
export const SlideFrame: React.FC<{
  n: number;
  kicker: string;
  title: string;
  duration: number; // frames
  fadeIn?: boolean;
  fadeOut?: boolean;
  children: React.ReactNode;
}> = ({n, kicker, title, duration, fadeIn = true, fadeOut = true, children}) => {
  const frame = useCurrentFrame();
  const inP = fadeIn ? prog(frame, 0, 12) : 1;
  const outP = fadeOut ? 1 - prog(frame, duration - 10, 10) : 1;
  return (
    <Background>
      <AbsoluteFill style={{opacity: Math.min(inP, outP)}}>
        <div style={{position: 'absolute', left: 120, top: 70, transform: `translateY(${(1 - inP) * 16}px)`}}>
          <div
            style={{
              display: 'inline-block',
              background: C.amber,
              color: C.ink,
              fontWeight: 800,
              fontSize: 22,
              letterSpacing: 2,
              padding: '8px 18px',
              borderRadius: 999,
            }}
          >
            {kicker}
          </div>
          <div style={{fontSize: 64, fontWeight: 800, letterSpacing: -1, marginTop: 14}}>{title}</div>
        </div>
        {children}
        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            left: 120,
            right: 120,
            bottom: 34,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
            fontWeight: 600,
            color: 'rgba(199,204,245,0.55)',
          }}
        >
          <span>Kholmurodov Academy · SAT Math · Dars 1</span>
          <span>
            {n} / {TOTAL_SLIDES}
          </span>
        </div>
      </AbsoluteFill>
    </Background>
  );
};

export const Card: React.FC<{
  style?: React.CSSProperties;
  light?: boolean;
  accent?: string;
  children: React.ReactNode;
}> = ({style, light = false, accent, children}) => (
  <div
    style={{
      background: light ? C.white : C.navyCard,
      color: light ? C.ink : C.white,
      borderRadius: 26,
      boxShadow: SHADOW,
      border: accent ? `4px solid ${accent}` : light ? 'none' : '2px solid rgba(199,204,245,0.14)',
      padding: '30px 36px',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

export const NumDot: React.FC<{n: number | string; color?: string; size?: number}> = ({
  n,
  color = C.indigo,
  size = 64,
}) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      color: C.white,
      fontWeight: 800,
      fontSize: size * 0.48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    {n}
  </div>
);

/**
 * Plays a clip, then holds a frame. `segments` is a list of [clipFrom, clipTo, holdFrames]:
 * clip frames [clipFrom, clipTo) play in real time, then frame clipTo-1 is held for holdFrames.
 */
export const ClipWithHolds: React.FC<{
  Clip: React.FC;
  segments: [number, number, number][];
}> = ({Clip, segments}) => {
  let at = 0;
  const parts: React.ReactNode[] = [];
  segments.forEach(([from, to, hold], i) => {
    const len = to - from;
    parts.push(
      <Sequence key={`p${i}`} from={at} durationInFrames={len} layout="none">
        <Sequence from={-from} layout="none">
          <Clip />
        </Sequence>
      </Sequence>,
    );
    at += len;
    if (hold > 0) {
      parts.push(
        <Sequence key={`h${i}`} from={at} durationInFrames={hold} layout="none">
          <Freeze frame={to - 1}>
            <Clip />
          </Freeze>
        </Sequence>,
      );
      at += hold;
    }
  });
  return <>{parts}</>;
};

/** Cross-fade helper: opacity 0→1 starting at `at` seconds. */
export const useFadeAt = (at: number, dur = 0.5) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [sec(at), sec(at + dur)], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
};

// ---- Small line icons -------------------------------------------------------

type IconProps = {size?: number; color?: string};
const S: React.FC<IconProps & {children: React.ReactNode}> = ({size = 56, color = C.amber, children}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke={color}
    strokeWidth={3.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{flexShrink: 0}}
  >
    {children}
  </svg>
);

export const IconTimer: React.FC<IconProps> = (p) => (
  <S {...p}>
    <circle cx="24" cy="27" r="16" />
    <path d="M24 27 L24 18 M19 5 H29 M24 5 V11 M37 13 L40 10" />
  </S>
);
export const IconCalc: React.FC<IconProps> = (p) => (
  <S {...p}>
    <rect x="10" y="5" width="28" height="38" rx="5" />
    <path d="M16 12 H32 V19 H16 Z M17 27 h1 M24 27 h1 M31 27 h1 M17 35 h1 M24 35 h1 M31 35 h1" />
  </S>
);
export const IconBook: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M6 10 Q15 6 24 11 Q33 6 42 10 V39 Q33 35 24 40 Q15 35 6 39 Z M24 11 V40" />
  </S>
);
export const IconFlag: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M11 43 V6 M11 8 H36 L30 16 L36 24 H11" />
  </S>
);
export const IconLaptop: React.FC<IconProps> = (p) => (
  <S {...p}>
    <rect x="9" y="9" width="30" height="21" rx="3" />
    <path d="M4 37 H44 L40 30 H8 Z" />
  </S>
);
export const IconTarget: React.FC<IconProps> = (p) => (
  <S {...p}>
    <circle cx="24" cy="24" r="18" />
    <circle cx="24" cy="24" r="10" />
    <circle cx="24" cy="24" r="2.5" />
  </S>
);
export const IconChart: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M6 42 H42 M12 36 V24 M22 36 V14 M32 36 V20 M40 36 V8" />
  </S>
);
export const IconClockFast: React.FC<IconProps> = (p) => (
  <S {...p}>
    <circle cx="27" cy="25" r="16" />
    <path d="M27 16 V25 L33 29 M3 18 H9 M2 26 H8 M4 34 H10" />
  </S>
);
export const IconQuiet: React.FC<IconProps> = (p) => (
  <S {...p}>
    <rect x="15" y="5" width="18" height="34" rx="4" />
    <path d="M6 6 L42 42" />
  </S>
);
export const IconDice: React.FC<IconProps> = (p) => (
  <S {...p}>
    <rect x="7" y="7" width="34" height="34" rx="7" />
    <circle cx="17" cy="17" r="1.5" />
    <circle cx="31" cy="31" r="1.5" />
    <circle cx="24" cy="24" r="1.5" />
  </S>
);
export const IconQuestion: React.FC<IconProps> = (p) => (
  <S {...p}>
    <circle cx="24" cy="24" r="18" />
    <path d="M18 19 Q18 12 24 12 Q30 12 30 18 Q30 23 24 25 V29 M24 35 V35.5" />
  </S>
);
export const IconBolt: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M27 4 L10 27 H23 L20 44 L38 20 H25 Z" />
  </S>
);
export const IconBulb: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M17 33 Q17 27 13 23 Q9 18 11 12 Q14 5 24 5 Q34 5 37 12 Q39 18 35 23 Q31 27 31 33 Z M18 39 H30 M20 44 H28" />
  </S>
);
