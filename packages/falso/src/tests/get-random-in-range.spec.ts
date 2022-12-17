import { getRandomInRange } from '../lib/core/core';

describe('getRandomInRange', () => {
  it('should throw error when max is smaller than min', () => {
    expect(() => getRandomInRange({ min: 10, max: 1 })).toThrowError(
      'Max must be bigger than min'
    );
  });

  it('should return number in range', () => {
    expect(getRandomInRange({ min: 1, max: 10 })).toBeGreaterThanOrEqual(1);
    expect(getRandomInRange({ min: 1, max: 10 })).toBeLessThan(11);
  });
});
