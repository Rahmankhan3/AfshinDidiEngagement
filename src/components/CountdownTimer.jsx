import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * CountdownTimer — Large-digit countdown to 24 May 2026, 8 PM IST.
 * Minimal clean design, mobile-first sizing.
 */
const CountdownTimer = () => {
  const target = new Date('2026-05-24T20:00:00+05:30').getTime();

  const calc = () => {
    const d = target - Date.now();
    if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days:    Math.floor(d / 86400000),
      hours:   Math.floor((d % 86400000) / 3600000),
      minutes: Math.floor((d % 3600000) / 60000),
      seconds: Math.floor((d % 60000) / 1000),
    };
  };

  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const Box = ({ value, label, delay }) => (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-[4.2rem] h-[4.2rem] md:w-20 md:h-20 rounded-xl bg-emerald-dark flex items-center justify-center shadow-md border border-gold/15">
        <span
          className="text-[1.6rem] md:text-3xl font-bold text-gold-light tabular-nums"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <p className="text-[0.6rem] uppercase tracking-[0.2em] text-text-tertiary mt-2 font-medium">
        {label}
      </p>
    </motion.div>
  );

  return (
    <section id="countdown" className="section-padding text-center">
      <div className="max-w-sm mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold-dark mb-2 font-medium">
            Counting Down To
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold text-emerald-dark mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Big Day
          </h2>
        </motion.div>

        <div className="flex justify-center gap-3 md:gap-5">
          <Box value={t.days}    label="Days"    delay={0.1} />
          <Box value={t.hours}   label="Hours"   delay={0.15} />
          <Box value={t.minutes} label="Min"     delay={0.2} />
          <Box value={t.seconds} label="Sec"     delay={0.25} />
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
