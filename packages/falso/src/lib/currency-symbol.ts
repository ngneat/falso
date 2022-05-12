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
 * @example
 *
 * randCurrencySymbol({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randCurrencySymbol<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
