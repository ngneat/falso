import { FakeOptions, fake } from './core/core';
import { data } from './direction.json';

/**
 * Generate a random direction.
 *
 * @category Address
 *
 * @example
 *
 * randDirection()
 *
 * @example
 *
 * randDirection({ length: 10 })
 *
 */
export function randDirection<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
