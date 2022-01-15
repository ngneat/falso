import { FakeOptions, fake } from './core/core';
import { data } from './ordinal-direction.json';

/**
 * Generate a random ordinal-direction.
 *
 * @category TBD
 *
 * @example
 *
 * randOrdinalDirection()
 *
 * @example
 *
 * randOrdinalDirection({ length: 10 })
 *
 */
export function randOrdinalDirection<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
