import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/400-italic.css';
import '@fontsource/inter/500-italic.css';
import {continueRender, delayRender} from 'remotion';

// Make sure every Inter face is ready before the first frame is captured.
const handle = delayRender('Loading Inter');
Promise.all(
	[
		'400 40px Inter',
		'500 40px Inter',
		'600 40px Inter',
		'700 40px Inter',
		'800 40px Inter',
		'italic 400 40px Inter',
		'italic 500 40px Inter',
	].map((f) => document.fonts.load(f, "AaBb'«»—–✓")),
)
	.catch((err) => console.warn('Font load failed', err))
	.finally(() => continueRender(handle));
