import { FakeOptions, fake } from './core/core';
import { data } from './country.json';

/**
 * Generate a random country.
 *
 * @category Address
 *
 * @example
 *
 * randCountry()
 *
 * @example
 *
 * randCountry({ length: 10 })
 *
 */
export function randCountry<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
