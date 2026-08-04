import { Seo } from '@/components/common/Seo';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SkillGroup } from '@/components/skills/SkillGroup';
import skills from '@/data/skills.json';
import type { SkillGroup as SkillGroupType } from '@/types';

const typedSkills = skills as SkillGroupType[];

export default function Skills() {
  return (
    <>
      <Seo
        title="Skills"
        description="Frontend, backend, database and tooling skills, including React, TypeScript, Django, MySQL and Git."
        path="/skills"
      />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills &amp; technologies"
          description="A breakdown of the tools and technologies I use to design, build, test and ship full stack applications."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {typedSkills.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>
      </section>
    </>
  );
}
