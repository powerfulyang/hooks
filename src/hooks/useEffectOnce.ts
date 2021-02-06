import { EffectCallback } from 'react';
import { useFixed } from './useFixed';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useEffectOnce = (effect: EffectCallback) => {
  const effectRef = useFixed(effect);
  useIsomorphicLayoutEffect(effectRef, [effectRef]);
};
