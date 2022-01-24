import { FakeOptions, fake } from './core/core';
import { data } from './country-code.json';

/**
 * Generate a random country code.
 *
 * @category Address
 *
 * @example
 *
 * randCountryCode()
 *
 * @example
 *
 * randCountryCode({ length: 10 })
 *
 */
export function randCountryCode<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
