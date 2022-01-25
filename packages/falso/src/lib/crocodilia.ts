import { FakeOptions, fake } from './core/core';
import { data } from './crocodilia.json';

/**
 * Generate a random crocodilia.
 *
 * @category animals
 *
 * @example
 *
 * randCrocodilia()
 *
 * @example
 *
 * randCrocodilia({ length: 10 })
 *
 */
export function randCrocodilia<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
