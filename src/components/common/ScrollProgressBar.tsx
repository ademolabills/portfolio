import { useScrollProgress } from '@/hooks/useScrollProgress';

/** Thin fixed progress bar at the top of the viewport reflecting scroll depth. */
export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-signal-500 to-warn-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
