import { FakeOptions, fake } from './core/core';
import { randNumber } from './number';

/**
 * Generate a random phone number.
 *
 * @category person
 *
 * @example
 *
 * randPhoneNumber()
 *
 * @example
 *
 * randPhoneNumber({ length: 10 })
 *
 */
export function randPhoneNumber<Options extends FakeOptions>(
  options?: Options
) {
  return fake(() => {
    const number = '1' + randNumber({ min: 1_000_000_000, max: 9_999_999_999 });

    return number.replace(/1(.{3})(.{3})(.{4})/, '1-$1-$2-$3');
  }, options);
}
