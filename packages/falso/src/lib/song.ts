import { FakeOptions, fake } from './core/core';
import { data } from './song.json';
/**
 * Generate a random song.
 *
 * @category Song
 *
 * @example
 *
 * randSong()
 *
 * @example
 *
 * randSong({ length: 10 })
 *
 */
export function randSong<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
