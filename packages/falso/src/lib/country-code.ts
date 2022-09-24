import { FakeOptions, fake } from './core/core';
import { data } from './country-code.json';

/**
 * Generate a random country code.
 *
 * @category address
 *
 * @example
 *
 * randCountryCode()
 *
 * @example
 *
 * randCountryCode({ length: 10 })
 *
 * @example
 *
 * randCountryCode({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randCountryCode<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
