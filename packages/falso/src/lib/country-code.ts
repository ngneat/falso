import { FakeOptions, fake } from './core/core';
import { data } from './country-code.json';

/**
 * Generate a random country-code.
 *
 * @category TBD
 *
 * @example
 *
 * countryCode()
 *
 * @example
 *
 * countryCode({ length: 10 })
 *
 */
export function countryCode<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
