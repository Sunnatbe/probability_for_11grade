import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {ease, pop} from '../anim';
import {Arrow} from '../components/Arrow';
import {CheckCircle} from '../components/CheckCircle';
import {C, SHADOW} from '../theme';

const TITLE = "4 ko'nikma";
const SKILLS = [
	{name: 'Listening', lead: 'Eshitib tushunish:', rest: " dialog, e'lon, intervyu"},
	{name: 'Reading', lead: "O'qib tushunish:", rest: " matn, xat, e'lon"},
	{name: 'Writing', lead: 'Yozish:', rest: ' xabar, email, hikoya'},
	{name: 'Speaking', lead: 'Gapirish:', rest: ' tanishuv, fikr, muhokama'},
];
const RULE_LEAD = 'Muhim:';
const RULE_REST = " grammatika va lug'at — 4 ko'nikmaning poydevori; har darsda ikkalasi ham bor";

const CARD_W = 380;
const GAP = 80;
const LEFT = (1920 - (4 * CARD_W + 3 * GAP)) / 2;
const CARD_TOP = 280;
const CARD_H = 350;

const CARD_AT = [15, 75, 135, 195];
const ARROW_AT = [52, 112, 172];

export const P2Skills: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const title = ease(frame, [0, 18]);
	const banner = ease(frame, [270, 298]);
	const check = ease(frame, [292, 306]);
	const pulse = interpolate(frame, [306, 316, 328], [1, 1.28, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	const ring = interpolate(frame, [306, 334], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

	return (
		<AbsoluteFill>
			<div
				style={{
					position: 'absolute',
					top: 90,
					width: '100%',
					textAlign: 'center',
					opacity: title,
					transform: `translateY(${(1 - title) * -20}px)`,
				}}
			>
				<div style={{fontSize: 78, fontWeight: 800, letterSpacing: -1}}>{TITLE}</div>
				<div style={{width: 120, height: 8, borderRadius: 4, backgroundColor: C.amber, margin: '18px auto 0'}} />
			</div>

			{ARROW_AT.map((at, i) => (
				<div
					key={i}
					style={{
						position: 'absolute',
						left: LEFT + CARD_W + i * (CARD_W + GAP) + 6,
						top: CARD_TOP + CARD_H / 2 - 20,
					}}
				>
					<Arrow width={GAP - 12} progress={ease(frame, [at, at + 20])} />
				</div>
			))}

			{SKILLS.map((s, i) => {
				const p = pop(frame, fps, CARD_AT[i], 9);
				const scale = interpolate(p, [0, 1], [0.6, 1]);
				return (
					<div
						key={s.name}
						style={{
							position: 'absolute',
							left: LEFT + i * (CARD_W + GAP),
							top: CARD_TOP,
							width: CARD_W,
							height: CARD_H,
							borderRadius: 30,
							backgroundColor: C.white,
							boxShadow: SHADOW,
							padding: '40px 36px',
							boxSizing: 'border-box',
							color: C.ink,
							opacity: Math.min(1, p * 1.6),
							transform: `translateY(${(1 - Math.min(1, p)) * 40}px) scale(${scale})`,
						}}
					>
						<div
							style={{
								width: 84,
								height: 84,
								borderRadius: '50%',
								backgroundColor: C.indigo,
								color: C.white,
								fontSize: 44,
								fontWeight: 800,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								boxShadow: '0 0 0 8px rgba(79,70,229,0.15)',
							}}
						>
							{i + 1}
						</div>
						<div style={{fontSize: 48, fontWeight: 800, marginTop: 34, letterSpacing: -0.5}}>{s.name}</div>
						<div style={{fontSize: 30, lineHeight: 1.4, marginTop: 16, color: C.slate}}>
							<span style={{fontWeight: 700, color: C.indigo}}>{s.lead}</span>
							{s.rest}
						</div>
					</div>
				);
			})}

			{/* key rule banner */}
			<div
				style={{
					position: 'absolute',
					left: 160,
					top: 760,
					width: 1600,
					minHeight: 170,
					boxSizing: 'border-box',
					padding: '30px 48px',
					borderRadius: 30,
					border: `5px solid ${C.amber}`,
					backgroundColor: C.navy2,
					boxShadow: SHADOW,
					display: 'flex',
					alignItems: 'center',
					gap: 36,
					opacity: banner,
					transform: `translateY(${(1 - banner) * 320}px)`,
				}}
			>
				<div style={{position: 'relative', width: 84, height: 84, flexShrink: 0}}>
					<div
						style={{
							position: 'absolute',
							inset: 0,
							borderRadius: '50%',
							border: `4px solid ${C.green}`,
							transform: `scale(${1 + ring * 0.9})`,
							opacity: ring > 0 ? 1 - ring : 0,
						}}
					/>
					<div style={{transform: `scale(${pulse})`}}>
						<CheckCircle size={84} progress={check} />
					</div>
				</div>
				<div style={{fontSize: 40, fontWeight: 600, lineHeight: 1.35}}>
					<span style={{color: C.amber, fontWeight: 800}}>{RULE_LEAD}</span>
					{RULE_REST}
				</div>
			</div>
		</AbsoluteFill>
	);
};
