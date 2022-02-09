import { FakeOptions, fake } from './core/core';
import { randAddress } from './address';

/**
 * Generate a random full address.
 *
 * @category Address
 *
 * @example
 *
 * randFullAddress()
 *
 * @example
 *
 * randFullAddress({ length: 10 })
 *
 */
export function randFullAddress<Options extends FakeOptions = never>(
  options?: Options
) {
  const factory = () => {
    const { street, city, county, country, zipCode } = randAddress();

    return `${street}, ${city}, ${county}, ${country}, ${zipCode}`;
  };

  return fake(factory, options);
}
