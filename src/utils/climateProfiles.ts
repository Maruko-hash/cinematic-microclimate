import type { Microclimate } from '../data/microclimates';

export interface ClimateProfile {
  id: string;
  preferGenres: number[];
  avoidGenres: number[];
  wantHighScore: boolean;
  wantShortRuntime: boolean;
  wantOriginal: boolean;
  wantEmotional: boolean;
  wantSlow: boolean;
}

export const CLIMATE_PROFILES: Record<string, ClimateProfile> = {
  'nyc-gale': {
    id: 'nyc-gale',
    preferGenres: [28, 53, 80, 12],
    avoidGenres: [99, 10751, 10749],
    wantHighScore: true,
    wantShortRuntime: true,
    wantOriginal: false,
    wantEmotional: false,
    wantSlow: false,
  },
  'bkk-thunder': {
    id: 'bkk-thunder',
    preferGenres: [53, 9648, 80, 878],
    avoidGenres: [10749, 10751],
    wantHighScore: true,
    wantShortRuntime: false,
    wantOriginal: true,
    wantEmotional: false,
    wantSlow: false,
  },
  'london-mist': {
    id: 'london-mist',
    preferGenres: [18, 878, 9648, 53],
    avoidGenres: [27, 35],
    wantHighScore: true,
    wantShortRuntime: false,
    wantOriginal: false,
    wantEmotional: false,
    wantSlow: true,
  },
  'iceland-aurora': {
    id: 'iceland-aurora',
    preferGenres: [878, 14, 12, 9648],
    avoidGenres: [28, 27, 10752],
    wantHighScore: true,
    wantShortRuntime: false,
    wantOriginal: true,
    wantEmotional: false,
    wantSlow: true,
  },
  'kyoto-smoke': {
    id: 'kyoto-smoke',
    preferGenres: [18, 14, 12, 36],
    avoidGenres: [28, 27],
    wantHighScore: true,
    wantShortRuntime: false,
    wantOriginal: false,
    wantEmotional: false,
    wantSlow: true,
  },
  'venice-vapor': {
    id: 'venice-vapor',
    preferGenres: [9648, 18, 878, 53],
    avoidGenres: [28, 35, 27, 10402],
    wantHighScore: false,
    wantShortRuntime: false,
    wantOriginal: true,
    wantEmotional: false,
    wantSlow: true,
  },
  'jiangnan-rain': {
    id: 'jiangnan-rain',
    preferGenres: [18, 10749, 10751, 36],
    avoidGenres: [28, 27, 53, 10752],
    wantHighScore: true,
    wantShortRuntime: false,
    wantOriginal: false,
    wantEmotional: true,
    wantSlow: true,
  },
  'edinburgh-night': {
    id: 'edinburgh-night',
    preferGenres: [18, 10749, 35, 10751],
    avoidGenres: [28, 27, 10752],
    wantHighScore: true,
    wantShortRuntime: false,
    wantOriginal: false,
    wantEmotional: true,
    wantSlow: false,
  },
  'lisbon-sun': {
    id: 'lisbon-sun',
    preferGenres: [35, 10749, 10751, 18],
    avoidGenres: [27, 53, 10752],
    wantHighScore: false,
    wantShortRuntime: false,
    wantOriginal: false,
    wantEmotional: true,
    wantSlow: false,
  },
  'istanbul-dust': {
    id: 'istanbul-dust',
    preferGenres: [18, 36, 99, 9648],
    avoidGenres: [28, 35, 27, 10402],
    wantHighScore: true,
    wantShortRuntime: false,
    wantOriginal: false,
    wantEmotional: false,
    wantSlow: true,
  },
  'norway-frost': {
    id: 'norway-frost',
    preferGenres: [18, 99, 36, 9648],
    avoidGenres: [28, 35, 10749, 10402],
    wantHighScore: true,
    wantShortRuntime: false,
    wantOriginal: false,
    wantEmotional: false,
    wantSlow: true,
  },
  'paris-rain': {
    id: 'paris-rain',
    preferGenres: [18, 10749, 14, 35],
    avoidGenres: [28, 27, 99],
    wantHighScore: false,
    wantShortRuntime: false,
    wantOriginal: false,
    wantEmotional: true,
    wantSlow: false,
  },
  'jeju-tide': {
    id: 'jeju-tide',
    preferGenres: [28, 35, 10749, 12, 18],
    avoidGenres: [99],
    wantHighScore: false,
    wantShortRuntime: false,
    wantOriginal: false,
    wantEmotional: true,
    wantSlow: false,
  },
  'zurich-light': {
    id: 'zurich-light',
    preferGenres: [18, 14, 878, 9648],
    avoidGenres: [28, 27, 10752],
    wantHighScore: true,
    wantShortRuntime: false,
    wantOriginal: true,
    wantEmotional: false,
    wantSlow: false,
  },
};

export function scoreMovieForClimate(
  m: { genre_ids: number[]; vote_average: number; overview: string; media_type: string },
  climate: Microclimate,
  profile: ClimateProfile
): number {
  let score = m.vote_average;

  for (const g of m.genre_ids) {
    if (profile.preferGenres.includes(g)) score += 2.5;
    if (profile.avoidGenres.includes(g)) score -= 1.5;
  }

  if (profile.wantHighScore && m.vote_average >= 7.5) score += 1;
  if (profile.wantHighScore && m.vote_average < 6.5) score -= 1;
  if (profile.wantOriginal && m.media_type === 'movie') score += 0.5;

  const overview = m.overview.toLowerCase();
  const emotionalWords = ['love', 'family', 'heart', 'tear', 'cry', 'emotion', 'friend', 'mother', 'father', 'child', 'dream', 'hope', 'journey', 'life'];
  const actionWords = ['kill', 'war', 'battle', 'fight', 'gun', 'shoot', 'dead', 'death', 'murder', 'crime', 'kill'];

  if (profile.wantEmotional) {
    const matches = emotionalWords.filter(w => overview.includes(w)).length;
    score += matches * 0.3;
  }
  if (profile.wantSlow) {
    const matches = actionWords.filter(w => overview.includes(w)).length;
    score -= matches * 0.2;
  }

  const hasAnime = m.genre_ids.includes(16);
  const hasDoc = m.genre_ids.includes(99);
  if (hasAnime && !profile.preferGenres.includes(16)) score -= 0.5;
  if (hasDoc && !profile.preferGenres.includes(99)) score -= 0.5;

  return score;
}
