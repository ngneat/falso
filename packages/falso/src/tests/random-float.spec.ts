import { randomFloat } from '../lib/random-float';

describe('random-float', () => {
  it('should return a random float between min and max default values', () => {
    const [min, max] = [1.0, 999.99];
    expect(randomFloat()).toBeGreaterThanOrEqual(min);
    expect(randomFloat()).toBeLessThanOrEqual(max);
  });

  it('should return a random float between 1.1 and 20.0', () => {
    const [min, max] = [1.1, 20.0];
    expect(randomFloat({ min, max })).toBeGreaterThanOrEqual(min);
    expect(randomFloat({ min, max })).toBeLessThanOrEqual(max);
  });
});
