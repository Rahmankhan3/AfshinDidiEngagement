import { motion } from 'framer-motion';
import OrnamentDivider from './OrnamentDivider';

/**
 * HeroSection — Full-screen (100vh) cinematic opening.
 * Bismillah → Quranic verse → "Engaged" → Couple names
 * Staggered fade-in + slide-up on load.
 */

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease: 'easeOut' } },
});

const HeroSection = () => (
  <section
    id="hero"
    className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center overflow-hidden"
  >
    {/* Soft radial glow behind content */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(201,168,76,0.07)_0%,transparent_70%)] pointer-events-none" />

    <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center gap-2">

      {/* ─── Bismillah ─── */}
      <motion.p
        {...fade(0.2)}
        className="text-[1.7rem] leading-snug text-gold md:text-4xl"
        style={{ fontFamily: 'var(--font-arabic)' }}
      >
        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
      </motion.p>
      <motion.p {...fade(0.4)} className="text-[0.75rem] text-text-secondary tracking-wide">
        In the name of Allah, the Most Gracious, the Most Merciful
      </motion.p>

      {/* ─── Divider ─── */}
      <motion.div {...fade(0.6)} className="w-full mt-5 mb-2">
        <OrnamentDivider />
      </motion.div>

      {/* ─── Quranic Verse ─── */}
      <motion.p
        {...fade(0.8)}
        className="text-xl text-gold-dark md:text-2xl"
        style={{ fontFamily: 'var(--font-arabic)' }}
        dir="rtl"
      >
        وَخَلَقْنَاكُمْ أَزْوَاجًا
      </motion.p>
      <motion.p {...fade(0.9)} className="text-[0.72rem] text-text-secondary italic">
        "And We made pairs from among you."
      </motion.p>
      <motion.p {...fade(1.0)} className="text-[0.65rem] text-text-tertiary">
        — Surah Yasin 36:36
      </motion.p>

      {/* ─── Announcement ─── */}
      <motion.p
        {...fade(1.2)}
        className="mt-8 text-[0.7rem] uppercase tracking-[0.35em] text-text-secondary font-medium"
      >
        We are getting
      </motion.p>
      <motion.h1
        {...fade(1.4)}
        className="text-[2.8rem] md:text-6xl font-bold leading-none gold-shimmer"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Engaged
      </motion.h1>

      {/* ─── Bride ─── */}
      <motion.div {...fade(1.7)} className="mt-6">
        <h2
          className="text-[1.65rem] md:text-4xl font-semibold text-emerald-dark leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Shiba Afsheen
        </h2>
        <p className="text-[0.75rem] text-text-secondary mt-1 tracking-wide">
          D/O Shaik Zafar Patel
        </p>
      </motion.div>

      {/* ─── Ampersand ─── */}
      <motion.span
        {...fade(1.9)}
        className="text-3xl md:text-4xl text-gold font-light my-2"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        &amp;
      </motion.span>

      {/* ─── Groom ─── */}
      <motion.div {...fade(2.1)}>
        <h2
          className="text-[1.65rem] md:text-4xl font-semibold text-emerald-dark leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Shayan Patel
        </h2>
        <p className="text-[0.75rem] text-text-secondary mt-1 tracking-wide">
          S/O Imtiaz Patel
        </p>
      </motion.div>

      {/* ─── Rings ornament ─── */}
      <motion.div {...fade(2.3)} className="mt-4">
        <svg width="44" height="30" viewBox="0 0 44 30" fill="none" className="mx-auto opacity-70">
          <circle cx="16" cy="17" r="9" stroke="#C9A84C" strokeWidth="1.5" />
          <circle cx="28" cy="17" r="9" stroke="#C9A84C" strokeWidth="1.5" />
          <path d="M13 8L16 3L19 8" stroke="#E8D48B" strokeWidth="1" fill="none" />
          <circle cx="16" cy="2" r="1.5" fill="#E8D48B" />
        </svg>
      </motion.div>

      {/* ─── Scroll hint ─── */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.8 } }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-5 h-5 text-gold/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
