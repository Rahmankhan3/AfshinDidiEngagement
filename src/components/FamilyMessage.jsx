import { motion } from 'framer-motion';
import OrnamentDivider from './OrnamentDivider';

/**
 * FamilySection — Shows both families' names in
 * a stacked mobile-friendly layout.
 */
const FamilySection = () => (
  <section id="families" className="section-padding text-center">
    <div className="max-w-sm mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold-dark mb-2 font-medium">
          With Love From
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold text-emerald-dark mb-8"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Our Families
        </h2>
      </motion.div>

      {/* Family cards — stacked on mobile */}
      <div className="flex flex-col gap-4">
        <motion.div
          className="p-6 rounded-2xl bg-cream/50 border border-gold/10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-[0.6rem] uppercase tracking-[0.25em] text-gold-dark mb-1.5 font-medium">
            Bride&apos;s Family
          </p>
          <p
            className="text-lg text-emerald-dark font-semibold"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Shaik Zafar Patel
          </p>
          <p className="text-[0.78rem] text-text-tertiary mt-0.5">&amp; Family</p>
        </motion.div>

        <motion.div
          className="p-6 rounded-2xl bg-cream/50 border border-gold/10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[0.6rem] uppercase tracking-[0.25em] text-gold-dark mb-1.5 font-medium">
            Groom&apos;s Family
          </p>
          <p
            className="text-lg text-emerald-dark font-semibold"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Imtiaz Patel
          </p>
          <p className="text-[0.78rem] text-text-tertiary mt-0.5">&amp; Family</p>
        </motion.div>
      </div>

      <OrnamentDivider className="mt-8" />
    </div>
  </section>
);

export default FamilySection;
