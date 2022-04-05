import { FakeOptions, fake } from './core/core';
import { data } from './bear.json';

/**
 * Generate a random bear.
 *
 * @category animals
 *
 * @example
 *
 * randBear()
 *
 * @example
 *
 * randBear({ length: 10 })
 *
 * @example
 *
 * randBear({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randBear<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
