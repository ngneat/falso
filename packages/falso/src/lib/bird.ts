import { FakeOptions, fake } from './core/core';
import { data } from './bird.i18n.json';

/**
 * Generate a random bird.
 *
 * @category animals
 *
 * @example
 *
 * randBird()
 *
 * @example
 *
 * randBird({ length: 10 })
 *
 * @example
 *
 * randBird({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randBird<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
