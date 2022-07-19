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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Amaretto Sour'
 * 'Aviation'
 * 'Cocktail'
 */

export function randDrinks<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
