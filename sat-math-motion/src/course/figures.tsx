import React from 'react';
import {Easing, useCurrentFrame} from 'remotion';
import {prog} from '../components';
import {C, SHADOW} from '../theme';
import {Card as Box, Reveal, sec} from '../lesson/ui';
import {Tx} from './Tx';

/** Reusable figures for `custom` slides. Times are in seconds (slide-relative). */

export const NumberLine: React.FC<{
  from: number;
  to: number;
  marks: {x: number; closed: boolean; label?: string; at: number}[];
  shade?: {a: number | null; b: number | null; at: number; color?: string}[];
  top?: number;
}> = ({from, to, marks, shade = [], top = 330}) => {
  const frame = useCurrentFrame();
  const W = 1560;
  const L = 180;
  const X = (v: number) => L + ((v - from) / (to - from)) * W;
  const ticks: number[] = [];
  for (let v = Math.ceil(from); v <= to; v++) ticks.push(v);
  const axisIn = prog(frame, 4, 16);
  return (
    <svg style={{position: 'absolute', left: 0, top}} width={1920} height={260}>
      <g opacity={axisIn}>
        <line x1={L - 40} x2={L + W + 40} y1={120} y2={120} stroke={C.lavender} strokeWidth={5} />
        <path d={`M${L + W + 40} 120 l-18 -11 v22 z`} fill={C.lavender} />
        <path d={`M${L - 40} 120 l18 -11 v22 z`} fill={C.lavender} />
        {ticks.map((v) => (
          <g key={v}>
            <line x1={X(v)} x2={X(v)} y1={106} y2={134} stroke={C.lavender} strokeWidth={3} />
            <text x={X(v)} y={180} fill={C.lavender} fontSize={30} textAnchor="middle" fontFamily="Inter" fontWeight={600}>
              {v}
            </text>
          </g>
        ))}
      </g>
      {shade.map((s, i) => {
        const p = prog(frame, sec(s.at), sec(1), Easing.out(Easing.cubic));
        const a = s.a === null ? L - 40 : X(s.a);
        const b = s.b === null ? L + W + 40 : X(s.b);
        const grow = s.a === null ? [b - (b - a) * p, b] : [a, a + (b - a) * p];
        return <rect key={i} x={grow[0]} y={104} width={Math.max(0, grow[1] - grow[0])} height={32} rx={16} fill={s.color ?? C.amber} opacity={0.75} />;
      })}
      {marks.map((m, i) => {
        const p = prog(frame, sec(m.at), 12, Easing.out(Easing.back(2)));
        return (
          <g key={i} transform={`translate(${X(m.x)} 120) scale(${p})`}>
            <circle r={17} fill={m.closed ? C.amber : C.navy} stroke={C.amber} strokeWidth={6} />
            {m.label ? (
              <text y={-36} fill={C.white} fontSize={32} textAnchor="middle" fontFamily="Inter" fontWeight={800}>
                {m.label}
              </text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
};

/** A row of note cards that appear one by one. */
export const NoteRow: React.FC<{items: {text: string; at: number; color?: string}[]; top: number}> = ({items, top}) => (
  <div style={{position: 'absolute', left: 120, right: 120, top, display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 28}}>
    {items.map((it, i) => (
      <Reveal key={i} at={it.at} dy={40}>
        <Box accent={it.color} style={{padding: '22px 28px'}}>
          <div style={{fontSize: 32, fontWeight: 600, lineHeight: 1.35}}>
            <Tx>{it.text}</Tx>
          </div>
        </Box>
      </Reveal>
    ))}
  </div>
);

/** Big centred statement line (math or text). */
export const BigLine: React.FC<{text: string; at: number; top: number; size?: number; color?: string}> = ({text, at, top, size = 56, color = C.white}) => (
  <Reveal at={at} pop style={{position: 'absolute', left: 120, right: 120, top, textAlign: 'center'}}>
    <div style={{fontSize: size, fontWeight: 800, color}}>
      <Tx>{text}</Tx>
    </div>
  </Reveal>
);

type Pt = [number, number];

/** Simple SVG polygon figure with vertex/side labels. Coordinates in a 0..100 box. */
export const Shape: React.FC<{
  points: Pt[];
  labels?: {at: Pt; text: string; color?: string}[];
  extra?: {from: Pt; to: Pt; dashed?: boolean; color?: string}[];
  rightAngle?: Pt[]; // [corner, a, b]
  left: number;
  top: number;
  size: number;
  appear: number;
  fill?: string;
}> = ({points, labels = [], extra = [], rightAngle, left, top, size, appear, fill = 'rgba(79,70,229,0.18)'}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, sec(appear), sec(1.2), Easing.inOut(Easing.quad));
  const S = (q: Pt): Pt => [(q[0] / 100) * size, (q[1] / 100) * size];
  const d = points.map((q, i) => `${i ? 'L' : 'M'}${S(q)[0]} ${S(q)[1]}`).join(' ') + ' Z';
  let ra: string | null = null;
  if (rightAngle) {
    const [c, a, b] = rightAngle.map(S);
    const u = (v: Pt) => {
      const len = Math.hypot(v[0] - c[0], v[1] - c[1]);
      return [((v[0] - c[0]) / len) * 26, ((v[1] - c[1]) / len) * 26];
    };
    const ua = u(a);
    const ub = u(b);
    ra = `M${c[0] + ua[0]} ${c[1] + ua[1]} L${c[0] + ua[0] + ub[0]} ${c[1] + ua[1] + ub[1]} L${c[0] + ub[0]} ${c[1] + ub[1]}`;
  }
  return (
    <div style={{position: 'absolute', left, top, width: size, height: size}}>
      <svg width={size} height={size} style={{overflow: 'visible', position: 'absolute'}}>
        <path d={d} fill={fill} opacity={p} />
        <path d={d} fill="none" stroke={C.lavender} strokeWidth={5} strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />
        {ra ? <path d={ra} fill="none" stroke={C.lavender} strokeWidth={3} opacity={p} /> : null}
        {extra.map((e, i) => (
          <line
            key={i}
            x1={S(e.from)[0]}
            y1={S(e.from)[1]}
            x2={S(e.to)[0]}
            y2={S(e.to)[1]}
            stroke={e.color ?? C.amber}
            strokeWidth={4}
            strokeDasharray={e.dashed ? '12 10' : undefined}
            opacity={p}
          />
        ))}
      </svg>
      {labels.map((l, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: S(l.at)[0],
            top: S(l.at)[1],
            transform: 'translate(-50%, -50%)',
            fontSize: 34,
            fontWeight: 700,
            color: l.color ?? C.white,
            opacity: p,
            whiteSpace: 'nowrap',
          }}
        >
          <Tx>{l.text}</Tx>
        </div>
      ))}
    </div>
  );
};

export const SideNotes: React.FC<{items: {text: string; at: number}[]; left?: number; top?: number; width?: number}> = ({items, left = 1060, top = 260, width = 740}) => (
  <div style={{position: 'absolute', left, top, width, display: 'flex', flexDirection: 'column', gap: 18}}>
    {items.map((it, i) => (
      <Reveal key={i} at={it.at} dx={40} dy={0}>
        <div style={{background: C.navyCard, borderRadius: 20, padding: '20px 26px', boxShadow: SHADOW, fontSize: 31, fontWeight: 600, lineHeight: 1.35}}>
          <Tx>{it.text}</Tx>
        </div>
      </Reveal>
    ))}
  </div>
);
