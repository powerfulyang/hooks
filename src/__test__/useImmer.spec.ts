import { act, renderHook } from '@testing-library/react-hooks';
import { useImmer } from '../hooks/useImmer';

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
     */
    const { result } = renderHook(() =>
      useImmer({
        a: 1,
      }),
    );

    // 直接赋值
    act(() => {
      result.current[1]({ a: 2 });
    });

    expect(result.current[0]).toEqual({
      a: 2,
    });

    // immer 赋值
    act(() => {
      result.current[1]((draft) => {
        draft.a = 3;
      });
    });

    expect(result.current[0]).toEqual({
      a: 3,
    });

    // 直接 return 形式
    act(() => {
      result.current[1](() => ({
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

  it('immer ()=>T', () => {
    const { result } = renderHook(() =>
      useImmer(() => ({
        a: 1,
      })),
    );

    // 直接赋值
    act(() => {
      result.current[1]({ a: 2 });
    });

    expect(result.current[0]).toEqual({
      a: 2,
    });

    // immer 赋值
    act(() => {
      result.current[1]((draft) => {
        draft.a = 3;
      });
    });

    expect(result.current[0]).toEqual({
      a: 3,
    });

    // 直接 return 形式
    act(() => {
      result.current[1](() => ({
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
