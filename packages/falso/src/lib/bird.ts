import { FakeOptions, fake } from './core/core';
import { data } from './bird.json';

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
 */
export function randBird<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
