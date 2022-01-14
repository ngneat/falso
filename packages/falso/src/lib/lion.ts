import { FakeOptions, fake } from './core/core';
import { data } from './lion.json';

/**
 * Generate a random lion.
 *
 * @category TBD
 *
 * @example
 *
 * lion()
 *
 * @example
 *
 * lion({ length: 10 })
 *
 */
export function lion<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
