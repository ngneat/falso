import { FakeOptions, fake } from './core/core';
import { data } from './cow.json';

/**
 * Generate a random cow.
 *
 * @category animals
 *
 * @example
 *
 * randCow()
 *
 * @example
 *
 * randCow({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randCow<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
