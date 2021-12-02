import { enableAllPlugins, produce } from 'immer';
import { useCallback, useState } from 'react';
import type { ReturnTypedFunction, VoidFunction } from '@powerfulyang/utils';
import { isFunction } from '@powerfulyang/utils';

enableAllPlugins();

export function useImmer<T = any>(initialValue?: T | ReturnTypedFunction<T>) {
  const [val, updateValue] = useState(initialValue);

  return [
    val,
    useCallback((updater: T | VoidFunction<T> | ReturnTypedFunction<T>) => {
      if (isFunction(updater)) {
        const returnValue = updater();
        if (!returnValue) {
          return updateValue((v) => produce(v, updater));
        }
        return updateValue(returnValue);
      }
      return updateValue(updater);
      // updateValue(produce(newState))
      // OR
      // example updater = (state)=> state.property = newVal
      //
      // updateValue(producedUpdater);
      //
      // producedUpdater to be called and get return value
    }, []),
  ] as const;
}
