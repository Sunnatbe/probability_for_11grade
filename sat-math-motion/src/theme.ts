import './fonts/fonts.css';

export const FONT = "'Inter', 'DejaVu Sans', sans-serif";
export const MATH_FONT = "'Source Serif 4', 'DejaVu Serif', serif";

// Fonts are bundled locally (src/fonts) so rendering works offline.
const FACES = [
  '400 1em Inter',
  '500 1em Inter',
  '600 1em Inter',
  '700 1em Inter',
  '800 1em Inter',
  'italic 400 1em Inter',
  '400 1em "Source Serif 4"',
  'italic 400 1em "Source Serif 4"',
];
export const waitForFonts = () =>
  Promise.all(
    FACES.flatMap((f) => [document.fonts.load(f, "Aa'ʻ"), document.fonts.load(f, 'ğ≈×−·—«»²')]),
  ).then(() => document.fonts.ready);

export const C = {
  navy: '#1B1F3B',
  navyLight: '#262B52',
  navyCard: '#2A3060',
  indigo: '#4F46E5',
  indigoLight: '#6D66F0',
  amber: '#F59E0B',
  amberSoft: '#FDE7B0',
  white: '#FFFFFF',
  lavender: '#C7CCF5',
  ink: '#1B1F3B',
  inkSoft: '#4B5175',
  green: '#22C55E',
  greenDark: '#15803D',
  greenSoft: '#D1FADF',
  pink: '#EC4899',
  pinkDark: '#BE185D',
  pinkSoft: '#FCE1EF',
  lavenderDark: '#4F46E5',
  red: '#EF4444',
};

export const FPS = 30;
export const W = 1920;
export const H = 1080;

export const SHADOW = '0 18px 40px rgba(5, 8, 30, 0.45), 0 4px 10px rgba(5, 8, 30, 0.3)';
