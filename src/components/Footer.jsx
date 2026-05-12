import { motion } from 'framer-motion';

/**
 * ClosingSection — Final message, Quranic verse, and dua.
 * Emotionally warm closing to the invitation.
 */
const ClosingSection = () => (
  <footer id="closing" className="section-padding text-center pb-12">
    <div className="max-w-sm mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-4"
      >
        {/* Ornament */}
        <span className="star-ornament">✦ ✦ ✦</span>

        {/* Closing message */}
        <p
          className="text-lg md:text-xl text-emerald-dark font-semibold mt-2 leading-snug"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          We look forward to your<br />gracious presence
        </p>

        <p className="text-[0.85rem] text-text-secondary leading-relaxed max-w-[280px]">
          May Allah bless this union and shower His infinite mercy upon both families.
        </p>

        {/* Quranic verse card */}
        <div className="mt-4 px-6 py-5 rounded-2xl bg-emerald-dark/5 border border-gold/10">
          <p
            className="text-xl text-gold-dark mb-1.5"
            style={{ fontFamily: 'var(--font-arabic)' }}
            dir="rtl"
          >
            وَجَعَلْنَاكُمْ أَزْوَاجًا
          </p>
          <p className="text-[0.78rem] text-text-secondary italic">
            "And We made you into pairs"
          </p>
          <p className="text-[0.65rem] text-text-tertiary mt-0.5">
            — Surah An-Naba 78:8
          </p>
        </div>

        {/* Dua */}
        <div className="mt-4 space-y-1.5">
          <p
            className="text-[0.9rem] text-text-tertiary"
            style={{ fontFamily: 'var(--font-arabic)' }}
            dir="rtl"
          >
            رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ
          </p>
          <p className="text-[0.7rem] text-text-tertiary italic leading-relaxed max-w-[260px] mx-auto">
            "Our Lord, grant us from among our spouses and offspring comfort to our eyes"
          </p>
          <p className="text-[0.6rem] text-text-tertiary">— Surah Al-Furqan 25:74</p>
        </div>

        {/* Final line */}
        <div className="mt-8 pt-6 border-t border-gold/10 w-full">
          <p className="text-[0.65rem] text-text-tertiary tracking-[0.15em] uppercase">
            Shiba Afsheen &amp; Shayan Patel
          </p>
          <p className="text-[0.6rem] text-text-tertiary mt-0.5">24 · 05 · 2026</p>
        </div>
      </motion.div>
    </div>
  </footer>
);

export default ClosingSection;
