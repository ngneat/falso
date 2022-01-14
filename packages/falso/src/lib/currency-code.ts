import { FakeOptions, fake } from './core/core';
import { data } from './currency-code.json';

/**
 * Generate a random currency-code.
 *
 * @category TBD
 *
 * @example
 *
 * currencyCode()
 *
 * @example
 *
 * currencyCode({ length: 10 })
 *
 */
export function currencyCode<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
