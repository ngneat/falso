import { FakeOptions, fake } from './core/core';
import { data } from './genre.json';

/**
 * Generate a random genre.
 *
 * @category Music
 *
 * @example
 *
 * randGenre()
 *
 * @example
 *
 * randGenre({ length: 10 })
 *
 */
export function randGenre<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
