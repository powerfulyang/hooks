import { produce } from 'immer';

describe('test immer', function () {
  it('produce setter function', function () {
    const val = { a: 1 };
    const produceSetter = produce((val) => {
      val.a = 2;
    });
    expect(produceSetter(val)).toStrictEqual({ a: 2 });
    expect(val).toStrictEqual({ a: 1 });
  });

  it('produce next state', function () {
    const baseState = { a: 1 };
    const newState = produce(baseState, (draft) => {
      draft.a = 2;
    });
    expect(baseState).toStrictEqual(baseState);
    expect(newState).toStrictEqual({ a: 2 });
  });
});
