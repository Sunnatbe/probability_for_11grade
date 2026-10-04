import type React from 'react';

/**
 * Course lesson data. Every text field may contain inline math as $...$ (KaTeX)
 * and **bold**. Each slide has a `say` list: the narration, split into beats.
 * Beat k starts when reveal k happens on screen, and the slide's length is
 * derived from how long the narration takes to read (see timing.ts).
 */

export type Card = {title: string; text?: string; icon?: IconName};

export type IconName =
  | 'timer'
  | 'calc'
  | 'book'
  | 'flag'
  | 'laptop'
  | 'target'
  | 'chart'
  | 'clock'
  | 'dice'
  | 'question'
  | 'bolt'
  | 'bulb'
  | 'check'
  | 'warn';

export type GraphItem =
  | {kind: 'fn'; f: (x: number) => number; color?: string; label?: string; note?: string; domain?: [number, number]}
  | {kind: 'point'; x: number; y: number; label?: string; color?: string; note?: string}
  | {kind: 'circle'; h: number; k: number; r: number; color?: string; label?: string; note?: string}
  | {kind: 'segment'; from: [number, number]; to: [number, number]; color?: string; dashed?: boolean; label?: string; note?: string}
  | {kind: 'region'; f: (x: number) => number; above: boolean; dashed?: boolean; color?: string; label?: string; note?: string}
  | {kind: 'note'; note: string};

export type Slide =
  | {type: 'cards'; kicker: string; title: string; cards: Card[]; banner?: string; cols?: number; say: string[]}
  | {type: 'formula'; kicker: string; title: string; formulas: {label: string; tex: string; note?: string}[]; banner?: string; say: string[]}
  | {
      type: 'example';
      kicker: string;
      title?: string;
      label?: string; // e.g. "SAT SAVOLI"
      question: string;
      choices?: string[]; // A–D
      steps: {m: string; note?: string}[];
      answer: string; // e.g. "x = 4" or "C"
      tip?: string; // side card, appears after the answer
      say: string[];
    }
  | {type: 'compare'; kicker: string; title: string; cards: {title: string; rule: string; example?: string}[]; banner?: string; say: string[]}
  | {type: 'trap'; title: string; question: string; wrong: string; why: string; right: string; say: string[]}
  | {type: 'graph'; kicker: string; title: string; x: [number, number]; y: [number, number]; items: GraphItem[]; say: string[]}
  | {type: 'table'; kicker: string; title: string; head: string[]; rows: string[][]; banner?: string; say: string[]}
  | {
      type: 'custom';
      kicker: string;
      title: string;
      /** Gets the beat start times (seconds, slide-relative). */
      render: (beat: (i: number) => number) => React.ReactNode;
      beats: number; // number of reveals the custom figure needs (excluding beat 0)
      doc: string; // markdown used for the lesson text (dars matni)
      say: string[];
    };

export type Lesson = {
  n: number;
  module: string; // "M1"
  moduleName: string; // "ALGEBRA"
  title: string;
  titleEn: string;
  topics: string[]; // chips on the cover
  cover: string[]; // narration: [greeting+title, topics]
  goals: string[]; // 4 goals
  goalsSay: string[]; // [intro, g1, g2, g3, g4, result]
  goalsResult: string;
  slides: Slide[];
  recap: string[]; // 3 points
  homework: string;
  recapSay: string[]; // [heading, p1, p2, p3, homework+next, bye]
};
