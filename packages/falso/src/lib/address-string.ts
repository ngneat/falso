import { FakeOptions, fake } from './core/core';
import { randAddress } from './address';

/**
 * Generate a random address string.
 *
 * @category Address
 *
 * @example
 *
 * randAddressString()
 *
 * @example
 *
 * randAddressString({ length: 10 })
 *
 */
export function randAddressString<Options extends FakeOptions = never>(
  options?: Options
) {
  const factory = () => {
    const { street, city, county, country, zipCode } = randAddress();

    return `${street}, ${city}, ${county}, ${country}, ${zipCode}`;
  };

  return fake(factory, options);
}
