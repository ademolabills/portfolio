import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

/**
 * A dot + trailing ring cursor for desktop, fine-pointer devices only.
 * Automatically disabled on touch devices and when the user prefers reduced motion,
 * so it never interferes with mobile usability or accessibility preferences.
 */
export function CustomCursor() {
  const isFinePointer = useMediaQuery('(pointer: fine)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    if (!isFinePointer || prefersReducedMotion) return;

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let frameId: number;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
      const target = event.target as HTMLElement;
      setIsPointer(Boolean(target.closest('a, button, [role="button"], input, textarea')));
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      frameId = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', onMove);
    frameId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frameId);
    };
  }, [isFinePointer, prefersReducedMotion]);

  if (!isFinePointer || prefersReducedMotion) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot bg-signal-500"
        style={{ width: 8, height: 8 }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring border border-signal-500/60 transition-[width,height,opacity] duration-200"
        style={{
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          opacity: isPointer ? 0.9 : 0.5,
        }}
        aria-hidden="true"
      />
    </>
  );
}
