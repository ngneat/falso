import { FakeOptions, fake } from './core/core';
import { data } from './last-name.json';

/**
 * Generate a random last-name.
 *
 * @category TBD
 *
 * @example
 *
 * lastName()
 *
 * @example
 *
 * lastName({ length: 10 })
 *
 */
export function lastName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
