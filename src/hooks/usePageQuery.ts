import { isClient } from '@powerfulyang/utils';
import { useMemo } from 'react';

const getValue = (search: string, param: string) => new URLSearchParams(search).get(param);

export type UseQueryParam = (param: string) => string | null;

const usePageQueryClient: UseQueryParam = (param) => {
  return useMemo(() => {
    return getValue(window.location.search, param);
  }, [param]);
};

const usePageQueryServer = () => null;

export const usePageQuery = isClient ? usePageQueryClient : usePageQueryServer;
