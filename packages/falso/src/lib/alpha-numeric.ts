import { FakeOptions, fake } from './core/core';
import { data } from './random-alpha-numeric.json';

/**
 * Get a random alpha or numeric.
 *
 * @category text
 *
 * @example
 *
 * randAlphaNumeric()
 *
 * @example
 *
 * randAlphaNumeric({ length: 3 })
 *
 */
export function randAlphaNumeric<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
