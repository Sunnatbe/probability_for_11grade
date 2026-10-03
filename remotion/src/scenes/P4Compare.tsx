import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {ease} from '../anim';
import {C, SHADOW} from '../theme';

const TITLE = 'A2, B1, B2: farqi nimada?';
const LEVELS = [
	{
		name: 'Elementary',
		rule: 'oddiy kundalik mavzular',
		example: 'I live in Tashkent. I like football.',
		head: '#16A34A',
		headText: C.white,
		body: '#E7F8EE',
		accent: '#16A34A',
	},
	{
		name: 'Intermediate',
		rule: 'tajriba va rejalar',
		example: 'I have been to Samarkand twice.',
		head: C.pink,
		headText: C.white,
		body: '#FDECF4',
		accent: C.pink,
	},
	{
		name: 'Upper-Int.',
		rule: 'murakkab mavzularda bahs',
		example: "Although it's expensive, it's worth it.",
		head: '#B4BAF3',
		headText: C.ink,
		body: '#EEF0FD',
		accent: '#6D74D8',
	},
];

const CARD_W = 520;
const GAP = 50;
const LEFT = (1920 - (3 * CARD_W + 2 * GAP)) / 2;
const TOP = 290;

const FLIP_AT = [15, 75, 135];
// slightly scattered while flipping in, then they line up
const SCATTER = [
	{y: -28, r: -3.5},
	{y: 34, r: 2.5},
	{y: -8, r: -2},
];
const ALIGN: [number, number] = [190, 218];
const HL_AT = [222, 247, 272];

export const P4Compare: React.FC = () => {
	const frame = useCurrentFrame();
	const title = ease(frame, [0, 18]);
	const align = ease(frame, ALIGN);

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
				<div style={{fontSize: 74, fontWeight: 800, letterSpacing: -1}}>{TITLE}</div>
				<div style={{width: 120, height: 8, borderRadius: 4, backgroundColor: C.amber, margin: '18px auto 0'}} />
			</div>

			{LEVELS.map((l, i) => {
				const flip = ease(frame, [FLIP_AT[i], FLIP_AT[i] + 20]);
				const at = HL_AT[i];
				const hl = interpolate(frame, [at, at + 6, at + 16, at + 24], [0, 1, 1, 0], {
					extrapolateLeft: 'clamp',
					extrapolateRight: 'clamp',
				});
				const y = SCATTER[i].y * (1 - align);
				const r = SCATTER[i].r * (1 - align);
				return (
					<div
						key={l.name}
						style={{
							position: 'absolute',
							left: LEFT + i * (CARD_W + GAP),
							top: TOP,
							width: CARD_W,
							height: 500,
							perspective: 1600,
						}}
					>
						<div
							style={{
								width: '100%',
								height: '100%',
								borderRadius: 30,
								overflow: 'hidden',
								backgroundColor: l.body,
								color: C.ink,
								boxShadow: `${SHADOW}, 0 0 0 ${6 * hl}px ${C.amber}`,
								transform: `translateY(${y}px) rotate(${r}deg) rotateY(${(1 - flip) * 90}deg) scale(${1 + hl * 0.03})`,
								opacity: flip > 0 ? 1 : 0,
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<div
								style={{
									backgroundColor: l.head,
									color: l.headText,
									padding: '34px 40px',
									fontSize: 52,
									fontWeight: 800,
									letterSpacing: -0.5,
								}}
							>
								{l.name}
							</div>
							<div style={{padding: '40px 40px 0', fontSize: 38, fontWeight: 700, lineHeight: 1.3}}>{l.rule}</div>
							<div
								style={{
									margin: 'auto 40px 44px',
									padding: '24px 28px',
									borderRadius: 18,
									backgroundColor: C.white,
									borderLeft: `8px solid ${l.accent}`,
									fontSize: 34,
									fontStyle: 'italic',
									fontWeight: 500,
									lineHeight: 1.4,
									color: C.slate,
								}}
							>
								{l.example}
							</div>
						</div>
					</div>
				);
			})}
		</AbsoluteFill>
	);
};
