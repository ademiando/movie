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

test('FILMS data matches chronological order and starts on Noon in Ashes at index 5', () => {
  assert.equal(FILMS.length, 12);
  assert.equal(FILMS[0].id, 'valley');
  assert.equal(FILMS[5].id, 'noon');
  assert.equal(FILMS[5].title, 'Noon in Ashes');
  assert.equal(FILMS[5].year, 1971);
  assert.equal(FILMS[11].id, 'door');
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

test('wrapRel wraps 36 virtual tapes into [-18, +18)', () => {
  assert.equal(wrapRel(17, 17, 36), 0);
  assert.equal(wrapRel(0, 17, 36), -17);
  assert.equal(wrapRel(35, 17, 36), -18);
  assert.equal(wrapRel(34, 17, 36), 17);
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

test('shortestLoopTarget picks shortest path around 12-film loop', () => {
  // From index 5 (s=17) to index 0 (valley): -5 is shorter than +7
  assert.equal(shortestLoopTarget(17, 0, 12), 12);
  // From index 0 (s=12) to index 11 (door): -1 is shorter than +11
  assert.equal(shortestLoopTarget(12, 11, 12), 11);
  // From index 11 (s=23) to index 1 (bluehour): +2 is shorter than -10
  assert.equal(shortestLoopTarget(23, 1, 12), 25);
});

test('decadeForYear and crop math produce exact coordinates', () => {
  assert.equal(decadeForYear(1958), 1950);
  assert.equal(decadeForYear(1971), 1970);

  const noon = FILMS[5];
  const bg = cropBackgroundCss(noon.cover, SHEETS);
  assert.equal(bg.url, SHEETS.covers.url);
  assert.ok(bg.size.includes('%'));
  assert.ok(bg.position.includes('%'));

  const svg = posterSvgCoords(noon.cover, SHEETS);
  assert.equal(svg.href, SHEETS.covers.url);
  assert.ok(svg.x < 0 && svg.y < 0);
  assert.ok(svg.width > 474 && svg.height > 900);
  assert.equal(mod(-1, 12), 11);
});
