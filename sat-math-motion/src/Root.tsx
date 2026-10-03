import React, {useEffect, useState} from 'react';
import {Composition, continueRender, delayRender} from 'remotion';
import {FPS, H, W, waitForFonts} from './theme';
import {P1Intro} from './scenes/P1Intro';
import {P2Facts} from './scenes/P2Facts';
import {P3Solution} from './scenes/P3Solution';
import {P4Compare} from './scenes/P4Compare';
import {P5Trap} from './scenes/P5Trap';
import {P6Outro} from './scenes/P6Outro';

/** Holds every frame until the bundled fonts are loaded. */
const withFonts =
  (Scene: React.FC): React.FC =>
  () => {
    const [handle] = useState(() => delayRender('Loading fonts'));
    useEffect(() => {
      waitForFonts().then(() => continueRender(handle));
    }, [handle]);
    return <Scene />;
  };

// One composition per prompt in SAT_Math_Dars01_Digital_SAT_va_diagnostika_motion.txt
const SCENES = [
  {id: 'SAT-01-P1-Intro', component: withFonts(P1Intro), seconds: 6},
  {id: 'SAT-01-P2-Tuzilma', component: withFonts(P2Facts), seconds: 12},
  {id: 'SAT-01-P3-Misol1', component: withFonts(P3Solution), seconds: 15},
  {id: 'SAT-01-P4-Domenlar', component: withFonts(P4Compare), seconds: 10},
  {id: 'SAT-01-P5-Tuzoq', component: withFonts(P5Trap), seconds: 8},
  {id: 'SAT-01-P6-Xulosa', component: withFonts(P6Outro), seconds: 8},
];

export const RemotionRoot: React.FC = () => (
  <>
    {SCENES.map(({id, component, seconds}) => (
      <Composition
        key={id}
        id={id}
        component={component}
        durationInFrames={seconds * FPS}
        fps={FPS}
        width={W}
        height={H}
      />
    ))}
  </>
);
