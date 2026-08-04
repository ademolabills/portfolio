import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa6';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { SocialLinks } from '@/components/home/SocialLinks';
import profile from '@/data/profile.json';

const ROLES = [
  'Full Stack Web Developer',
  'React & TypeScript Engineer',
  'Django & REST API Builder',
  'UI/UX-minded Developer',
];

export function Hero() {
  const typed = useTypingEffect({ words: ROLES });

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-dot-grid">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-signal-500/20 blur-[120px]"
        aria-hidden="true"
      />
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal-500/40 bg-signal-500/10 px-4 py-1.5 font-mono text-xs font-medium text-signal-500"
          >
            <span className="h-2 w-2 rounded-full bg-signal-500" />
            Open to full-time & freelance roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text-dark light:text-text-light sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {profile.name.split(' ')[0]}.
            <br />
            I build{' '}
            <span className="text-signal-500">
              {typed}
              <span className="animate-blink text-signal-500">|</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-dark light:text-muted-light"
          >
            {profile.tagline} Based in {profile.location}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-signal-500 px-6 py-3 font-medium text-ink shadow-glow transition-transform hover:scale-105"
            >
              View My Work
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line-dark/60 px-6 py-3 font-medium text-text-dark transition-colors hover:border-signal-500 hover:text-signal-500 light:border-line-light/60 light:text-text-light"
            >
              <FaDownload size={14} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SocialLinks className="mt-10 flex gap-3" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float relative aspect-square w-full overflow-hidden rounded-3xl border border-line-dark/60 bg-gradient-to-br from-ink-surface to-ink-raised shadow-glass light:border-line-light/60">
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-display text-7xl font-semibold text-signal-500/70">
                {profile.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </span>
            </div>
            <span className="absolute bottom-3 right-3 rounded-full bg-ink/70 px-3 py-1 font-mono text-[11px] text-muted-dark backdrop-blur">
              photo placeholder
            </span>
          </div>
          <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 shadow-glass">
            <p className="font-display text-2xl font-semibold text-signal-500">
              {profile.yearsExperience}+
            </p>
            <p className="text-xs text-muted-dark light:text-muted-light">Years experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
