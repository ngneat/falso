import { FakeOptions, fake } from './core/core';
import { data } from './direction.json';

/**
 * Generate a random direction.
 *
 * @category address
 *
 * @example
 *
 * randDirection()
 *
 * @example
 *
 * randDirection({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randDirection<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
