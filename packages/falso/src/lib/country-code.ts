import { fake, FakeOptions, RandomInRangeOptions } from './core/core';
import { AZ } from './core/types';
import { alpha2, alpha3 } from './country-code.json';

export type CountryCode = `${AZ}${AZ}`;
export type CountryCode3 = `${AZ}${AZ}${AZ}`;

export interface RandomCountryCodeOptions
  extends RandomInRangeOptions,
    FakeOptions {
  alpha3?: boolean;
}

/**
 * Generate a random country code.
 *
 * @category address
 *
 * @example
 *
 * randCountryCode() // US
 *
 * @example
 *
 * randCountryCode({ alpha3 : true }) // KRW
 *
 * @example
 *
 * randCountryCode({ length: 10 })
 *
 */
export function randCountryCode<
  Options extends RandomCountryCodeOptions = never
>(options?: Options) {
  const dataset = options?.alpha3 ? alpha3 : alpha2;

  return fake(dataset as CountryCode[] | CountryCode3[], options);
}
