import { FakeOptions, fake } from './core/core';
import { data } from './country.json';

/**
 * Generate a random country.
 *
 * @category address
 *
 * @example
 *
 * randCountry()
 *
 * @example
 *
 * randCountry({ length: 10 })
 *
 * @example
 *
 * randCountry({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randCountry<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
