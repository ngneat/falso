import { FakeOptions, fake } from './core/core';
import { randCountryCode } from './country-code';
import { randNumber } from './number';
import { randAlphaNumeric } from './alpha-numeric';

export interface IbanOptions extends FakeOptions {
  countryCode?: string; // [A-Z]{2}
}

/**
 * Generate a random IBAN number.
 *
 * @category finance
 *
 * @example
 *
 * randIban()
 *
 * @example
 *
 * randSwift({ countryCode: 'DE' }) // country code with ISO country code
 *
 * @example
 *
 * randIban({ length: 10 })
 *
 * @example
 *
 * randIban({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randIban<Options extends IbanOptions = never>(
  options?: Options
) {
  if (options?.countryCode && options?.countryCode?.length !== 2) {
    throw new Error(
      'country code should be valid ISO 3166-1 alpha-2 two-letter country code, for example: DE'
    );
  }

  const factory: () => string = () => {
    const countryCode = options?.countryCode ?? randCountryCode();

    const checkDigits = randNumber({ min: 10, max: 99 }).toString();

    const bban = Array(randNumber({ min: 12, max: 30 }))
      .fill('#')
      .join('')
      .replace(/#/g, () => {
        return randAlphaNumeric().toString();
      });

    return `${countryCode}${checkDigits}${bban}`.toUpperCase();
  };

  return fake(factory, options);
}
