import {
  fake,
  FakeOptions,
  getRandomInRange,
  RandomInRangeOptions,
} from './core/core';

export interface RandomAggregationOptions
  extends RandomInRangeOptions,
    FakeOptions {
  totalValue?: number;
}

// https://stackoverflow.com/questions/52489261/typescript-can-i-define-an-n-length-tuple-type
type Tuple<V, N extends number, T extends V[] = []> = N extends T['length']
  ? T
  : Tuple<V, N, [...T, V]>;

/**
 * Generate a list of numbers that add up to a total value.
 *
 * @category general, math
 *
 * @example
 *
 * randAggregation() // default values is 2 and totalValue is 100
 *
 * @example
 *
 * randAggregation({ values: 3, totalValue: 1500, length: 10 })
 *
 * @example
 *
 * randAggregation({ values: 3 })
 *
 */
export function randAggregation<
  T extends number = 2,
  Options extends RandomAggregationOptions = never
>(options?: Options & { values?: T }) {
  const values: T = (options?.values ?? 2) as unknown as T;
  const totalValue = options?.totalValue ?? 100;

  if (values <= 1) {
    throw new Error('Amount must be bigger than 1');
  }

  /*

    To make this function appear more random / have more distributed numbers the function is ran in 3 steps

    * First add random value between 0 and totalValue / (values * 2)
    * Then fill the remainder
    * Then shuffle the array


  */

  type TupleReturn = number extends T ? number[] : Tuple<number, T>;
  return fake((): TupleReturn => {
    const nums: number[] = new Array(values).fill(0);

    // Only run this step if values is over two
    // Since this step tries to correct for an issue that occurs
    // When the amount of values are over 2
    if (values > 2) {
      // Add some values into all of them
      for (let i = 0; i < nums.length; i++) {
        nums[i] += getRandomInRange({
          min: 0,
          max: totalValue / (values * 2),
          fraction: options?.fraction,
        });
      }
    }

    // Fill the remainder
    for (let i = 0; i < values - 1; i++) {
      const num = getRandomInRange({
        min: 0,
        max: totalValue - nums.reduce((a, b) => a + b, 0),
        fraction: options?.fraction,
      });

      nums[i] += num;
    }

    nums[nums.length - 1] += totalValue - nums.reduce((a, b) => a + b, 0);

    // Shuffle the array
    const shuffled: number[] = [];

    // nums is guaranteed to have a length over 1 so this can't cause an infinite loop
    while (nums.length !== 0) {
      const i = getRandomInRange({
        min: 0,
        max: nums.length - 1,
        fraction: 0,
      });

      const [val] = nums.splice(i, 1);
      shuffled.push(val);
    }

    return shuffled as unknown as TupleReturn;
  }, options);
}
