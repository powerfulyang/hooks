import { fromEvent } from 'rxjs';
import { useEffect, useState } from 'react';
import { isNull } from '@powerfulyang/utils';
import { usePrevious } from './usePrevious';

export const usePageLeave = (onPageLeave: VoidFunction) => {
  const [isLeaved, setIsLeaved] = useState(false);
  const previous = usePrevious(isLeaved);
  useEffect(() => {
    if (!previous && isLeaved) {
      onPageLeave();
    }
  }, [isLeaved, onPageLeave, previous]);
  useEffect(() => {
    const leaveHandle = (event: MouseEvent) => {
      const { relatedTarget } = event;
      if (isNull(relatedTarget)) {
        setIsLeaved(true);
      }
    };
    const enterHandle = (event: MouseEvent) => {
      const { relatedTarget } = event;
      if (isNull(relatedTarget)) {
        setIsLeaved(false);
      }
    };

    const leaveEvent = fromEvent(document, 'mouseout', leaveHandle);
    const enterEvent = fromEvent(document, 'mouseover', enterHandle);
    const leaveSubscription = leaveEvent.subscribe();
    const enterSubscription = enterEvent.subscribe();
    return () => {
      leaveSubscription.unsubscribe();
      enterSubscription.unsubscribe();
    };
  }, []);

  return isLeaved;
};
