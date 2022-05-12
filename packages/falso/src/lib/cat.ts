import { fake, FakeOptions } from './core/core';
import { data } from './cat.json';

/**
 * Generate a random cat.
 *
 * @category animals
 *
 * @example
 *
 * randCat()
 *
 * @example
 *
 * randCat({ length: 10 })
 *
 * @example
 *
 * randCat({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randCat<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
