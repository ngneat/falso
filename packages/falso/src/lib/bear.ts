import { FakeOptions, fake } from './core/core';
import { data } from './bear.json';

/**
 * Generate a random bear.
 *
 * @category animals
 *
 * @example
 *
 * randBear()
 *
 * @example
 *
 * randBear({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Spectacled bear'
 * 'Brown bear'
 * 'Asian black bear'
 */

export function randBear<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
