import { fake, FakeOptions } from './core/core';
import { CountryCode, randCountryCode } from './country-code';
import { randAlphaNumeric } from './alpha-numeric';
import { randAlpha } from './alpha';
import { AZ09 } from './core/types';

export interface SwiftOptions extends FakeOptions {
  // TODO limit this to 4 chars via typescript
  bankCode?: string; // [A-Z]{4}
  countryCode?: CountryCode; // [A-Z]{2}
  locationCode?: `${AZ09}${AZ09}`; // [A-Z0-9]{2}
  branchCode?: `${AZ09}${AZ09}${AZ09}`; // [A-Z0-9]{3} optional
  fillBranchCode?: boolean; // fill branchCode using XXX symbols
}

/**
 * Generate a random swift bic code.
 *
 * @category finance
 *
 * @example
 *
 * randSwift()
 *
 * @example
 *
 * randSwift({ bankCode: 'DEUT' }) // bank code of Deutsche Bank
 *
 * @example
 *
 * randSwift({ countryCode: 'DE' }) // country code with ISO country code
 *
 * @example
 *
 * randSwift({ locationCode: 'MM' }) // location code for Milan MM or for Frankfurt FF and etc
 *
 * @example
 *
 * randSwift({ branchCode: '250' }) // bank branch code
 *
 * @example
 *
 * randSwift({ fillBranchCode: true }) // bank branch code filled with XXX
 *
 * @example
 *
 * randSwift({ length: 10 })
 *
 */
export function randSwift<Options extends SwiftOptions = never>(
  options?: Options
) {
  if (options?.bankCode && options?.bankCode?.length !== 4) {
    throw new Error('bank code should be valid 4 letters. For example DEUT');
  }

  const factory: () => string = () => {
    const bankCode: string =
      options?.bankCode ??
      '####'.replace(/#/g, () => {
        return randAlpha();
      });

    const countryCode = options?.countryCode ?? randCountryCode();

    const locationCode: string =
      options?.locationCode ??
      '##'.replace(/#/g, () => {
        return randAlpha();
      });

    const branchCode: string =
      options?.branchCode ??
      '###'.replace(/#/g, () => {
        return randAlphaNumeric().toString();
      });

    return `${bankCode}${countryCode}${locationCode}${
      options?.fillBranchCode ? 'XXX' : branchCode
    }`.toUpperCase();
  };

  return fake(factory, options);
}
