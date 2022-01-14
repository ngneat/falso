import { FakeOptions, fake } from './core/core';
import { data } from './direction.json';

/**
 * Generate a random direction.
 *
 * @category TBD
 *
 * @example
 *
 * direction()
 *
 * @example
 *
 * direction({ length: 10 })
 *
 */
export function direction<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
