import { motion } from 'framer-motion';
import type { Movie } from '../data/movies';

declare global {
  interface Window {
    POSTER_DATA: Record<string, string>;
  }
}

function getPosterSrc(movie: Movie): string | null {
  if (movie.poster && window.POSTER_DATA?.[movie.poster]) {
    return window.POSTER_DATA[movie.poster];
  }
  if (movie.poster) {
    return `${import.meta.env.BASE_URL}posters/${movie.poster}`;
  }
  return null;
}

export default function MovieCard({ movie, index }: { movie: Movie; index: number }) {
  const poster = getPosterSrc(movie);
  const year = (movie.release_date || '').slice(0, 4);
  const score = movie.vote_average || 0;
  const badgeClass = score >= 7.5 ? 'text-emerald-400' : score >= 6 ? 'text-amber-400' : 'text-slate-400';
  const badgeText = score >= 7.5 ? '强烈推荐' : score >= 6 ? '推荐' : '还行';

  return (
    <motion.a
      href={`https://www.themoviedb.org/${movie.media_type}/${movie.tmdb}`}
      target="_blank"
      rel="noopener"
      className="flex-shrink-0 w-[110px] md:w-[120px] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/10 transition-all cursor-pointer group snap-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + index * 0.06, duration: 0.4 }}
    >
      <div className="aspect-[2/3] bg-white/5 relative overflow-hidden">
        {poster ? (
          <img
            src={poster}
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div className={`w-full h-full flex items-center justify-center text-5xl opacity-10 ${poster ? 'hidden' : ''}`}>
          🎬
        </div>
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs font-semibold text-amber-400">
          ⭐ {movie.vote_average.toFixed(1)}
        </div>
      </div>
      <div className="p-2.5">
        <h4 className="text-sm font-semibold text-white/90 truncate">{movie.title}</h4>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-white/40">{year}</span>
          <span className="text-xs text-white/40">·</span>
          <span className="text-xs text-white/40">{movie.media_type === 'tv' ? '📺 剧集' : '🎬 电影'}</span>
        </div>
        <span className={`inline-block mt-1.5 text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-white/5 ${badgeClass}`}>
          {badgeText}
        </span>
      </div>
    </motion.a>
  );
}
