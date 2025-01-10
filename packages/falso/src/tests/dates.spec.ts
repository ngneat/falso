import { randBetweenDate } from '../lib/between-date';
import { randFutureDate } from '../lib/future-date';
import { randSoonDate } from '../lib/soon-date';
import { randPastDate } from '../lib/past-date';
import { randRecentDate } from '../lib/recent-date';

describe('between', () => {
  it('should return a Date', () => {
    const from = new Date(2020, 4, 4);
    const to = new Date(2020, 5, 5);
    expect(randBetweenDate({ from, to })).toBeInstanceOf(Date);
  });

  it('should use date strings', () => {
    const from = new Date(2020, 4, 4).toISOString();
    const to = new Date(2020, 5, 5).toISOString();
    expect(randBetweenDate({ from, to })).toBeInstanceOf(Date);
  });

  it('should return a Date between 2020-04-04 and 2020-05-05', () => {
    const from = new Date(2020, 4, 4);
    const to = new Date(2020, 5, 5);
    const expected = randBetweenDate({ from, to });
    expect(expected.getFullYear()).toBe(2020);
    expect(expected.getTime()).toBeGreaterThan(from.getTime());
    expect(expected.getTime()).toBeLessThan(to.getTime());
  });

  it('should throw an error if from is after to', () => {
    const from = new Date(2020, 5, 5);
    const to = new Date(2020, 4, 4);
    expect(() => randBetweenDate({ from, to })).toThrow();
  });
});

describe('future', () => {
  it('should return a Date', () => {
    expect(randFutureDate()).toBeInstanceOf(Date);
  });

  it('should return a Date in the future', () => {
    expect(randFutureDate().getTime()).toBeGreaterThanOrEqual(
      new Date().getTime()
    );
  });

  it('should return a Date in the future within the 2 next years', () => {
    const expected = randFutureDate({ years: 2 });
    expect(expected.getTime()).toBeGreaterThanOrEqual(new Date().getTime());
    expect(expected.getFullYear()).toBeLessThanOrEqual(
      new Date().getFullYear() + 3
    );
  });

  it('should throw an error if years is negative', () => {
    expect(() => randFutureDate({ years: -2 })).toThrow();
  });
});

describe('soon', () => {
  it('should be greater than now', () => {
    const nowInMilliseconds = new Date().getTime();
    const expected = randSoonDate().getTime();
    expect(expected).toBeGreaterThanOrEqual(nowInMilliseconds);
  });

  it('should be lower than 2 days later', () => {
    const soonInMilliseconds = new Date(
      Date.now() + 2 * 24 * 60 * 60 * 1000
    ).getTime();
    const expected = randSoonDate().getTime();
    expect(expected).toBeLessThanOrEqual(soonInMilliseconds);
  });

  it('should be lower than 5 days later', () => {
    const soonInMilliseconds = new Date(
      Date.now() + 5 * 24 * 60 * 60 * 1000
    ).getTime();
    const expected = randSoonDate({ days: 4 }).getTime();
    expect(expected).toBeLessThanOrEqual(soonInMilliseconds);
  });

  it('should throw an error if days is negative', () => {
    expect(() => randSoonDate({ days: -2 })).toThrow();
  });
});

describe('past', () => {
  it('should return a Date', () => {
    expect(randPastDate()).toBeInstanceOf(Date);
  });

  it('should return a Date in the past', () => {
    expect(randPastDate().getTime()).toBeLessThanOrEqual(new Date().getTime());
  });

  it('should return a Date in the past within the 2 years before', () => {
    const expected = randPastDate({ years: 2 });
    expect(expected.getTime()).toBeLessThanOrEqual(new Date().getTime());
    expect(expected.getFullYear()).toBeGreaterThanOrEqual(
      new Date().getFullYear() - 3
    );
  });

  it('should throw an error if years is negative', () => {
    expect(() => randPastDate({ years: -2 })).toThrow();
  });
});

describe('recent', () => {
  it('should be less than now', () => {
    const nowInMilliseconds = new Date().getTime();
    const expected = randRecentDate().getTime();
    expect(expected).toBeLessThanOrEqual(nowInMilliseconds);
  });

  it('should be greater than 2 days earlier', () => {
    const recentInMilliseconds = new Date(
      Date.now() - 2 * 24 * 60 * 60 * 1000
    ).getTime();
    const expected = randRecentDate().getTime();
    expect(expected).toBeGreaterThanOrEqual(recentInMilliseconds);
  });

  it('should be greater than 5 days earlier', () => {
    const recentInMilliseconds = new Date(
      Date.now() - 5 * 24 * 60 * 60 * 1000
    ).getTime();
    const expected = randRecentDate({ days: 4 }).getTime();
    expect(expected).toBeGreaterThanOrEqual(recentInMilliseconds);
  });

  it('should throw an error if days is negative', () => {
    expect(() => randRecentDate({ days: -2 })).toThrow();
  });
});
