import { produce, setAutoFreeze } from 'immer';
import { isVoid } from '@powerfulyang/utils';

describe('test immer', () => {
  beforeAll(() => {
    setAutoFreeze(false);
  });

  it('produce setter function', () => {
    const val = { a: 1 };
    const produceSetter = produce((draft) => {
      draft.a = 2;
    });
    expect(val).toStrictEqual({ a: 1 });
    expect(produceSetter(val)).toStrictEqual({ a: 2 });
  });

  it('produce next state', () => {
    const baseState = { a: 1 };
    const newState = produce(baseState, (draft) => {
      draft.a += 1;
    });
    expect(baseState).toStrictEqual({ a: 1 });
    expect(newState).toStrictEqual({ a: 2 });
  });

  it('produce next state with setter', () => {
    const baseState = { a: 1 };
    const newState = produce(baseState, () => {
      return 2;
    });
    expect(baseState).toStrictEqual({ a: 1 });
    expect(newState).toStrictEqual(2);
  });

  it('test void function return value', () => {
    const func = () => {};
    expect(isVoid(func.call(this))).toBe(true);
  });
});
