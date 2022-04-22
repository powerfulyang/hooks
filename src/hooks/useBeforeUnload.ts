import { useCallback, useEffect } from 'react';
import { isFunction } from '@powerfulyang/utils';

/**
 * @description Hook to handle before unload event
 * @param enabled - Enable or disable before unload event
 * @param message - Message to show in before unload event
 */
export const useBeforeUnload = (enabled: boolean | (() => boolean) = true, message?: string) => {
  const handler = useCallback(
    (draft: BeforeUnloadEvent) => {
      const finalEnabled = isFunction(enabled) ? enabled() : enabled;

      if (finalEnabled) {
        draft.returnValue = message;
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
