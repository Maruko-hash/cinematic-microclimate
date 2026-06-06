import { useVibeStore } from '../store/useVibeStore';
import { BUILTIN_DATA, type Movie } from '../data/movies';
import type { VibeScores } from '../data/questions';
import type { Microclimate } from '../data/microclimates';
import { CLIMATE_PROFILES, scoreMovieForClimate } from '../utils/climateProfiles';
import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { RefreshCw } from 'lucide-react';
import MovieCard from './MovieCard';

declare global {
  interface Window {
    POSTER_DATA: Record<string, string>;
  }
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getClimateMovies(climate: Microclimate): { movies: Movie[]; tv: Movie[]; docs: Movie[]; anime: Movie[] } {
  const profile = CLIMATE_PROFILES[climate.id];
  if (!profile) {
    const scored = BUILTIN_DATA.map((m) => ({ ...m, _score: m.vote_average }));
    return {
      movies: shuffle(scored.filter(m => m.media_type === 'movie' && !m.genre_ids.includes(16) && !m.genre_ids.includes(99)).sort((a, b) => b._score - a._score).slice(0, 30)).slice(0, 5),
      tv: shuffle(scored.filter(m => m.media_type === 'tv' && !m.genre_ids.includes(16) && !m.genre_ids.includes(99)).sort((a, b) => b._score - a._score).slice(0, 30)).slice(0, 5),
      docs: shuffle(scored.filter(m => m.genre_ids.includes(99)).sort((a, b) => b._score - a._score).slice(0, 20)).slice(0, 5),
      anime: shuffle(scored.filter(m => m.genre_ids.includes(16)).sort((a, b) => b._score - a._score).slice(0, 20)).slice(0, 5),
    };
  }

  const scored = BUILTIN_DATA.map((m) => ({
    ...m,
    _score: scoreMovieForClimate(m, climate, profile),
  }));

  const hasGenre = (m: { genre_ids: number[]; _score: number }, gid: number) => m.genre_ids.includes(gid);

  const movies = shuffle(
    scored.filter((m) => m.media_type === 'movie' && !hasGenre(m, 16) && !hasGenre(m, 99))
      .sort((a, b) => b._score - a._score).slice(0, 30)
  ).slice(0, 5);

  const tv = shuffle(
    scored.filter((m) => m.media_type === 'tv' && !hasGenre(m, 16) && !hasGenre(m, 99))
      .sort((a, b) => b._score - a._score).slice(0, 30)
  ).slice(0, 5);

  const docs = shuffle(
    scored.filter((m) => hasGenre(m, 99))
      .sort((a, b) => b._score - a._score).slice(0, 20)
  ).slice(0, 5);

  const anime = shuffle(
    scored.filter((m) => hasGenre(m, 16))
      .sort((a, b) => b._score - a._score).slice(0, 20)
  ).slice(0, 5);

  return { movies, tv, docs, anime };
}

function getPersonalityInsight(scores: VibeScores): string {
  const dims = [
    { label: '肾上腺素', score: scores.adrenaline, dev: Math.abs(scores.adrenaline - 50),
      high: '你凭直觉做判断的速度比大多数人快得多，这不是急躁，而是长期积累下来的精准甄别力。你很清楚自己的时间值得用在真正有分量的东西上，所以不会在犹豫里消耗自己。',
      low: '你身上有一种难得的从容，不急着下判断，也不急着做决定。别人被速度裹挟的时候，你还在按自己的呼吸节奏一步步往前走。这份稳让靠近你的人也觉得安心，也让你很少因为仓促判断而后悔。',
      mid: '你在快慢之间有一种灵活的平衡，该快时不犹豫，该慢时沉得住气。这种收放自如的状态让你面对不同情境时都能找到合适的步调，很难被外界打乱。' },
    { label: '想象力', score: scores.imagination, dev: Math.abs(scores.imagination - 50),
      high: '你习惯用另一种角度打量世界，别人看见一棵树，你能看见树荫下藏着的整个故事。这种随时随地展开联想的能力让你的内心世界格外丰饶，也让日常变得不那么重复和单调。',
      low: '你喜欢真实的东西，一朵花的纹理比虚构的星球更能让你长久驻足。你知道日常中藏着无数别人匆匆路过却不曾看见的细节，而你有耐心把它们一个一个认出来。',
      mid: '你在虚实之间自在游走，打开幻想之门时是清醒的，回到日常时也带着轻盈。你不会被幻想吞噬，也不会被现实绑住，收放之间有一种成熟的平衡。' },
    { label: '情感浓度', score: scores.empathy, dev: Math.abs(scores.empathy - 50),
      high: '你的感受通道比多数人开放，一个陌生人的故事可以轻易流进你心里，并在那里留下比预期更深的痕迹。有时候你会因此觉得辛苦，但这正是你最深的洞察力的来处。',
      low: '你不容易被情绪裹挟，当周围人都被一种氛围带走的时候，你还能保留一份冷静的判断力。这股克制不是冷漠，是你更信任经过沉淀的感受，而非还没想清楚就涌上来的即时反应。',
      mid: '你在感性和理性之间找到了稳定的平衡点。该投入时不吝啬真心，该抽身时也拎得清边界。这种收放让你既能体恤别人的处境，又不会被别人的情绪吞没。' },
    { label: '余韵感', score: scores.aftertaste, dev: Math.abs(scores.aftertaste - 50),
      high: '你不是一个急着翻篇的人，一段经历或某种感受会在你体内停留很久，被反复品味直到所有层次都自然退去。你不是走不出来，是走得够深，而深度的体验本来就需要时间去完成它的旅程。',
      low: '你有一份洒脱，不属于你的东西你不会紧抓着不放，已经过去的故事你不会反复咀嚼。你把注意力留给了正在到来的人和事，向前看比回头复盘更需要勇气，而你恰好拥有这份勇气。',
      mid: '你知道什么时候该回味，什么时候该放下。你不会沉溺在过去里出不来，也不会粗心地路过值得回头看一眼的时刻，在珍惜和释怀之间找到了自己的节律。' },
    { label: '代入感', score: scores.intimacy, dev: Math.abs(scores.intimacy - 50),
      high: '你很容易忘记自己正在观看，当故事足够有力你就直接走了进去，身体比大脑先做出反应。这种投入是你最诚实的反馈系统，每一次回来你都比进去之前多了一些拿不走的东西。',
      low: '即使在最激烈的场面里，你也会保留一小片安静的观察区。这不是抽离或冷漠，而是在最汹涌的水流里给自己留了一只锚，无论如何漂移都知道自己是谁、站在哪里。',
      mid: '你能在沉浸和观察之间自由切换，全身心投入时不会吝啬注意力，需要退一步时也看得清更大的图景。这种灵活让你既能在故事里全情燃烧，又不会忘记自己还有一颗需要被照顾的心。' },
  ];

  const sorted = dims.sort((a, b) => b.dev - a.dev);
  const top = sorted[0];

  let level = '';
  let text = top.high;
  if (top.score < 35) { level = '偏低，'; text = top.low; }
  else if (top.score >= 35 && top.score < 65) { level = '处于平衡态，'; text = top.mid; }
  else { level = '偏高，'; }

  return `你的${top.label}${level}${text}`;
}

function CategorySection({ title, items, accentColor }: { title: string; items: Movie[]; accentColor: string }) {
  if (items.length === 0) return null;
  return (
    <div className="mb-6">
      <h4 className="text-sm font-semibold mb-3" style={{ color: accentColor }}>
        {title} <span className="text-white/20">({items.length})</span>
      </h4>
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory" style={{ scrollbarWidth: 'thin' }}>
        {items.map((m, i) => (
          <MovieCard key={m.tmdb} movie={m} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function ResultsView() {
  const { finalScores, matchedClimate, reset } = useVibeStore();
  if (!finalScores || !matchedClimate) return null;

  const radarData = [
    { dimension: '肾上腺素\nAdrenaline', value: finalScores.adrenaline, fullMark: 100 },
    { dimension: '想象力\nImagination', value: finalScores.imagination, fullMark: 100 },
    { dimension: '情感浓度\nEmpathy', value: finalScores.empathy, fullMark: 100 },
    { dimension: '余韵感\nAftertaste', value: finalScores.aftertaste, fullMark: 100 },
    { dimension: '代入感\nIntimacy', value: finalScores.intimacy, fullMark: 100 },
  ];

  const dimLabels = [
    { name: '肾上腺素 / Adrenaline', score: finalScores.adrenaline },
    { name: '想象力 / Imagination', score: finalScores.imagination },
    { name: '情感浓度 / Empathy', score: finalScores.empathy },
    { name: '余韵感 / Aftertaste', score: finalScores.aftertaste },
    { name: '代入感 / Intimacy', score: finalScores.intimacy },
  ];

  const { movies, tv, docs, anime } = getClimateMovies(matchedClimate);

  return (
    <motion.div
      className="relative z-10 w-full h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full h-full flex flex-row">
        {/* ── Left column: Climate info ── */}
        <div className="w-[65%] h-full flex flex-col overflow-y-auto pl-16 pr-10">
          {/* Label + Description */}
          <div className="px-4 pt-8 pb-24 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1
                className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-wide leading-[1.5]"
                style={{ color: matchedClimate.theme.accentColor }}
              >
                {matchedClimate.label}
              </h1>
              <p className="text-white/50 text-base md:text-lg leading-[1.5] text-justify" style={{ textIndent: '2em' }}>
                {matchedClimate.description}
              </p>
              <div className="text-base md:text-lg leading-[1.5]">&nbsp;</div>
            </motion.div>
          </div>

          {/* Radar chart + insight */}
          <motion.div
            className="flex flex-row w-full px-4 py-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="w-[52%] h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                  <PolarGrid stroke="rgba(255,255,255,0.12)" />
                  <PolarAngleAxis dataKey="dimension" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }} />
                  <PolarRadiusAxis angle={90} tick={false} axisLine={false} />
                  <Radar
                    name="得分"
                    dataKey="value"
                    stroke={matchedClimate.theme.accentColor}
                    fill={matchedClimate.theme.accentColor}
                    fillOpacity={0.1}
                    strokeWidth={2}
                    animationBegin={0}
                    animationDuration={1500}
                    animationEasing="ease-out"
                  />
                  <Radar
                    name="锚点"
                    dataKey="fullMark"
                    stroke="transparent"
                    fill="none"
                    fillOpacity={0}
                    isAnimationActive={false}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="w-[48%] flex flex-col justify-center pl-6">
              <h3
                className="text-base md:text-lg font-semibold mb-3"
                style={{ color: matchedClimate.theme.accentColor }}
              >
                专属气候人格 —— {matchedClimate.personalityTitle}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                {getPersonalityInsight(finalScores)}
              </p>
              <p
                className="text-base md:text-lg italic mt-3 leading-[2]"
                style={{ color: matchedClimate.theme.accentColor, opacity: 0.7 }}
              >
                {"\u201C"}{matchedClimate.slogan}{"\u201D"}
              </p>
            </div>
          </motion.div>

          {/* Dimension bars */}
          <motion.div
            className="w-full space-y-8 px-4 pt-4 pb-8"
            style={{ scrollbarWidth: 'thin' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {dimLabels.map((d, i) => (
              <div key={d.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm md:text-base text-white/70 font-bold">{d.name}</span>
                  <span className="text-xs font-mono text-white/30 ml-4">{d.score}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${d.score}%`,
                      background: `linear-gradient(90deg, ${matchedClimate.theme.accentColor}66, ${matchedClimate.theme.accentColor})`,
                    }}
                  />
                </div>
                <p className="text-sm text-white/35 leading-relaxed mt-2">{matchedClimate.dimensions[i].text}</p>
              </div>
            ))}
          </motion.div>

          {/* Restart button */}
          <div className="px-4 pb-12 flex justify-center">
            <button
              onClick={reset}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium transition-all"
              style={{
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                color: 'rgba(196, 181, 253, 0.7)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                e.currentTarget.style.color = 'rgba(196, 181, 253, 0.95)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                e.currentTarget.style.color = 'rgba(196, 181, 253, 0.7)';
              }}
            >
              <RefreshCw size={15} />
              重新捕捉
            </button>
          </div>
        </div>

        {/* ── Right column: Movie recommendations ── */}
        <div className="w-[35%] h-full overflow-y-auto pl-8 pr-6 pt-12 pb-4">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="rounded-2xl p-6"
            style={{
              backgroundColor: matchedClimate.theme.accentColor + '1A',
              boxShadow: '0 0 80px ' + matchedClimate.theme.accentColor + '0A, 0 0 0 1px ' + matchedClimate.theme.accentColor + '0F',
            }}>
            <h3
               className="text-sm md:text-base font-serif font-semibold mb-6"
              style={{ color: matchedClimate.theme.accentColor }}
            >
              ⭐ 为你推荐
            </h3>
            {movies.length > 0 && (
              <p
                className="text-left text-sm md:text-base text-white/50 leading-relaxed mb-5"
                style={{ textIndent: '2em' }}
              >
                每一种观影心境，都有适配的光影温柔。结合你的五维审美特质与专属气候人格，为你筛选出最贴合你当下心境与审美偏好的专属影片。
              </p>
            )}
            <CategorySection title="🎬 电影" items={movies} accentColor={matchedClimate.theme.accentColor} />
            <CategorySection title="📺 电视剧" items={tv} accentColor={matchedClimate.theme.accentColor} />
            <CategorySection title="🎥 纪录片" items={docs} accentColor={matchedClimate.theme.accentColor} />
            <CategorySection title="🐉 动漫" items={anime} accentColor={matchedClimate.theme.accentColor} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
