import type { FC } from 'react';
import { useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { isFunction } from '@powerfulyang/utils';

type PortalProps<T = HTMLElement> = {
  container: T | (() => T);
};

export function usePortal(args?: PortalProps) {
  const rootElement = useMemo(() => {
    const container = args?.container;
    const containerElement = isFunction(container) ? container() : container;
    // Parent is either a new root or the existing dom element
    return containerElement || document.body;
  }, [args?.container]);

  const Portal: FC = useCallback(
    ({ children }) => createPortal(children, rootElement),
    [rootElement],
  );

  return { target: rootElement, Portal };
}
