import { fake, FakeOptions } from './core/core';

/**
 * Get a random item from array.
 *
 * @category general
 *
 * @example
 *
 * rand([ 1, 2, 3 ])
 *
 * @example
 *
 * rand([ 1, 2, 3 ], { length: 10 })
 *
 */
export function rand<T, Options extends FakeOptions = never>(
  arr: Readonly<T[]>,
  options?: Options
) {
  return fake(arr, options);
}
