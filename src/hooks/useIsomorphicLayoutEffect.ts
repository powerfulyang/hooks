import { useEffect, useLayoutEffect } from 'react';
import { isClient } from '@powerfulyang/utils';

export const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect;
