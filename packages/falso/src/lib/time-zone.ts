import { FakeOptions, fake } from './core/core';
import { data } from './time-zone.json';

/**
 * Generate a random time zone.
 *
 * @category address
 *
 * @example
 *
 * randTimeZone()
 *
 * @example
 *
 * randTimeZone({ length: 10 })
 *
 */
export function randTimeZone<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
