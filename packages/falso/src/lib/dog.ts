import { FakeOptions, fake } from './core/core';
import { data } from './dog.json';

/**
 * Generate a random dog.
 *
 * @category animals
 *
 * @example
 *
 * randDog()
 *
 * @example
 *
 * randDog({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randDog<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
