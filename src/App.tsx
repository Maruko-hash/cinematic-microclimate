import { useVibeStore } from './store/useVibeStore';
import QuizView from './components/QuizView';
import ResultsView from './components/ResultsView';
import { BUILTIN_DATA } from './data/movies';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Volume2, VolumeX, Wand2 } from 'lucide-react';
import { useMemo } from 'react';
import { useBGM } from './hooks/useBGM';
import QuickRecView from './components/QuickRecView';

declare global {
  interface Window {
    POSTER_DATA: Record<string, string>;
  }
}

function PosterStrip() {
  const posters = useMemo(() => {
    const pool = BUILTIN_DATA.filter((m) => m.poster && m.media_type === 'movie');
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 28);
  }, []);

  const doubled = useMemo(() => [...posters, ...posters], [posters]);

  return (
    <div className="fixed bottom-[3vh] left-0 w-full h-[30vh] sm:h-[32vh] z-[1] pointer-events-none">
      <div
        className="w-full h-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div
          className="flex h-full items-center"
          style={{ width: 'max-content', animation: 'scrollLeft 50s linear infinite' }}
        >
          {doubled.map((m, i) => {
            const src = window.POSTER_DATA?.[m.poster] || `${import.meta.env.BASE_URL}posters/${m.poster}`;
            if (!src) return null;
            return (
              <img
                key={`${m.id}-${i}`}
                src={src}
                alt=""
                className="poster-item pointer-events-auto rounded-lg object-cover flex-shrink-0 mx-2.5"
                style={{ height: '100%', width: 'auto', aspectRatio: '2/3' }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HomeView({ onEnable }: { onEnable: () => void }) {
  const { setMode, setPhase } = useVibeStore();
  const handleMode = (mode: 'simple' | 'deep') => {
    onEnable();
    setMode(mode);
  };

  return (
    <>
      <div className="relative z-10 flex flex-col items-center pt-10 sm:justify-center sm:pt-0 min-h-screen px-4">
        <motion.div
          className="text-center relative sm:-top-[8vh]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm sm:text-lg text-white/50 leading-relaxed mb-3">
            艺术之所以吸引我们，只因为它揭示了最隐秘的自我。<span className="block sm:inline">—— 让-吕克·戈达尔</span>
          </p>

          <div className="h-[4vh] sm:hidden" />

          <h1
            className="text-[70px] sm:text-7xl md:text-9xl font-serif font-bold leading-none mb-0.5 sm:mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent tracking-[0em] sm:tracking-[0.12em] md:tracking-[0.15em]"
            style={{ textShadow: '0 0 100px rgba(139,92,246,0.15)' }}
          >
            观影微气候
          </h1>

          <div className="flex items-center justify-center gap-4 -mt-1 mb-1.5 sm:mb-2.5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-400/40 to-purple-400/40" />
            <span className="text-purple-400/25 text-sm">✧</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent via-purple-400/40 to-purple-400/40" />
          </div>

          <p
            className="text-xs md:text-sm text-white/30 tracking-[0.15em] md:tracking-[0.3em]"
            style={{ fontFamily: "'Special Elite', serif" }}
          >
            CINEMATIC MICROCLIMATE
          </p>

          <div className="h-5" />

          <motion.div
            className="flex flex-col md:flex-row gap-4 sm:gap-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              onClick={() => handleMode('simple')}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-0 sm:gap-0.5 px-22 py-22 sm:px-32 sm:py-32 rounded-3xl transition-transform duration-500 bg-[rgba(100,70,150,0.16)]"
              style={{
                border: '1px solid rgba(192, 132, 252, 0.25)',
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.06)',
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Sparkles size={16} className="text-purple-300 sm:text-lg" />
              <div className="text-center">
                <div className="text-xl font-semibold text-white/85">风格速测</div>
                <div className="text-[10px] sm:text-xs text-white/35 mt-2">15 题 · 约 3 分钟</div>
              </div>
            </motion.button>

            <motion.button
              onClick={() => handleMode('deep')}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-0 sm:gap-0.5 px-22 py-22 sm:px-32 sm:py-32 rounded-3xl transition-transform duration-500 bg-[rgba(160,110,60,0.16)]"
              style={{
                border: '1px solid rgba(252, 211, 77, 0.25)',
                boxShadow: '0 0 30px rgba(245, 158, 11, 0.06)',
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Zap size={16} className="text-amber-300 sm:text-lg" />
              <div className="text-center">
                <div className="text-xl font-semibold text-white/85">灵魂捕捉</div>
                <div className="text-[10px] sm:text-xs text-white/35 mt-2">36 题 · 约 7 分钟</div>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="fixed bottom-[34vh] sm:bottom-[38vh] right-[28%] sm:right-[30%] z-20">
        <div className="relative">
          <div
            onClick={() => { onEnable(); setPhase('quickrec'); }}
            className="fairy-bubble absolute -top-[35px] sm:-top-[52px] left-1/2 -translate-x-1/2 whitespace-nowrap cursor-pointer transition-all duration-300 px-3 py-1 sm:px-4 sm:py-1.5 rounded-2xl sm:rounded-xl"
            style={{
              background: 'rgba(139, 92, 246, 0.12)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
            }}
          >
            <p className="text-xs sm:text-sm text-white/80">不知道看啥？帮你推荐～</p>
          </div>
          <div
            className="fairy-sprite cursor-pointer text-3xl sm:text-[40px] select-none"
            onClick={() => { onEnable(); setPhase('quickrec'); }}
            title="好片速推"
          >
            🧚
          </div>
        </div>
      </div>

      <PosterStrip />

      <p className="fixed bottom-[1vh] left-0 w-full z-10 text-sm text-white/40 text-center pointer-events-none">
         14 种观影微气候 · 近 500 部佳片推荐
      </p>
    </>
  );
}

function LoadingView() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full border-2 border-white/10 mx-auto mb-8"
          animate={{
            scale: [1, 1.2, 1],
            borderColor: ['rgba(255,255,255,0.1)', 'rgba(168,85,247,0.4)', 'rgba(255,255,255,0.1)'],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <p className="text-white/50 text-sm">正在为你调配专属观影微气候...</p>
      </motion.div>
    </div>
  );
}

export default function App() {
  const { phase, setPhase } = useVibeStore();
  const { playing, toggle, enable } = useBGM();

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        '--mesh-color-1': '#6366f1',
        '--mesh-color-2': '#a855f7',
      } as React.CSSProperties}
    >
      <div className="mesh-gradient" />
      <AnimatePresence mode="wait">
        {phase === 'home' && <HomeView key="home" onEnable={enable} />}
        {phase === 'quiz' && <QuizView key="quiz" />}
        {phase === 'loading' && <LoadingView key="loading" />}
        {phase === 'results' && <ResultsView key="results" />}
        {phase === 'quickrec' && <QuickRecView key="quickrec" onBack={() => setPhase('home')} />}
      </AnimatePresence>

      {/* BGM Toggle */}
      <motion.button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all"
        style={{
          background: 'rgba(30, 15, 60, 0.5)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={playing ? '暂停音乐' : '播放音乐'}
      >
        {playing ? (
          <Volume2 size={16} className="text-white/60" />
        ) : (
          <VolumeX size={16} className="text-white/30" />
        )}
      </motion.button>
    </div>
  );
}
