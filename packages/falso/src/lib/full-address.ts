import { fake } from './core/core';
import { AddressOptions, randAddress } from './address';

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
 * randFullAddress({ includeCounty: false }) // default is true
 *
 * @example
 *
 * randFullAddress({ includeCountry: false }) // default is true
 *
 * @example
 *
 * randFullAddress({ length: 10 })
 *
 */
export function randFullAddress<Options extends AddressOptions = never>(
  options?: Options
) {
  const includeCounty: boolean = options?.includeCounty ?? true;
  const includeCountry: boolean = options?.includeCountry ?? true;

  const factory = () => {
    const { street, city, county, country, zipCode } = randAddress({
      includeCounty,
      includeCountry,
    });

    let address = `${street}, ${city}, `;

    if (includeCounty) {
      address += `${county}, `;
    }

    if (includeCountry) {
      address += `${country}, `;
    }

    return address + zipCode;
  };

  return fake(factory, options);
}
