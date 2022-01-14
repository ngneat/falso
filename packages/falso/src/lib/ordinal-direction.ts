import { FakeOptions, fake } from './core/core';
import { data } from './ordinal-direction.json';

/**
 * Generate a random ordinal-direction.
 *
 * @category TBD
 *
 * @example
 *
 * ordinalDirection()
 *
 * @example
 *
 * ordinalDirection({ length: 10 })
 *
 */
export function ordinalDirection<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
