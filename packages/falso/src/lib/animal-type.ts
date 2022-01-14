import { FakeOptions, fake } from './core/core';
import { data } from './animal-type.json';

/**
 * Generate a random animal-type.
 *
 * @category TBD
 *
 * @example
 *
 * animalType()
 *
 * @example
 *
 * animalType({ length: 10 })
 *
 */
export function animalType<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
