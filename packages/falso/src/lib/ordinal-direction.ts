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
 * @example
 *
 * randOrdinalDirection({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randOrdinalDirection<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
