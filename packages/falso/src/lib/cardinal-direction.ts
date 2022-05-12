import { FakeOptions, fake } from './core/core';
import { data } from './cardinal-direction.json';

/**
 * Generate a random cardinal direction.
 *
 * @category address
 *
 * @example
 *
 * randCardinalDirection()
 *
 * @example
 *
 * randCardinalDirection({ length: 10 })
 *
 * @example
 *
 * randCardinalDirection({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randCardinalDirection<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
