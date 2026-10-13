import { Composition } from "remotion";
import { PiVideo, PI_DURATION, FPS } from "./PiVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="PiIsboti"
      component={PiVideo}
      durationInFrames={PI_DURATION}
      fps={FPS}
      width={1080}
      height={1920}
    />
  );
};
