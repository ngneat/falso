import { FakeOptions, fake } from './core/core';
import { data } from './currency-symbol.json';

/**
 * Generate a random currency-symbol.
 *
 * @category TBD
 *
 * @example
 *
 * currencySymbol()
 *
 * @example
 *
 * currencySymbol({ length: 10 })
 *
 */
export function currencySymbol<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
