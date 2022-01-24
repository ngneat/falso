import { FakeOptions, fake } from './core/core';
import { data } from './ordinal-direction.json';

/**
 * Generate a random ordinal direction.
 *
 * @category address
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
export function randOrdinalDirection<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
