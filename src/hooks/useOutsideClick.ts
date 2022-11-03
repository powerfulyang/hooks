import type { RefObject } from 'react';
import { useEffect } from 'react';
import { useLatest } from '@/hooks/useLatest';

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const latestCallback = useLatest(callback);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        latestCallback.current();
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [latestCallback, ref]);
};
