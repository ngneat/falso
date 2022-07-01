import { randNumber } from '../lib/number';

describe('randNumber', () => {
  it('should return a random number', () => {
    const [min, max] = [1, 999_999];
    const num = randNumber({ min, max });
    expect(typeof num).toBe('number');
    expect(num).toBeGreaterThanOrEqual(min);
    expect(num).toBeLessThanOrEqual(max);
  });

  it('should return a random number with fraction', () => {
    const num = randNumber({ min: 0.1, max: 1, fraction: 2 });
    expect(Number.isInteger(num)).toBe(false);
  });

  it('should return 0', () => {
    const num = randNumber({ min: 0, max: 0 });
    expect(num).toEqual(0);
  });

  it('should support precision', () => {
    const num = randNumber({ min: 1000, max: 2000, precision: 100 });
    expect(typeof num).toBe('number');
    expect(String(num)).toMatch(/^\d\d00$/);
  });
});
