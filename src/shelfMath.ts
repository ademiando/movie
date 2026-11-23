export interface SheetSpec {
  url: string;
  w: number;
  h: number;
}

export interface CropBox {
  sheet: 'covers' | 'spines' | 'fix' | 'fix2';
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Film {
  id: string;
  title: string;
  romaji: string;
  kanji: string;
  year: number;
  genre: string;
  minutes: number;
  synopsis: string;
  spine: CropBox;
  cover: CropBox;
}

export interface TapeTransform {
  x: number;
  y: number;
  z: number;
  rx: number;
  ry: number;
  rz: number;
  o: number;
  zIndex: number;
  spineShade: number;
  coverShade: number;
}

export const SHEETS: Record<CropBox['sheet'], SheetSpec> = {
  covers: {
    url: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_010644_837e04ca-2418-45c1-b8e0-0233265c4cd5.png&w=1744&q=85',
    w: 1744,
    h: 2336,
  },
  spines: {
    url: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_010738_a3e47ead-18f2-4974-9468-06d16a25edc5.png&w=2688&q=85',
    w: 2688,
    h: 1152,
  },
  fix: {
    url: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_010831_3ebb874b-93dc-433e-87ed-6299aba720f0.png&w=1520&q=85',
    w: 1520,
    h: 2688,
  },
  fix2: {
    url: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_092020_f96bc094-db7b-46de-9298-074a24e0a3b8.png&w=1520&q=85',
    w: 1520,
    h: 2688,
  },
};

export const FILMS: Film[] = [
  {
    id: 'valley',
    title: 'The Silent Valley',
    romaji: 'SHIZUKANA TANI',
    kanji: '静かな谷',
    year: 1958,
    genre: 'Drama',
    minutes: 104,
    synopsis: 'A schoolteacher returns to the mountain village that exiled her father, and finds the valley has kept every one of its secrets.',
    spine: { sheet: 'spines', x: 266, y: 31, w: 189, h: 1089 },
    cover: { sheet: 'covers', x: 497, y: 72, w: 344, h: 659 },
  },
  {
    id: 'bluehour',
    title: 'The Blue Hour',
    romaji: 'AO NO TOKI',
    kanji: '青の刻',
    year: 1962,
    genre: 'Romance',
    minutes: 97,
    synopsis: 'Over one long evening in a harbour town, a widow and a stranger trade small lies until the light runs out.',
    spine: { sheet: 'spines', x: 492, y: 31, w: 189, h: 1089 },
    cover: { sheet: 'covers', x: 914, y: 72, w: 342, h: 659 },
  },
  {
    id: 'river',
    title: 'River of Salt',
    romaji: 'SHIO NO KAWA',
    kanji: '塩の川',
    year: 1964,
    genre: 'Drama',
    minutes: 121,
    synopsis: 'Two brothers drag a salt barge downriver to a city that no longer wants anything they carry.',
    spine: { sheet: 'fix', x: 197, y: 54, w: 324, h: 2566 },
    cover: { sheet: 'covers', x: 1332, y: 72, w: 344, h: 659 },
  },
  {
    id: 'summer',
    title: 'The Last Summer',
    romaji: 'SAIGO NO NATSU',
    kanji: '最後の夏',
    year: 1966,
    genre: 'Drama',
    minutes: 109,
    synopsis: 'The summer before the dam floods their village, three friends set fire to everything they cannot take with them.',
    spine: { sheet: 'spines', x: 937, y: 31, w: 188, h: 1089 },
    cover: { sheet: 'covers', x: 74, y: 813, w: 344, h: 676 },
  },
  {
    id: 'green',
    title: 'The Green Road',
    romaji: 'MIDORI NO MICHI',
    kanji: '緑の道',
    year: 1969,
    genre: 'Mystery',
    minutes: 101,
    synopsis: 'A surveyor mapping a forest road keeps finding the same footprints, always one day ahead of him.',
    spine: { sheet: 'spines', x: 1157, y: 31, w: 185, h: 1090 },
    cover: { sheet: 'covers', x: 497, y: 815, w: 344, h: 674 },
  },
  {
    id: 'noon',
    title: 'Noon in Ashes',
    romaji: 'HAI NO SHOGO',
    kanji: '灰の正午',
    year: 1971,
    genre: 'Western',
    minutes: 112,
    synopsis: 'A rider crosses a white desert to settle an old debt, and learns too late who sent him.',
    spine: { sheet: 'spines', x: 44, y: 32, w: 184, h: 1088 },
    cover: { sheet: 'covers', x: 74, y: 72, w: 347, h: 659 },
  },
  {
    id: 'observer',
    title: 'The Observer',
    romaji: 'KANSATSUSHA',
    kanji: '観察者',
    year: 1973,
    genre: 'Thriller',
    minutes: 96,
    synopsis: 'A night watchman begins to suspect that the building he guards has started watching him back.',
    spine: { sheet: 'fix2', x: 371, y: 15, w: 349, h: 2655 },
    cover: { sheet: 'covers', x: 915, y: 815, w: 342, h: 675 },
  },
  {
    id: 'birds',
    title: 'The Fallen Birds',
    romaji: 'OCHITA TORI',
    kanji: '落ちた鳥',
    year: 1975,
    genre: 'Drama',
    minutes: 118,
    synopsis: "When the birds stop singing over a frontier town, the mayor's daughter is the only one who goes looking for the reason.",
    spine: { sheet: 'spines', x: 1573, y: 31, w: 183, h: 1089 },
    cover: { sheet: 'covers', x: 1331, y: 815, w: 345, h: 675 },
  },
  {
    id: 'storm',
    title: 'Light in the Storm',
    romaji: 'ARASHI NO HI',
    kanji: '嵐の灯',
    year: 1978,
    genre: 'Drama',
    minutes: 127,
    synopsis: 'A lighthouse keeper and his son wait out a three-day storm with a shipwrecked sailor who will not give his name.',
    spine: { sheet: 'fix2', x: 808, y: 15, w: 347, h: 2656 },
    cover: { sheet: 'covers', x: 74, y: 1571, w: 345, h: 681 },
  },
  {
    id: 'tide',
    title: 'The Long Tide',
    romaji: 'NAGAI SHIO',
    kanji: '長い潮',
    year: 1981,
    genre: 'Drama',
    minutes: 99,
    synopsis: "A fisherman's wife counts the tides on the harbour wall while her husband's boat fails to come home.",
    spine: { sheet: 'spines', x: 2012, y: 31, w: 188, h: 1089 },
    cover: { sheet: 'covers', x: 496, y: 1577, w: 343, h: 678 },
  },
  {
    id: 'war',
    title: 'A Quiet War',
    romaji: 'SHIZUKANA SENSO',
    kanji: '静かな戦争',
    year: 1985,
    genre: 'Comedy',
    minutes: 103,
    synopsis: 'Two neighbours fight a silent war over a garden wall for thirty years, and neither will say how it began.',
    spine: { sheet: 'spines', x: 2236, y: 31, w: 189, h: 1089 },
    cover: { sheet: 'covers', x: 913, y: 1579, w: 343, h: 676 },
  },
  {
    id: 'door',
    title: 'Red Door',
    romaji: 'AKAI TOBIRA',
    kanji: '赤い扉',
    year: 1989,
    genre: 'Thriller',
    minutes: 114,
    synopsis: 'A projectionist follows a reel of unknown film through the corridors of a cinema on its final night.',
    spine: { sheet: 'spines', x: 2462, y: 31, w: 188, h: 1089 },
    cover: { sheet: 'covers', x: 1331, y: 1579, w: 344, h: 677 },
  },
];

export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

export function smoothstep(x: number): number {
  const c = Math.max(0, Math.min(1, x));
  return c * c * (3 - 2 * c);
}

export function smoothStepB(r: number): number {
  if (Math.abs(r) < 1) {
    return (r + Math.sin(Math.PI * r) / Math.PI) / 2;
  }
  return r > 0 ? 0.5 : -0.5;
}

export function boxDimensions(H: number): { H: number; ws: number; d: number; gap: number } {
  return {
    H,
    ws: (H * 142) / 840,
    d: (H * 474) / 900,
    gap: H * 0.03,
  };
}

export function wrapRel(v: number, s: number, total = 36): number {
  const half = total / 2;
  return mod(v - s + half, total) - half;
}

export function shelfX(r: number, ws: number, d: number, gap: number): number {
  return r * (ws + gap) + (d - ws + 1.6 * gap) * smoothStepB(r);
}

export function computeTapeTransform(
  r: number,
  H: number,
  ws: number,
  d: number,
  gap: number,
  lift: number,
  tiltX: number,
  tiltY: number
): TapeTransform {
  const x = shelfX(r, ws, d, gap) + 0;
  const o = smoothstep(Math.max(0, 1 - Math.abs(r)));
  const ry = -90 * o + tiltY * o + 0;
  const rx = tiltX * o + 0;
  const rz = -4.5 * o + 0;
  const z = o * 0.2 * H + 0;
  const y = -o * 0.025 * H - lift * 0.045 * H + 0;
  const zIndex = Math.round(100 - Math.abs(r) * 4);
  const spineShade = o * 0.55;
  const coverShade = (1 - o) * 0.5;
  return { x, y, z, rx, ry, rz, o, zIndex, spineShade, coverShade };
}

export function shortestLoopTarget(currentT: number, targetFilmIdx: number, nFilms = 12): number {
  const base = Math.round(currentT);
  const curMod = mod(base, nFilms);
  let diff = targetFilmIdx - curMod;
  if (diff > nFilms / 2) diff -= nFilms;
  if (diff < -nFilms / 2) diff += nFilms;
  return base + diff;
}

export function decadeForYear(year: number): number {
  return Math.floor(year / 10) * 10;
}

export function cropBackgroundCss(box: CropBox, sheets = SHEETS): {
  url: string;
  size: string;
  position: string;
} {
  const s = sheets[box.sheet];
  const sizeW = (s.w / box.w) * 100;
  const sizeH = (s.h / box.h) * 100;
  const posX = (box.x / (s.w - box.w)) * 100;
  const posY = (box.y / (s.h - box.h)) * 100;
  return {
    url: s.url,
    size: `${sizeW}% ${sizeH}%`,
    position: `${posX}% ${posY}%`,
  };
}

export function posterSvgCoords(box: CropBox, sheets = SHEETS): {
  href: string;
  x: number;
  y: number;
  width: number;
  height: number;
} {
  const s = sheets[box.sheet];
  return {
    href: s.url,
    x: (-box.x * 474) / box.w,
    y: (-box.y * 900) / box.h,
    width: (s.w * 474) / box.w,
    height: (s.h * 900) / box.h,
  };
}
