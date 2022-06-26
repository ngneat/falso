import { randAmount } from '../lib/amount';

describe('amount', () => {
  it('should return a random amount between min and max default values', () => {
    const [min, max] = [1.0, 9999.99];
    const res = randAmount();
    expect(res).toBeGreaterThanOrEqual(min);
    expect(res).toBeLessThanOrEqual(max);
  });

  it('should return a list of random amount between min and max default values', () => {
    const [min, max] = [1.0, 9999.99];
    const res = randAmount({ min, max, length: 10 });

    expect(res[0]).toBeGreaterThanOrEqual(min);
    expect(res[0]).toBeLessThanOrEqual(max);
    expect(res.length).toBe(10);
    expect(res[0]).not.toBe(res[1]);
    expect(typeof res[0]).toBe('number');
    expect(Array.isArray(res)).toBe(true);
  });

  it('should return a random amount between 1.1 and 20.0', () => {
    const [min, max] = [1.1, 20.0];
    const res = randAmount({ min, max });
    expect(res).toBeGreaterThanOrEqual(min);
    expect(res).toBeLessThanOrEqual(max);
    expect(typeof res).toBe('number');
  });

  it('should return a random amount when receive only min value', () => {
    const min = 1.1;
    const res = randAmount({ min });
    expect(res).toBeGreaterThanOrEqual(min);
    expect(res).toBeLessThanOrEqual(9999.99);
    expect(typeof res).toBe('number');
  });

  it('should return a random amount when receive only max value', () => {
    const max = 20.0;
    const res = randAmount({ max });
    expect(res).toBeLessThanOrEqual(max);
    expect(res).toBeGreaterThanOrEqual(1.0);
    expect(typeof res).toBe('number');
  });

  it('should support fraction', () => {
    const res = randAmount({ min: 100, max: 200, fraction: 2 });
    expect(typeof res).toBe('number');
    expect(`${res}`).toMatch(/^\d+\.\d?\d$/);
  });

  it('should add symbol', () => {
    const res = randAmount({ min: 100, max: 200, fraction: 2, symbol: '$' });
    expect(res.startsWith('$')).toBe(true);
    expect(typeof res).toBe('string');
  });

  it('should return a list of random amounts with a symbol', () => {
    const res = randAmount({ length: 10, symbol: '$' });
    expect(res.length).toBe(10);
    expect(res[0].startsWith('$')).toBe(true);
    expect(typeof res[0]).toBe('string');
    expect(Array.isArray(res)).toBe(true);
  });
});
