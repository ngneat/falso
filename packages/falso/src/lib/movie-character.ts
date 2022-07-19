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
 */

export function randMovieCharacter<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
