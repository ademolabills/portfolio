import { Reveal } from '@/components/common/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="mb-3 inline-block font-mono text-sm font-medium uppercase tracking-widest text-signal-500">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-text-dark light:text-text-light sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-dark light:text-muted-light">
          {description}
        </p>
      )}
    </Reveal>
  );
}
