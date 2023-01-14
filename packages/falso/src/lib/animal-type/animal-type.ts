import { FakeOptions, fake } from '../core/core';
import { data } from './animal-type.json';

/**
 * Generate a random animal type.
 *
 * @category animals
 *
 * @example
 *
 * randAnimalType()
 *
 * @example
 *
 * randAnimalType({ length: 10 })
 *
 */
export function randAnimalType<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
