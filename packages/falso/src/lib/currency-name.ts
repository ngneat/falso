import { FakeOptions, fake } from './core/core';
import { data } from './currency-name.json';

/**
 * Generate a random currency-name.
 *
 * @category TBD
 *
 * @example
 *
 * currencyName()
 *
 * @example
 *
 * currencyName({ length: 10 })
 *
 */
export function currencyName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
