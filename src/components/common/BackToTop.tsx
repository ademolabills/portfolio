import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useScrollProgress } from '@/hooks/useScrollProgress';

/** Floating action button that appears after the user scrolls and jumps back to top. */
export function BackToTop() {
  const progress = useScrollProgress();
  const visible = progress > 15;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 10 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-signal-500 text-ink shadow-glow sm:bottom-8 sm:right-8"
        >
          <FaArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
