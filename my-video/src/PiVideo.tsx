import React, { useMemo } from "react";
import {
  AbsoluteFill,
  Audio,
  Easing,
  Sequence,
  interpolate,
  random,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const FPS = 30;
export const PI_DURATION = 60 * FPS;

const C = {
  bg: "#0A0A12",
  ink: "#F5F3FF",
  dim: "#8B88A8",
  violet: "#8B5CF6",
  mint: "#2DE2A6",
  amber: "#FFB224",
  pink: "#FF4D8D",
};
const FONT = '"Inter", "SF Pro Display", "Helvetica Neue", Arial, sans-serif';
const MONO = '"JetBrains Mono", "SF Mono", Menlo, Consolas, monospace';

const fmt = (x: number, d: number) => x.toFixed(d).replace(".", ",");

const ease = (
  f: number,
  from: number,
  to: number,
  a = 0,
  b = 1,
): number =>
  interpolate(f, [from, to], [a, b], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

/* ---------------------------------------------------------------- script */

const CAPTIONS: { from: number; to: number; text: string }[] = [
  { from: 0.2, to: 2.8, text: "Pi soni — 3,14159…" },
  { from: 2.8, to: 4.3, text: "Nega aynan shu son?" },
  { from: 4.3, to: 6, text: "Hozir isbotlayman!" },

  { from: 6.3, to: 9, text: "Istalgan aylanani oling." },
  { from: 9, to: 11.5, text: "Uzunligini diametriga bo'ling." },
  { from: 11.5, to: 14, text: "Natija doim bir xil — 3,14!" },
  { from: 14, to: 18, text: "Diametr aylanaga uch marta va yana ozgina sig'adi." },

  { from: 18.3, to: 22.5, text: "Arximed aylana ichiga va tashqarisiga ko'pburchak chizgan." },
  { from: 22.5, to: 27, text: "Tomonlar ikki barobar ko'payadi: 6, 12, 24, 48, 96!" },
  { from: 27, to: 30.5, text: "Ko'pburchak aylanaga yopishib boradi," },
  { from: 30.5, to: 34, text: "pi esa 3,1410 va 3,1427 orasida qisilib qoladi." },

  { from: 34.3, to: 37, text: "Endi ehtimollik!" },
  { from: 37, to: 41, text: "Kvadratga tasodifiy nuqtalar tashlaymiz." },
  { from: 41, to: 45, text: "Aylana ichiga tushganlar ulushini 4 ga ko'paytiramiz —" },
  { from: 45, to: 48, text: "yana pi chiqadi!" },

  { from: 48.3, to: 51.5, text: "Pi hech qachon tugamaydi va takrorlanmaydi." },
  { from: 51.5, to: 56, text: "Aylanada ham, to'lqinda ham, daryo burilishida ham — hammasida pi bor!" },
  { from: 56, to: 60, text: "Do'stingga yubor!" },
];

/* ------------------------------------------------------------ primitives */

const Background: React.FC = () => {
  const f = useCurrentFrame();
  const drift = Math.sin(f / 90) * 60;
  return (
    <AbsoluteFill style={{ background: C.bg, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          width: 1100,
          height: 1100,
          left: -350 + drift,
          top: -250,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.violet}55, transparent 65%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          right: -380 - drift,
          bottom: -200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.mint}33, transparent 65%)`,
        }}
      />
      <svg width={1080} height={1920} style={{ position: "absolute", opacity: 0.07 }}>
        {Array.from({ length: 28 }, (_, i) => (
          <line key={`v${i}`} x1={i * 40} y1={0} x2={i * 40} y2={1920} stroke="#fff" />
        ))}
        {Array.from({ length: 48 }, (_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 40} x2={1080} y2={i * 40} stroke="#fff" />
        ))}
      </svg>
    </AbsoluteFill>
  );
};

const SceneWrap: React.FC<{ duration: number; children: React.ReactNode }> = ({
  duration,
  children,
}) => {
  const f = useCurrentFrame();
  const o = Math.min(ease(f, 0, 10), ease(f, duration - 10, duration, 1, 0));
  const y = ease(f, 0, 14, 24, 0);
  return (
    <AbsoluteFill style={{ opacity: o, transform: `translateY(${y}px)` }}>
      {children}
    </AbsoluteFill>
  );
};

const StepChip: React.FC<{ n: string; label: string }> = ({ n, label }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 14 } });
  return (
    <div
      style={{
        position: "absolute",
        top: 170,
        left: 60,
        display: "flex",
        alignItems: "center",
        gap: 18,
        transform: `scale(${s})`,
        transformOrigin: "left center",
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 18,
          background: C.violet,
          color: "#fff",
          fontSize: 38,
          fontWeight: 800,
          display: "grid",
          placeItems: "center",
        }}
      >
        {n}
      </div>
      <div style={{ color: C.ink, fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>
        {label}
      </div>
    </div>
  );
};

const Captions: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = f / fps;
  const cap = CAPTIONS.find((c) => t >= c.from && t < c.to);
  if (!cap) return null;
  const local = f - cap.from * fps;
  const s = spring({ frame: local, fps, config: { damping: 16, stiffness: 180 } });
  return (
    <div
      style={{
        position: "absolute",
        left: 60,
        right: 60,
        bottom: 300,
        display: "flex",
        justifyContent: "center",
        transform: `translateY(${(1 - s) * 30}px) scale(${0.92 + 0.08 * s})`,
        opacity: s,
      }}
    >
      <div
        style={{
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: 54,
          lineHeight: 1.2,
          color: C.ink,
          textAlign: "center",
          padding: "18px 34px",
          borderRadius: 28,
          background: "rgba(10,10,18,0.72)",
          border: "2px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(6px)",
        }}
      >
        {cap.text}
      </div>
    </div>
  );
};

/* --------------------------------------------------------------- scene 1 */

const PI_DIGITS = "3.14159265358979";

const Hook: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: f - 4, fps, config: { damping: 9, stiffness: 120 } });
  const digits = Math.floor(ease(f, 14, 80, 1, PI_DIGITS.length));
  const proof = spring({ frame: f - 125, fps, config: { damping: 12 } });
  return (
    <SceneWrap duration={180}>
      <div
        style={{
          position: "absolute",
          top: 230,
          width: "100%",
          textAlign: "center",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontStyle: "italic",
          fontSize: 760,
          lineHeight: 1,
          fontWeight: 700,
          color: C.ink,
          transform: `scale(${pop}) rotate(${(1 - pop) * -18}deg)`,
          textShadow: `0 0 80px ${C.violet}`,
        }}
      >
        π
      </div>
      <div
        style={{
          position: "absolute",
          top: 1060,
          width: "100%",
          textAlign: "center",
          fontFamily: MONO,
          fontSize: 78,
          fontWeight: 700,
          color: C.mint,
        }}
      >
        {PI_DIGITS.slice(0, digits).replace(".", ",")}
        <span style={{ opacity: f % 16 < 8 ? 1 : 0 }}>▍</span>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1220,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          transform: `scale(${proof})`,
          opacity: proof,
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontSize: 46,
            fontWeight: 800,
            color: "#0A0A12",
            background: C.amber,
            padding: "12px 34px",
            borderRadius: 999,
          }}
        >
          60 soniyada isbot
        </div>
      </div>
    </SceneWrap>
  );
};

/* --------------------------------------------------------------- scene 2 */

const Unroll: React.FC = () => {
  const f = useCurrentFrame();
  const cx = 540;
  const cy = 540;
  const r = 150;
  const circ = 2 * Math.PI * r;
  const x0 = (1080 - circ) / 2;
  const lineY = 840;
  const p = ease(f, 70, 160); // unroll progress
  const theta = p * 2 * Math.PI;
  const dotX = cx + r * Math.sin(theta);
  const dotY = cy - r * Math.cos(theta);
  const dIn = ease(f, 10, 40);
  const seg = [0, 1, 2].map((i) => ease(f, 170 + i * 20, 200 + i * 20));
  const rem = ease(f, 235, 265);
  const chips = [
    { label: "kichik", c: "6,28", d: "2" },
    { label: "o'rta", c: "31,4", d: "10" },
    { label: "katta", c: "314", d: "100" },
  ];
  const ratioIn = ease(f, 255, 285);

  return (
    <SceneWrap duration={360}>
      <StepChip n="1" label="Aylana va diametr" />
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
        {/* circle (remaining arc) */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={C.violet}
          strokeWidth={14}
          strokeLinecap="round"
          strokeDasharray={`${Math.max(0.001, (1 - p) * circ)} ${circ}`}
          strokeDashoffset={-p * circ}
          transform={`rotate(-90 ${cx} ${cy})`}
          opacity={ease(f, 0, 20)}
        />
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={14} opacity={ease(f, 0, 20)} />
        {/* diameter */}
        <line
          x1={cx - r * dIn}
          y1={cy}
          x2={cx + r * dIn}
          y2={cy}
          stroke={C.amber}
          strokeWidth={10}
          strokeLinecap="round"
        />
        <text x={cx} y={cy - 22} textAnchor="middle" fill={C.amber} fontFamily={FONT} fontWeight={800} fontSize={42} opacity={dIn}>
          d
        </text>
        {/* unrolled line */}
        <line x1={x0} y1={lineY} x2={x0 + p * circ} y2={lineY} stroke={C.mint} strokeWidth={14} strokeLinecap="round" />
        <line x1={x0} y1={lineY - 18} x2={x0} y2={lineY + 18} stroke={C.ink} strokeWidth={4} opacity={ease(f, 60, 75)} />
        {p > 0 && p < 1 && <circle cx={dotX} cy={dotY} r={14} fill={C.mint} />}
        <text x={540} y={lineY + 80} textAnchor="middle" fill={C.mint} fontFamily={FONT} fontWeight={800} fontSize={44} opacity={ease(f, 150, 175)}>
          aylana uzunligi
        </text>

        {/* diameter pieces measured on the line */}
        {[0, 1, 2].map((i) => (
          <g key={i} opacity={seg[i]}>
            <rect x={x0 + i * 2 * r + 5} y={960} width={(2 * r - 10) * seg[i]} height={54} rx={14} fill={C.amber} />
            <text x={x0 + i * 2 * r + r} y={1000} textAnchor="middle" fill="#0A0A12" fontFamily={FONT} fontWeight={900} fontSize={36}>
              d
            </text>
          </g>
        ))}
        <rect x={x0 + 6 * r + 5} y={960} width={(0.1416 * 2 * r - 6) * rem} height={54} rx={14} fill={C.pink} />
        <text x={x0 + 6 * r + 0.1416 * r + 5} y={1060} textAnchor="middle" fill={C.pink} fontFamily={FONT} fontWeight={800} fontSize={34} opacity={rem}>
          0,14 d
        </text>

        {/* ratio chips */}
        {chips.map((c, i) => {
          const s = ease(f, 265 + i * 12, 290 + i * 12);
          const w = 300;
          const x = 60 + i * (w + 30);
          return (
            <g key={c.label} opacity={s} transform={`translate(0 ${(1 - s) * 30})`}>
              <rect x={x} y={1130} width={w} height={170} rx={28} fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" strokeWidth={2} />
              <text x={x + w / 2} y={1180} textAnchor="middle" fill={C.dim} fontFamily={FONT} fontWeight={700} fontSize={32}>
                {c.label} aylana
              </text>
              <text x={x + w / 2} y={1230} textAnchor="middle" fill={C.ink} fontFamily={MONO} fontWeight={700} fontSize={36}>
                {c.c} ÷ {c.d}
              </text>
              <text x={x + w / 2} y={1280} textAnchor="middle" fill={C.mint} fontFamily={MONO} fontWeight={800} fontSize={46}>
                = 3,14
              </text>
            </g>
          );
        })}
        <text x={540} y={1370} textAnchor="middle" fill={C.ink} fontFamily={FONT} fontWeight={900} fontSize={52} opacity={ratioIn}>
          Uzunlik ÷ diametr = <tspan fill={C.amber}>π</tspan>
        </text>
      </svg>
    </SceneWrap>
  );
};

/* --------------------------------------------------------------- scene 3 */

const SIDES = [6, 12, 24, 48, 96];
const STEP = 92;
const bounds = (n: number) => ({
  lo: n * Math.sin(Math.PI / n),
  hi: n * Math.tan(Math.PI / n),
});

const polyPoints = (n: number, radius: number, cx: number, cy: number) =>
  Array.from({ length: n }, (_, k) => {
    const a = -Math.PI / 2 + (k * 2 * Math.PI) / n;
    return `${cx + radius * Math.cos(a)},${cy + radius * Math.sin(a)}`;
  }).join(" ");

const Archimedes: React.FC = () => {
  const f = useCurrentFrame();
  const s = Math.min(SIDES.length - 1, Math.floor(f / STEP));
  const local = f - s * STEP;
  const n = SIDES[s];
  const prevN = s === 0 ? 3 : SIDES[s - 1];
  const t = ease(local, 0, 24);
  const cx = 540;
  const cy = 640;
  const R = 300;
  const b = bounds(n);
  const pb = bounds(prevN);
  const lo = interpolate(t, [0, 1], [pb.lo, b.lo]);
  const hi = interpolate(t, [0, 1], [pb.hi, b.hi]);
  const gx = (v: number) => 90 + Math.min(1, Math.max(0, (v - 3) / 0.5)) * 900;
  const piX = gx(Math.PI);
  const pulse = 1 + 0.06 * Math.sin(Math.min(local, 20) / 20 * Math.PI);

  return (
    <SceneWrap duration={480}>
      <StepChip n="2" label="Arximed usuli" />
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
        <polygon
          points={polyPoints(n, R / Math.cos(Math.PI / n), cx, cy)}
          fill="rgba(255,77,141,0.08)"
          stroke={C.pink}
          strokeWidth={6}
          strokeLinejoin="round"
        />
        <circle cx={cx} cy={cy} r={R} fill="none" stroke={C.ink} strokeWidth={6} />
        <polygon
          points={polyPoints(n, R, cx, cy)}
          fill="rgba(45,226,166,0.14)"
          stroke={C.mint}
          strokeWidth={6}
          strokeLinejoin="round"
        />
        <text
          x={cx}
          y={cy + 30}
          textAnchor="middle"
          fill={C.ink}
          fontFamily={FONT}
          fontWeight={900}
          fontSize={110}
          transform={`translate(${cx} ${cy}) scale(${pulse}) translate(${-cx} ${-cy})`}
        >
          {n}
        </text>
        <text x={cx} y={cy + 85} textAnchor="middle" fill={C.dim} fontFamily={FONT} fontWeight={700} fontSize={34}>
          tomon
        </text>

        {/* gauge */}
        <text x={90} y={1090} fill={C.dim} fontFamily={FONT} fontWeight={700} fontSize={32}>
          π shu oraliqda:
        </text>
        <rect x={90} y={1120} width={900} height={36} rx={18} fill="rgba(255,255,255,0.08)" />
        <rect x={gx(lo)} y={1120} width={Math.max(4, gx(hi) - gx(lo))} height={36} rx={10} fill={C.mint} />
        <line x1={piX} y1={1100} x2={piX} y2={1176} stroke={C.amber} strokeWidth={5} />
        <text x={piX} y={1224} textAnchor="middle" fill={C.amber} fontFamily={FONT} fontWeight={900} fontSize={44}>
          π
        </text>
        <text x={90} y={1224} fill={C.dim} fontFamily={MONO} fontSize={30}>3,0</text>
        <text x={990} y={1224} textAnchor="end" fill={C.dim} fontFamily={MONO} fontSize={30}>3,5</text>

        <text x={90} y={1330} fill={C.mint} fontFamily={MONO} fontWeight={800} fontSize={54}>
          {fmt(lo, 4)}
        </text>
        <text x={540} y={1330} textAnchor="middle" fill={C.ink} fontFamily={MONO} fontWeight={800} fontSize={54}>
          &lt; π &lt;
        </text>
        <text x={990} y={1330} textAnchor="end" fill={C.pink} fontFamily={MONO} fontWeight={800} fontSize={54}>
          {fmt(hi, 4)}
        </text>
      </svg>
    </SceneWrap>
  );
};

/* --------------------------------------------------------------- scene 4 */

const N_DOTS = 2200;
const DOTS = Array.from({ length: N_DOTS }, (_, i) => {
  const x = random(`x${i}`);
  const y = random(`y${i}`);
  return { x, y, inside: (x - 0.5) ** 2 + (y - 0.5) ** 2 < 0.25 };
});
const INSIDE_PREFIX = (() => {
  const out = [0];
  DOTS.forEach((d, i) => out.push(out[i] + (d.inside ? 1 : 0)));
  return out;
})();

const MonteCarlo: React.FC = () => {
  const f = useCurrentFrame();
  const side = 800;
  const ox = 140;
  const oy = 360;
  const prog = ease(f, 40, 340);
  const count = Math.floor(Math.pow(prog, 1.7) * N_DOTS);
  const inside = INSIDE_PREFIX[count];
  const est = count > 0 ? (4 * inside) / count : 0;
  const box = ease(f, 0, 25);
  const dots = useMemo(() => DOTS, []);

  return (
    <SceneWrap duration={420}>
      <StepChip n="3" label="Ehtimollik bilan" />
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
        <rect x={ox} y={oy} width={side} height={side} rx={8} fill="rgba(255,255,255,0.04)" stroke={C.ink} strokeWidth={5} opacity={box} />
        <circle cx={ox + side / 2} cy={oy + side / 2} r={side / 2} fill="none" stroke={C.violet} strokeWidth={6} opacity={box} />
        {dots.slice(0, count).map((d, i) => (
          <circle
            key={i}
            cx={ox + d.x * side}
            cy={oy + d.y * side}
            r={4.5}
            fill={d.inside ? C.mint : C.pink}
            opacity={0.9}
          />
        ))}
        <text x={ox} y={oy + side + 70} fill={C.mint} fontFamily={MONO} fontWeight={800} fontSize={40}>
          ichkarida: {inside}
        </text>
        <text x={ox + side} y={oy + side + 70} textAnchor="end" fill={C.dim} fontFamily={MONO} fontWeight={700} fontSize={40}>
          jami: {count}
        </text>
        <text x={540} y={oy + side + 170} textAnchor="middle" fill={C.ink} fontFamily={FONT} fontWeight={900} fontSize={54} opacity={ease(f, 50, 75)}>
          4 × {count > 0 ? fmt(inside / count, 3) : "0,000"} = <tspan fill={C.amber}>{fmt(est, 3)}</tspan>
        </text>
      </svg>
    </SceneWrap>
  );
};

/* --------------------------------------------------------------- scene 5 */

const LONG_PI =
  "3.14159265358979323846264338327950288419716939937510";

const Outro: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const typed = Math.floor(ease(f, 6, 150, 0, LONG_PI.length));
  const lines = [0, 18, 36].map((s) => LONG_PI.slice(s, s + 18).replace(".", ","));
  const chips = ["Aylana", "To'lqin", "Daryo"];
  const cta = spring({ frame: f - 255, fps, config: { damping: 10 } });
  const bob = 1 + 0.04 * Math.sin(f / 5);

  return (
    <SceneWrap duration={360}>
      <StepChip n="∞" label="Pi tugamaydi" />
      <div style={{ position: "absolute", top: 330, left: 60, right: 60, fontFamily: MONO, fontWeight: 800, fontSize: 70, lineHeight: 1.35, color: C.mint }}>
        {lines.map((ln, li) => {
          const start = li * 18;
          const shown = Math.max(0, Math.min(ln.length, typed - start));
          return <div key={li}>{ln.slice(0, shown) || " "}</div>;
        })}
      </div>

      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
        {chips.map((label, i) => {
          const s = ease(f, 150 + i * 22, 180 + i * 22);
          const x = 60 + i * 330;
          const y = 850;
          return (
            <g key={label} opacity={s} transform={`translate(0 ${(1 - s) * 40})`}>
              <rect x={x} y={y} width={300} height={300} rx={36} fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" strokeWidth={2} />
              {i === 0 && <circle cx={x + 150} cy={y + 120} r={70} fill="none" stroke={C.violet} strokeWidth={14} />}
              {i === 1 && (
                <path
                  d={Array.from({ length: 41 }, (_, k) => {
                    const px = x + 40 + (k / 40) * 220;
                    const py = y + 120 + Math.sin((k / 40) * Math.PI * 4) * 55;
                    return `${k === 0 ? "M" : "L"}${px},${py}`;
                  }).join(" ")}
                  fill="none"
                  stroke={C.mint}
                  strokeWidth={14}
                  strokeLinecap="round"
                />
              )}
              {i === 2 && (
                <path
                  d={`M${x + 40},${y + 170} C${x + 90},${y + 40} ${x + 120},${y + 200} ${x + 160},${y + 110} S${x + 230},${y + 40} ${x + 260},${y + 150}`}
                  fill="none"
                  stroke={C.amber}
                  strokeWidth={14}
                  strokeLinecap="round"
                />
              )}
              <text x={x + 150} y={y + 262} textAnchor="middle" fill={C.ink} fontFamily={FONT} fontWeight={800} fontSize={40}>
                {label}
              </text>
            </g>
          );
        })}
        <text x={540} y={1270} textAnchor="middle" fill={C.ink} fontFamily={FONT} fontWeight={900} fontSize={56} opacity={ease(f, 220, 245)}>
          Hammasida <tspan fill={C.amber}>π</tspan> bor
        </text>
      </svg>

      <div
        style={{
          position: "absolute",
          top: 1330,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          opacity: cta,
          transform: `scale(${cta * bob})`,
        }}
      >
        <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 52, color: "#0A0A12", background: C.mint, padding: "18px 48px", borderRadius: 999 }}>
          Ulashish →
        </div>
      </div>
    </SceneWrap>
  );
};

/* ------------------------------------------------------------------ root */

export const PiVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ fontFamily: FONT }}>
      <Audio src={staticFile("music.mp3")} volume={0.4} />
      <Background />
      <Sequence durationInFrames={180}>
        <Hook />
      </Sequence>
      <Sequence from={180} durationInFrames={360}>
        <Unroll />
      </Sequence>
      <Sequence from={540} durationInFrames={480}>
        <Archimedes />
      </Sequence>
      <Sequence from={1020} durationInFrames={420}>
        <MonteCarlo />
      </Sequence>
      <Sequence from={1440} durationInFrames={360}>
        <Outro />
      </Sequence>
      <Captions />
    </AbsoluteFill>
  );
};
