import { FakeOptions, fake } from './core/core';
import { data } from './county.json';

/**
 * Generate a random county.
 *
 * @category TBD
 *
 * @example
 *
 * county()
 *
 * @example
 *
 * county({ length: 10 })
 *
 */
export function county<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
