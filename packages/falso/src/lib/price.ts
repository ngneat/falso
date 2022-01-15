import { fake, FakeOptions, getRandomInRange } from './core/core';
import { RandomNumberOptions } from './number';

export interface PriceOptions extends FakeOptions, RandomNumberOptions {}

/**
 * Generate a random price.
 *
 * @category Commerce
 *
 * @example
 *
 * randPrice()
 *
 * @example
 *
 * randPrice({ length: 10 })
 *
 */
export function randPrice<Options extends PriceOptions>(options?: Options) {
  return fake(() => getRandomInRange(options), options);
}
