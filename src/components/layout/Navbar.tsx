import { useEffect, useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { NAV_LINKS } from '@/utils/constants';
import { cn } from '@/utils/cn';
import profile from '@/data/profile.json';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative px-1 py-2 text-sm font-medium transition-colors',
      isActive
        ? 'text-signal-500'
        : 'text-muted-dark hover:text-text-dark light:text-muted-light light:hover:text-text-light',
    );

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-glass' : 'bg-transparent',
      )}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <RouterNavLink
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-text-dark light:text-text-light"
          onClick={() => setIsOpen(false)}
        >
          {profile.name.split(' ').map((part) => part[0]).join('')}
          <span className="text-signal-500">.</span>
        </RouterNavLink>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <RouterNavLink to={link.path} className={linkClass} end={link.path === '/'}>
                {link.label}
              </RouterNavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            download
            className="rounded-full border border-signal-500/60 px-4 py-2 text-sm font-medium text-signal-500 transition-colors hover:bg-signal-500 hover:text-ink"
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line-dark/60 text-text-dark light:text-text-light"
          >
            {isOpen ? <FaXmark size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden glass lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <RouterNavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-lg px-3 py-2.5 text-sm font-medium',
                        isActive
                          ? 'bg-signal-500/10 text-signal-500'
                          : 'text-muted-dark light:text-muted-light',
                      )
                    }
                  >
                    {link.label}
                  </RouterNavLink>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  className="mt-2 block rounded-lg bg-signal-500 px-3 py-2.5 text-center text-sm font-semibold text-ink"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
