import { useCallback, useEffect } from 'react';

export const useBeforeUnload = (enabled: boolean | (() => boolean) = true, message?: string) => {
  const handler = useCallback(
    (event: BeforeUnloadEvent) => {
      const finalEnabled = typeof enabled === 'function' ? enabled() : true;

      if (!finalEnabled) {
        return;
      }

      event.preventDefault();

      if (message) {
        // eslint-disable-next-line no-param-reassign
        event.returnValue = message;
      }
    },
    [enabled, message],
  );

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    window.addEventListener('beforeunload', handler);

    return () => {
      window.removeEventListener('beforeunload', handler);
    };
  }, [enabled, handler]);
};
