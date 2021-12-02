import { produce } from 'immer';

describe('test immer', () => {
  it('produce setter function', () => {
    const val = { a: 1 };
    const produceSetter = produce((draft) => {
      draft.a = 2;
    });
    expect(produceSetter(val)).toStrictEqual({ a: 2 });
    expect(val).toStrictEqual({ a: 1 });
  });

  it('produce next state', () => {
    const baseState = { a: 1 };
    const newState = produce(baseState, (draft) => {
      draft.a = 2;
    });
    expect(baseState).toStrictEqual(baseState);
    expect(newState).toStrictEqual({ a: 2 });
  });

  it('test void function return value', () => {
    const func = () => {};
    expect(func.call(this)).toBeUndefined();
  });
});
