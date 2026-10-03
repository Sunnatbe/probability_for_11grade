import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {ease} from '../anim';
import {CheckCircle} from '../components/CheckCircle';
import {Confetti} from '../components/Confetti';
import {C, SHADOW, SHADOW_SOFT} from '../theme';

const HEADING = 'Xulosa';
const POINTS = [
	"CEFR: A1–A2 — boshlang'ich, B1–B2 — mustaqil, C1–C2 — erkin",
	"4 ko'nikma + grammatika va lug'at — har birini mashq qilamiz",
	"Diagnostika — boshlang'ich nuqta; o'sishni mock testlar bilan o'lchaymiz",
];
const NOW = 'Hozir: platformada diagnostik test (40 savol, 30 min)';
const NEXT = "Keyingi: Dars 2 — Qanday o'rganamiz: lug'at daftari, talaffuz va takrorlash";
const WORDMARK = ['Kholmurodov', 'Academy'];

const POINT_AT = [12, 42, 72];

export const P6Outro: React.FC = () => {
	const frame = useCurrentFrame();

	const heading = ease(frame, [0, 16]);
	const bar = ease(frame, [120, 146]);
	const pill = ease(frame, [134, 156]);

	// 6–8 s: confetti, recap dims, wordmark fades in and holds
	const dim = ease(frame, [186, 206]);
	const mark = ease(frame, [192, 214]);

	return (
		<AbsoluteFill>
			<AbsoluteFill style={{filter: `blur(${dim * 6}px)`}}>
				<div
					style={{
						position: 'absolute',
						left: 160,
						top: 90,
						fontSize: 80,
						fontWeight: 800,
						letterSpacing: -1,
						opacity: heading,
						transform: `translateY(${(1 - heading) * -20}px)`,
					}}
				>
					{HEADING}
					<div style={{width: 110, height: 8, borderRadius: 4, backgroundColor: C.amber, marginTop: 14}} />
				</div>

				{POINTS.map((p, i) => {
					const at = POINT_AT[i];
					const tick = ease(frame, [at, at + 14]);
					const txt = ease(frame, [at + 6, at + 24]);
					return (
						<div
							key={p}
							style={{
								position: 'absolute',
								left: 160,
								top: 270 + i * 118,
								display: 'flex',
								alignItems: 'center',
								gap: 30,
							}}
						>
							<div style={{transform: `scale(${interpolate(tick, [0, 0.6, 1], [0.4, 1.15, 1])})`, opacity: Math.min(1, tick * 3)}}>
								<CheckCircle size={72} progress={tick} />
							</div>
							<div
								style={{
									fontSize: 40,
									fontWeight: 600,
									opacity: txt,
									transform: `translateX(${(1 - txt) * -30}px)`,
								}}
							>
								{p}
							</div>
						</div>
					);
				})}

				{/* "now" pill */}
				<div
					style={{
						position: 'absolute',
						left: 160,
						top: 696,
						padding: '14px 30px',
						borderRadius: 999,
						backgroundColor: C.amber,
						color: C.navy,
						fontSize: 32,
						fontWeight: 800,
						boxShadow: SHADOW_SOFT,
						opacity: pill,
						transform: `translateY(${(1 - pill) * 40}px)`,
					}}
				>
					{NOW}
				</div>

				{/* next-lesson bar */}
				<div
					style={{
						position: 'absolute',
						left: 120,
						top: 810,
						width: 1680,
						height: 150,
						boxSizing: 'border-box',
						padding: '0 50px',
						borderRadius: 30,
						backgroundColor: C.indigo,
						boxShadow: SHADOW,
						display: 'flex',
						alignItems: 'center',
						fontSize: 42,
						fontWeight: 700,
						opacity: bar,
						transform: `translateY(${(1 - bar) * 300}px)`,
					}}
				>
					{NEXT}
				</div>
			</AbsoluteFill>

			<AbsoluteFill style={{backgroundColor: C.navy, opacity: dim * 0.82}} />

			<AbsoluteFill
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					opacity: mark,
					transform: `scale(${interpolate(mark, [0, 1], [0.92, 1])})`,
				}}
			>
				<div style={{fontSize: 120, fontWeight: 800, letterSpacing: -2}}>
					{WORDMARK[0]} <span style={{color: C.amber}}>{WORDMARK[1]}</span>
				</div>
				<div style={{width: 180, height: 10, borderRadius: 5, backgroundColor: C.indigo, marginTop: 26}} />
			</AbsoluteFill>

			<Confetti start={180} cx={960} cy={540} />
		</AbsoluteFill>
	);
};
