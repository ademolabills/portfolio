import { useCountUp } from '@/hooks/useCountUp';
import type { StatItem } from '@/types';

const STATS: StatItem[] = [
  { label: 'Years of experience', value: 3, suffix: '+' },
  { label: 'Projects shipped', value: 12, suffix: '+' },
  { label: 'Client & team PRs merged', value: 80, suffix: '+' },
  { label: 'Technologies used', value: 15, suffix: '+' },
];

function StatCard({ stat }: { stat: StatItem }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-line-dark/60 bg-white/5 p-6 text-center light:border-line-light/60 light:bg-black/[0.02]"
    >
      <p className="font-display text-4xl font-semibold text-signal-500">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-muted-dark light:text-muted-light">{stat.label}</p>
    </div>
  );
}

export function StatsCounter() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {STATS.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
}
