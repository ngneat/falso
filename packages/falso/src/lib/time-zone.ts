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
 * @example
 *
 * randTimeZone({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randTimeZone<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
