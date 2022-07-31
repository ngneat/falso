import { randAggregation } from '../lib/aggregation';

describe('randPercentages', () => {
  it.each([
    [2, 1500],
    [4, 1500],
    [100, 10000],
    [40, 100],
    [30, 20],
    [99, 99],
    [2, 150000],
  ])('should return %p random numbers that add up to %p', () => {
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
