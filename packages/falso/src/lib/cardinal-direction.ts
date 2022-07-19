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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'East'
 * 'South'
 * 'West'
 */

export function randCardinalDirection<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
