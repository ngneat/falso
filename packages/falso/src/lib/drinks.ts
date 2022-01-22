import { FakeOptions, fake } from './core/core';
import { data } from './drinks.json';

/**
 * Generate a random drink.
 *
 * @category Drinks
 *
 * @example
 *
 * randDrinks()
 *
 * @example
 *
 * randDrinks({ length: 10 })
 *
 */
export function randDrinks<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
