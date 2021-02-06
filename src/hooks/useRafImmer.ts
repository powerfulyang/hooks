import { Dispatch, SetStateAction, useCallback, useRef } from 'react';
import { useUnMount } from './useUnMount';
import { useImmer } from './useImmer';

export const useRafImmer = <S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] => {
  const frame = useRef(0);
  const [state, setState] = useImmer(initialState);

  const setRafState = useCallback(
    (value: S | ((prevState: S) => S)) => {
      cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        setState(value);
      });
    },
    [setState],
  );

  useUnMount(() => {
    cancelAnimationFrame(frame.current);
  });

  return [state, setRafState];
};
