import { randBetween } from '../lib/between';
import { randFuture } from '../lib/future';
import { randSoon } from '../lib/soon';
import { randPast } from '../lib/past';
import { randRecent } from '../lib/recent';

describe('between', () => {
  it('should return a Date', () => {
    const from = new Date(2020, 4, 4);
    const to = new Date(2020, 5, 5);
    expect(randBetween({ from, to })).toBeInstanceOf(Date);
  });

  it('should return a Date between 2020-04-04 and 2020-05-05', () => {
    const from = new Date(2020, 4, 4);
    const to = new Date(2020, 5, 5);
    const expected = randBetween({ from, to });
    expect(expected.getFullYear()).toBe(2020);
    expect(expected.getTime()).toBeGreaterThan(from.getTime());
    expect(expected.getTime()).toBeLessThan(to.getTime());
  });

  it('should throw an error if from is after to', () => {
    const from = new Date(2020, 5, 5);
    const to = new Date(2020, 4, 4);
    expect(() => randBetween({ from, to })).toThrow();
  });
});

describe('future', () => {
  it('should return a Date', () => {
    expect(randFuture()).toBeInstanceOf(Date);
  });

  it('should return a Date in the future', () => {
    expect(randFuture().getTime()).toBeGreaterThanOrEqual(new Date().getTime());
  });

  it('should return a Date in the future within the 2 next years', () => {
    const expected = randFuture({ years: 2 });
    expect(expected.getTime()).toBeGreaterThanOrEqual(new Date().getTime());
    expect(expected.getFullYear()).toBeLessThanOrEqual(
      new Date().getFullYear() + 3
    );
  });

  it('should throw an error if years is negative', () => {
    expect(() => randFuture({ years: -2 })).toThrow();
  });
});

describe('soon', () => {
  it('should be higher than now', () => {
    const nowInMilliseconds = new Date().getTime();
    const expected = randSoon().getTime();
    expect(expected).toBeGreaterThanOrEqual(nowInMilliseconds);
  });

  it('should be lower than 2 days later', () => {
    const soonInMilliseconds = new Date(
      Date.now() + 2 * 24 * 60 * 60 * 1000
    ).getTime();
    const expected = randSoon().getTime();
    expect(expected).toBeLessThanOrEqual(soonInMilliseconds);
  });

  it('should be lower than 5 days later', () => {
    const soonInMilliseconds = new Date(
      Date.now() + 5 * 24 * 60 * 60 * 1000
    ).getTime();
    const expected = randSoon({ days: 4 }).getTime();
    expect(expected).toBeLessThanOrEqual(soonInMilliseconds);
  });

  it('should throw an error if days is negative', () => {
    expect(() => randSoon({ days: -2 })).toThrow();
  });
});

describe('past', () => {
  it('should return a Date', () => {
    expect(randPast()).toBeInstanceOf(Date);
  });

  it('should return a Date in the past', () => {
    expect(randPast().getTime()).toBeLessThanOrEqual(new Date().getTime());
  });

  it('should return a Date in the past within the 2 years before', () => {
    const expected = randPast({ years: 2 });
    expect(expected.getTime()).toBeLessThanOrEqual(new Date().getTime());
    expect(expected.getFullYear()).toBeGreaterThanOrEqual(
      new Date().getFullYear() - 3
    );
  });

  it('should throw an error if years is negative', () => {
    expect(() => randPast({ years: -2 })).toThrow();
  });
});

describe('recent', () => {
  it('should be less than now', () => {
    const nowInMilliseconds = new Date().getTime();
    const expected = randRecent().getTime();
    expect(expected).toBeLessThanOrEqual(nowInMilliseconds);
  });

  it('should be higher than 2 days earlier', () => {
    const recentInMilliseconds = new Date(
      Date.now() - 2 * 24 * 60 * 60 * 1000
    ).getTime();
    const expected = randRecent().getTime();
    expect(expected).toBeGreaterThanOrEqual(recentInMilliseconds);
  });

  it('should be higher than 5 days earlier', () => {
    const recentInMilliseconds = new Date(
      Date.now() - 5 * 24 * 60 * 60 * 1000
    ).getTime();
    const expected = randRecent({ days: 4 }).getTime();
    expect(expected).toBeGreaterThanOrEqual(recentInMilliseconds);
  });

  it('should throw an error if days is negative', () => {
    expect(() => randRecent({ days: -2 })).toThrow();
  });
});
