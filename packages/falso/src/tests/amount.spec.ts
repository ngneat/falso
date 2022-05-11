import { randAmount } from '../lib/amount';

describe('amount', () => {
  it('should return a random amount between min and max default values', () => {
    const [min, max] = [1.0, 9999.99];
    expect(parseFloat(randAmount())).toBeGreaterThanOrEqual(min);
    expect(parseFloat(randAmount())).toBeLessThanOrEqual(max);
  });

  it('should return a list of random amount between min and max default values', () => {
    const [min, max] = [1.0, 9999.99];
    const result = randAmount({ min, max, length: 10 });

    expect(parseFloat(result[0])).toBeGreaterThanOrEqual(min);
    expect(parseFloat(result[0])).toBeLessThanOrEqual(max);
    expect(result.length).toBe(10);
    expect(result[0]).not.toBe(result[1]);
  });

  it('should return a random amount between 1.1 and 20.0', () => {
    const [min, max] = [1.1, 20.0];
    expect(parseFloat(randAmount({ min, max }))).toBeGreaterThanOrEqual(min);
    expect(parseFloat(randAmount({ min, max }))).toBeLessThanOrEqual(max);
  });

  it('should return a random amount when receive only min value', () => {
    const min = 1.1;
    expect(parseFloat(randAmount({ min }))).toBeGreaterThanOrEqual(min);
    expect(parseFloat(randAmount({ min }))).toBeLessThanOrEqual(9999.99);
  });

  it('should return a random amount when receive only max value', () => {
    const max = 20.0;
    expect(parseFloat(randAmount({ max }))).toBeLessThanOrEqual(max);
    expect(parseFloat(randAmount({ max }))).toBeGreaterThanOrEqual(1.0);
  });

  it('should support fraction', () => {
    const num = randAmount({ min: 100, max: 200, fraction: 2 });
    expect(typeof num).toBe('string');
    expect(num).toMatch(/^\d+\.\d?\d$/);
  });

  it('should add symbol', () => {
    const result = randAmount({ min: 100, max: 200, fraction: 2, symbol: '$' });
    expect(result.startsWith('$')).toBe(true);
  });
});
