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
  const amount: T = (options?.values ?? 2) as unknown as T;
  const totalValue = options?.totalValue ?? 100;

  if (amount <= 1) {
    throw new Error('Amount must be bigger than 1');
  }

  type TupleReturn = number extends T ? number[] : Tuple<number, typeof amount>;

  return fake((): TupleReturn => {
    const nums: number[] = [];

    for (let i = 0; i < amount - 1; i++) {
      const num = getRandomInRange({
        min: 0,
        max: totalValue - nums.reduce((a, b) => a + b, 0),
        fraction: options?.fraction,
      });

      nums.push(num);
    }

    return [
      ...nums,
      totalValue - nums.reduce((a, b) => a + b, 0),
    ] as unknown as TupleReturn;
  }, options);
}
