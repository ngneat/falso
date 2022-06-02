import { incrementalDate } from '../lib/factories/incremental-date';

describe('incrementalDate', () => {
  it('should increment date range', () => {
    const now = new Date();
    const stepInMilliseconds = 11;

    const dateFactory = incrementalDate({
      from: now,
      step: stepInMilliseconds,
    });

    for (let i = 0; i < 10; i++) {
      expect(dateFactory()?.getTime()).toBe(
        now.getTime() + i * stepInMilliseconds
      );
    }
  });

  it('should not allow `to` greater than `from`', () => {
    expect(() =>
      incrementalDate({
        from: new Date(new Date().getTime() + 10),
        to: new Date(),
        step: 1,
      })
    ).toThrowError('`to` should be a date greater than `from`');
  });

  it('should not allow negative `step`', () => {
    expect(() =>
      incrementalDate({ from: new Date(), to: new Date(), step: -1 })
    ).toThrowError(
      '`step` should be a number greater than 0, for example: {from: new Date(), step: 10}'
    );
  });

  it('should not allow `step = 0`', () => {
    expect(() =>
      incrementalDate({ from: new Date(), to: new Date(), step: 0 })
    ).toThrowError(
      '`step` should be a number greater than 0, for example: {from: new Date(), step: 10}'
    );
  });
});
