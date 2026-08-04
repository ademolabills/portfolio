import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { Seo } from '@/components/common/Seo';
import { Hero } from '@/components/home/Hero';
import { StatsCounter } from '@/components/home/StatsCounter';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { SkillGroup } from '@/components/skills/SkillGroup';
import { Reveal } from '@/components/common/Reveal';
import { staggerContainer } from '@/animations/variants';
import projects from '@/data/projects.json';
import skills from '@/data/skills.json';
import type { Project, SkillGroup as SkillGroupType } from '@/types';

const typedProjects = projects as Project[];
const typedSkills = skills as SkillGroupType[];
const featuredProjects = typedProjects.filter((project) => project.featured).slice(0, 3);

export default function Home() {
  return (
    <>
      <Seo
        title="Ademola Adedolapo Olalekan — Full Stack Web Developer"
        description="Full stack web developer specializing in React, TypeScript, Django and REST APIs. View my projects, skills and experience."
        path="/"
      />

      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <StatsCounter />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured projects"
            description="A snapshot of what I've built recently — full case studies with challenges and learnings on each."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-signal-500 hover:underline"
          >
            View all projects <FaArrowRight size={12} />
          </Link>
        </div>
        <Reveal
          as="div"
          variants={staggerContainer(0.12)}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Toolbox"
          title="What I work with"
          description="Core technologies I use daily to design, build and ship full stack products."
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {typedSkills.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-text-dark light:text-text-light sm:text-4xl">
            Let&apos;s build something great together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-dark light:text-muted-light">
            I&apos;m currently open to full-time roles and freelance collaborations. If you have a
            project in mind or a team I'd be a good fit for, I'd love to hear from you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-signal-500 px-7 py-3.5 font-medium text-ink shadow-glow transition-transform hover:scale-105"
          >
            Get in touch <FaArrowRight size={13} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
