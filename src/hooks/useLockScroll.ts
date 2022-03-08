import { useEffect } from 'react';
import { fromEvent } from 'rxjs';

/**
 * @description Hook to lock scroll depend on lock state
 * @param lock 是否锁定
 */
export const useLockScroll = (lock: boolean) => {
  /**
   * A boolean value that, if true,
   * indicates that the function specified by listener will never call preventDefault().
   * If a passive listener does call preventDefault(),
   * the user agent will do nothing other than generate a console warning.
   * If not specified, defaults to false – except that in browsers other than Safari and Internet Explorer,
   * defaults to true for the wheel, mousewheel, touchstart and touchmove events.
   * See Improving scrolling performance with passive listeners to learn more.
   */
  useEffect(() => {
    if (lock) {
      const subscription1 = fromEvent(document.body, 'touchmove', { passive: false }).subscribe(
        (e) => {
          e.preventDefault();
        },
      );
      const subscription2 = fromEvent(document.body, 'wheel', { passive: false }).subscribe((e) => {
        e.preventDefault();
      });

      return () => {
        subscription1.unsubscribe();
        subscription2.unsubscribe();
      };
    }
    return () => {};
  }, [lock]);
};
