import { VoidFunction } from '@powerfulyang/utils';
import { useEffectOnce } from './useEffectOnce';

export const useMount = (effect: VoidFunction) => {
  useEffectOnce(() => {
    effect();
  });
};
