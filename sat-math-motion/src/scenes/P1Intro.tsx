import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Background, FadeUp, Pill, TypeIn, prog, useSpring} from '../components';
import {C, SHADOW} from '../theme';

const Clock: React.FC<{color: string}> = ({color}) => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <circle cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="7" />
    <path d="M50 26 V50 L66 60" fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" />
  </svg>
);
const Target: React.FC<{color: string}> = ({color}) => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <circle cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="7" />
    <circle cx="50" cy="50" r="24" fill="none" stroke={color} strokeWidth="7" />
    <circle cx="50" cy="50" r="8" fill={color} />
  </svg>
);
const Calculator: React.FC<{color: string}> = ({color}) => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <rect x="20" y="8" width="60" height="84" rx="10" fill="none" stroke={color} strokeWidth="7" />
    <rect x="31" y="20" width="38" height="16" rx="3" fill={color} />
    {[0, 1, 2].map((r) =>
      [0, 1, 2].map((c) => <circle key={`${r}-${c}`} cx={34 + c * 16} cy={52 + r * 14} r="4.5" fill={color} />),
    )}
  </svg>
);

type IconSpec = {
  Icon: React.FC<{color: string}>;
  x: number;
  y: number;
  size: number;
  from: [number, number];
  rot: number;
  color: string;
  opacity: number;
  delay: number;
};

const ICONS: IconSpec[] = [
  {Icon: Clock, x: 1380, y: 110, size: 120, from: [300, -260], rot: -12, color: C.lavender, opacity: 0.28, delay: 0},
  {Icon: Target, x: 120, y: 820, size: 140, from: [-320, 200], rot: 10, color: C.amber, opacity: 0.3, delay: 6},
  {Icon: Calculator, x: 1700, y: 760, size: 130, from: [320, 220], rot: 14, color: C.lavender, opacity: 0.26, delay: 10},
  {Icon: Calculator, x: 980, y: 70, size: 90, from: [0, -260], rot: -8, color: C.indigoLight, opacity: 0.4, delay: 14},
  {Icon: Clock, x: 760, y: 900, size: 96, from: [0, 300], rot: 8, color: C.indigoLight, opacity: 0.4, delay: 4},
  {Icon: Target, x: 1820, y: 330, size: 80, from: [300, 0], rot: -6, color: C.amber, opacity: 0.25, delay: 12},
];

export const P1Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const badge = useSpring(60, {damping: 11, stiffness: 140});
  const label = prog(frame, 66, 20);
  // Gentle floating that settles to zero by 5 s so the last second is a still frame.
  const floatAmp = interpolate(frame, [40, 150], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <Background>
      {ICONS.map(({Icon, x, y, size, from, rot, color, opacity, delay}, i) => {
        const p = prog(frame, delay, 55, Easing.out(Easing.cubic));
        const fx = Math.sin((frame + i * 20) / 22) * 10 * floatAmp;
        const fy = Math.cos((frame + i * 13) / 26) * 12 * floatAmp;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x - size / 2,
              top: y - size / 2,
              width: size,
              height: size,
              opacity: opacity * p,
              transform: `translate(${(1 - p) * from[0] + fx}px, ${(1 - p) * from[1] + fy}px) rotate(${rot * p}deg)`,
            }}
          >
            <Icon color={color} />
          </div>
        );
      })}

      {/* Amber label top-left */}
      <div
        style={{
          position: 'absolute',
          left: 140,
          top: 130,
          opacity: label,
          transform: `translateX(${(1 - label) * -60}px)`,
        }}
      >
        <Pill>SAT MATH · M0 · KIRISH</Pill>
      </div>

      {/* Title block */}
      <AbsoluteFill style={{justifyContent: 'center', paddingLeft: 140, paddingRight: 560}}>
        <div style={{fontSize: 88, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5}}>
          <TypeIn text="Digital SAT bilan tanishuv va diagnostik test" start={105} dur={36} />
        </div>
        <FadeUp start={128} dur={20} style={{marginTop: 34}}>
          <div style={{fontSize: 44, fontStyle: 'italic', fontWeight: 400, color: C.lavender}}>
            Digital SAT Math: test format and diagnostic test
          </div>
        </FadeUp>
      </AbsoluteFill>

      {/* Indigo badge on the right */}
      <div
        style={{
          position: 'absolute',
          left: 1420,
          top: 540 - 190,
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
        <div style={{fontSize: 170, fontWeight: 800, lineHeight: 1}}>1</div>
      </div>
    </Background>
  );
};
