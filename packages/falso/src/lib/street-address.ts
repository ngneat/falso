import { FakeOptions, fake } from './core/core';
import { data } from './street-address.json';

/**
 * Generate a random street address.
 *
 * @category address
 *
 * @example
 *
 * randStreetAddress()
 *
 * @example
 *
 * randStreetAddress({ length: 10 })
 *
 */
export function randStreetAddress<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
