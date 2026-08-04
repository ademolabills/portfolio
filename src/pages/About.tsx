import { FaCertificate, FaGraduationCap, FaLightbulb } from 'react-icons/fa6';
import { Seo } from '@/components/common/Seo';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { Timeline } from '@/components/about/Timeline';
import profile from '@/data/profile.json';
import experience from '@/data/experience.json';
import education from '@/data/education.json';
import certifications from '@/data/certifications.json';
import type { EducationItem, CertificationItem, ExperienceItem } from '@/types';

const typedExperience = experience as ExperienceItem[];
const typedEducation = education as EducationItem[];
const typedCertifications = certifications as CertificationItem[];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Learn about Ademola Adedolapo Olalekan's journey into full stack web development, skills, education and certifications."
        path="/about"
      />

      <section className="mx-auto max-w-4xl px-5 pb-6 pt-16 sm:px-8">
        <SectionHeading eyebrow="About Me" title="A bit about my journey" />
        <Reveal className="mt-6 space-y-4 text-base leading-relaxed text-muted-dark light:text-muted-light">
          <p>
            I&apos;m {profile.name}, a {profile.role.toLowerCase()} who enjoys the full loop of
            building a product — designing a data model, wiring up an API, and shaping the
            interface people actually touch. I got into web development by tinkering with small
            scripts and never really stopped.
          </p>
          <p>
            Over the last {profile.yearsExperience}+ years I&apos;ve moved from following
            tutorials to shipping {profile.projectsShipped}+ projects of my own, contributing to a
            small engineering team as an intern, and taking on freelance work for real clients
            with real deadlines. I care about writing code that&apos;s easy for the next person
            (often future-me) to read, and about interfaces that feel fast and get out of the
            user&apos;s way.
          </p>
          <p>
            I&apos;m currently focused on deepening my backend fundamentals — testing,
            performance, and system design — while staying sharp on the frontend with React and
            TypeScript.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
        <SectionHeading eyebrow="Timeline" title="Experience &amp; growth" />
        <div className="mt-10">
          <Timeline items={typedExperience} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-text-dark light:text-text-light">
              <FaGraduationCap className="text-signal-500" /> Education
            </h3>
            <div className="space-y-4">
              {typedEducation.map((item) => (
                <Reveal
                  key={item.id}
                  className="rounded-2xl border border-line-dark/60 bg-white/5 p-5 light:border-line-light/60 light:bg-black/[0.02]"
                >
                  <p className="font-mono text-xs text-signal-500">{item.period}</p>
                  <p className="mt-1 font-semibold text-text-dark light:text-text-light">
                    {item.degree}
                  </p>
                  <p className="text-sm text-muted-dark light:text-muted-light">
                    {item.institution}
                  </p>
                  {item.description && (
                    <p className="mt-2 text-sm text-muted-dark light:text-muted-light">
                      {item.description}
                    </p>
                  )}
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-text-dark light:text-text-light">
              <FaCertificate className="text-signal-500" /> Certifications
            </h3>
            <div className="space-y-4">
              {typedCertifications.map((cert) => (
                <Reveal
                  key={cert.id}
                  className="rounded-2xl border border-line-dark/60 bg-white/5 p-5 light:border-line-light/60 light:bg-black/[0.02]"
                >
                  <p className="font-mono text-xs text-signal-500">{cert.year}</p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-1 block font-semibold text-text-dark hover:text-signal-500 light:text-text-light"
                  >
                    {cert.name}
                  </a>
                  <p className="text-sm text-muted-dark light:text-muted-light">{cert.issuer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-text-dark light:text-text-light">
          <FaLightbulb className="text-signal-500" /> Fun facts
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.funFacts.map((fact) => (
            <Reveal
              key={fact}
              className="rounded-2xl border border-line-dark/60 bg-white/5 p-5 text-sm text-muted-dark light:border-line-light/60 light:bg-black/[0.02] light:text-muted-light"
            >
              {fact}
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
