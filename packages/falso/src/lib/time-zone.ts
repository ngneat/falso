import { FakeOptions, fake } from './core/core';
import { data } from './time-zone.json';

/**
 * Generate a random time-zone.
 *
 * @category TBD
 *
 * @example
 *
 * timeZone()
 *
 * @example
 *
 * timeZone({ length: 10 })
 *
 */
export function timeZone<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
