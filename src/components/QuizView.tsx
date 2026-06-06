import { useVibeStore } from '../store/useVibeStore';
import { questions, simpleQuestions } from '../data/questions';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CHINESE_NUMS = ['一', '二', '三'];

function formatScenario(text: string): string {
  if (text.length <= 23 || text.includes('\n')) return text;
  return text.slice(0, 19) + '\n' + text.slice(19);
}

export default function QuizView() {
  const { mode, currentQuestionIndex, answers, selectOption, nextQuestion, prevQuestion, finishQuiz } = useVibeStore();

  if (!mode) return null;

  const qs = mode === 'simple' ? simpleQuestions : questions;
  const currentQ = qs[currentQuestionIndex];
  const selected = answers[currentQ.id] || null;
  const total = qs.length;

  const handleSelect = (optionId: string) => {
    selectOption(currentQ.id, optionId);
    if (currentQuestionIndex < total - 1) {
      setTimeout(() => nextQuestion(), 600);
    }
  };

  const rows = total <= 12 ? [total] : total <= 24 ? [12, total - 12] : [12, 12, total - 24];
  let dotIndex = 0;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-8 md:px-4 py-8">
      {/* Main glass card */}
      <motion.div
        key={currentQ.id}
        className="relative w-full max-w-4xl rounded-3xl overflow-hidden"
        style={{
          background: 'rgba(30, 15, 60, 0.6)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(139, 92, 246, 0.15)',
          boxShadow: '0 0 80px rgba(139, 92, 246, 0.06), inset 0 1px 0 rgba(255,255,255,0.03)',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Top-right light glow */}
        <div
          className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
          }}
        />

        {/* Content */}
        <div className="flex flex-col justify-start md:justify-evenly min-h-[55vh] md:min-h-[45vh] pt-0 pb-12 md:py-14 px-8 md:px-16">
          <div className="h-[35px] md:hidden" />
          {/* Scenario */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={`scenario-${currentQ.id}`}
              className="text-[19px] md:text-4xl font-serif font-bold text-center leading-[1.2] md:leading-normal mb-8 md:mb-10 whitespace-pre-line"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                textShadow: '0 0 40px rgba(139, 92, 246, 0.15)',
                fontFamily: "'Special Elite', 'Playfair Display', serif",
                lineHeight: currentQ.scenario.length > 23 ? '1.2' : undefined,
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {formatScenario(currentQ.scenario)}
            </motion.h2>
          </AnimatePresence>

          {/* Options */}
          <div className="space-y-5 mb-8">
            <div className="-mb-2">
              <span className="text-[11px] tracking-wide px-3 py-0.5 rounded-full"
                style={{
                  background: 'rgba(139, 92, 246, 0.08)',
                  color: 'rgba(196, 181, 253, 0.55)',
                  fontFamily: "'Special Elite', serif",
                }}
              >
                🎬 观影微气候
              </span>
            </div>
            {currentQ.options.map((opt, idx) => (
              <motion.button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className="w-full text-left rounded-2xl transition-all duration-300 cursor-pointer relative group"
                style={{
                  background: selected === opt.id
                    ? 'rgba(109, 40, 217, 0.3)'
                    : 'rgba(88, 28, 135, 0.12)',
                  border: selected === opt.id
                    ? '1px solid rgba(167, 139, 250, 0.3)'
                    : '1px solid rgba(139, 92, 246, 0.08)',
                  boxShadow: selected === opt.id
                    ? '0 0 30px rgba(139, 92, 246, 0.12)'
                    : 'none',
                  padding: '20px 28px',
                }}
                whileTap={{ scale: 0.99 }}
              >
                {!selected && (
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'rgba(139, 92, 246, 0.06)',
                      border: '1px solid rgba(139, 92, 246, 0.15)',
                    }}
                  />
                )}
                <p
                  className="text-[16px] md:text-xl leading-[1.2] md:leading-relaxed"
                  style={{
                    color: selected === opt.id
                      ? 'rgba(255, 255, 255, 0.93)'
                      : 'rgba(255, 255, 255, 0.72)',
                  }}
                >
                  <span
                    style={{
                      color: selected === opt.id
                        ? 'rgba(196, 181, 253, 0.9)'
                        : 'rgba(167, 139, 250, 0.55)',
                      fontWeight: selected === opt.id ? 600 : 400,
                    }}
                  >
                    （{CHINESE_NUMS[idx]}）
                  </span>
                  {opt.text}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex flex-col items-center gap-1.5">
              {rows.map((rowLen, ri) => {
                const dots = [];
                for (let i = 0; i < rowLen; i++) {
                  const idx = dotIndex++;
                  const isPast = idx < currentQuestionIndex;
                  const isCurrent = idx === currentQuestionIndex;
                  dots.push(
                    <span
                      key={idx}
                      className={`rounded-full transition-all duration-500 ${
                        isCurrent ? 'w-2 h-2' : 'w-1.5 h-1.5'
                      }`}
                      style={{
                        background: isCurrent
                          ? '#fff'
                          : isPast
                            ? 'linear-gradient(135deg, #a78bfa, #ec4899)'
                            : 'rgba(255, 255, 255, 0.08)',
                        boxShadow: isCurrent
                          ? '0 0 6px rgba(255, 255, 255, 0.4)'
                          : isPast
                            ? '0 0 3px rgba(139, 92, 246, 0.4)'
                            : 'none',
                        animation: isCurrent ? 'pulse 2s ease-in-out infinite' : 'none',
                      }}
                    />
                  );
                }
                return (
                  <div key={ri} className="flex justify-center gap-1.5">
                    {dots}
                  </div>
                );
              })}
            </div>
        </div>
      </motion.div>

      {/* Navigation — below card */}
      <div className="flex items-center gap-5 mt-6 relative z-10">
        <button
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
          className="p-2.5 rounded-full border border-purple-400/15 text-purple-300/50 hover:text-purple-200 hover:border-purple-400/30 transition-colors disabled:opacity-10 disabled:cursor-not-allowed"
          style={{ background: 'rgba(30, 15, 60, 0.4)' }}
        >
          <ChevronLeft size={18} />
        </button>

        <span
          className="text-sm tabular-nums min-w-[70px] text-center"
          style={{ color: 'rgba(167, 139, 250, 0.5)' }}
        >
          {currentQuestionIndex + 1} / {total}
        </span>

        {currentQuestionIndex < total - 1 ? (
          <button
            onClick={nextQuestion}
            disabled={!selected}
            className="p-2.5 rounded-full border border-purple-400/15 text-purple-300/50 hover:text-purple-200 hover:border-purple-400/30 transition-colors disabled:opacity-10 disabled:cursor-not-allowed"
            style={{ background: 'rgba(30, 15, 60, 0.4)' }}
          >
            <ChevronRight size={18} />
          </button>
        ) : (
          <button
            onClick={finishQuiz}
            disabled={!selected}
            className="px-6 py-2.5 text-sm font-semibold rounded-full transition-all disabled:opacity-15 disabled:cursor-not-allowed"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.2))',
              border: '1px solid rgba(167, 139, 250, 0.3)',
              color: '#e9d5ff',
            }}
          >
            生成我的微气候
          </button>
        )}
      </div>
    </div>
  );
}
