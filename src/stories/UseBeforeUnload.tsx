import type { FC } from 'react';
import React from 'react';
import { useBeforeUnload } from '../hooks/useBeforeUnload';

type Props = {
  enabled: boolean | (() => boolean);
  message: string;
};

export const UseBeforeUnload: FC<Props> = ({ enabled, message }) => {
  useBeforeUnload(enabled, message);
  return (
    <>
      enabled: {String(enabled)}; message: {message}
    </>
  );
};
