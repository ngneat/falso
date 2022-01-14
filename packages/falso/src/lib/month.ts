import { fake, FakeOptions } from './core';
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
export function month<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
