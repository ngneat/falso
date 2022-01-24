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
 */
export function randMovie<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
