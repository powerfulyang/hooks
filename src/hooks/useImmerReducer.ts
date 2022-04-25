import type { Draft } from 'immer';
import { produce, enableAllPlugins, setAutoFreeze } from 'immer';
import type { Dispatch } from 'react';
import { useMemo, useReducer } from 'react';

enableAllPlugins();
setAutoFreeze(false);

/**
 * @description Hook for creating a reducer with immer.
 */
export type Reducer<S = any, A = any> = (draftState: Draft<S>, action: A) => void | S;

/**
 * @description A hook that allows you to use Immer.js with a reducer.
 * @param reducer
 * @param initialState
 * @param initialAction
 */
export function useImmerReducer<S = any, A = any>(
  reducer: Reducer<S, A>,
  initialState: S,
  initialAction?: (initial: S) => S,
): [S, Dispatch<A>];

/**
 * @description Hook for creating a reducer with immer.
 * @param reducer
 * @param initialState
 * @param initialAction
 */
export function useImmerReducer<S, A>(
  reducer: Reducer<S, A>,
  initialState: S,
  initialAction: (arg: any) => any,
) {
  const cachedReducer = useMemo(() => produce(reducer), [reducer]);
  return useReducer(cachedReducer, initialState, initialAction);
}
