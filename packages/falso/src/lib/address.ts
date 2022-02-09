import { FakeOptions, fake } from './core/core';
import { randCity } from './city';
import { randStreetAddress } from './street-address';
import { randZipCode } from './zip-code';
import { randCounty } from './county';
import { randCountry } from './country';

/**
 * Generate a random address.
 *
 * @category entities, address
 *
 * @example
 *
 * randAddress()
 *
 * @example
 *
 * randAddress({ length: 10 })
 *
 */
export function randAddress<Options extends FakeOptions = never>(
  options?: Options
) {
  const factory = () => {
    return {
      street: randStreetAddress(),
      city: randCity(),
      county: randCounty(),
      country: randCountry(),
      zipCode: randZipCode(),
    };
  };

  return fake(factory, options);
}
