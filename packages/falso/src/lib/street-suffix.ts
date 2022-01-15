import { FakeOptions, fake } from './core/core';
import { data } from './street-suffix.json';

/**
 * Generate a random street-suffix.
 *
 * @category TBD
 *
 * @example
 *
 * randStreetSuffix()
 *
 * @example
 *
 * randStreetSuffix({ length: 10 })
 *
 */
export function randStreetSuffix<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
