// hooks/useSwipe.ts
import { useRef } from 'react';

export const useSwipe = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
  const startX = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50) onSwipeLeft();
    if (diff < -50) onSwipeRight();
  };

  return { onTouchStart, onTouchEnd };
};
