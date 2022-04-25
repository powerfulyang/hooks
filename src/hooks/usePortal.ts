import type { FC, PropsWithChildren } from 'react';
import { Fragment, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { isClient, isFunction } from '@powerfulyang/utils';

export function usePortalClient(container: HTMLElement | (() => HTMLElement)) {
  const rootElement = useMemo(() => {
    const containerElement = isFunction(container) ? container() : container;
    // Parent is either a new root or the existing dom element
    return containerElement || document.body;
  }, [container]);

  const Portal: FC<PropsWithChildren<unknown>> = useCallback(
    ({ children }) => createPortal(children, rootElement),
    [rootElement],
  );

  return Portal;
}

const usePortalServer = () => Fragment;

export const usePortal = isClient ? usePortalClient : usePortalServer;
