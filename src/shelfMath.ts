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
  customAsset?: string;
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
    id: 'clover',
    title: 'White Clover',
    romaji: 'SHIROTSUMEKUSA',
    kanji: '白詰草',
    year: 1987,
    genre: 'Romance',
    minutes: 106,
    synopsis: 'On an overgrown hillside above the coast, two lovers spend one sunlit afternoon pretending the summer has nowhere to go.',
    spine: { sheet: 'spines', x: 0, y: 0, w: 142, h: 840 },
    cover: { sheet: 'covers', x: 0, y: 0, w: 474, h: 900 },
    customAsset: '/assets/aistudio/PixVerse_Image_Effect_prompt__1__91dbbeb1.png',
  },
  {
    id: 'fightclub',
    title: 'Fight Club',
    romaji: 'FAITO KURABU',
    kanji: 'ファイト・クラブ',
    year: 1999,
    genre: 'Thriller',
    minutes: 139,
    synopsis: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that spirals out of control.',
    spine: { sheet: 'spines', x: 0, y: 0, w: 142, h: 840 },
    cover: { sheet: 'covers', x: 0, y: 0, w: 474, h: 900 },
  },
  {
    id: 'spiderman',
    title: 'Spider-Man',
    romaji: 'SUPAIDA-MAN',
    kanji: 'スパイダーマン',
    year: 2002,
    genre: 'Action',
    minutes: 121,
    synopsis: 'After a genetically altered spider bite grants him extraordinary powers, Peter Parker learns that with great power comes great responsibility.',
    spine: { sheet: 'spines', x: 0, y: 0, w: 142, h: 840 },
    cover: { sheet: 'covers', x: 0, y: 0, w: 474, h: 900 },
  },
  {
    id: 'darkknight',
    title: 'The Dark Knight',
    romaji: 'DAKU NAITO',
    kanji: 'ダークナイト',
    year: 2008,
    genre: 'Action',
    minutes: 152,
    synopsis: 'When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological and physical tests of his life.',
    spine: { sheet: 'spines', x: 0, y: 0, w: 142, h: 840 },
    cover: { sheet: 'covers', x: 0, y: 0, w: 474, h: 900 },
  },
  {
    id: 'summer500',
    title: '(500) Days of Summer',
    romaji: '500 NICHI NO SAMA',
    kanji: '(500)日のサマー',
    year: 2009,
    genre: 'Romance',
    minutes: 95,
    synopsis: 'A hopeless romantic greeting-card writer reflects on the 500 days he spent falling in and out of love with Summer Finn.',
    spine: { sheet: 'spines', x: 0, y: 0, w: 142, h: 840 },
    cover: { sheet: 'covers', x: 0, y: 0, w: 474, h: 900 },
  },
  {
    id: 'avengers',
    title: 'The Avengers',
    romaji: 'ABENJAZU',
    kanji: 'アベンジャーズ',
    year: 2012,
    genre: 'Action',
    minutes: 143,
    synopsis: 'Earth’s mightiest heroes must come together and learn to fight as a team to stop Loki and his alien army from enslaving humanity.',
    spine: { sheet: 'spines', x: 0, y: 0, w: 142, h: 840 },
    cover: { sheet: 'covers', x: 0, y: 0, w: 474, h: 900 },
  },
  {
    id: 'johnwick',
    title: 'John Wick',
    romaji: 'JON WIKKU',
    kanji: 'ジョン・ウィック',
    year: 2014,
    genre: 'Action',
    minutes: 101,
    synopsis: 'An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole everything he had left.',
    spine: { sheet: 'spines', x: 0, y: 0, w: 142, h: 840 },
    cover: { sheet: 'covers', x: 0, y: 0, w: 474, h: 900 },
  },
  {
    id: 'interstellar',
    title: 'Interstellar',
    romaji: 'INTASUTERA',
    kanji: 'インターステラー',
    year: 2014,
    genre: 'Sci-Fi',
    minutes: 169,
    synopsis: 'A team of explorers travels through a newly discovered wormhole beyond Saturn in an attempt to ensure humanity’s survival.',
    spine: { sheet: 'spines', x: 0, y: 0, w: 142, h: 840 },
    cover: { sheet: 'covers', x: 0, y: 0, w: 474, h: 900 },
  },
  {
    id: 'lalaland',
    title: 'La La Land',
    romaji: 'RA RA RANDO',
    kanji: 'ラ・ラ・ランド',
    year: 2016,
    genre: 'Musical',
    minutes: 128,
    synopsis: 'While navigating their careers in Los Angeles, a jazz pianist and an aspiring actress fall in love while chasing their dreams.',
    spine: { sheet: 'spines', x: 0, y: 0, w: 142, h: 840 },
    cover: { sheet: 'covers', x: 0, y: 0, w: 474, h: 900 },
  },
  {
    id: 'spiderverse',
    title: 'Into the Spider-Verse',
    romaji: 'SUPAIDA-BASU',
    kanji: 'スパイダーバース',
    year: 2018,
    genre: 'Animation',
    minutes: 117,
    synopsis: 'Brooklyn teen Miles Morales becomes the Spider-Man of his reality and crosses paths with five counterparts from other dimensions.',
    spine: { sheet: 'spines', x: 0, y: 0, w: 142, h: 840 },
    cover: { sheet: 'covers', x: 0, y: 0, w: 474, h: 900 },
  },
  {
    id: 'marriagestory',
    title: 'Marriage Story',
    romaji: 'MARIJJI SUTORI',
    kanji: 'マリッジ・ストーリー',
    year: 2019,
    genre: 'Drama',
    minutes: 137,
    synopsis: 'A stage director and his actor wife struggle through a coast-to-coast divorce that pushes their personal and creative lives to the limit.',
    spine: { sheet: 'spines', x: 0, y: 0, w: 142, h: 840 },
    cover: { sheet: 'covers', x: 0, y: 0, w: 474, h: 900 },
  },
  {
    id: 'glassonion',
    title: 'Glass Onion',
    romaji: 'GURASU ONION',
    kanji: 'グラス・オニオン',
    year: 2022,
    genre: 'Mystery',
    minutes: 139,
    synopsis: 'Detective Benoit Blanc travels to a private Greek island to peel back the layers of a tech billionaire’s deadly weekend mystery.',
    spine: { sheet: 'spines', x: 0, y: 0, w: 142, h: 840 },
    cover: { sheet: 'covers', x: 0, y: 0, w: 474, h: 900 },
  },
  {
    id: 'barbie',
    title: 'Barbie',
    romaji: 'BABI',
    kanji: 'バービー',
    year: 2023,
    genre: 'Comedy',
    minutes: 114,
    synopsis: 'Barbie and Ken leave the pastel perfection of Barbieland on a journey of self-discovery into the complications of the real world.',
    spine: { sheet: 'spines', x: 0, y: 0, w: 142, h: 840 },
    cover: { sheet: 'covers', x: 0, y: 0, w: 474, h: 900 },
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

export function wrapRel(v: number, s: number, total = 39): number {
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

export function shortestLoopTarget(currentT: number, targetFilmIdx: number, nFilms = 13): number {
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
    x: (-box.x * 474) / box.w + 0,
    y: (-box.y * 900) / box.h + 0,
    width: (s.w * 474) / box.w,
    height: (s.h * 900) / box.h,
  };
}
