import { useEffect } from 'react';
import { isClient } from '@powerfulyang/utils';
import { useRafState } from './useRafState';

export interface State {
  x: number;
  y: number;
}

export const useWindowScroll = (): State => {
  const [state, setState] = useRafState<State>({
    x: isClient ? window.pageXOffset : 0,
    y: isClient ? window.pageYOffset : 0,
  });

  useEffect(() => {
    const handler = () => {
      setState({
        x: window.pageXOffset,
        y: window.pageYOffset,
      });
    };

    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [setState]);

  return state;
};
