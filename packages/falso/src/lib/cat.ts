import { fake, FakeOptions } from './core';
import { data } from './cat.json';

/**
 * Generate a random cat.
 *
 * @category Animals
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
