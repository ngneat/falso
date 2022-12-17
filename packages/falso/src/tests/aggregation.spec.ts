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
    [2, 0],
  ])(
    'should return %p random numbers that add up to %p',
    (values, totalValue) => {
      const nums = randAggregation({
        totalValue: totalValue,
        values: values,
      });

      expect(nums.reduce((a, b) => a + b)).toBe(totalValue);
      expect(nums.length).toBe(values);
    }
  );

  it('should work after 1000 loops', () => {
    for (let i = 0; i < 100; i++) {
      const nums = randAggregation({
        totalValue: 10_000,
        values: 30,
      });

      expect(nums.reduce((a, b) => a + b)).toBe(10_000);
      expect(nums.length).toBe(30);
    }
  });

  it('should work after 1000 loops with fraction', () => {
    for (let i = 0; i < 100; i++) {
      const nums = randAggregation({
        totalValue: 10_000,
        values: 30,
        fraction: 1,
      });

      // To avoid floating point errors
      expect(Math.round(nums.reduce((a, b) => a + b))).toBe(10_000);
      expect(nums.length).toBe(30);
    }
  });

  it.each([
    [2, 2],
    [40, 1000],
    [10, 10],
    [50, 100000],
  ])('should not include zeros', (values, totalValue) => {
    for (let i = 0; i < 100; i++) {
      const nums = randAggregation({
        totalValue: totalValue,
        values: values,
        noZeros: true,
      });

      expect(nums.reduce((a, b) => a + b)).toBe(totalValue);
      expect(nums.length).toBe(values);

      for (const num of nums) {
        expect(num).not.toBe(0);
      }
    }
  });

  it('should use default values', () => {
    const nums = randAggregation();

    expect(nums.reduce((a, b) => a + b)).toBe(100);
    expect(nums.length).toBe(2);
  });

  it('should throw', () => {
    expect(() => randAggregation({ values: 1 })).toThrow();
    expect(() => randAggregation({ totalValue: -1 })).toThrow();
    expect(() =>
      randAggregation({ values: 40, totalValue: 39, noZeros: true })
    ).toThrow();
  });
});
