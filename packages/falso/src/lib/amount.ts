import {
  fake,
  FakeOptions,
  getRandomInRange,
  markRequired,
  RandomInRangeOptions,
  Return,
} from './core/core';

interface RandomAmountOptions extends RandomInRangeOptions, FakeOptions {
  symbol?: string;
}

/**
 * Generate a random amount.
 *
 * @category finance
 *
 * @example
 *
 * randAmount()
 *
 * @example
 *
 * randAmount({ min: 10, max: 20, fraction: 1 }) // 12.5
 *
 * @example
 *
 * randAmount({ min: 10, max: 20, fraction: 2 }) // 12.52
 *
 * @example
 *
 * randAmount({ symbol: '$' }) // '$12.52'
 *
 * @example
 *
 * randAmount({ length: 10 })
 */
export function randAmount<
  Options extends markRequired<RandomAmountOptions, 'symbol'>
>(options: Options): Return<string, Options>;
export function randAmount<Options extends RandomAmountOptions = never>(
  options?: Options
): Return<number, Options>;
export function randAmount<Options extends RandomAmountOptions = never>(
  options?: Options
) {
  const amountOptions: RandomAmountOptions = {
    ...options,
    fraction: options?.fraction ?? 2,
  };

  const symbol = options?.symbol ?? '';

  const factory: () => string | number = () => {
    const num = getRandomInRange(amountOptions);
    return symbol ? `${symbol}${num}` : num;
  };

  return fake(factory, options);
}
