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
 */
export function randCurrencyName<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
