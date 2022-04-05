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
 * randTimeZone({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randTimeZone<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
