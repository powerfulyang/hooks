import { useRef } from 'react';

/**
 * Hook for tracking render count.
 */
export function useRenderCount(): number {
  // eslint-disable-next-line no-plusplus
  return ++useRef(0).current;
}
