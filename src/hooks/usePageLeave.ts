import { useEffect } from 'react';
import { fromEvent } from 'rxjs';

export const usePageLeave = (onPageLeave: () => void) => {
  useEffect(() => {
    if (!onPageLeave) {
      return () => {};
    }

    const handler = (event: MouseEvent) => {
      const from = event.relatedTarget;
      if (!from) {
        onPageLeave();
      }
    };

    const source = fromEvent(document, 'mouseout');
    const subscribe = source.subscribe(<any>handler);
    return () => {
      subscribe.unsubscribe();
    };
  }, [onPageLeave]);
};
