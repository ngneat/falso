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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Orinoco Crocodile'
 * 'Gharial'
 * 'Broad-snouted Caiman'
 */

export function randCrocodilia<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
