import React from 'react';
import {AbsoluteFill, random, useCurrentFrame} from 'remotion';
import {C} from '../theme';

const COLORS = [C.amber, C.indigo, C.lavender, C.green, '#F472B6', C.white];
const COUNT = 90;

// Deterministic confetti burst from (cx, cy) starting at frame `start`.
export const Confetti: React.FC<{start: number; cx: number; cy: number}> = ({start, cx, cy}) => {
	const t = useCurrentFrame() - start;
	if (t < 0 || t > 70) return null;
	return (
		<AbsoluteFill style={{pointerEvents: 'none'}}>
			{new Array(COUNT).fill(0).map((_, i) => {
				const angle = random(`a${i}`) * Math.PI * 2;
				const speed = 14 + random(`s${i}`) * 26;
				const drag = (1 - Math.pow(0.93, t)) / 0.07;
				const x = cx + Math.cos(angle) * speed * drag;
				const y = cy + Math.sin(angle) * speed * drag - 6 * drag + 0.35 * t * t;
				const w = 10 + random(`w${i}`) * 10;
				const rot = random(`r${i}`) * 360 + t * (8 + random(`v${i}`) * 10);
				const opacity = t < 40 ? 1 : Math.max(0, 1 - (t - 40) / 25);
				return (
					<div
						key={i}
						style={{
							position: 'absolute',
							left: x,
							top: y,
							width: w,
							height: w * 0.45,
							borderRadius: 3,
							backgroundColor: COLORS[i % COLORS.length],
							transform: `rotate(${rot}deg) rotateX(${rot * 1.4}deg)`,
							opacity,
						}}
					/>
				);
			})}
		</AbsoluteFill>
	);
};
