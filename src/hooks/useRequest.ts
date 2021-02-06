import { stringify } from 'qs';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Subject } from 'rxjs';
import { ReqOptions } from '../type/ReqOptions';
import { useImmer } from './useImmer';

export class UseRequest {
  static baseUrl: string = '';
}

export const useRequest = <T = any>(reqOptions: ReqOptions<T>) => {
  const defaultResTransform = useCallback((r: Response) => r.json() as Promise<T>, []);
  const [cachedOptions] = useImmer(reqOptions);
  const { url, body, query, runCase = true } = reqOptions;
  const { immediately = true, defaultResponse, resTransform = defaultResTransform } = cachedOptions;
  const [res, setRes] = useImmer(defaultResponse);
  const [loading, setLoading] = useImmer(false);
  let reqUrl = '';
  if (!url.startsWith('http')) {
    reqUrl = `${UseRequest.baseUrl}${url}`;
  }
  if (query) {
    reqUrl = `${reqUrl}?${stringify(query)}`;
  }
  const isFirstRef = useRef(0);
  const subject = useMemo(() => new Subject(), []);
  useEffect(() => {
    setLoading(true);
    const subscription = subject.subscribe(
      (r: T) => {
        setRes(r);
      },
      (e) => {
        setRes(e);
      },
    );
    if ((immediately || isFirstRef.current > 0) && runCase) {
      const response = fetch(reqUrl, {
        credentials: 'include',
        body,
      });
      response
        .then(resTransform)
        .then((r) => subject.next(r))
        .catch((e) => subject.error(e))
        .finally(() => {
          setLoading(false);
        });
    }
    isFirstRef.current++;
    return () => {
      subscription.unsubscribe();
    };
  }, [body, immediately, reqUrl, resTransform, runCase, setLoading, setRes, subject]);
  return [loading, res] as const;
};
