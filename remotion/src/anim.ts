import {Easing, interpolate, spring} from 'remotion';

// Clamped ease-in-out tween: maps frame range -> output range.
export const ease = (
	frame: number,
	range: [number, number],
	out: [number, number] = [0, 1],
) =>
	interpolate(frame, range, out, {
		easing: Easing.inOut(Easing.cubic),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

// Springy 0 -> 1 progress starting at `delay` frames (slight overshoot).
export const pop = (frame: number, fps: number, delay: number, damping = 11) =>
	spring({frame: frame - delay, fps, config: {damping, stiffness: 150, mass: 0.8}});

// Smooth 0 -> 1 progress without overshoot.
export const settle = (frame: number, fps: number, delay: number) =>
	spring({frame: frame - delay, fps, config: {damping: 200}, durationInFrames: 24});
