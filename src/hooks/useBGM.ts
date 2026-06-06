import { useEffect, useRef, useState, useCallback } from 'react';

export function useBGM() {
  const [playing, setPlaying] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/audio/bgm.mp3');
    audio.loop = true;
    audio.volume = 0.25;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.play().catch(() => setPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  const toggle = useCallback(() => {
    setEnabled(true);
    setPlaying((prev) => !prev);
  }, []);

  const enable = useCallback(() => {
    if (!enabled && audioRef.current) {
      setEnabled(true);
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  }, [enabled]);

  return { playing, toggle, enable };
}
