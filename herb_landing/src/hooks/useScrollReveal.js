import { useEffect } from 'react';

/**
 * Custom hook — applies the `.visible` class to `.reveal` elements
 * as they scroll into the viewport (IntersectionObserver-based).
 * Handles view transitions (e.g. returning to landing page from portals),
 * immediately reveals elements in the viewport, and respects prefers-reduced-motion.
 */
export function useScrollReveal(trigger) {
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealInView = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
          el.classList.add('visible');
        }
      });
    };

    if (typeof window === 'undefined' || !('IntersectionObserver' in window) || prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    // Schedule observation on next animation frame after React commits the DOM
    const rafId = requestAnimationFrame(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 50) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    });

    const t1 = setTimeout(revealInView, 150);
    const t2 = setTimeout(revealInView, 500);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
    };
  }, [trigger]);
}
