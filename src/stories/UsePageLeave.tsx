import type { FC } from 'react';
import React from 'react';
import { usePageLeave } from '../hooks/usePageLeave';

type Props = {};

export const UsePageLeave: FC<Props> = () => {
  const isLeaved = usePageLeave(() => {});

  return <span>mouse is {isLeaved ? 'leaved' : 'entered'}</span>;
};
