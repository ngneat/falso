import { fake, FakeOptions } from './core/core';
import { data } from './month.json';

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
export function randMonth<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
