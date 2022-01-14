import { fake, FakeOptions } from './core/core';
import { data } from './cat.json';

/**
 * Generate a random cat.
 *
 * @category TBD
 *
 * @example
 *
 * cat()
 *
 * @example
 *
 * cat({ length: 10 })
 *
 */
export function cat<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
