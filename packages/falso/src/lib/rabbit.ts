import { FakeOptions, fake } from './core/core';
import { data } from './rabbit.json';

/**
 * Generate a random rabbit.
 *
 * @category TBD
 *
 * @example
 *
 * rabbit()
 *
 * @example
 *
 * rabbit({ length: 10 })
 *
 */
export function rabbit<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
