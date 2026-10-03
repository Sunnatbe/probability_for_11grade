import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {ease, pop} from '../anim';
import {CheckCircle} from '../components/CheckCircle';
import {C, SHADOW} from '../theme';

const LABEL = 'DIQQAT!';
const TITLE = "«Tasodifiy javob» tuzog'i";
const EXAMPLE = 'Diagnostikada past ball — bu yomon emas.';
const RULE = "Test sizni baholamaydi, faqat boshlang'ich nuqtani ko'rsatadi.";

const WarningTriangle: React.FC<{size: number}> = ({size}) => (
	<svg width={size} height={size * 0.9} viewBox="0 0 100 90">
		<path
			d="M50 6 L95 84 H5 Z"
			fill={C.amber}
			stroke={C.amber}
			strokeWidth={10}
			strokeLinejoin="round"
		/>
		<rect x={45} y={30} width={10} height={30} rx={5} fill={C.navy} />
		<circle cx={50} cy={71} r={6} fill={C.navy} />
	</svg>
);

export const P5Trap: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// 0–2 s: triangle drops in and wobbles, label + title appear
	const drop = pop(frame, fps, 0, 9);
	const wt = frame - 14;
	const wobble = wt > 0 ? Math.sin(wt / 3) * 12 * Math.exp(-wt / 14) : 0;
	const label = ease(frame, [16, 34]);
	const title = ease(frame, [26, 46]);

	// 2–4 s: example card appears
	const card = pop(frame, fps, 60, 14);

	// 4–8 s: card slides aside, rule slides in with a green check
	const aside = ease(frame, [120, 148]);
	const rule = ease(frame, [130, 160]);
	const check = ease(frame, [156, 172]);
	const checkPop = interpolate(frame, [168, 176, 186], [1, 1.22, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

	return (
		<AbsoluteFill>
			{/* header */}
			<div style={{position: 'absolute', left: 160, top: 90, display: 'flex', alignItems: 'center', gap: 44}}>
				<div
					style={{
						transform: `translateY(${(1 - drop) * -420}px) rotate(${wobble}deg)`,
						transformOrigin: '50% 90%',
						filter: 'drop-shadow(0 14px 24px rgba(0,0,0,0.35))',
					}}
				>
					<WarningTriangle size={190} />
				</div>
				<div>
					<div
						style={{
							fontSize: 40,
							fontWeight: 800,
							letterSpacing: 8,
							color: C.amber,
							opacity: label,
							transform: `translateX(${(1 - label) * -30}px)`,
						}}
					>
						{LABEL}
					</div>
					<div
						style={{
							fontSize: 78,
							fontWeight: 800,
							letterSpacing: -1,
							marginTop: 8,
							opacity: title,
							transform: `translateX(${(1 - title) * -30}px)`,
						}}
					>
						{TITLE}
					</div>
				</div>
			</div>

			{/* example card (light) */}
			<div
				style={{
					position: 'absolute',
					left: interpolate(aside, [0, 1], [410, 160]),
					top: 590,
					width: 1100,
					boxSizing: 'border-box',
					padding: '54px 60px',
					borderRadius: 30,
					backgroundColor: '#F4F5FF',
					borderLeft: `12px solid ${C.amber}`,
					color: C.ink,
					boxShadow: SHADOW,
					fontSize: 52,
					fontWeight: 700,
					lineHeight: 1.3,
					opacity: Math.min(1, card * 1.5) * interpolate(aside, [0, 1], [1, 0.8]),
					transform: `translateY(-50%) translateY(${(1 - Math.min(1, card)) * 60}px) scale(${interpolate(card, [0, 1], [0.85, 1]) * interpolate(aside, [0, 1], [1, 0.62])})`,
					transformOrigin: 'left center',
				}}
			>
				{EXAMPLE}
			</div>

			{/* correct rule */}
			<div
				style={{
					position: 'absolute',
					left: 900,
					top: 590,
					width: 860,
					boxSizing: 'border-box',
					padding: '50px 54px',
					borderRadius: 30,
					backgroundColor: C.white,
					border: `5px solid ${C.green}`,
					color: C.ink,
					boxShadow: SHADOW,
					display: 'flex',
					alignItems: 'center',
					gap: 36,
					opacity: rule,
					transform: `translateY(-50%) translateX(${(1 - rule) * 700}px)`,
				}}
			>
				<div style={{transform: `scale(${checkPop})`}}>
					<CheckCircle size={104} progress={check} />
				</div>
				<div style={{fontSize: 46, fontWeight: 700, lineHeight: 1.3}}>{RULE}</div>
			</div>
		</AbsoluteFill>
	);
};
