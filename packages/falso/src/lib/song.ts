import { FakeOptions, fake } from './core/core';
import { data } from './song.json';
import { rand } from './rand';

/**
 * Generate a random song.
 *
 * @category text
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
  const songName = () => {
    let song = rand(data);

    return song;
  };

  return fake(songName, options);
}
