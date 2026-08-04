import { Reveal } from '@/components/common/Reveal';
import { SkillBar } from '@/components/skills/SkillBar';
import type { SkillGroup as SkillGroupType } from '@/types';

export function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <Reveal className="rounded-2xl border border-line-dark/60 bg-white/5 p-6 light:border-line-light/60 light:bg-black/[0.02] sm:p-8">
      <h3 className="mb-6 font-display text-lg font-semibold text-text-dark light:text-text-light">
        {group.category}
      </h3>
      <div className="space-y-5">
        {group.items.map((item) => (
          <SkillBar key={item.name} skill={item} />
        ))}
      </div>
    </Reveal>
  );
}
