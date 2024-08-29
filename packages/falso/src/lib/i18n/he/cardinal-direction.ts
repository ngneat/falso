import { FakeOptions, fake } from '../../core/core';
import { data } from './cardinal-direction.18n.json';

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
 */
export function randCardinalDirection<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
