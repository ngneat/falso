import { FakeOptions, fake } from './core/core';
import { randCountryCode } from './country-code';
import { randNumber } from './number';
import { randAlphaNumeric } from './alpha-numeric';

/**
 * Generate a random ibn.
 *
 * @category finance
 *
 * @example
 *
 * randIban()
 *
 * @example
 *
 * randIban({ length: 10 })
 *
 */
export function randIban<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => {
    let iban = randCountryCode();

    for (let i = 0; i < randNumber({ min: 14, max: 28 }); i++) {
      iban += randAlphaNumeric();
    }

    return iban;
  }, options);
}
