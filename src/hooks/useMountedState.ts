import { useCallback, useRef } from 'react';
import { useEffectOnce } from './useEffectOnce';

export function useMountedState(): () => boolean {
  const mountedRef = useRef<boolean>(false);
  const get = useCallback(() => mountedRef.current, []);

  useEffectOnce(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  });

  return get;
}
