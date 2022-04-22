import type { DependencyList } from 'react';
import { useEffect, useRef } from 'react';

export const usePreviousRef = <T, P extends DependencyList>(
  state: T,
  dependencies?: P,
): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = state;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  return ref.current;
};
