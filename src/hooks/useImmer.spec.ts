import { act, renderHook } from '@testing-library/react';
import { useImmer } from '@/hooks/useImmer';
import { describe, expect, it } from '@jest/globals';

describe('useImmer', () => {
  it('immer T', () => {
    /**
     * 额 不能使用
     *
     * ```typescript
     * const {
     *       result: {
     *         current: [state, setState, resetState],
     *       },
     *     } = renderHook(() => useImmer({ a: 1 }));
     * ```
     * 这样子的形式, 这样似乎 current 的 reference 不会变化
     * 妈的智障，当然不会变化
     */
    const { result } = renderHook(() =>
      useImmer({
        a: 1,
      }),
    );

    const setState = result.current[1];
    // 直接赋值
    act(() => {
      setState({ a: 2 });
    });

    const state = result.current[0];
    expect(state).toEqual({
      a: 2,
    });

    // immer 赋值
    act(() => {
      setState((draft) => {
        draft.a = 3;
      });
    });

    const newState = result.current[0];
    expect(newState).toEqual({
      a: 3,
    });

    // 直接 return 形式
    act(() => {
      setState(() => ({
        a: 4,
      }));
    });

    const newState2 = result.current[0];
    expect(newState2).toEqual({
      a: 4,
    });

    const resetState = result.current[2];
    act(() => {
      resetState();
    });

    const originState = result.current[0];
    expect(originState).toEqual({
      a: 1,
    });
  });

  it('immer () => T', () => {
    const { result } = renderHook(() =>
      useImmer(() => ({
        a: 1,
      })),
    );

    const setState = result.current[1];
    // 直接赋值
    act(() => {
      setState({ a: 2 });
    });

    expect(result.current[0]).toEqual({
      a: 2,
    });

    // immer 赋值
    act(() => {
      setState((draft) => {
        draft.a = 3;
      });
    });

    expect(result.current[0]).toEqual({
      a: 3,
    });

    // 直接 return 形式
    act(() => {
      setState(() => ({
        a: 4,
      }));
    });

    expect(result.current[0]).toEqual({
      a: 4,
    });

    act(() => {
      result.current[2]();
    });

    expect(result.current[0]).toEqual({
      a: 1,
    });
  });
});
