import React from 'react';
import {AbsoluteFill} from 'remotion';
import {C, FONT} from '../theme';

// Flat navy stage with two very soft colour glows and a faint dot grid.
export const Background: React.FC<{children?: React.ReactNode}> = ({children}) => (
	<AbsoluteFill style={{backgroundColor: C.navy, fontFamily: FONT, color: C.white}}>
		<AbsoluteFill
			style={{
				background:
					'radial-gradient(900px 600px at 8% 0%, rgba(79,70,229,0.22), transparent 70%),' +
					'radial-gradient(800px 560px at 100% 100%, rgba(245,158,11,0.10), transparent 70%)',
			}}
		/>
		<AbsoluteFill
			style={{
				backgroundImage: 'radial-gradient(rgba(199,204,245,0.07) 1.6px, transparent 1.6px)',
				backgroundSize: '44px 44px',
			}}
		/>
		{children}
	</AbsoluteFill>
);
