import { motion } from 'framer-motion';

/**
 * LocationSection — Embedded Google Maps + large "Open in Maps" CTA.
 * Map fills full width on mobile for maximum usability.
 */
const LocationSection = () => {
  const address = 'Pakeeza Function Hall, Rakasipet, Bodhan, Telangana, India';
  const q = encodeURIComponent(address);

  return (
    <section id="location" className="section-padding text-center">
      <div className="max-w-sm mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold-dark mb-2 font-medium">
            Find Us Here
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold text-emerald-dark mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Venue Location
          </h2>
        </motion.div>

        {/* Map embed */}
        <motion.div
          className="rounded-2xl overflow-hidden border border-gold/15 shadow-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <iframe
            title="Pakeeza Function Hall Location"
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            className="w-full h-56 md:h-72"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Address + CTA */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-[0.85rem] text-text-secondary mb-5">
            Pakeeza Function Hall, Rakasipet, Bodhan
          </p>

          {/* Large tap-friendly button (min 48px height) */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${q}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full max-w-xs h-12 rounded-full bg-emerald-dark text-warm-white text-[0.85rem] font-medium tracking-wide active:scale-[0.97] transition-all duration-200 shadow-md"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Open in Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
