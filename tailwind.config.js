/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1120',
          surface: '#121A2C',
          raised: '#182238',
        },
        paper: {
          DEFAULT: '#F6F7FB',
          surface: '#FFFFFF',
          raised: '#EEF1F7',
        },
        signal: {
          DEFAULT: '#17C3A2',
          50: '#E8FBF7',
          100: '#C7F5EB',
          400: '#2CD9B6',
          500: '#17C3A2',
          600: '#0FA085',
        },
        warn: {
          DEFAULT: '#F2A93B',
          500: '#F2A93B',
          600: '#D98E1F',
        },
        text: {
          dark: '#E7EAF2',
          light: '#131A2C',
        },
        muted: {
          dark: '#8B93A7',
          light: '#5B6478',
        },
        line: {
          dark: '#232D45',
          light: '#E3E6ED',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        marquee: 'marquee 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.24)',
        glow: '0 0 0 1px rgba(23,195,162,0.3), 0 0 24px rgba(23,195,162,0.25)',
      },
    },
  },
  plugins: [
    // The site defaults to a dark theme and toggles a `.light` class on <html>
    // (see ThemeContext). This custom variant lets us write `light:text-text-light`
    // the same way `dark:` normally works, but scoped to our own toggle.
    function lightVariantPlugin({ addVariant }) {
      addVariant('light', '.light &');
    },
  ],
};
