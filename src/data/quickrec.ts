export interface QuickRecOption {
  id: string;
  text: string;
  icon?: string;
}

export interface QuickRecQuestion {
  id: number;
  bubble: string;
  options: QuickRecOption[];
  key: string;
}

export const quickRecQuestions: QuickRecQuestion[] = [
  {
    id: 1,
    bubble: '来来来，先说说——你现在是什么心情呀？',
    key: 'mood',
    options: [
      { id: 'relaxed', text: '😌 悠闲自在', icon: '😌' },
      { id: 'tired', text: '😴 有点疲惫', icon: '😴' },
      { id: 'excited', text: '⚡ 充满能量', icon: '⚡' },
      { id: 'quiet', text: '🌧️ 只想独处', icon: '🌧️' },
    ],
  },
  {
    id: 2,
    bubble: '好嘞，那你想看点什么类型的呀？',
    key: 'genre',
    options: [
      { id: 'action', text: '🔥 动作冒险' },
      { id: 'warm', text: '🌸 温暖治愈' },
      { id: 'comedy', text: '😂 爆笑喜剧' },
      { id: 'thriller', text: '😱 惊悚悬疑' },
    ],
  },
  {
    id: 3,
    bubble: '这次和谁一起看呢？',
    key: 'company',
    options: [
      { id: 'alone', text: '🧘 一个人独享' },
      { id: 'friends', text: '👥 和朋友一起' },
      { id: 'family', text: '👨‍👩‍👧 陪家人看' },
      { id: 'partner', text: '💑 和另一半' },
    ],
  },
  {
    id: 4,
    bubble: '大概有多少时间可以看？我帮你掐一下时长～',
    key: 'duration',
    options: [
      { id: 'short', text: '⏱️ 半小时以内' },
      { id: 'medium', text: '🕐 1 小时左右' },
      { id: 'long', text: '🕑 2 小时左右' },
      { id: 'unlimited', text: '⏳ 不设时间限制' },
    ],
  },
  {
    id: 5,
    bubble: '想看什么地区的影片？',
    key: 'region',
    options: [
      { id: 'mainland', text: '🏮 中国' },
      { id: 'western', text: '🎬 欧美' },
      { id: 'jk', text: '⛩️ 日韩' },
      { id: 'any', text: '🌏 都可以' },
    ],
  },
  {
    id: 6,
    bubble: '最后，你想看完之后收获一种什么感觉？',
    key: 'experience',
    options: [
      { id: 'laugh', text: '😆 激动地疯狂扭动' },
      { id: 'cry', text: '😢 鼻子突然一酸' },
      { id: 'think', text: '🤯 脑子来来回回转' },
      { id: 'shock', text: '😱 看完不敢关灯' },
    ],
  },
];

export interface QuickRecAnswers {
  mood: string;
  genre: string;
  company: string;
  duration: string;
  region: string;
  experience: string;
}

const MOOD_GENRE_BOOST: Record<string, number[]> = {
  relaxed: [35, 10751, 10749],
  tired: [35, 10749],
  excited: [28, 12, 878, 53],
  quiet: [18, 99, 9648],
};

export const GENRE_FILTER: Record<string, number[]> = {
  action: [28, 12],
  warm: [18, 10751, 10749, 35],
  comedy: [35],
  thriller: [53, 27],
};

const COMPANY_FILTER: Record<string, { avoid: number[] }> = {
  alone: { avoid: [] },
  friends: { avoid: [] },
  family: { avoid: [27, 53, 80] },
  partner: { avoid: [27] },
};

const DURATION_LIMITS: Record<string, { min: number; max: number }> = {
  short: { min: 0, max: 35 },
  medium: { min: 30, max: 110 },
  long: { min: 60, max: 150 },
  unlimited: { min: 0, max: 999 },
};

const EXPERIENCE_GENRES: Record<string, number[]> = {
  laugh: [35, 10751],
  cry: [18, 10749],
  think: [9648, 878, 53],
  shock: [27, 53],
};

export function scoreQuickRec(
  m: { title: string; original_title: string; genre_ids: number[]; vote_average: number; overview: string; media_type: string; release_date: string; runtime: number; languages: string[]; countries: string[]; popularity: number; vote_count: number },
  answers: QuickRecAnswers
): number {
  let score = m.vote_average;

  for (const g of m.genre_ids) {
    if (MOOD_GENRE_BOOST[answers.mood]?.includes(g)) score += 1.5;
  }

  const avoidGenres = COMPANY_FILTER[answers.company]?.avoid || [];
  for (const g of m.genre_ids) {
    if (avoidGenres.includes(g)) score -= 2;
  }

  const dur = DURATION_LIMITS[answers.duration];
  if (dur && m.runtime > 0) {
    if (m.runtime < dur.min || m.runtime > dur.max) score -= 3;
  }
  if (answers.duration === 'short') {
    if (m.media_type === 'tv') score += 2;
    if (m.media_type === 'movie') score -= 1;
  }

  const countryIsoMap: Record<string, string[]> = { mainland: ['CN'], hktw: ['HK','TW'], western: ['US','GB','FR','DE','IT','CA','AU'], jk: ['JP','KR'] };
  if (answers.region !== 'any' && m.countries?.length > 0) {
    const targetCountries = countryIsoMap[answers.region] || [];
    if (m.countries.some(c => targetCountries.includes(c))) score += 2;
    else score -= 0.5;
  }

  for (const g of m.genre_ids) {
    if (EXPERIENCE_GENRES[answers.experience]?.includes(g)) score += 2;
  }

  if (m.vote_average >= 8) score += 0.5;
  if (m.vote_average < 6) score -= 1;

  return score;
}
