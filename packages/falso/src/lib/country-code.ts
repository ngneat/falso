import { fake, FakeOptions } from './core/core';
import { AZ } from './core/types';
import { data } from './country-code.json';

export type CountryCode = `${AZ}${AZ}`;

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
 */
export function randCountryCode<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data as CountryCode[], options);
}
