import { FakeOptions, fake } from './core/core';
import { data } from './animal.json';

/**
 * Generate a random animal.
 *
 * @category animals
 *
 * @example
 *
 * randAnimal()
 *
 * @example
 *
 * randAnimal({ length: 10 })
 *
 */
export function randAnimal<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
