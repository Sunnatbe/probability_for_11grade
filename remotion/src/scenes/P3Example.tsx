import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {ease, pop} from '../anim';
import {Arrow} from '../components/Arrow';
import {C, SHADOW, SHADOW_SOFT} from '../theme';

// Task text: "Choose the correct answer: She ___ to school every day.  A) go  B) goes  C) going"
const OPTIONS = ['A) go', 'B) goes', 'C) going'];
const RESULT = 'Bu savol A2 darajani tekshiradi ✓';

const STEP_AT = [95, 185, 275];
const ARROW_AT = [160, 250];

const Highlight: React.FC<{on: number; children: React.ReactNode}> = ({on, children}) => (
	<span
		style={{
			color: interpolateColor(on),
			backgroundImage: `linear-gradient(${C.amber}, ${C.amber})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: '0 100%',
			backgroundSize: `${on * 100}% 6px`,
			paddingBottom: 4,
		}}
	>
		{children}
	</span>
);

// white -> amber
const interpolateColor = (t: number) => {
	const r = Math.round(255 + (245 - 255) * t);
	const g = Math.round(255 + (158 - 255) * t);
	const b = Math.round(255 + (11 - 255) * t);
	return `rgb(${r},${g},${b})`;
};

const StepCard: React.FC<{p: number; children: React.ReactNode; final?: boolean}> = ({p, children, final}) => (
	<div
		style={{
			padding: '30px 38px',
			borderRadius: 26,
			backgroundColor: final ? C.white : C.navy3,
			border: final ? `4px solid ${C.indigo}` : '2px solid rgba(199,204,245,0.28)',
			color: final ? C.ink : C.white,
			boxShadow: SHADOW_SOFT,
			fontSize: final ? 40 : 36,
			fontWeight: 600,
			whiteSpace: 'nowrap',
			opacity: Math.min(1, p * 1.5),
			transform: `translateY(${(1 - Math.min(1, p)) * 50}px) scale(${interpolate(p, [0, 1], [0.85, 1])})`,
		}}
	>
		{children}
	</div>
);

export const P3Example: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const task = ease(frame, [0, 24]);
	const tag = pop(frame, fps, 12);
	const steps = STEP_AT.map((at) => pop(frame, fps, at, 13));
	const hlTime = ease(frame, [STEP_AT[0] + 6, STEP_AT[0] + 22]);
	const hlSubj = ease(frame, [STEP_AT[1] + 6, STEP_AT[1] + 22]);
	const pick = ease(frame, [STEP_AT[2] + 8, STEP_AT[2] + 22]);

	// "goes": indigo glow + gentle decaying bounce
	const t = frame - (STEP_AT[2] + 14);
	const bounce = t > 0 ? -Math.abs(Math.sin(t / 6)) * 14 * Math.exp(-t / 40) : 0;
	const glow = t > 0 ? 0.55 + 0.45 * Math.sin(t / 7) * Math.exp(-t / 90) : 0;

	const strip = ease(frame, [360, 388]);

	return (
		<AbsoluteFill>
			{/* task card */}
			<div
				style={{
					position: 'absolute',
					left: 160,
					top: 80,
					width: 1600,
					boxSizing: 'border-box',
					padding: '58px 60px 46px',
					borderRadius: 32,
					backgroundColor: C.navy2,
					border: '2px solid rgba(199,204,245,0.22)',
					boxShadow: SHADOW,
					opacity: task,
					transform: `translateY(${(1 - task) * -40}px)`,
				}}
			>
				<div
					style={{
						position: 'absolute',
						left: 48,
						top: -24,
						padding: '10px 24px',
						borderRadius: 999,
						backgroundColor: C.amber,
						color: C.navy,
						fontSize: 26,
						fontWeight: 800,
						letterSpacing: 3,
						transform: `scale(${tag})`,
						transformOrigin: 'left center',
					}}
				>
					TOPSHIRIQ
				</div>
				<div style={{fontSize: 34, color: C.lavender, fontWeight: 500}}>Choose the correct answer:</div>
				<div style={{fontSize: 64, fontWeight: 700, marginTop: 14, letterSpacing: -0.5}}>
					<Highlight on={hlSubj}>She</Highlight> ___ to school <Highlight on={hlTime}>every day</Highlight>.
				</div>
				<div style={{display: 'flex', gap: 24, marginTop: 30}}>
					{OPTIONS.map((o, i) => {
						const on = i === 1 ? pick : 0;
						return (
							<div
								key={o}
								style={{
									padding: '12px 30px',
									borderRadius: 18,
									fontSize: 36,
									fontWeight: 700,
									border: `3px solid ${on > 0.5 ? C.indigo : 'rgba(199,204,245,0.35)'}`,
									backgroundColor: `rgba(79,70,229,${on})`,
									color: C.white,
									opacity: i === 1 ? 1 : 1 - pick * 0.5,
									boxShadow: on > 0 ? `0 0 ${30 * on}px rgba(79,70,229,0.7)` : 'none',
								}}
							>
								{o}
							</div>
						);
					})}
				</div>
			</div>

			{/* reasoning steps */}
			<div
				style={{
					position: 'absolute',
					top: 560,
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 22,
				}}
			>
				<StepCard p={steps[0]}>
					Vaqt belgisi: <span style={{color: C.amber, fontWeight: 800}}>every day</span>
				</StepCard>
				<Arrow width={70} progress={ease(frame, [ARROW_AT[0], ARROW_AT[0] + 20])} />
				<StepCard p={steps[1]}>
					Ega: <span style={{color: C.amber, fontWeight: 800}}>she</span>
				</StepCard>
				<Arrow width={70} progress={ease(frame, [ARROW_AT[1], ARROW_AT[1] + 20])} />
				<StepCard p={steps[2]} final>
					B) She{' '}
					<span
						style={{
							display: 'inline-block',
							padding: '0 14px',
							borderRadius: 12,
							backgroundColor: C.indigo,
							color: C.white,
							fontWeight: 800,
							transform: `translateY(${bounce}px)`,
							boxShadow: `0 0 ${36 * glow}px ${10 * glow}px rgba(79,70,229,0.55)`,
						}}
					>
						goes
					</span>{' '}
					to school every day.
				</StepCard>
			</div>

			{/* result strip */}
			<div
				style={{
					position: 'absolute',
					left: 160,
					top: 860,
					width: 1600,
					height: 130,
					borderRadius: 26,
					backgroundColor: C.greenDark,
					boxShadow: SHADOW,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: 46,
					fontWeight: 700,
					color: C.white,
					opacity: strip,
					transform: `translateY(${(1 - strip) * 200}px)`,
				}}
			>
				{RESULT}
			</div>
		</AbsoluteFill>
	);
};
