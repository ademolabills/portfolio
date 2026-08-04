import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLoading } from '@/hooks/useLoading';

/**
 * Displays a branded loading screen for a short, fixed window on first load,
 * then fades out. Kept intentionally brief (~900ms) — long enough to avoid a
 * jarring flash of unstyled content, short enough to not annoy repeat visitors.
 */
export function LoadingScreen() {
  const { isLoading, finishLoading } = useLoading();

  useEffect(() => {
    const timer = setTimeout(finishLoading, 900);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          role="status"
          aria-label="Loading portfolio"
        >
          <motion.div
            className="font-display text-3xl font-semibold tracking-tight text-text-dark"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-signal-500">{'<'}</span>
            JD
            <span className="text-signal-500">{' />'}</span>
          </motion.div>
          <motion.div
            className="mt-6 h-0.5 w-40 overflow-hidden rounded-full bg-line-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="h-full bg-signal-500"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.9, ease: 'easeInOut', repeat: Infinity }}
            />
          </motion.div>
          <span className="sr-only">Loading, please wait…</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
