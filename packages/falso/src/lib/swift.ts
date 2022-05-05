import { FakeOptions, fake } from './core/core';
import { randCountryCode } from './country-code';
import { randAlphaNumeric } from './alpha-numeric';
import { randAlpha } from './alpha';

export interface SwiftOptions extends FakeOptions {
  bankCode?: string; // [A-Z]{4}
  countryCode?: string; // [A-Z]{2}
  locationCode?: string; // [A-Z0-9]{2}
  branchCode?: string; // [A-Z0-9]{3} optional
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

  if (options?.countryCode && options?.countryCode?.length !== 2) {
    throw new Error(
      'country code should be valid ISO 3166-1 alpha-2 two-letter country code, for example: DE'
    );
  }

  if (options?.locationCode && options?.locationCode?.length !== 2) {
    throw new Error(
      'location code should be valid 2 characters, like FF or MM'
    );
  }

  if (options?.branchCode && options?.branchCode?.length !== 3) {
    throw new Error(
      'branch code should be valid 3 alpha numberic characters, like XXX or 250'
    );
  }

  const factory: () => string = () => {
    const bankCode: string =
      options?.bankCode ??
      '####'.replace(/#/g, () => {
        return randAlpha();
      });

    const countryCode: string = options?.countryCode ?? randCountryCode();

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
