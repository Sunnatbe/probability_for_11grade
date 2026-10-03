import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {ease, pop} from '../anim';
import {C, SHADOW, SHADOW_SOFT} from '../theme';

const BADGE = 'DARS 1';
const LABEL = 'GENERAL ENGLISH · M0 · KIRISH · A2–B1';
const TITLE = 'Kursga kirish va darajani aniqlash testi';
const SUBTITLE = 'Course introduction and placement test';

// Everything is frozen from 5 s so the last second is a clean cut point.
const FREEZE = 150;

const SpeechBubble: React.FC<{size: number; filled: boolean}> = ({size, filled}) => (
	<svg width={size} height={size * 0.82} viewBox="0 0 100 82">
		<path
			d="M14 4 H86 A10 10 0 0 1 96 14 V50 A10 10 0 0 1 86 60 H42 L24 76 L26 60 H14 A10 10 0 0 1 4 50 V14 A10 10 0 0 1 14 4 Z"
			fill={filled ? C.indigo : 'none'}
			stroke={filled ? C.indigo : C.amber}
			strokeWidth={5}
			strokeLinejoin="round"
		/>
		{[32, 50, 68].map((x) => (
			<circle key={x} cx={x} cy={32} r={5.5} fill={filled ? C.white : C.amber} />
		))}
	</svg>
);

const OpenBook: React.FC<{size: number}> = ({size}) => (
	<svg width={size} height={size * 0.7} viewBox="0 0 100 70">
		<path d="M50 14 C38 6 20 5 6 9 V62 C20 58 38 59 50 66 Z" fill={C.white} />
		<path d="M50 14 C62 6 80 5 94 9 V62 C80 58 62 59 50 66 Z" fill={C.lavender} />
		<path d="M50 14 V66" stroke={C.navy3} strokeWidth={3} />
		{[22, 32, 42].map((y) => (
			<React.Fragment key={y}>
				<line x1={14} y1={y} x2={40} y2={y + 2} stroke={C.indigoSoft} strokeWidth={3} strokeLinecap="round" />
				<line x1={60} y1={y + 2} x2={86} y2={y} stroke={C.indigo} strokeWidth={3} strokeLinecap="round" opacity={0.6} />
			</React.Fragment>
		))}
	</svg>
);

const Pencil: React.FC<{size: number}> = ({size}) => (
	<svg width={size} height={size} viewBox="0 0 100 100">
		<g transform="rotate(-40 50 50)">
			<rect x={22} y={40} width={50} height={20} rx={3} fill={C.amber} />
			<rect x={14} y={40} width={10} height={20} rx={3} fill="#F9A8D4" />
			<rect x={22} y={40} width={6} height={20} fill={C.lavender} />
			<path d="M72 40 L90 50 L72 60 Z" fill="#FDE7C2" />
			<path d="M84 46.7 L90 50 L84 53.3 Z" fill={C.navy} />
		</g>
	</svg>
);

const EmojiTile: React.FC<{emoji: string; size: number}> = ({emoji, size}) => (
	<div
		style={{
			width: size,
			height: size,
			borderRadius: size * 0.28,
			backgroundColor: 'rgba(48,55,107,0.85)',
			border: '2px solid rgba(199,204,245,0.22)',
			boxShadow: SHADOW_SOFT,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: size * 0.52,
			lineHeight: 1,
		}}
	>
		{emoji}
	</div>
);

type Floater = {
	node: React.ReactNode;
	x: number;
	y: number;
	dx: number;
	dy: number;
	delay: number;
	rot: number;
};

// Icons live in the top and bottom bands so they never collide with the text.
const FLOATERS: Floater[] = [
	{node: <EmojiTile emoji="📖" size={104} />, x: 1000, y: 70, dx: 0, dy: -260, delay: 6, rot: -6},
	{node: <SpeechBubble size={140} filled />, x: 1210, y: 120, dx: 120, dy: -280, delay: 0, rot: 4},
	{node: <EmojiTile emoji="🎧" size={112} />, x: 1490, y: 70, dx: 200, dy: -240, delay: 10, rot: 7},
	{node: <Pencil size={150} />, x: 1720, y: 190, dx: 320, dy: 0, delay: 4, rot: 0},
	{node: <EmojiTile emoji="🗣️" size={112} />, x: 150, y: 850, dx: -300, dy: 120, delay: 8, rot: -5},
	{node: <OpenBook size={170} />, x: 430, y: 880, dx: 0, dy: 280, delay: 2, rot: -4},
	{node: <EmojiTile emoji="📊" size={100} />, x: 760, y: 860, dx: 0, dy: 300, delay: 12, rot: 5},
	{node: <SpeechBubble size={120} filled={false} />, x: 1040, y: 880, dx: 0, dy: 280, delay: 5, rot: -3},
	{node: <EmojiTile emoji="🎯" size={108} />, x: 1340, y: 850, dx: 60, dy: 300, delay: 9, rot: 6},
	{node: <EmojiTile emoji="✍️" size={112} />, x: 1650, y: 860, dx: 320, dy: 120, delay: 3, rot: -7},
];

export const P1Intro: React.FC = () => {
	const frame = Math.min(useCurrentFrame(), FREEZE);
	const {fps} = useVideoConfig();

	// 2–3.5 s: badge + label
	const badge = pop(frame, fps, 60, 10);
	const label = ease(frame, [66, 92]);

	// 3.5–5 s: title types in, subtitle fades in
	const typed = Math.round(interpolate(frame, [105, 142], [0, TITLE.length], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
	const typing = frame >= 103 && typed < TITLE.length;
	const caretOn = typing && Math.floor(frame / 4) % 2 === 0;
	const sub = ease(frame, [128, 148]);

	return (
		<AbsoluteFill>
			{FLOATERS.map((f, i) => {
				const p = ease(frame, [f.delay, f.delay + 48]);
				// gentle residual drift until the freeze point
				const drift = Math.sin((frame + i * 17) / 40) * 6;
				return (
					<div
						key={i}
						style={{
							position: 'absolute',
							left: f.x,
							top: f.y,
							opacity: p * 0.92,
							transform: `translate(${f.dx * (1 - p)}px, ${f.dy * (1 - p) + drift}px) rotate(${f.rot * (2 - p)}deg)`,
						}}
					>
						{f.node}
					</div>
				);
			})}

			{/* amber label, top-left */}
			<div
				style={{
					position: 'absolute',
					left: 140,
					top: 120,
					padding: '14px 26px',
					borderRadius: 999,
					backgroundColor: C.amber,
					color: C.navy,
					fontSize: 26,
					fontWeight: 800,
					letterSpacing: 2.5,
					boxShadow: SHADOW_SOFT,
					opacity: label,
					transform: `translateX(${(1 - label) * -260}px)`,
				}}
			>
				{LABEL}
			</div>

			{/* indigo badge, right */}
			<div
				style={{
					position: 'absolute',
					left: 1570 - 170,
					top: 520 - 170,
					width: 340,
					height: 340,
					borderRadius: '50%',
					backgroundColor: C.indigo,
					boxShadow: `0 0 0 18px rgba(79,70,229,0.22), ${SHADOW}`,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					transform: `scale(${badge}) rotate(${(1 - badge) * -25}deg)`,
					opacity: Math.min(1, badge * 2),
				}}
			>
				<div style={{fontSize: 92, fontWeight: 800, letterSpacing: 2, color: C.white}}>{BADGE}</div>
			</div>

			{/* title + subtitle */}
			<div
				style={{
					position: 'absolute',
					left: 140,
					top: 330,
					width: 1140,
				}}
			>
				<div style={{fontSize: 92, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5}}>
					<span>{TITLE.slice(0, typed)}</span>
					<span style={{position: 'relative'}}>
						{caretOn ? (
							<span style={{position: 'absolute', left: 4, top: 8, width: 6, height: 88, backgroundColor: C.amber}} />
						) : null}
					</span>
					{/* invisible remainder keeps the line breaks stable while typing */}
					<span style={{opacity: 0}}>{TITLE.slice(typed)}</span>
				</div>
				<div
					style={{
						marginTop: 34,
						fontSize: 42,
						fontStyle: 'italic',
						fontWeight: 500,
						color: C.lavender,
						opacity: sub,
						transform: `translateY(${(1 - sub) * 16}px)`,
					}}
				>
					{SUBTITLE}
				</div>
			</div>
		</AbsoluteFill>
	);
};
