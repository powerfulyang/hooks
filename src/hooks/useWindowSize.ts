import { useEffect } from 'react';
import { isClient } from '@powerfulyang/utils';
import { useRafState } from './useRafState';

export const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
  const [state, setState] = useRafState<{ width: number; height: number }>({
    width: isClient ? window.innerWidth : initialWidth,
    height: isClient ? window.innerHeight : initialHeight,
  });

  useEffect(() => {
    if (isClient) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handler);

      return () => {
        window.removeEventListener('resize', handler);
      };
    }
    return () => {};
  }, [setState]);

  return state;
};
