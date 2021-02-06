import { useEffect } from 'react';

export interface UseTitleOptions {
  restoreOnUnmount?: boolean;
}
const DEFAULT_USE_TITLE_OPTIONS: UseTitleOptions = {
  restoreOnUnmount: false,
};
export function useTitle(title: string, options: UseTitleOptions = DEFAULT_USE_TITLE_OPTIONS) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    if (options && options.restoreOnUnmount) {
      return () => {
        document.title = prevTitle;
      };
    }
    return () => {};
  }, [options, title]);
}
