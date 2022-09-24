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
 * @example
 *
 * randMovie({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randMovie<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
