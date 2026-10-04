import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {Background} from '../components';
import {
  CardsSlide,
  CompareSlide,
  CoverSlide,
  CustomSlide,
  ExampleSlide,
  FormulaSlide,
  GoalsSlide,
  GraphSlide,
  RecapSlide,
  SlideProps,
  TableSlide,
  TrapSlide,
} from './slides';
import {buildTimeline, FPS} from './timing';
import type {Lesson} from './types';

const RENDERERS: Record<string, React.FC<SlideProps>> = {
  cover: CoverSlide,
  goals: GoalsSlide,
  cards: CardsSlide,
  formula: FormulaSlide,
  example: ExampleSlide,
  compare: CompareSlide,
  trap: TrapSlide,
  graph: GraphSlide,
  table: TableSlide,
  custom: CustomSlide,
};

export const CourseLesson: React.FC<{lesson: Lesson; next: string}> = ({lesson, next}) => {
  const {slides} = buildTimeline(lesson);
  const total = slides.length;
  return (
    <AbsoluteFill>
      <Background />
      {slides.map((t) => {
        const props = {t, lesson, total};
        const body = t.kind === 'recap' ? <RecapSlide {...props} next={next} /> : React.createElement(RENDERERS[t.kind], props);
        return (
          <Sequence key={t.index} from={Math.round(t.start * FPS)} durationInFrames={Math.round(t.duration * FPS)}>
            {body}
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
