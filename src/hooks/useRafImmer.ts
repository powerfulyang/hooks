import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { useImmer } from './useImmer';

export const useRafImmer = <S>(
  initialState?: S | (() => S),
): [S | undefined, Dispatch<SetStateAction<S>>] => {
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

  useEffect(() => cancelAnimationFrame(frame.current), []);

  return [state, setRafState];
};
