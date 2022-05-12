import { FakeOptions, fake } from './core/core';
import { randCity } from './city';
import { randStreetAddress } from './street-address';
import { randZipCode } from './zip-code';
import { randCounty } from './county';
import { randCountry } from './country';
import { objectIsUnique } from './core/unique-validators';

export interface AddressOptions extends FakeOptions {
  includeCounty?: boolean;
  includeCountry?: boolean;
}

export interface Address {
  street: string;
  city: string;
  zipCode: string;
  county?: string;
  country?: string;
}

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
 * randAddress({ includeCounty: false }) // default is true
 *
 * @example
 *
 * randAddress({ includeCountry: false }) // default is true
 *
 * @example
 *
 * randAddress({ length: 10 })
 *
 * @example
 *
 * randAddress({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randAddress<Options extends AddressOptions = never>(
  options?: Options
) {
  const includeCounty: boolean = options?.includeCounty ?? true;
  const includeCountry: boolean = options?.includeCountry ?? true;

  const factory = () => {
    const address: Address = {
      street: randStreetAddress(),
      city: randCity(),
      zipCode: randZipCode(),
    };

    if (includeCounty) {
      address.county = randCounty();
    }

    if (includeCountry) {
      address.country = randCountry();
    }

    return address;
  };

  return fake(factory, options, { uniqueComparer: checkUnique });
}

const checkUnique: (address: Address, addresses: Address[]) => boolean = (
  address: Address,
  addresses: Address[]
) => objectIsUnique(address, addresses, ['street', 'zipCode']);
