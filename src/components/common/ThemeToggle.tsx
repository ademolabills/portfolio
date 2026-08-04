import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-line-dark/60 bg-white/5 text-text-dark transition-colors hover:border-signal-500/60 hover:text-signal-500 dark:border-line-dark/60 light:border-line-light/60 light:text-text-light"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <FaSun size={15} /> : <FaMoon size={15} />}
      </motion.span>
    </button>
  );
}
