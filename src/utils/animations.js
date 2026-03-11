/**
 * Shared Framer Motion animation variants for scroll-triggered sliding animations.
 * Use these consistently across all sections.
 */

// --- Entry Variants ---
export const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

export const slideLeft = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export const slideRight = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const zoomFadeIn = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

// --- Container Variants (for stagger) ---
export const staggerContainer = (staggerDelay = 0.13) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: staggerDelay }
  }
});

// --- Viewport Config ---
export const viewportOnce = { once: true, margin: '-80px' };
