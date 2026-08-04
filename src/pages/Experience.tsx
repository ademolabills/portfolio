import { Seo } from '@/components/common/Seo';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Timeline } from '@/components/about/Timeline';
import { GithubActivity } from '@/components/github/GithubActivity';
import experience from '@/data/experience.json';
import type { ExperienceItem } from '@/types';

const typedExperience = experience as ExperienceItem[];

export default function Experience() {
  return (
    <>
      <Seo
        title="Experience"
        description="Internships, freelance work and career goals — plus live GitHub activity and repositories."
        path="/experience"
      />
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Experience timeline"
          description="From self-directed study to internships and freelance client work — here's where I've been, and where I'm headed."
        />
        <div className="mt-12">
          <Timeline items={typedExperience} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Live from GitHub"
          title="Recent activity &amp; repositories"
          description="Pulled live from the GitHub public API — a real-time look at what I'm building."
        />
        <div className="mt-10">
          <GithubActivity />
        </div>
      </section>
    </>
  );
}
