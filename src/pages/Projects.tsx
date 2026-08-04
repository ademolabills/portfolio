import { useMemo, useState } from 'react';
import { Seo } from '@/components/common/Seo';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectFilter } from '@/components/projects/ProjectFilter';
import { ProjectSearch } from '@/components/projects/ProjectSearch';
import projectsData from '@/data/projects.json';
import type { Project } from '@/types';

const projects = projectsData as Project[];
const CATEGORIES = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = category === 'All' || project.category === category;
      const haystack = `${project.title} ${project.technologies.join(' ')}`.toLowerCase();
      const matchesQuery = haystack.includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <Seo
        title="Projects"
        description="A collection of full stack, frontend and API projects built with React, Django, TypeScript and more."
        path="/projects"
      />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects"
          description="Everything from full-stack platforms to focused frontend builds and standalone APIs. New projects added here as they ship."
        />

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ProjectFilter categories={CATEGORIES} active={category} onChange={setCategory} />
          <ProjectSearch value={query} onChange={setQuery} />
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-muted-dark light:text-muted-light">
            No projects match that search. Try a different keyword or category.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
