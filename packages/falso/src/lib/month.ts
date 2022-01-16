import { fake, FakeOptions } from './core/core';
import { data } from './month.json';

/**
 * Generate a random month.
 *
 * @category TBD
 *
 * @example
 *
 * randMonth()
 *
 * @example
 *
 * randMonth({ length: 10 })
 *
 */
/**
 * Generate a random month.
 *
 * @category Date
 *
 * @example
 *
 * month()
 *
 * @example
 *
 * month({ length: 10 })
 *
 */
export function randMonth<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
