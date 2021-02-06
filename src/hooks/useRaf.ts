import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useRaf = (ms: number = 1e12, delay: number = 0): number => {
  const [elapsed, set] = useState<number>(0);

  useIsomorphicLayoutEffect(() => {
    let raf: number;
    let timerStop: NodeJS.Timeout;
    let start: number;
    function loop() {
      raf = requestAnimationFrame(onFrame);
    }
    function onFrame() {
      const time = Math.min(1, (Date.now() - start) / ms);
      set(time);
      loop();
    }

    const onStart = () => {
      timerStop = setTimeout(() => {
        cancelAnimationFrame(raf);
        set(1);
      }, ms);
      start = Date.now();
      loop();
    };
    const timerDelay = setTimeout(onStart, delay);

    return () => {
      clearTimeout(timerStop);
      clearTimeout(timerDelay);
      cancelAnimationFrame(raf);
    };
  }, [ms, delay]);

  return elapsed;
};
