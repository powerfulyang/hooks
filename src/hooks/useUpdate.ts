import { useCallback, useState } from 'react';

export const useUpdate = () => {
  const [update, setUpdate] = useState(0);
  const updater = useCallback(() => {
    setUpdate((pre) => pre + 1);
  }, [setUpdate]);
  return [update, updater] as const;
};
