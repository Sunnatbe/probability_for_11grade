import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, FONT} from './theme';

export const ease = Easing.bezier(0.45, 0, 0.2, 1);

/** 0→1 progress between two frames with ease-in-out, clamped. */
export const prog = (frame: number, start: number, dur: number, easing = ease) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing,
  });

export const useSpring = (start: number, config: {damping?: number; stiffness?: number; mass?: number} = {}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return spring({frame: frame - start, fps, config: {damping: 14, stiffness: 120, mass: 1, ...config}});
};

export const Background: React.FC<{children?: React.ReactNode}> = ({children}) => (
  <AbsoluteFill style={{backgroundColor: C.navy, fontFamily: FONT, color: C.white}}>
    <AbsoluteFill
      style={{
        background:
          'radial-gradient(1200px 700px at 78% 18%, rgba(79,70,229,0.22), transparent 70%), radial-gradient(900px 600px at 10% 95%, rgba(245,158,11,0.08), transparent 70%)',
      }}
    />
    <AbsoluteFill
      style={{
        backgroundImage: 'radial-gradient(rgba(199,204,245,0.07) 1.6px, transparent 1.6px)',
        backgroundSize: '44px 44px',
      }}
    />
    {children}
  </AbsoluteFill>
);

/** Self-drawing check mark inside a filled circle. */
export const CheckBadge: React.FC<{start: number; size?: number; color?: string; pulseAt?: number}> = ({
  start,
  size = 64,
  color = C.green,
  pulseAt,
}) => {
  const frame = useCurrentFrame();
  const pop = useSpring(start, {damping: 10, stiffness: 160});
  const draw = prog(frame, start + 4, 12);
  const pulse =
    pulseAt === undefined
      ? 1
      : 1 + 0.22 * Math.sin(Math.PI * prog(frame, pulseAt, 14, Easing.linear));
  const ring = pulseAt === undefined ? 0 : prog(frame, pulseAt, 22, Easing.out(Easing.quad));
  return (
    <div style={{position: 'relative', width: size, height: size, flexShrink: 0}}>
      {pulseAt !== undefined && ring > 0 && ring < 1 ? (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: `3px solid ${color}`,
            transform: `scale(${1 + ring * 0.9})`,
            opacity: 1 - ring,
          }}
        />
      ) : null}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        style={{transform: `scale(${pop * pulse})`, display: 'block'}}
      >
        <circle cx="32" cy="32" r="30" fill={color} />
        <path
          d="M18 33 L28 43 L47 22"
          fill="none"
          stroke="#fff"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="44"
          strokeDashoffset={44 * (1 - draw)}
        />
      </svg>
    </div>
  );
};

/** Text that reveals letter by letter (typewriter) with a soft fade on each glyph. */
export const TypeIn: React.FC<{text: string; start: number; dur: number; style?: React.CSSProperties}> = ({
  text,
  start,
  dur,
  style,
}) => {
  const frame = useCurrentFrame();
  const chars = Array.from(text);
  const per = dur / chars.length;
  return (
    <span style={style}>
      {chars.map((ch, i) => {
        const o = interpolate(frame, [start + i * per, start + i * per + 4], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        return (
          <span key={i} style={{opacity: o}}>
            {ch}
          </span>
        );
      })}
    </span>
  );
};

export const FadeUp: React.FC<{
  start: number;
  dur?: number;
  dy?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({start, dur = 18, dy = 24, style, children}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, start, dur);
  return <div style={{opacity: p, transform: `translateY(${(1 - p) * dy}px)`, ...style}}>{children}</div>;
};

export const Pill: React.FC<{children: React.ReactNode; bg?: string; color?: string; style?: React.CSSProperties}> = ({
  children,
  bg = C.amber,
  color = C.ink,
  style,
}) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      background: bg,
      color,
      fontWeight: 800,
      letterSpacing: 2,
      fontSize: 26,
      padding: '10px 22px',
      borderRadius: 999,
      ...style,
    }}
  >
    {children}
  </div>
);
