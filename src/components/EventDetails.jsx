import { motion } from 'framer-motion';
import OrnamentDivider from './OrnamentDivider';

/**
 * EventDetails — Date / Time / Venue stacked vertically.
 * Each detail slides-up one by one on scroll.
 * Mobile-first single column layout.
 */

const DetailCard = ({ icon, label, value, sub, delay }) => (
  <motion.div
    className="flex flex-col items-center text-center py-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay }}
  >
    {/* Icon circle */}
    <div className="w-14 h-14 rounded-full bg-emerald-dark/8 border border-gold/20 flex items-center justify-center mb-3">
      {icon}
    </div>
    <p className="text-[0.65rem] uppercase tracking-[0.25em] text-text-tertiary font-medium">
      {label}
    </p>
    <p
      className="text-xl md:text-2xl text-emerald-dark font-semibold mt-1"
      style={{ fontFamily: 'var(--font-heading)' }}
    >
      {value}
    </p>
    {sub && <p className="text-[0.8rem] text-text-secondary mt-0.5">{sub}</p>}
  </motion.div>
);

/* Thin gold line separator */
const ThinLine = () => (
  <div className="w-12 h-px bg-gold/25 mx-auto" />
);

const EventDetails = () => (
  <section id="event-details" className="section-padding text-center">
    <div className="max-w-sm mx-auto">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold-dark mb-2 font-medium">
          Save the Date
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold text-emerald-dark"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Event Details
        </h2>
      </motion.div>

      {/* Badge */}
      <motion.div
        className="mt-6 mb-2"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="inline-block px-5 py-2.5 rounded-full border border-gold/30 bg-gold/5 text-gold-dark text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
          ✦&ensp;Engagement Ceremony&ensp;✦
        </span>
      </motion.div>

      {/* Stacked details */}
      <DetailCard
        delay={0.15}
        label="Date"
        value="24 May, 2026"
        sub="Sunday"
        icon={
          <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        }
      />
      <ThinLine />

      <DetailCard
        delay={0.25}
        label="Time"
        value="3:00 PM"
        icon={
          <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />
      <ThinLine />

      <DetailCard
        delay={0.35}
        label="Venue"
        value="Pakeeza Function Hall"
        sub="Rakasipet, Bodhan"
        icon={
          <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
      />

      <OrnamentDivider className="mt-4" />
    </div>
  </section>
);

export default EventDetails;
