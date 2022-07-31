import { randAggregation } from '../lib/aggregation';

describe('randPercentages', () => {
  it('should return 4 random numbers', () => {
    const nums = randAggregation({
      totalValue: 1500,
      values: 4,
    });

    expect(nums.reduce((a, b) => a + b)).toBe(1500);
    expect(nums.length).toBe(4);
  });

  it('should use default values', () => {
    const nums = randAggregation();

    expect(nums.reduce((a, b) => a + b)).toBe(100);
    expect(nums.length).toBe(2);
  });

  it('should throw', () => {
    expect(() => randAggregation({ values: 1 })).toThrow();
  });
});
