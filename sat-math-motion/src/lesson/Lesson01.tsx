import React from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame} from 'remotion';
import {Background, prog} from '../components';
import {P1Intro} from '../scenes/P1Intro';
import {P2Facts} from '../scenes/P2Facts';
import {P3Solution} from '../scenes/P3Solution';
import {P4Compare} from '../scenes/P4Compare';
import {P5Trap} from '../scenes/P5Trap';
import {P6Outro} from '../scenes/P6Outro';
import {
  S10Diagnostic,
  S1Topics,
  S2Goals,
  S3Overview,
  S4Adaptive,
  S5Tips,
  S6NoPenalty,
  S6Types,
  S7Domains,
  S8Time,
  S9Keywords,
} from './slides';
import {ClipWithHolds, sec} from './ui';

/** Fades its children out over the last frames of the enclosing Sequence (and optionally in). */
const Fade: React.FC<{duration: number; fadeIn?: boolean; fadeOut?: boolean; children: React.ReactNode}> = ({
  duration,
  fadeIn = false,
  fadeOut = true,
  children,
}) => {
  const frame = useCurrentFrame();
  const o = Math.min(fadeIn ? prog(frame, 0, 12) : 1, fadeOut ? 1 - prog(frame, duration - 10, 10) : 1);
  return <AbsoluteFill style={{opacity: o}}>{children}</AbsoluteFill>;
};

type Part = {at: number; len: number; render: (frames: number) => React.ReactNode};

// Timeline in seconds. Clip placements follow the lesson scenario:
// P1 0:00 · P2 3:00 · P3 4:00 · P4 6:45 · P5 9:45 · P6 11:45
const PARTS: Part[] = [
  // 1 · Muqova
  {
    at: 0,
    len: 30,
    render: (d) => (
      <Fade duration={d}>
        <ClipWithHolds Clip={P1Intro} segments={[[0, 180, d - 180]]} />
        <Sequence from={sec(6)} layout="none">
          <S1Topics />
        </Sequence>
      </Fade>
    ),
  },
  // 2 · Darsning maqsadi
  {at: 30, len: 60, render: (d) => <S2Goals duration={d} />},
  // 3 · Umumiy ko'rinish
  {at: 90, len: 90, render: (d) => <S3Overview duration={d} />},
  // 4 · Asosiy qism: 4 fakt (clip) + adaptivlik
  {
    at: 180,
    len: 30,
    render: (d) => (
      <Fade duration={d}>
        <ClipWithHolds Clip={P2Facts} segments={[[0, 360, d - 360]]} />
      </Fade>
    ),
  },
  {at: 210, len: 30, render: (d) => <S4Adaptive duration={d} />},
  // 5 · 1-misol (clip) + maslahatlar
  {
    at: 240,
    len: 75,
    render: (d) => (
      <Fade duration={d}>
        <ClipWithHolds Clip={P3Solution} segments={[[0, 450, d - 450]]} />
        <Sequence from={sec(15)} layout="none">
          <S5Tips />
        </Sequence>
      </Fade>
    ),
  },
  // 6 · Savol turlari + jarima yo'q
  {at: 315, len: 55, render: (d) => <S6Types duration={d} />},
  {at: 370, len: 35, render: (d) => <S6NoPenalty duration={d} />},
  // 7 · Domenlar (clip) + batafsil
  {
    at: 405,
    len: 20,
    render: (d) => (
      <Fade duration={d}>
        <ClipWithHolds Clip={P4Compare} segments={[[0, 300, d - 300]]} />
      </Fade>
    ),
  },
  {at: 425, len: 70, render: (d) => <S7Domains duration={d} />},
  // 8 · Vaqt strategiyasi
  {at: 495, len: 90, render: (d) => <S8Time duration={d} />},
  // 9 · Tuzoq (clip) + kalit so'zlar
  {
    at: 585,
    len: 20,
    render: (d) => (
      <Fade duration={d}>
        <ClipWithHolds Clip={P5Trap} segments={[[0, 240, d - 240]]} />
      </Fade>
    ),
  },
  {at: 605, len: 40, render: (d) => <S9Keywords duration={d} />},
  // 10 · Diagnostik test
  {at: 645, len: 60, render: (d) => <S10Diagnostic duration={d} />},
  // 11 · Xulosa: recap holds for narration, then next-lesson bar and wordmark
  {
    at: 705,
    len: 24,
    render: (d) => (
      <ClipWithHolds
        Clip={P6Outro}
        segments={[
          [0, 120, sec(14)],
          [120, 240, d - 120 - sec(14) - 120],
        ]}
      />
    ),
  },
];

export const LESSON01_SECONDS = PARTS[PARTS.length - 1].at + PARTS[PARTS.length - 1].len;

export const Lesson01: React.FC = () => (
  <AbsoluteFill>
    <Background />
    {PARTS.map((p) => (
      <Sequence key={p.at} from={sec(p.at)} durationInFrames={sec(p.len)}>
        {p.render(sec(p.len))}
      </Sequence>
    ))}
  </AbsoluteFill>
);
