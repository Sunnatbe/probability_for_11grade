/**
 * Faster lesson render: only frames where something moves are rendered by the
 * browser; the long static holds while the narrator talks are filled by
 * repeating the previous frame with ffmpeg.
 *
 *   npx tsx scripts/render-fast.tsx <serveUrl(bundle dir)> <lessonNumber> <out.mp4>
 *
 * Windows that are rendered frame-by-frame: the first seconds of every slide,
 * a few seconds after every narration beat (all reveal animations finish
 * within that), the slide fade-out, the cover intro and the outro confetti.
 */
import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {openBrowser, renderFrames, selectComposition} from '@remotion/renderer';
import {LESSONS} from '../src/course/lessons';
import {buildTimeline, FPS} from '../src/course/timing';

const [serveUrl, nArg, outFile] = process.argv.slice(2);
const n = Number(nArg);
const lesson = LESSONS.find((l) => l.n === n);
if (!lesson) throw new Error(`Lesson ${n} not found`);
const id = `SAT-Dars${String(n).padStart(2, '0')}`;

const AFTER_BEAT = 3.2; // seconds rendered after each beat starts
const SLIDE_HEAD = 2.0; // seconds at each slide start (fade-in, intro motion)
const SLIDE_TAIL = 0.6; // seconds at each slide end (fade-out)

const {slides, total} = buildTimeline(lesson);
const totalFrames = Math.round(total * FPS);
const want = new Set<number>();
const addRange = (a: number, b: number) => {
  const s = Math.max(0, Math.floor(a * FPS));
  const e = Math.min(totalFrames - 1, Math.ceil(b * FPS));
  for (let f = s; f <= e; f++) want.add(f);
};
for (const t of slides) {
  const end = t.start + t.duration;
  addRange(t.start, t.start + (t.kind === 'cover' ? 7.5 : SLIDE_HEAD));
  for (const b of t.beats) addRange(t.start + b, Math.min(end, t.start + b + AFTER_BEAT));
  addRange(end - SLIDE_TAIL, end);
  if (t.kind === 'recap') addRange(t.start + t.beats[Math.min(5, t.beats.length - 1)] - 0.5, end);
}
want.add(0);
want.add(totalFrames - 1);
const frames = [...want].sort((a, b) => a - b);

const main = async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), `dars${n}-`));
  const browser = await openBrowser('chrome', {
    browserExecutable: process.env.REMOTION_BROWSER ?? null,
  });
  const composition = await selectComposition({serveUrl, id, puppeteerInstance: browser});
  if (composition.durationInFrames !== totalFrames) throw new Error('Timeline mismatch');
  console.log(`${id}: ${frames.length}/${totalFrames} kadr render qilinadi (${Math.round((100 * frames.length) / totalFrames)}%)`);
  const t0 = Date.now();
  await renderFrames({
    serveUrl,
    composition,
    inputProps: {},
    frames,
    outputDir: tmp,
    imageFormat: 'jpeg',
    jpegQuality: 95,
    puppeteerInstance: browser,
    concurrency: os.cpus().length,
    onStart: () => undefined,
    onFrameUpdate: () => undefined,
    logLevel: 'error',
    imageSequencePattern: 'f-[frame].[ext]',
  });
  await browser.close({silent: true});
  console.log(`${id}: kadrlar ${(Date.now() - t0) / 1000}s`);

  // Map rendered frame numbers to files.
  const files = new Map<number, string>();
  for (const f of fs.readdirSync(tmp)) {
    const m = f.match(/^f-(\d+)\.jpe?g$/);
    if (m) files.set(Number(m[1]), path.join(tmp, f));
  }
  if (files.size !== frames.length) throw new Error(`Expected ${frames.length} frames, got ${files.size}`);

  // Build an exact image sequence: every output frame is a hard link to the
  // last rendered frame at or before it (no timestamp rounding).
  const seq = path.join(tmp, 'seq');
  fs.mkdirSync(seq);
  let cur = files.get(0)!;
  for (let f = 0; f < totalFrames; f++) {
    cur = files.get(f) ?? cur;
    fs.linkSync(cur, path.join(seq, `s-${String(f).padStart(6, '0')}.jpeg`));
  }
  execFileSync(
    'ffmpeg',
    ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(seq, 's-%06d.jpeg'),
      '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '17', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', outFile],
    {stdio: 'inherit'},
  );
  fs.rmSync(tmp, {recursive: true, force: true});
  console.log(`${id}: tayyor → ${outFile} (${(Date.now() - t0) / 1000}s)`);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
