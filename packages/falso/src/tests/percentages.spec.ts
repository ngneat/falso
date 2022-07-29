import { randPercentages } from '../lib/percentages';

describe('randPercentages', () => {
  it('should return 3 random numbers', () => {
    const nums = randPercentages({ amount: 3 });

    expect(nums.reduce((a, b) => a + b)).toBe(1);
    expect(nums.length).toBe(3);
  });

  it('should throw', () => {
    expect(() => randPercentages({ amount: 1 })).toThrow();
  });
});
