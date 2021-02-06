import { produce, enableAllPlugins } from 'immer';
import { useCallback, useState } from 'react';
import { ReturnTypedFunction, VoidFunction, isFunction } from '@powerfulyang/utils';

enableAllPlugins();

export function useImmer<T = any>(initialValue?: T | ReturnTypedFunction<T>) {
  const [val, updateValue] = useState<T | undefined>(initialValue);

  return [
    val as T,
    useCallback((updater: T | VoidFunction<T>) => {
      if (!isFunction(updater)) {
        return updateValue(<T>updater);
      }
      return updateValue(produce(<any>updater));
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
