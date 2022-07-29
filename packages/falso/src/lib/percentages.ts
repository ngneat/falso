import {
  fake,
  FakeOptions,
  getRandomInRange,
  RandomInRangeOptions,
} from './core/core';

export interface RandomNumberOptions extends RandomInRangeOptions, FakeOptions {
  amount: number;
  fraction?: number;
}

/**
 * Generate a list of percentages that add up to 100%.
 *
 * @category general, math
 *
 * @example
 *
 * randPercentages() // default amount is 2 fraction is 3
 *
 * @example
 *
 * randPercentages({ amount: 3, length: 10 })
 *
 * @example
 *
 * randPercentages({ amount: 3 })
 *
 */
export function randPercentages<Options extends RandomNumberOptions = never>(
  options?: Options
) {
  const amount = options?.amount ?? 2;

  if (amount <= 1) {
    throw new Error('Amount must be bigger than 1');
  }

  return fake(() => {
    const nums: number[] = [];

    for (let i = 0; i < amount - 1; i++) {
      const num = getRandomInRange({
        min: 0,
        max: 1 - nums.reduce((a, b) => a + b, 0),
        fraction: options?.fraction ?? 3,
      });

      nums.push(num);
    }

    return [...nums, 1 - nums.reduce((a, b) => a + b, 0)];
  }, options);
}
