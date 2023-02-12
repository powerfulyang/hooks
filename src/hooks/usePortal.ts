import type { FC, PropsWithChildren } from 'react';
import { Fragment, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { isClient, isFunction } from '@powerfulyang/utils';
import { useLatest } from '@/hooks/useLatest';

export function usePortalClient(container?: HTMLElement | (() => HTMLElement)) {
  const getContainer = useLatest(container);

  const rootElement = useMemo(() => {
    const containerElement = isFunction(getContainer.current)
      ? getContainer.current()
      : getContainer.current;
    // Parent is either a new root or the existing dom element
    return containerElement || document.body;
  }, [getContainer]);

  const Portal: FC<PropsWithChildren<unknown>> = useCallback(
    ({ children }) => createPortal(children, rootElement),
    [rootElement],
  );

  return Portal;
}

const usePortalServer = () => Fragment;

export const usePortal = isClient ? usePortalClient : usePortalServer;
