import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, ChevronLeft, ChevronRight } from 'lucide-react';
import { quickRecQuestions, type QuickRecAnswers, scoreQuickRec, GENRE_FILTER } from '../data/quickrec';
import { BUILTIN_DATA, type Movie } from '../data/movies';

declare global {
  interface Window {
    POSTER_DATA: Record<string, string>;
  }
}

function getPosterSrc(movie: Movie): string | null {
  if (movie.poster && window.POSTER_DATA?.[movie.poster]) return window.POSTER_DATA[movie.poster];
  if (movie.poster) return `${import.meta.env.BASE_URL}posters/${movie.poster}`;
  return null;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getCategoryResults(answers: QuickRecAnswers) {
  const scored = BUILTIN_DATA.map((m) => ({ ...m, _score: scoreQuickRec(m, answers) }));
  const hg = (m: { genre_ids: number[] }, gid: number) => m.genre_ids.includes(gid);
  const preferredGenres = GENRE_FILTER[answers.genre] || [];
  const hasGenreMatch = (m: { genre_ids: number[] }) => preferredGenres.length === 0 || m.genre_ids.some(g => preferredGenres.includes(g));
  return {
    movies: answers.duration === 'short' ? [] : shuffle(scored.filter(m => m.media_type === 'movie' && !hg(m, 16) && !hg(m, 99) && hasGenreMatch(m)).sort((a, b) => b._score - a._score).slice(0, 25)).slice(0, 6),
    tv: shuffle(scored.filter(m => m.media_type === 'tv' && !hg(m, 16) && !hg(m, 99) && hasGenreMatch(m)).sort((a, b) => b._score - a._score).slice(0, 25)).slice(0, 6),
    docs: shuffle(scored.filter(m => hg(m, 99) && hasGenreMatch(m)).sort((a, b) => b._score - a._score).slice(0, 18)).slice(0, 6),
    anime: shuffle(scored.filter(m => hg(m, 16) && hasGenreMatch(m)).sort((a, b) => b._score - a._score).slice(0, 18)).slice(0, 6),
  };
}

function PosterCard({ movie, index }: { movie: Movie; index: number }) {
  const poster = getPosterSrc(movie);
  const year = (movie.release_date || '').slice(0, 4);
  const runtime = movie.runtime > 0 ? `${movie.runtime} 分钟` : null;
  const lang = movie.languages?.[0]?.toUpperCase();
  return (
    <motion.a
      href={`https://www.themoviedb.org/${movie.media_type}/${movie.tmdb}`}
      target="_blank" rel="noopener"
      className="flex-shrink-0 w-[130px] md:w-[150px] flex flex-col rounded-2xl overflow-hidden border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/10 transition-all cursor-pointer group snap-start"
      initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.04 }}
    >
      <div className="aspect-[2/3] bg-white/5 relative overflow-hidden">
        {poster ? <img src={poster} alt={movie.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} /> : null}
        <div className={`w-full h-full flex items-center justify-center text-4xl opacity-10 ${poster ? 'hidden' : ''}`}>🎬</div>
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs font-semibold text-amber-400">⭐ {movie.vote_average.toFixed(1)}</div>
      </div>
      <div className="pt-1.5 px-2 pb-2">
        <h4 className="text-xs font-semibold text-white/90 truncate">{movie.title}</h4>
        <span className="text-[10px] text-white/40 mt-0.5 block">
          {year}{runtime ? ` · ${runtime}` : ''}{lang ? ` · ${lang}` : ''}
        </span>
      </div>
    </motion.a>
  );
}

function CategoryRow({ title, items }: { title: string; items: Movie[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-white/35 mb-2">{title} ({items.length})</h4>
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory" style={{ scrollbarWidth: 'thin' }}>
        {items.map((m, i) => <PosterCard key={m.tmdb} movie={m} index={i} />)}
      </div>
    </div>
  );
}

const CHINESE_NUMS = ['一', '二', '三', '四', '五', '六'];

export default function QuickRecView({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuickRecAnswers>>({});
  const [results, setResults] = useState<{ movies: Movie[]; tv: Movie[]; docs: Movie[]; anime: Movie[] } | null>(null);
  const [loading, setLoading] = useState(false);

  const currentQ = step < quickRecQuestions.length ? quickRecQuestions[step] : null;
  const total = quickRecQuestions.length;

  const handleSelect = (qId: number, key: string, optionId: string) => {
    const newAnswers = { ...answers, [key]: optionId };
    setAnswers(newAnswers);
    if (step === total - 1) {
      setLoading(true);
      setTimeout(() => {
        setResults(getCategoryResults(newAnswers as QuickRecAnswers));
        setLoading(false);
        setStep(total);
      }, 2500);
    } else {
      setTimeout(() => setStep(step + 1), 400);
    }
  };

  const handleRefresh = () => {
    if (answers.mood) setResults(getCategoryResults(answers as QuickRecAnswers));
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResults(null);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {loading ? (
        <motion.div className="flex flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="relative">
            <div
              className="fairy-bubble absolute -top-[56px] left-1/2 -translate-x-1/2 whitespace-nowrap"
              style={{
                background: 'rgba(139, 92, 246, 0.12)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '14px',
                padding: '6px 16px',
              }}
            >
              <p className="text-sm text-white/80">稍等片刻，正在帮你找片～</p>
            </div>
            <div className="fairy-sprite text-5xl select-none">🧚</div>
          </div>
        </motion.div>
      ) : results ? (
        <motion.div className="w-full max-w-4xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="rounded-3xl px-0 py-6 md:px-0 md:py-8" style={{ background: 'rgba(30, 15, 60, 0.5)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(139, 92, 246, 0.12)' }}>
            <div className="px-6 md:px-8 mb-6">
              <div className="flex items-center gap-3">
                <Wand2 size={22} className="text-purple-400" />
                <h2 className="text-lg md:text-xl font-serif font-semibold text-white/85">按你的状态，帮你筛了这些——</h2>
              </div>
            </div>
            <CategoryRow title="🎬 电影" items={results.movies} />
            <CategoryRow title="📺 电视剧" items={results.tv} />
            <CategoryRow title="🎥 纪录片" items={results.docs} />
            <CategoryRow title="🐉 动漫" items={results.anime} />
            <div className="px-6 md:px-8 mt-6">
              <div className="flex items-center justify-center gap-4">
              <button onClick={handleRefresh} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                style={{ background: 'rgba(139, 92, 246, 0.12)', border: '1px solid rgba(139, 92, 246, 0.18)', color: 'rgba(196, 181, 253, 0.8)' }}>
                <RefreshCwBtn size={14} />不太对？换一批试试
              </button>
              <button onClick={handleReset} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.15)', color: 'rgba(196, 181, 253, 0.7)' }}>
                🔄 重新测试
              </button>
              <button onClick={onBack} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                style={{ background: 'rgba(30, 15, 60, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)', color: 'rgba(255, 255, 255, 0.5)' }}>
                🏠 回到首页
              </button>
            </div>
            </div>
          </div>
        </motion.div>
      ) : currentQ ? (
        <>
          <motion.div
            key={currentQ.id}
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden"
            style={{ background: 'rgba(30, 15, 60, 0.6)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(139, 92, 246, 0.15)', boxShadow: '0 0 80px rgba(139, 92, 246, 0.06), inset 0 1px 0 rgba(255,255,255,0.03)' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)' }} />
            <div className="flex flex-col justify-evenly min-h-[45vh] px-8 pt-12 pb-10 md:px-16 md:pt-16 md:pb-14">
              <div className="flex flex-col items-center mb-8">
                <span className="text-[11px] tracking-wide px-3 py-0.5 rounded-full"
                  style={{ background: 'rgba(139, 92, 246, 0.08)', color: 'rgba(196, 181, 253, 0.55)', fontFamily: "'Special Elite', serif" }}>🪄 好片速推</span>
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={`qtitle-${currentQ.id}`}
                    className="mt-3 text-lg md:text-2xl font-bold text-center"
                    style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 0 40px rgba(139, 92, 246, 0.15)', fontFamily: "'Special Elite', 'Playfair Display', serif" }}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                  >
                    {currentQ.bubble}
                  </motion.h2>
                </AnimatePresence>
              </div>

              <div className="space-y-5 mb-8">
                {currentQ.options.map((opt, idx) => (
                  <motion.button
                    key={opt.id}
                    onClick={() => handleSelect(currentQ.id, currentQ.key, opt.id)}
                    className="w-full text-left rounded-2xl transition-all duration-300 cursor-pointer relative group"
                    style={{ background: 'rgba(88, 28, 135, 0.12)', border: '1px solid rgba(139, 92, 246, 0.08)', padding: '20px 28px' }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: 'rgba(139, 92, 246, 0.06)', border: '1px solid rgba(139, 92, 246, 0.15)' }} />
                    <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.72)' }}>
                      <span style={{ color: 'rgba(167, 139, 250, 0.55)' }}>（{CHINESE_NUMS[idx]}）</span>{opt.text}
                    </p>
                  </motion.button>
                ))}
              </div>

              <div className="flex justify-center gap-1.5">
                {Array.from({ length: total }).map((_, i) => (
                  <span key={i}
                    className={`rounded-full transition-all duration-500 ${i === step ? 'w-2 h-2' : i < step ? 'w-1.5 h-1.5' : 'w-1.5 h-1.5'}`}
                    style={{ background: i === step ? '#fff' : i < step ? 'linear-gradient(135deg, #a78bfa, #ec4899)' : 'rgba(255, 255, 255, 0.08)', boxShadow: i === step ? '0 0 6px rgba(255, 255, 255, 0.4)' : 'none', animation: i === step ? 'pulse 2s ease-in-out infinite' : 'none' }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex items-center gap-5 mt-8 relative z-10 justify-center">
            {step > 0 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="p-2.5 rounded-full border border-purple-400/15 text-purple-300/50 hover:text-purple-200 hover:border-purple-400/30 transition-colors"
                style={{ background: 'rgba(30, 15, 60, 0.4)' }}
              >
                <ChevronLeft size={18} />
              </button>
            ) : <div className="w-10" />}

            <span className="text-sm tabular-nums text-center min-w-[60px]" style={{ color: 'rgba(167, 139, 250, 0.5)' }}>{step + 1} / {total}</span>

            {step < total - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="p-2.5 rounded-full border border-purple-400/15 text-purple-300/50 hover:text-purple-200 hover:border-purple-400/30 transition-colors"
                style={{ background: 'rgba(30, 15, 60, 0.4)' }}
              >
                <ChevronRight size={18} />
              </button>
            ) : <div className="w-10" />}
          </div>
        </>
      ) : null}
    </div>
  );
}

function RefreshCwBtn({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}
