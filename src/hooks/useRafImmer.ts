import type { ReturnFunction, VoidFunction } from '@powerfulyang/utils';
import { useCallback, useEffect, useRef } from 'react';
import { useImmer } from './useImmer';

export function useRafImmer<T>(
  initialState: T | ReturnFunction<T>,
): [T, VoidFunction<[T | VoidFunction<[T]> | ReturnFunction<T, [T]>]>, VoidFunction];

export function useRafImmer<T>(): [
  T | undefined,
  VoidFunction<[T | VoidFunction<[T | undefined]> | ReturnFunction<T, [T | undefined]>]>,
  VoidFunction,
];

export function useRafImmer(initialState?: any) {
  const frame = useRef(0);
  const [state, setState] = useImmer(initialState);

  const setRafState = useCallback(
    (value) => {
      cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        setState(value);
      });
    },
    [setState],
  );

  useEffect(() => cancelAnimationFrame(frame.current), []);

  return [state, setRafState];
}
