import { FakeOptions, fake } from './core/core';
import { data } from './cardinal-direction.json';

/**
 * Generate a random cardinal direction.
 *
 * @category Address
 *
 * @example
 *
 * randCardinalDirection()
 *
 * @example
 *
 * randCardinalDirection({ length: 10 })
 *
 */
export function randCardinalDirection<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
