import { useCallback, useEffect } from 'react';
import { isFunction } from '@powerfulyang/utils';

export const useBeforeUnload = (enabled: boolean | (() => boolean) = true, message?: string) => {
  const handler = useCallback(
    (event: BeforeUnloadEvent) => {
      const finalEnabled = isFunction(enabled) ? enabled() : enabled;

      if (finalEnabled) {
        // eslint-disable-next-line no-param-reassign
        event.returnValue = message;
      }
    },
    [enabled, message],
  );

  useEffect(() => {
    if (enabled) {
      window.addEventListener('beforeunload', handler);

      return () => {
        window.removeEventListener('beforeunload', handler);
      };
    }
    return () => {};
  }, [enabled, handler]);
};
