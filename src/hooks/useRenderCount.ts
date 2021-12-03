import { useRef } from 'react';

/**
 * Hook for tracking render count.
 */
export function useRenderCount(): number {
  return ++useRef(0).current;
}
