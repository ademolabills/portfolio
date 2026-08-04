import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { Reveal } from '@/components/common/Reveal';
import { scaleIn } from '@/animations/variants';
import type { Project } from '@/types';

export function ProjectCard({ project }: { project: Project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Reveal variants={scaleIn} className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line-dark/60 bg-white/5 transition-shadow hover:shadow-glass light:border-line-light/60 light:bg-black/[0.02]">
        <div className="relative aspect-video overflow-hidden bg-ink-raised">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {project.featured && (
            <span className="absolute left-3 top-3 rounded-full bg-signal-500 px-3 py-1 text-xs font-semibold text-ink">
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="mb-1 font-mono text-xs uppercase tracking-wide text-signal-500">
            {project.category}
          </span>
          <h3 className="font-display text-lg font-semibold text-text-dark light:text-text-light">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-dark light:text-muted-light">
            {project.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line-dark/60 px-2.5 py-1 text-xs text-muted-dark light:border-line-light/60 light:text-muted-light"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowDetails((prev) => !prev)}
            aria-expanded={showDetails}
            className="mt-4 self-start text-sm font-medium text-signal-500 hover:underline"
          >
            {showDetails ? 'Hide details' : 'Features, challenges & learnings'}
          </button>

          <motion.div
            initial={false}
            animate={{ height: showDetails ? 'auto' : 0, opacity: showDetails ? 1 : 0 }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-3 border-t border-line-dark/60 pt-3 text-sm light:border-line-light/60">
              <div>
                <p className="font-semibold text-text-dark light:text-text-light">Features</p>
                <ul className="mt-1 list-inside list-disc space-y-1 text-muted-dark light:text-muted-light">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-text-dark light:text-text-light">Challenge</p>
                <p className="text-muted-dark light:text-muted-light">{project.challenges}</p>
              </div>
              <div>
                <p className="font-semibold text-text-dark light:text-text-light">
                  What I learned
                </p>
                <p className="text-muted-dark light:text-muted-light">{project.learnings}</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-5 flex gap-3 border-t border-line-dark/60 pt-4 light:border-line-light/60">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text-dark hover:text-signal-500 light:text-text-light"
              >
                <FaGithub size={15} /> Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text-dark hover:text-signal-500 light:text-text-light"
              >
                <FaArrowUpRightFromSquare size={13} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
