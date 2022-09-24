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
 * @example
 *
 * rand({ [ 1, 2, 3 ], length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function rand<T, Options extends FakeOptions = never>(
  arr: Readonly<T[]>,
  options?: Options
) {
  return fake(arr, options);
}
