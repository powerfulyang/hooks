import { useEffect, useState } from 'react';
import { fromEvent } from 'rxjs';

function isDocumentVisible() {
  return document.visibilityState === 'visible';
}

export const useDocumentVisible = () => {
  const [visible, setVisible] = useState(() => isDocumentVisible());

  useEffect(() => {
    const handleVisibilityChange = () => {
      setVisible(isDocumentVisible());
    };

    const subscription = fromEvent(document, 'visibilitychange').subscribe(handleVisibilityChange);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return visible;
};
