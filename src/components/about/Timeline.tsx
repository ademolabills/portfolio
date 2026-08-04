import { Reveal } from '@/components/common/Reveal';
import { slideInLeft, slideInRight } from '@/animations/variants';
import type { ExperienceItem } from '@/types';

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative space-y-10 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-line-dark/60 light:before:bg-line-light/60 sm:before:left-1/2">
      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <li key={item.id} className="relative sm:grid sm:grid-cols-2 sm:gap-10">
            <span
              className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ink ${
                item.current ? 'bg-signal-500' : 'bg-muted-dark'
              } sm:left-1/2 sm:-translate-x-1/2`}
              aria-hidden="true"
            />
            <Reveal
              variants={isEven ? slideInLeft : slideInRight}
              className={`pl-8 sm:pl-0 ${isEven ? 'sm:col-start-1 sm:pr-10 sm:text-right' : 'sm:col-start-2 sm:pl-10'}`}
            >
              <div className="rounded-2xl border border-line-dark/60 bg-white/5 p-5 light:border-line-light/60 light:bg-black/[0.02]">
                <span className="font-mono text-xs uppercase tracking-wide text-signal-500">
                  {item.period} · {item.type}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-text-dark light:text-text-light">
                  {item.role}
                </h3>
                <p className="text-sm text-muted-dark light:text-muted-light">
                  {item.organization} · {item.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-dark light:text-muted-light">
                  {item.description}
                </p>
                <ul
                  className={`mt-3 space-y-1.5 text-sm text-muted-dark light:text-muted-light ${
                    isEven ? 'sm:list-inside' : ''
                  }`}
                >
                  {item.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2 sm:justify-start">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-signal-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
