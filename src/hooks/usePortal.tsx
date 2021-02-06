import React, { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { isClient } from '@powerfulyang/utils';

interface PortalProps {
  id?: string;
  container?: HTMLElement | (() => HTMLElement);
}

export function usePortal(props: PortalProps = {}) {
  const { id, container } = props;
  const rootElemRef = useRef<Element | HTMLElement | null>(isClient ? document.body : null);

  useEffect(() => {
    const containerElement = typeof container === 'function' ? container() : container;

    // Look for existing target dom element to append to
    const existingParent = id && document.querySelector(`#${id}`);
    // Parent is either a new root or the existing dom element
    rootElemRef.current = containerElement || existingParent || document.body;
  }, [container, id]);

  const Portal: React.FC<any> = useCallback(
    ({ children }: { children: React.ReactNode }) => {
      if (rootElemRef.current != null) return createPortal(children, rootElemRef.current);
      return null;
    },
    [rootElemRef],
  );

  return { target: rootElemRef.current, Portal };
}
