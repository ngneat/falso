import { FakeOptions, fake } from './core/core';
import { randAddress } from './address';

/**
 * Generate a random address string.
 *
 * @category Address
 *
 * @example
 *
 * randAddressFull()
 *
 * @example
 *
 * randAddressFull({ length: 10 })
 *
 */
export function randAddressFull<Options extends FakeOptions = never>(
  options?: Options
) {
  const factory = () => {
    const { street, city, county, country, zipCode } = randAddress();

    return `${street}, ${city}, ${county}, ${country}, ${zipCode}`;
  };

  return fake(factory, options);
}
