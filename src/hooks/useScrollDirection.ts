import { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash-es';

export function useScrollDirection(defaultValue?: { isDown?: boolean; isUp?: boolean }) {
  const scrollPos = useRef(0);
  const [direction, setDirection] = useState(() => {
    return { isDown: defaultValue?.isDown || false, isUp: defaultValue?.isUp || false };
  });

  useEffect(() => {
    const handleScroll = throttle(() => {
      setDirection({
        isDown: window.scrollY > scrollPos.current,
        isUp: window.scrollY < scrollPos.current,
      });
      scrollPos.current = window.scrollY;
    }, 100);

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return direction;
}
