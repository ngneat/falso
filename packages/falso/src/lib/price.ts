import { fake, FakeOptions, getRandomInRange } from './core/core';
import { RandomNumberOptions } from './random-number';

export interface PriceOptions extends FakeOptions, RandomNumberOptions {}

/**
 * Generate a random price.
 *
 * @category TBD
 *
 * @example
 *
 * price()
 *
 * @example
 *
 * price({ length: 10 })
 *
 */
export function price<Options extends PriceOptions>(options?: Options) {
  return fake(() => getRandomInRange(options), options);
}
