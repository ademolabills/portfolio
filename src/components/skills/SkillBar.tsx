import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Icon } from '@/components/common/Icon';
import type { SkillItem } from '@/types';

export function SkillBar({ skill }: { skill: SkillItem }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-text-dark light:text-text-light">
          <Icon name={skill.icon} className="text-signal-500" size={16} />
          {skill.name}
        </span>
        <span className="font-mono text-xs text-muted-dark light:text-muted-light">
          {skill.level}%
        </span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-line-dark/60 light:bg-line-light"
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency`}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-signal-600 to-signal-400"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
