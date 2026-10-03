import React from 'react';
import {C} from '../theme';

// Green circle with a check that "ticks" in as `progress` goes 0 -> 1.
export const CheckCircle: React.FC<{
	size: number;
	progress: number;
	color?: string;
}> = ({size, progress, color = C.green}) => {
	const len = 40;
	return (
		<svg width={size} height={size} viewBox="0 0 48 48" style={{flexShrink: 0, overflow: 'visible'}}>
			<circle cx="24" cy="24" r="22" fill={color} />
			<path
				d="M14 24.5 L21 31.5 L34.5 17"
				fill="none"
				stroke="#fff"
				strokeWidth="5"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeDasharray={len}
				strokeDashoffset={len * (1 - progress)}
			/>
		</svg>
	);
};
