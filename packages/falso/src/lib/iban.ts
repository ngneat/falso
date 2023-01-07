import { fake, FakeOptions } from './core/core';
import { CountryCode, randCountryCode } from './country-code';
import { randNumber } from './number';
import { randAlphaNumeric } from './alpha-numeric';

export interface IbanOptions extends FakeOptions {
  countryCode?: CountryCode;
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
 */
export function randIban<Options extends IbanOptions = never>(
  options?: Options
) {
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
