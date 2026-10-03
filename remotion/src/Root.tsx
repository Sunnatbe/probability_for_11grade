import React from 'react';
import {Composition, Series} from 'remotion';
import './fonts';
import {Background} from './components/Background';
import {P1Intro} from './scenes/P1Intro';
import {P2Skills} from './scenes/P2Skills';
import {P3Example} from './scenes/P3Example';
import {P4Compare} from './scenes/P4Compare';
import {P5Trap} from './scenes/P5Trap';
import {P6Outro} from './scenes/P6Outro';
import {FPS, H, W} from './theme';

// id, scene and duration (seconds) as in General_English_Dars01_Kirish_va_diagnostika_motion.txt
const CLIPS = [
	{id: 'ENG-01-P1', seconds: 6, Scene: P1Intro},
	{id: 'ENG-01-P2', seconds: 12, Scene: P2Skills},
	{id: 'ENG-01-P3', seconds: 15, Scene: P3Example},
	{id: 'ENG-01-P4', seconds: 10, Scene: P4Compare},
	{id: 'ENG-01-P5', seconds: 8, Scene: P5Trap},
	{id: 'ENG-01-P6', seconds: 8, Scene: P6Outro},
];

const withBackground = (Scene: React.FC) => {
	const Wrapped: React.FC = () => (
		<Background>
			<Scene />
		</Background>
	);
	return Wrapped;
};

const CLIP_COMPONENTS = CLIPS.map((c) => ({...c, Component: withBackground(c.Scene)}));

// All six clips back to back — handy for previewing in the studio.
const AllClips: React.FC = () => (
	<Series>
		{CLIP_COMPONENTS.map(({id, seconds, Component}) => (
			<Series.Sequence key={id} durationInFrames={seconds * FPS}>
				<Component />
			</Series.Sequence>
		))}
	</Series>
);

export const RemotionRoot: React.FC = () => (
	<>
		{CLIP_COMPONENTS.map(({id, seconds, Component}) => (
			<Composition key={id} id={id} component={Component} durationInFrames={seconds * FPS} fps={FPS} width={W} height={H} />
		))}
		<Composition
			id="ENG-01-All"
			component={AllClips}
			durationInFrames={CLIPS.reduce((s, c) => s + c.seconds * FPS, 0)}
			fps={FPS}
			width={W}
			height={H}
		/>
	</>
);
