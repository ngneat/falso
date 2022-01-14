import { FakeOptions, fake } from './core/core';
import { data } from './bs-adjective.json';

/**
 * Generate a random bs-adjective.
 *
 * @category TBD
 *
 * @example
 *
 * bsAdjective()
 *
 * @example
 *
 * bsAdjective({ length: 10 })
 *
 */
export function bsAdjective<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
