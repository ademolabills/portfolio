import { FaQuoteLeft, FaStar } from 'react-icons/fa6';
import { Reveal } from '@/components/common/Reveal';
import type { Testimonial } from '@/types';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Reveal className="flex h-full flex-col rounded-2xl border border-line-dark/60 bg-white/5 p-6 light:border-line-light/60 light:bg-black/[0.02]">
      <FaQuoteLeft className="mb-4 text-signal-500/50" size={22} aria-hidden="true" />
      <p className="flex-1 text-sm leading-relaxed text-text-dark light:text-text-light">
        {testimonial.quote}
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-line-dark/60 pt-4 light:border-line-light/60">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-signal-500/15 font-display text-sm font-semibold text-signal-500">
          {testimonial.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <p className="text-sm font-semibold text-text-dark light:text-text-light">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-dark light:text-muted-light">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
      <div className="mt-3 flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={index}
            size={12}
            className={index < testimonial.rating ? 'text-warn-500' : 'text-line-dark'}
            aria-hidden="true"
          />
        ))}
      </div>
    </Reveal>
  );
}
