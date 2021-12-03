import { enableAllPlugins, produce } from 'immer';
import { useCallback, useState } from 'react';
import type { ReturnTypedFunction, VoidFunction } from '@powerfulyang/utils';
import { isVoid, isFunction } from '@powerfulyang/utils';

enableAllPlugins();

export function useImmer<T>(
  initialState: T | ReturnTypedFunction<T>,
): [T, VoidFunction<[T | VoidFunction<[T]> | ReturnTypedFunction<T>]>, VoidFunction];

export function useImmer<T = undefined>(): [
  T | undefined,
  VoidFunction<[T | VoidFunction<[T]> | ReturnTypedFunction<T>]>,
  VoidFunction,
];

/**
 * @description Hook for immer
 * @param initialValue
 * @returns [state, setState, resetState]
 */
export function useImmer<T = any>(initialValue?: T | ReturnTypedFunction<T>) {
  const [value, updateValue] = useState(initialValue);
  const setState = useCallback(
    (updater: T | VoidFunction<[T | undefined]> | ReturnTypedFunction<T>) => {
      if (isFunction(updater)) {
        updateValue((v) => {
          const returnValue = updater(v);
          if (isVoid(returnValue)) {
            return produce(v, updater);
          }
          return returnValue;
        });
      }
      return updateValue(updater);
    },
    [],
  );
  const resetState = useCallback(() => updateValue(initialValue), [initialValue]);

  return [value, setState, resetState] as const;
}
