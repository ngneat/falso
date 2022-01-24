import { FakeOptions, fake } from './core/core';
import { data } from './movie-character.json';
/**
 * Generate a random movie character.
 *
 * @category Movie
 *
 * @example
 *
 * randMovieCharacter()
 *
 * @example
 *
 * randMovieCharacter({ length: 10 })
 *
 */
export function randMovieCharacter<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
