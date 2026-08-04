import { FaMagnifyingGlass } from 'react-icons/fa6';

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProjectSearch({ value, onChange }: ProjectSearchProps) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <FaMagnifyingGlass
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-dark light:text-muted-light"
        size={14}
      />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search projects or tech..."
        aria-label="Search projects"
        className="w-full rounded-full border border-line-dark/60 bg-transparent py-2.5 pl-10 pr-4 text-sm text-text-dark placeholder:text-muted-dark focus:border-signal-500 focus:outline-none light:border-line-light/60 light:text-text-light"
      />
    </div>
  );
}
