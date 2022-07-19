import { FakeOptions, fake } from './core/core';
import { data } from './song.json';
/**
 * Generate a random song.
 *
 * @category Music
 *
 * @example
 *
 * randSong()
 *
 * @example
 *
 * randSong({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randSong<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
