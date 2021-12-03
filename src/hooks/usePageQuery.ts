import { useEffect, useState } from 'react';

const getValue = (search: string, param: string) => new URLSearchParams(search).get(param);

export type UseQueryParam = (param: string) => string | null;

const useClientQuery: UseQueryParam = (param) => {
  const [value, setValue] = useState<string | null>(() => getValue(window.location.search, param));

  useEffect(() => {
    const onChange = () => {
      setValue(getValue(window.location.search, param));
    };

    window.addEventListener('popstate', onChange);
    window.addEventListener('pushstate', onChange);
    window.addEventListener('replacestate', onChange);

    return () => {
      window.removeEventListener('popstate', onChange);
      window.removeEventListener('pushstate', onChange);
      window.removeEventListener('replacestate', onChange);
    };
  }, [param]);

  return value;
};

const useSearchParamServer = () => null;

export const usePageQuery = typeof window === 'object' ? useClientQuery : useSearchParamServer;
