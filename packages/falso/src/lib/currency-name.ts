import { FakeOptions, fake } from './core/core';
import { data } from './currency-name.json';

/**
 * Generate a random currency name.
 *
 * @category Finance
 *
 * @example
 *
 * randCurrencyName()
 *
 * @example
 *
 * randCurrencyName({ length: 10 })
 *
 * @example
 *
 * randCurrencyName({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randCurrencyName<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
