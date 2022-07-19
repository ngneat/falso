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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Japanese Bobtail'
 * 'Savannah'
 * 'LaPerm'
 */

export function randCat<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
