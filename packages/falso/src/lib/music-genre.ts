import { FakeOptions, fake } from './core/core';
import { data } from './music-genre.json';

/**
 * Generate a random genre.
 *
 * @category music
 *
 * @example
 *
 * randMusicGenre()
 *
 * @example
 *
 * randMusicGenre({ length: 10 })
 *
 * @example
 *
 * randMusicGenre({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randMusicGenre<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
