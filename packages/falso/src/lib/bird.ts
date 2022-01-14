import { FakeOptions, fake } from './core/core';
import { data } from './bird.json';

/**
 * Generate a random bird.
 *
 * @category TBD
 *
 * @example
 *
 * bird()
 *
 * @example
 *
 * bird({ length: 10 })
 *
 */
export function bird<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
