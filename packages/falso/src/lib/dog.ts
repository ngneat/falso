import { FakeOptions, fake } from './core/core';
import { data } from './dog.json';

/**
 * Generate a random dog.
 *
 * @category TBD
 *
 * @example
 *
 * dog()
 *
 * @example
 *
 * dog({ length: 10 })
 *
 */
export function dog<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
