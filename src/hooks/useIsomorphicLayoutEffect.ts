import { useEffect, useLayoutEffect } from 'react';
import { isClient } from '@powerfulyang/utils';

/**
 * @description Hook to use `useEffect` or `useLayoutEffect` based on the current environment.
 *
 */
export const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect;
