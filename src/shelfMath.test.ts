import test from 'node:test';
import assert from 'node:assert/strict';
import {
  FILMS,
  SHEETS,
  boxDimensions,
  computeTapeTransform,
  cropBackgroundCss,
  decadeForYear,
  mod,
  posterSvgCoords,
  shelfX,
  shortestLoopTarget,
  smoothStepB,
  smoothstep,
  wrapRel,
} from './shelfMath';

test('FILMS data keeps White Clover intact and replaces other 12 films with modern releases', () => {
  assert.equal(FILMS.length, 13);
  assert.equal(FILMS[0].id, 'clover');
  assert.equal(FILMS[0].year, 1987);
  assert.equal(FILMS[0].customAsset, '/assets/aistudio/PixVerse_Image_Effect_prompt__1__91dbbeb1.png');
  assert.equal(FILMS[2].id, 'spiderman');
  assert.equal(FILMS[4].id, 'summer500');
  assert.equal(FILMS[5].id, 'avengers');
  assert.equal(FILMS[6].id, 'johnwick');
  assert.equal(FILMS[6].title, 'John Wick');
  assert.equal(FILMS[6].year, 2014);
  assert.equal(FILMS[12].id, 'barbie');
});

test('smoothstep and smoothStepB continuity and boundaries', () => {
  assert.equal(smoothstep(-1), 0);
  assert.equal(smoothstep(0), 0);
  assert.equal(smoothstep(0.5), 0.5);
  assert.equal(smoothstep(1), 1);
  assert.equal(smoothstep(2), 1);

  assert.equal(smoothStepB(0), 0);
  assert.ok(Math.abs(smoothStepB(0.999999) - 0.5) < 1e-5);
  assert.equal(smoothStepB(1), 0.5);
  assert.equal(smoothStepB(-1), -0.5);
});

test('shelfX separates neighbours around open cover by exact half extra width', () => {
  const { ws, d, gap } = boxDimensions(400);
  assert.equal(shelfX(0, ws, d, gap), 0);
  const x1 = shelfX(1, ws, d, gap);
  const x2 = shelfX(2, ws, d, gap);
  // Step from r=1 to r=2 is pure spine + gap
  assert.ok(Math.abs((x2 - x1) - (ws + gap)) < 1e-9);
  // Step from r=0 to r=1 includes half extra width (d - ws + 1.6*gap)/2
  const expectedX1 = ws + gap + (d - ws + 1.6 * gap) * 0.5;
  assert.ok(Math.abs(x1 - expectedX1) < 1e-9);
});

test('wrapRel wraps 39 virtual tapes into [-19.5, +19.5)', () => {
  assert.equal(wrapRel(18, 18, 39), 0);
  assert.equal(wrapRel(0, 18, 39), -18);
  assert.equal(wrapRel(38, 18, 39), -19);
  assert.equal(wrapRel(37, 18, 39), 19);
});

test('computeTapeTransform computes active vs spine faces accurately', () => {
  const H = 400;
  const { ws, d, gap } = boxDimensions(H);
  const active = computeTapeTransform(0, H, ws, d, gap, 0, 2, -3);
  assert.equal(active.o, 1);
  assert.equal(active.ry, -93);
  assert.equal(active.rx, 2);
  assert.equal(active.rz, -4.5);
  assert.equal(active.z, 80);
  assert.equal(active.y, -10);
  assert.equal(active.spineShade, 0.55);
  assert.equal(active.coverShade, 0);

  const spine = computeTapeTransform(2, H, ws, d, gap, 1, 2, -3);
  assert.equal(spine.o, 0);
  assert.equal(spine.ry, 0);
  assert.equal(spine.rx, 0);
  assert.equal(spine.rz, 0);
  assert.equal(spine.z, 0);
  assert.ok(Math.abs(spine.y - -18) < 1e-9);
  assert.equal(spine.spineShade, 0);
  assert.equal(spine.coverShade, 0.5);
});

test('shortestLoopTarget picks shortest path around 13-film loop', () => {
  // From index 6 (s=19) to index 0 (clover): -6 is shorter than +7
  assert.equal(shortestLoopTarget(19, 0, 13), 13);
  // From index 0 (s=13) to index 12 (barbie): -1 is shorter than +12
  assert.equal(shortestLoopTarget(13, 12, 13), 12);
  // From index 12 (s=25) to index 1 (fightclub): +2 is shorter than -11
  assert.equal(shortestLoopTarget(25, 1, 13), 27);
});

test('decadeForYear and crop math produce exact coordinates', () => {
  assert.equal(decadeForYear(1987), 1980);
  assert.equal(decadeForYear(2009), 2000);
  assert.equal(decadeForYear(2023), 2020);

  const johnWick = FILMS[6];
  const bg = cropBackgroundCss(johnWick.cover, SHEETS);
  assert.equal(bg.url, SHEETS.covers.url);
  assert.ok(bg.size.includes('%'));
  assert.ok(bg.position.includes('%'));

  const svg = posterSvgCoords(johnWick.cover, SHEETS);
  assert.equal(svg.href, SHEETS.covers.url);
  assert.equal(svg.x, 0);
  assert.equal(svg.y, 0);
  assert.ok(svg.width > 474 && svg.height > 900);
  assert.equal(mod(-1, 13), 12);
});
