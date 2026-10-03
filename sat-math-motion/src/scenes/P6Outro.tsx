import React from 'react';
import {Easing, interpolate, random, useCurrentFrame} from 'remotion';
import {Background, CheckBadge, FadeUp, prog} from '../components';
import {C, SHADOW} from '../theme';

const POINTS = [
  '44 savol = 2 modul × 22; har modul 35 min; savolga ≈1,5 min',
  "Jarima yo'q — har bir savolga javob bering; SPR ga faqat son yozing",
  'Diagnostika natijasi — shaxsiy reja: zaif domenlardan boshlang',
];

const CONFETTI_COLORS = [C.amber, C.indigoLight, C.lavender, C.green, C.pink, C.white];
const BURST = 180;

const Confetti: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame - BURST;
  if (t < 0 || t > 50) return null;
  return (
    <>
      {Array.from({length: 70}).map((_, i) => {
        const angle = random(`a${i}`) * Math.PI * 2;
        const speed = 14 + random(`s${i}`) * 16;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed - 8;
        const drag = (1 - Math.pow(0.93, t)) / 0.07;
        const x = 960 + vx * drag;
        const y = 470 + vy * drag + 0.35 * t * t * 0.5;
        const size = 10 + random(`z${i}`) * 12;
        const rot = random(`r${i}`) * 360 + t * (random(`w${i}`) * 20 - 10);
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
              background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
              opacity: o,
              transform: `rotate(${rot}deg)`,
            }}
          />
        );
      })}
    </>
  );
};

export const P6Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const bar = prog(frame, 120, 22, Easing.out(Easing.cubic));
  const pill = prog(frame, 138, 18, Easing.out(Easing.back(1.4)));
  // The recap steps back so the wordmark can take the centre.
  const recapOut = prog(frame, 186, 20);
  const mark = prog(frame, 196, 26);

  return (
    <Background>
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
        <FadeUp start={0} dur={14}>
          <div style={{fontSize: 80, fontWeight: 800, letterSpacing: -1}}>Xulosa</div>
          <div style={{width: 110, height: 8, borderRadius: 4, background: C.amber, marginTop: 18}} />
        </FadeUp>
        <div style={{marginTop: 44, display: 'flex', flexDirection: 'column', gap: 30}}>
          {POINTS.map((p, i) => {
            const start = 18 + i * 30;
            return (
              <div key={i} style={{display: 'flex', alignItems: 'center', gap: 30}}>
                <CheckBadge start={start} size={64} />
                <FadeUp start={start + 6} dur={14} dy={0} style={{transform: undefined}}>
                  <div style={{fontSize: 42, fontWeight: 600, lineHeight: 1.25}}>{p}</div>
                </FadeUp>
              </div>
            );
          })}
        </div>
      </div>

      {/* Amber pill: what to do now */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 210,
          display: 'flex',
          justifyContent: 'center',
          opacity: pill,
          transform: `translateY(${(1 - pill) * 30}px) scale(${0.8 + 0.2 * pill})`,
        }}
      >
        <div
          style={{
            background: C.amber,
            color: C.ink,
            fontSize: 36,
            fontWeight: 800,
            padding: '14px 34px',
            borderRadius: 999,
            boxShadow: SHADOW,
          }}
        >
          Hozir: platformada diagnostik test (22 savol)
        </div>
      </div>

      {/* Indigo next-lesson bar */}
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
          fontSize: 46,
          fontWeight: 700,
        }}
      >
        <span style={{color: C.amberSoft, marginRight: 14}}>Keyingi:</span> Dars 2 — Desmos kalkulyatori va javob
        kiritish qoidalari
      </div>

      <Confetti />

      {/* Wordmark */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 330,
          textAlign: 'center',
          opacity: mark,
          transform: `scale(${0.92 + 0.08 * mark})`,
        }}
      >
        <div style={{fontSize: 118, fontWeight: 800, letterSpacing: -2}}>
          Kholmurodov <span style={{color: C.amber}}>Academy</span>
        </div>
        <div style={{width: 160 * mark, height: 8, borderRadius: 4, background: C.indigoLight, margin: '26px auto 0'}} />
      </div>
    </Background>
  );
};
