import { Seo } from '@/components/common/Seo';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TestimonialCard } from '@/components/testimonials/TestimonialCard';
import testimonials from '@/data/testimonials.json';
import type { Testimonial } from '@/types';

const typedTestimonials = testimonials as Testimonial[];

export default function Testimonials() {
  return (
    <>
      <Seo
        title="Testimonials"
        description="What mentors, clients and collaborators say about working with Ademola Adedolapo Olalekan."
        path="/testimonials"
      />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          title="What people say"
          description="Feedback from mentors, clients and collaborators I've worked with."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {typedTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </>
  );
}
