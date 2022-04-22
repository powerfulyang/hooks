import type { FC, PropsWithChildren } from 'react';
import { useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { isClient, isFunction } from '@powerfulyang/utils';

export function usePortalClient(container: HTMLElement | (() => HTMLElement)) {
  const rootElement = useMemo(() => {
    const containerElement = isFunction(container) ? container() : container;
    // Parent is either a new root or the existing dom element
    return containerElement || document.body;
  }, [container]);

  const Portal: FC<PropsWithChildren<never>> = useCallback(
    ({ children }) => createPortal(children, rootElement),
    [rootElement],
  );

  return { target: rootElement, Portal };
}

const usePortalServer = () => null;

export const usePortal = isClient ? usePortalClient : usePortalServer;
