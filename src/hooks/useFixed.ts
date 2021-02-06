import { useRef } from 'react';
import { ReturnTypedFunction } from '@powerfulyang/utils';

export const useFixed = <T>(val: T): T => {
  const ref = useRef(val);
  return ref.current;
};

export const useFixedCall = <T>(fn: ReturnTypedFunction<T>): T => {
  const ref = useRef<{ v: T }>();

  if (!ref.current) {
    ref.current = {
      v: fn(),
    };
  }

  return ref.current.v;
};
