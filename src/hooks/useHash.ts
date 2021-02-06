import { useCallback } from 'react';
import { useImmer } from './useImmer';
import { useEffectOnce } from './useEffectOnce';

/**
 * read and write url hash, response to url hash change
 */
export const useHash = () => {
  const [hash, setHash] = useImmer(() => window.location.hash);

  const onHashChange = useCallback(() => {
    setHash(window.location.hash);
  }, [setHash]);

  useEffectOnce(() => {
    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  });

  const _setHash = useCallback(
    (newHash: string) => {
      if (newHash !== hash) {
        window.location.hash = newHash;
      }
    },
    [hash],
  );

  return [hash, _setHash] as const;
};
