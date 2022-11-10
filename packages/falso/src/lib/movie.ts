import { FakeOptions, fake } from './core/core';
import { data } from './movie.json';
/**
 * Generate a random movie.
 *
 * @category Movie
 *
 * @example
 *
 * randMovie()
 *
 * @example
 *
 * randMovie({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'The Shawshank Redemption'
 * 'The Godfather'
 * 'The Godfather: Part II'
 */

export function randMovie<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
