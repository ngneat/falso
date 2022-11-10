import { FakeOptions, fake } from './core/core';
import { data } from './movie-character.json';
/**
 * Generate a random movie character.
 *
 * @category movie
 *
 * @example
 *
 * randMovieCharacter()
 *
 * @example
 *
 * randMovieCharacter({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Darth Vader'
 * 'Edna Mode'
 * 'Randle McMurphy'
 */

export function randMovieCharacter<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
