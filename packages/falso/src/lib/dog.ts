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
 * @example
 *
 * randDog({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randDog<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
