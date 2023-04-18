import { enableMapSet, enablePatches } from 'immer';

enablePatches();
enableMapSet();

export * from './hooks/useBeforeUnload';
export * from './hooks/useDocumentVisible';
export * from './hooks/useImmer';
export * from './hooks/useImmerReducer';
export * from './hooks/useIsomorphicLayoutEffect';
export * from './hooks/useLockScroll';
export * from './hooks/useMountedRef';
export * from './hooks/usePageLeave';
export * from './hooks/usePageQuery';
export * from './hooks/usePrevious';
export * from './hooks/useRenderCount';
export * from './hooks/useOutsideClick';
export * from './hooks/useLatest';
