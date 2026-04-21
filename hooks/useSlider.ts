// hooks/useSlider.ts
import { useRef, useState } from 'react';
import gsap from 'gsap';

export const useSlider = (total: number) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (newIndex: number) => {
    if (!containerRef.current) return;

    const clamped = Math.max(0, Math.min(newIndex, total - 1));

    gsap.to(containerRef.current, {
      xPercent: -100 * clamped,
      duration: 0.6,
      ease: 'power2.out',
    });

    setIndex(clamped);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  return { containerRef, index, next, prev, goTo };
};
