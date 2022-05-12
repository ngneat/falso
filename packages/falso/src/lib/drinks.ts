import { FakeOptions, fake } from './core/core';
import { data } from './drinks.json';

/**
 * Generate a random drink.
 *
 * @category drinks
 *
 * @example
 *
 * randDrinks()
 *
 * @example
 *
 * randDrinks({ length: 10 })
 *
 * @example
 *
 * randDrinks({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randDrinks<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
