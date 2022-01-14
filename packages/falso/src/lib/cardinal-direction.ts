import { FakeOptions, fake } from './core/core';
import { data } from './cardinal-direction.json';

/**
 * Generate a random cardinal-direction.
 *
 * @category TBD
 *
 * @example
 *
 * cardinalDirection()
 *
 * @example
 *
 * cardinalDirection({ length: 10 })
 *
 */
export function cardinalDirection<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
