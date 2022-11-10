import { FakeOptions, fake } from './core/core';
import { data } from './currency-symbol.json';

/**
 * Generate a random currency symbol.
 *
 * @category finance
 *
 * @example
 *
 * randCurrencySymbol()
 *
 * @example
 *
 * randCurrencySymbol({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'B/.'
 * '£'
 * 'Ls'
 */

export function randCurrencySymbol<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
