import { incrementalDate } from '../lib/factories/incremental-date';

describe('incrementalDate', () => {
  const now = new Date();

  [now, now.toISOString(), now.getTime()].forEach((from) => {
    it(`should increment date range when input is: ${typeof from}`, () => {
      const stepInMilliseconds = 11;

      const dateFactory = incrementalDate({
        from,
        step: stepInMilliseconds,
      });

      for (let i = 0; i < 10; i++) {
        expect(dateFactory()?.getTime()).toBe(
          now.getTime() + i * stepInMilliseconds
        );
      }
    });
  });

  it('should allow `to` equal to `from`', () => {
    const dateFactory = incrementalDate({
      from: now,
      to: now,
      step: 1_000,
    });

    expect(dateFactory()).toEqual(now);
    expect(dateFactory()).toBeUndefined();
  });

  it('should not allow `from` greater than `to` with positive step', () => {
    expect(() =>
      incrementalDate({
        from: new Date(new Date().getTime() + 10),
        to: new Date(),
        step: 1,
      })
    ).toThrowError('`to` should be a date greater than or equal to `from`');
  });

  it('should not allow `to` greater than `from` with negative step', () => {
    expect(() =>
      incrementalDate({
        from: new Date(),
        to: new Date(new Date().getTime() + 10),
        step: -1,
      })
    ).toThrowError('`to` should be a date lower than or equal to `from`');
  });

  it('should not allow `step = 0`', () => {
    expect(() =>
      incrementalDate({ from: new Date(), to: new Date(), step: 0 })
    ).toThrowError(
      '`step` should be a number different from 0, for example: {from: new Date(), step: 10}'
    );
  });
});
