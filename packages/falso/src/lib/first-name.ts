import { FakeOptions, fake } from './core/core';
import { data } from './first-name.json';

/**
 * Generate a random first-name.
 *
 * @category TBD
 *
 * @example
 *
 * firstName()
 *
 * @example
 *
 * firstName({ length: 10 })
 *
 */
export function firstName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
