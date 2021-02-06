import { useEffectOnce } from './useEffectOnce';

export const useUnMount = (effect: VoidFunction) => {
  useEffectOnce(() => {
    return effect;
  });
};
