import { cn } from '@/utils/cn';

interface ProjectFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export function ProjectFilter({ categories, active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={active === category}
          onClick={() => onChange(category)}
          className={cn(
            'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
            active === category
              ? 'border-signal-500 bg-signal-500 text-ink'
              : 'border-line-dark/60 text-muted-dark hover:border-signal-500/60 hover:text-signal-500 light:border-line-light/60 light:text-muted-light',
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
