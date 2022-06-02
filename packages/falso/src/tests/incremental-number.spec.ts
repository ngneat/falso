import { randIncrementalNumber } from '../lib/incremental-number';

describe('incrementalNumber', () => {
  it('should increment range with default options', () => {
    const numberFactory = randIncrementalNumber();

    for (let i = 1; i <= 10; i++) {
      expect(numberFactory()).toBe(i);
    }
  });

  it('should increment range', () => {
    const numberFactory = randIncrementalNumber({ from: 1, to: 5, step: 1 });

    expect(numberFactory()).toBe(1);
    expect(numberFactory()).toBe(2);
    expect(numberFactory()).toBe(3);
    expect(numberFactory()).toBe(4);
    expect(numberFactory()).toBe(5);

    expect(numberFactory()).toBeUndefined();
  });

  it('should increment range with uneven step', () => {
    const numberFactory = randIncrementalNumber({ from: 1, to: 5, step: 3 });

    expect(numberFactory()).toBe(1);
    expect(numberFactory()).toBe(4);

    expect(numberFactory()).toBeUndefined();
  });

  it('should decrement range', () => {
    const numberFactory = randIncrementalNumber({ from: 5, to: 1, step: -1 });

    expect(numberFactory()).toBe(5);
    expect(numberFactory()).toBe(4);
    expect(numberFactory()).toBe(3);
    expect(numberFactory()).toBe(2);
    expect(numberFactory()).toBe(1);

    expect(numberFactory()).toBeUndefined();
  });

  it('should not allow invalid range', () => {
    expect(() =>
      randIncrementalNumber({ from: 5, to: 1, step: 1 })
    ).toThrowError(
      '`to` should be higher or equal to `from`, for example: {from: 1, to: 3}'
    );
  });

  it('should not allow step 0', () => {
    expect(() => randIncrementalNumber({ from: 1, to: 100, step: 0 })).toThrow(
      '`step` should be a number different than 0, for example: {from: 1, step: 1}'
    );
  });
});
