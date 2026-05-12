import { useEffect, useRef } from 'react';

/**
 * FloatingParticles — Lightweight ambient gold particles.
 * Reduced count for mobile performance.
 */
const FloatingParticles = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Detect if user prefers reduced motion */
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const spawn = () => {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = `${Math.random() * 100}vw`;
      const size = Math.random() * 2 + 2;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      const dur = Math.random() * 6 + 10;
      p.style.animation = `float-up ${dur}s ease-in-out forwards`;
      el.appendChild(p);
      setTimeout(() => p.remove(), dur * 1000);
    };

    /* Fewer particles on mobile for performance */
    const isMobile = window.innerWidth < 768;
    const interval = setInterval(spawn, isMobile ? 5000 : 3000);
    for (let i = 0; i < (isMobile ? 3 : 5); i++) setTimeout(spawn, i * 800);

    return () => clearInterval(interval);
  }, []);

  return <div ref={ref} className="fixed inset-0 pointer-events-none z-[1]" />;
};

export default FloatingParticles;
