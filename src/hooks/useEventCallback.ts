import { useEffect, useState } from 'react';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { Not, RestrictArray, VoidAsNull } from '../type';
import { useFixed, useFixedCall } from './useFixed';
import { useEffectOnce } from './useEffectOnce';

export type VoidableEventCallback<EventValue> = EventValue extends void
  ? () => void
  : (e: EventValue) => void;

export type EventCallbackState<EventValue, State, Inputs = void> = [
  VoidableEventCallback<EventValue>,
  [
    State extends void ? null : State,
    BehaviorSubject<State | null>,
    BehaviorSubject<RestrictArray<Inputs> | null>,
  ],
];
export type ReturnedState<EventValue, State, Inputs> = [
  EventCallbackState<EventValue, State, Inputs>[0],
  EventCallbackState<EventValue, State, Inputs>[1][0],
];

export type EventCallback<EventValue, State, Inputs> = Not<
  Inputs extends void ? true : false,
  (
    eventSource$: Observable<EventValue>,
    state$: Observable<State>,
    inputs$: Observable<RestrictArray<Inputs>>,
  ) => Observable<State>,
  (eventSource$: Observable<EventValue>, state$: Observable<State>) => Observable<State>
>;

export function useEventCallback<EventValue>(
  callback: EventCallback<EventValue, void, void>,
): ReturnedState<EventValue, void | null, void>;
export function useEventCallback<EventValue, State>(
  callback: EventCallback<EventValue, State, void>,
  initialState: State,
): ReturnedState<EventValue, State, void>;
export function useEventCallback<EventValue, State, Inputs>(
  callback: EventCallback<EventValue, State, Inputs>,
  initialState: State,
  inputs: RestrictArray<Inputs>,
): ReturnedState<EventValue, State, Inputs>;

export function useEventCallback<EventValue, State = void, Inputs = void>(
  callback: EventCallback<EventValue, State, Inputs>,
  initialState?: State,
  inputs?: RestrictArray<Inputs>,
): ReturnedState<EventValue, State | null, Inputs> {
  const initialValue = (
    typeof initialState !== 'undefined' ? initialState : null
  ) as VoidAsNull<State>;
  const [state, setState] = useState(initialValue);
  const event$ = useFixedCall(() => new Subject<EventValue>());
  const state$ = useFixedCall(() => new BehaviorSubject<State | null>(initialValue));
  const inputs$ = useFixedCall(
    () =>
      new BehaviorSubject<RestrictArray<Inputs> | null>(
        typeof inputs === 'undefined' ? null : inputs,
      ),
  );

  function eventCallback(e: EventValue) {
    return event$.next(e);
  }
  const returnedCallback = useFixed(eventCallback);

  useEffect(() => {
    if (inputs !== undefined) {
      inputs$.next(inputs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, inputs);

  useEffectOnce(() => {
    setState(initialValue);
    let value$: Observable<State>;

    if (!inputs) {
      value$ = (callback as EventCallback<EventValue, State, void>)(
        event$,
        state$ as Observable<State>,
      );
    } else {
      value$ = (callback as any)(
        event$,
        state$ as Observable<State>,
        inputs$ as Observable<Inputs>,
      );
    }
    const subscription = value$.subscribe((value) => {
      state$.next(value);
      setState(value as VoidAsNull<State>);
    });
    return () => {
      subscription.unsubscribe();
      state$.complete();
      inputs$.complete();
      event$.complete();
    };
  }); // immutable forever

  return [returnedCallback as VoidableEventCallback<EventValue>, state];
}
