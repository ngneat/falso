import {
  fake,
  FakeOptions,
  getRandomInRange,
  RandomInRangeOptions,
} from './core/core';

export interface RandomAmountOptions extends RandomInRangeOptions, FakeOptions {
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
 * randAmount({ symbol: '$' }) // $12.52
 *
 * @example
 *
 * randAmount({ length: 10 })
 */
export function randAmount<Options extends RandomAmountOptions = never>(
  options?: Options
) {
  const amountOptions: RandomAmountOptions = {
    ...options,
    fraction: options?.fraction ?? 2,
  };

  const symbol = options?.symbol ?? '';

  const factory: () => string = () => {
    return `${symbol}${getRandomInRange(amountOptions)}`;
  };

  return fake(factory, options);
}
