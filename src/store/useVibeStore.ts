import { create } from 'zustand';
import type { VibeScores } from '../data/questions';
import { questions, simpleQuestions } from '../data/questions';
import { microclimates, type Microclimate } from '../data/microclimates';

interface VibeState {
  mode: 'simple' | 'deep' | null;
  currentQuestionIndex: number;
  answers: Record<number, string>;
  currentScores: VibeScores;
  finalScores: VibeScores | null;
  matchedClimate: Microclimate | null;
  phase: 'home' | 'quiz' | 'loading' | 'results' | 'quickrec';

  setMode: (mode: 'simple' | 'deep') => void;
  setPhase: (phase: 'home' | 'quiz' | 'loading' | 'results' | 'quickrec') => void;
  selectOption: (questionId: number, optionId: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  finishQuiz: () => void;
  completeLoading: () => void;
  reset: () => void;
}

const initialScores: VibeScores = {
  adrenaline: 50,
  imagination: 50,
  empathy: 50,
  aftertaste: 50,
  intimacy: 50,
};

const clamp = (v: number) => Math.max(0, Math.min(100, v));

const euclidean = (a: VibeScores, b: VibeScores): number =>
  Math.sqrt(
    (a.adrenaline - b.adrenaline) ** 2 +
    (a.imagination - b.imagination) ** 2 +
    (a.empathy - b.empathy) ** 2 +
    (a.aftertaste - b.aftertaste) ** 2 +
    (a.intimacy - b.intimacy) ** 2
  );

export const useVibeStore = create<VibeState>((set, get) => ({
  mode: null,
  currentQuestionIndex: 0,
  answers: {},
  currentScores: { ...initialScores },
  finalScores: null,
  matchedClimate: null,
  phase: 'home',

  setMode: (mode) => {
    set({ mode, phase: 'quiz', currentQuestionIndex: 0, answers: {}, currentScores: { ...initialScores } });
  },

  setPhase: (phase) => {
    set({ phase });
  },

  selectOption: (questionId, optionId) => {
    const { mode, currentScores, answers } = get();
    const qs = mode === 'simple' ? simpleQuestions : questions;
    const q = qs.find((x) => x.id === questionId);
    if (!q) return;
    const opt = q.options.find((o) => o.id === optionId);
    if (!opt) return;
    const newScores: VibeScores = {
      adrenaline: clamp(currentScores.adrenaline + opt.scores.adrenaline),
      imagination: clamp(currentScores.imagination + opt.scores.imagination),
      empathy: clamp(currentScores.empathy + opt.scores.empathy),
      aftertaste: clamp(currentScores.aftertaste + opt.scores.aftertaste),
      intimacy: clamp(currentScores.intimacy + opt.scores.intimacy),
    };
    set({ currentScores: newScores, answers: { ...answers, [questionId]: optionId } });
  },

  nextQuestion: () => {
    const { mode, currentQuestionIndex } = get();
    const qs = mode === 'simple' ? simpleQuestions : questions;
    if (currentQuestionIndex < qs.length - 1) {
      set({ currentQuestionIndex: currentQuestionIndex + 1 });
    }
  },

  prevQuestion: () => {
    const { currentQuestionIndex } = get();
    if (currentQuestionIndex > 0) {
      set({ currentQuestionIndex: currentQuestionIndex - 1 });
    }
  },

  finishQuiz: () => {
    const { currentScores } = get();
    const MIN_VIBE = 10;
    const finalScores: VibeScores = {
      adrenaline: Math.max(currentScores.adrenaline, MIN_VIBE),
      imagination: Math.max(currentScores.imagination, MIN_VIBE),
      empathy: Math.max(currentScores.empathy, MIN_VIBE),
      aftertaste: Math.max(currentScores.aftertaste, MIN_VIBE),
      intimacy: Math.max(currentScores.intimacy, MIN_VIBE),
    };
    const MAX_VIBE = 90;
    const maxScore = Math.max(finalScores.adrenaline, finalScores.imagination, finalScores.empathy, finalScores.aftertaste, finalScores.intimacy);
    if (maxScore > MAX_VIBE) {
      const ratio = MAX_VIBE / maxScore;
      finalScores.adrenaline = Math.round(finalScores.adrenaline * ratio);
      finalScores.imagination = Math.round(finalScores.imagination * ratio);
      finalScores.empathy = Math.round(finalScores.empathy * ratio);
      finalScores.aftertaste = Math.round(finalScores.aftertaste * ratio);
      finalScores.intimacy = Math.round(finalScores.intimacy * ratio);
    }
    let best: Microclimate | null = null;
    let bestDist = Infinity;
    for (const mc of microclimates) {
      const d = euclidean(finalScores, mc.idealScores);
      if (d < bestDist) {
        bestDist = d;
        best = mc;
      }
    }
    set({ finalScores: { ...finalScores }, matchedClimate: best, phase: 'loading' });
    setTimeout(() => set({ phase: 'results' }), 3000);
  },

  completeLoading: () => {
    set({ phase: 'results' });
  },

  reset: () => {
    set({
      mode: null,
      currentQuestionIndex: 0,
      answers: {},
      currentScores: { ...initialScores },
      finalScores: null,
      matchedClimate: null,
      phase: 'home',
    });
  },
}));
