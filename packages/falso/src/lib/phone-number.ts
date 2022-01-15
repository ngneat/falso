import { FakeOptions, fake } from './core/core';
import { data } from './phone-number.json';

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
  return fake(data, options);
}
