import { RefObject, useEffect } from 'react';
import { useImmer } from './useImmer';

export const useIntersection = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit,
): IntersectionObserverEntry | null => {
  const [
    intersectionObserverEntry,
    setIntersectionObserverEntry,
  ] = useImmer<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === 'function') {
      const handler = (entries: IntersectionObserverEntry[]) => {
        setIntersectionObserverEntry(entries[0]);
      };

      const observer = new IntersectionObserver(handler, options);
      observer.observe(ref.current);

      return () => {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }
    return () => {};
  }, [
    options.threshold,
    options.root,
    options.rootMargin,
    ref,
    options,
    setIntersectionObserverEntry,
  ]);

  return intersectionObserverEntry;
};
