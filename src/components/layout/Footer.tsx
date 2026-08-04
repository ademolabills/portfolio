import { Link } from 'react-router-dom';
import { Icon } from '@/components/common/Icon';
import { NAV_LINKS } from '@/utils/constants';
import profile from '@/data/profile.json';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-dark/60 light:border-line-light/60">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-text-dark light:text-text-light">
              {profile.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted-dark light:text-muted-light">
              {profile.tagline}
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-dark light:text-muted-light">
              Navigate
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-dark transition-colors hover:text-signal-500 light:text-muted-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-dark light:text-muted-light">
              Elsewhere
            </p>
            <div className="flex gap-3">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line-dark/60 text-text-dark transition-colors hover:border-signal-500 hover:text-signal-500 light:border-line-light/60 light:text-text-light"
                >
                  <Icon name={social.icon} size={16} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-dark light:text-muted-light">
              {profile.location}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line-dark/60 pt-6 text-xs text-muted-dark light:border-line-light/60 light:text-muted-light sm:flex-row">
          <p>
            © {year} {profile.name}. Built with React, TypeScript &amp; Tailwind CSS.
          </p>
          <p>Designed &amp; developed from scratch.</p>
        </div>
      </div>
    </footer>
  );
}
