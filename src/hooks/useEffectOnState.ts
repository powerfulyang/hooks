import type { DependencyList, EffectCallback } from 'react';
import { useEffect } from 'react';
import type { ValuesType } from 'utility-types';
import { usePreviousRef } from './usePreviousRef';

export const useEffectOnState = <T extends DependencyList>(
  effect: EffectCallback,
  dependencies: T,
  effectState: ValuesType<T>,
) => {
  const previous = usePreviousRef(effectState);
  useEffect(() => {
    if (previous !== effectState) {
      effect();
    }
  }, [effect, effectState, previous]);
};
