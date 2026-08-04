import { FaClock, FaTag } from 'react-icons/fa6';
import { Seo } from '@/components/common/Seo';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import blogPosts from '@/data/blog.json';
import type { BlogPost } from '@/types';

const typedPosts = blogPosts as BlogPost[];

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog"
        description="Upcoming articles on React, TypeScript, Django REST Framework and building performant web apps."
        path="/blog"
      />
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Writing"
          title="Blog"
          description="I'm starting to write about what I learn building full stack apps. Drafts below — check back soon."
        />
        <div className="mt-12 space-y-5">
          {typedPosts.map((post) => (
            <Reveal
              key={post.id}
              className="rounded-2xl border border-line-dark/60 bg-white/5 p-6 light:border-line-light/60 light:bg-black/[0.02]"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-dark light:text-muted-light">
                <span className="rounded-full bg-signal-500/10 px-2.5 py-1 font-medium text-signal-500">
                  {post.status === 'coming-soon' ? 'Coming soon' : post.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <FaClock size={11} /> {post.readTime} read
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-text-dark light:text-text-light">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-muted-dark light:text-muted-light">
                {post.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full border border-line-dark/60 px-2.5 py-1 text-xs text-muted-dark light:border-line-light/60 light:text-muted-light"
                  >
                    <FaTag size={9} /> {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
