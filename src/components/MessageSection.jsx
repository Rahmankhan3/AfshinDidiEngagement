import { motion } from 'framer-motion';
import OrnamentDivider from './OrnamentDivider';

/**
 * MessageSection — Short heartfelt invitation message.
 * Centered, fade-in on scroll. Single column, large readable text.
 */
const MessageSection = () => (
  <section id="message" className="section-padding text-center">
    <div className="max-w-sm mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
      >
        <span className="star-ornament">✦ ✦ ✦</span>

        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold-dark mt-6 mb-4 font-medium">
          A Humble Invitation
        </p>

        <p
          className="text-lg md:text-xl text-text-primary leading-relaxed"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          With the blessings of the Almighty Allah,
        </p>

        <p className="text-[0.92rem] md:text-base text-text-secondary leading-relaxed mt-4">
          We are delighted to invite you and your family to the{' '}
          <span className="text-emerald-dark font-semibold">Engagement Ceremony</span>{' '}
          of our beloved children. Your gracious presence will be a source
          of immense joy and blessing for both families.
        </p>

        <OrnamentDivider className="mt-8" />
      </motion.div>
    </div>
  </section>
);

export default MessageSection;
