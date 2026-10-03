import React from 'react';
import {C} from '../theme';

// Horizontal amber arrow that draws itself as `progress` goes 0 -> 1.
export const Arrow: React.FC<{width: number; progress: number; color?: string}> = ({
	width,
	progress,
	color = C.amber,
}) => {
	const shaft = width - 6;
	const head = Math.max(0, (progress - 0.75) / 0.25);
	return (
		<svg width={width} height={40} viewBox={`0 0 ${width} 40`} style={{overflow: 'visible', flexShrink: 0}}>
			<line
				x1={4}
				y1={20}
				x2={shaft}
				y2={20}
				stroke={color}
				strokeWidth={6}
				strokeLinecap="round"
				strokeDasharray={shaft}
				strokeDashoffset={shaft * (1 - Math.min(1, progress / 0.85))}
			/>
			<path
				d={`M ${shaft - 14} 8 L ${shaft + 2} 20 L ${shaft - 14} 32`}
				fill="none"
				stroke={color}
				strokeWidth={6}
				strokeLinecap="round"
				strokeLinejoin="round"
				opacity={head}
			/>
		</svg>
	);
};
