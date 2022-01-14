import { FakeOptions, fake } from './core/core';
import { data } from './country.json';

/**
 * Generate a random country.
 *
 * @category TBD
 *
 * @example
 *
 * country()
 *
 * @example
 *
 * country({ length: 10 })
 *
 */
export function country<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
