import { enableAllPlugins, produce, setAutoFreeze } from 'immer';
import { useCallback, useRef, useState } from 'react';
import type { ReturnFunction, VoidFunction } from '@powerfulyang/utils';
import { isFunction } from '@powerfulyang/utils';

enableAllPlugins();
setAutoFreeze(false);

export function useImmer<T>(
  initialState: T | ReturnFunction<T>,
): [T, VoidFunction<[T | VoidFunction<[T]> | ReturnFunction<T, [T]>]>, VoidFunction];

export function useImmer<T>(): [
  T | undefined,
  VoidFunction<[T | VoidFunction<[T | undefined]> | ReturnFunction<T, [T | undefined]>]>,
  VoidFunction,
];

/**
 * @description Hook for immer
 * @param initialValue
 * @returns [state, setState, resetState]
 */
export function useImmer<T>(initialValue?: T | ReturnFunction<T, []>) {
  const initialValueRef = useRef(initialValue);
  const [value, updateValue] = useState(initialValue);
  const setState = useCallback((updater: T | VoidFunction<[T]> | ReturnFunction<T, [T]>) => {
    if (isFunction(updater)) {
      return updateValue((v) => {
        return produce(v, updater);
      });
    }
    return updateValue(updater);
  }, []);
  const resetState = useCallback(() => {
    return updateValue(initialValueRef.current);
  }, []);

  return [value, setState, resetState] as const;
}
