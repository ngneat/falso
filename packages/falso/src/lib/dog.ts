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
 */
export function randDog<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
