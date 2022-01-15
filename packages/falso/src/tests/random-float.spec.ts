import { randFloat } from '../lib/float';

describe('random-float', () => {
  it('should return a random float between min and max default values', () => {
    const [min, max] = [1.0, 9999.99];
    expect(randFloat()).toBeGreaterThanOrEqual(min);
    expect(randFloat()).toBeLessThanOrEqual(max);
  });

  it('should return a random float between 1.1 and 20.0', () => {
    const [min, max] = [1.1, 20.0];
    expect(randFloat({ min, max })).toBeGreaterThanOrEqual(min);
    expect(randFloat({ min, max })).toBeLessThanOrEqual(max);
  });

  it('should return a random float when receive only min value', () => {
    const min = 1.1;
    expect(randFloat({ min })).toBeGreaterThanOrEqual(min);
    expect(randFloat({ min })).toBeLessThanOrEqual(9999.99);
  });

  it('should return a random float when receive only max value', () => {
    const max = 20.0;
    expect(randFloat({ max })).toBeLessThanOrEqual(max);
    expect(randFloat({ max })).toBeGreaterThanOrEqual(1.0);
  });
});
