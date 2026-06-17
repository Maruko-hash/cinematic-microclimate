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
      className="flex-shrink-0 w-[130px] md:w-[150px] flex flex-col rounded-2xl overflow-hidden cursor-pointer group snap-start transition-all"
      style={{
        background: 'var(--movie-card-bg)',
        border: '1px solid var(--movie-card-border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--movie-card-bg-hover)';
        e.currentTarget.style.borderColor = 'var(--movie-card-border-hover)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--movie-card-bg)';
        e.currentTarget.style.borderColor = 'var(--movie-card-border)';
      }}
      initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.04 }}
    >
      <div className="aspect-[2/3] relative overflow-hidden" style={{ background: 'var(--movie-card-bg)' }}>
        {poster ? <img src={poster} alt={movie.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} /> : null}
        <div className={`w-full h-full flex items-center justify-center text-4xl ${poster ? 'hidden' : ''}`} style={{ opacity: 'var(--movie-fallback-opacity)' }}>🎬</div>
        <div className="absolute top-2 right-2 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs font-semibold text-amber-400"
          style={{ background: 'var(--movie-score-bg)' }}>⭐ {movie.vote_average.toFixed(1)}</div>
      </div>
      <div className="pt-1.5 px-2 pb-2">
        <h4 className="text-xs font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{movie.title}</h4>
        <span className="text-[10px] mt-0.5 block" style={{ color: 'var(--text-muted)' }}>
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
      <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>{title} ({items.length})</h4>
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
                background: 'var(--bg-fairy)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid var(--border-fairy)',
                borderRadius: '14px',
                padding: '6px 16px',
              }}
            >
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>稍等片刻，正在帮你找片～</p>
            </div>
            <div className="fairy-sprite text-5xl select-none">🧚</div>
          </div>
        </motion.div>
      ) : results ? (
        <motion.div className="w-full max-w-4xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="rounded-3xl px-0 py-6 md:px-0 md:py-8" style={{
            background: 'var(--bg-card-light)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid var(--border-card)',
          }}>
            <div className="px-6 md:px-8 mb-6">
              <div className="flex items-center gap-3">
                <Wand2 size={22} style={{ color: '#c4b5fd' }} />
                <h2 className="text-lg md:text-xl font-serif font-semibold" style={{ color: 'var(--text-primary)' }}>按你的状态，帮你筛了这些——</h2>
              </div>
            </div>
            <CategoryRow title="🎬 电影" items={results.movies} />
            <CategoryRow title="📺 电视剧" items={results.tv} />
            <CategoryRow title="🎥 纪录片" items={results.docs} />
            <CategoryRow title="🐉 动漫" items={results.anime} />
            <div className="px-6 md:px-8 mt-6">
              <div className="flex items-center justify-center gap-4">
              <button onClick={handleRefresh} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-card)',
                  color: 'var(--text-purple)',
                }}>
                <RefreshCwBtn size={14} />不太对？换一批试试
              </button>
              <button onClick={handleReset} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                style={{
                  background: 'var(--bg-glass-purple)',
                  border: '1px solid var(--border-home-purple)',
                  color: 'var(--text-purple)',
                }}>
                🔄 重新测试
              </button>
              <button onClick={onBack} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                style={{
                  background: 'var(--bg-card-light)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-dim)',
                }}>
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
            style={{
              background: 'var(--bg-card)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid var(--border-card)',
              boxShadow: 'var(--card-shadow), inset 0 1px 0 var(--card-glow-inner)',
            }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 100% 0%, var(--card-glow) 0%, transparent 60%)' }} />
            <div className="flex flex-col justify-evenly min-h-[45vh] px-8 pt-12 pb-10 md:px-16 md:pt-16 md:pb-14">
              <div className="flex flex-col items-center mb-8">
                <span className="text-[11px] tracking-wide px-3 py-0.5 rounded-full"
                  style={{
                    background: 'var(--bg-badge)',
                    color: 'var(--text-purple-dim)',
                    fontFamily: "'Special Elite', serif",
                  }}>🪄 好片速推</span>
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={`qtitle-${currentQ.id}`}
                    className="mt-3 text-lg md:text-2xl font-bold text-center"
                    style={{
                      color: 'var(--text-primary)',
                      textShadow: 'var(--text-shadow-heading)',
                      fontFamily: "'Special Elite', 'Playfair Display', serif",
                    }}
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
                    style={{
                      background: 'var(--bg-option)',
                      border: '1px solid var(--border-option)',
                      padding: '20px 28px',
                    }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'var(--bg-option-hover)',
                        border: '1px solid var(--border-option-hover)',
                      }} />
                    <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--text-purple-dim)' }}>（{CHINESE_NUMS[idx]}）</span>{opt.text}
                    </p>
                  </motion.button>
                ))}
              </div>

              <div className="flex justify-center gap-1.5">
                {Array.from({ length: total }).map((_, i) => (
                  <span key={i}
                    className={`rounded-full transition-all duration-500 ${i === step ? 'w-2 h-2' : i < step ? 'w-1.5 h-1.5' : 'w-1.5 h-1.5'}`}
                    style={{
                      background: i === step ? 'var(--dot-current)' : i < step ? 'linear-gradient(135deg, #a78bfa, #ec4899)' : 'var(--dot-future)',
                      boxShadow: i === step ? '0 0 6px var(--dot-current-shadow)' : 'none',
                      animation: i === step ? 'pulse 2s ease-in-out infinite' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex items-center gap-5 mt-8 relative z-10 justify-center">
            {step > 0 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="p-2.5 rounded-full transition-colors"
                style={{
                  background: 'var(--bg-card-light)',
                  border: '1px solid var(--nav-btn-border, rgba(192, 132, 252, 0.15))',
                  color: 'var(--nav-btn-text, rgba(216, 180, 254, 0.5))',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--nav-btn-text-hover, rgba(233, 213, 255, 0.8))';
                  e.currentTarget.style.borderColor = 'var(--nav-btn-border-hover, rgba(192, 132, 252, 0.3))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--nav-btn-text, rgba(216, 180, 254, 0.5))';
                  e.currentTarget.style.borderColor = 'var(--nav-btn-border, rgba(192, 132, 252, 0.15))';
                }}
              >
                <ChevronLeft size={18} />
              </button>
            ) : <div className="w-10" />}

            <span className="text-sm tabular-nums text-center min-w-[60px]" style={{ color: 'var(--text-purple-dim)' }}>{step + 1} / {total}</span>

            {step < total - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="p-2.5 rounded-full transition-colors"
                style={{
                  background: 'var(--bg-card-light)',
                  border: '1px solid var(--nav-btn-border, rgba(192, 132, 252, 0.15))',
                  color: 'var(--nav-btn-text, rgba(216, 180, 254, 0.5))',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--nav-btn-text-hover, rgba(233, 213, 255, 0.8))';
                  e.currentTarget.style.borderColor = 'var(--nav-btn-border-hover, rgba(192, 132, 252, 0.3))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--nav-btn-text, rgba(216, 180, 254, 0.5))';
                  e.currentTarget.style.borderColor = 'var(--nav-btn-border, rgba(192, 132, 252, 0.15))';
                }}
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
