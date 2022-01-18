import { FakeOptions, fake } from './core/core';
import { data } from './music-genre.json';

/**
 * Generate a random genre.
 *
 * @category Music
 *
 * @example
 *
 * randMusicGenre()
 *
 * @example
 *
 * randMusicGenre({ length: 10 })
 *
 */
export function randMusicGenre<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
