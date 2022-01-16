import { fake, FakeOptions } from './core/core';
import { data } from './role.json';

/**
 * Generate a random user role
 *
 * @category user
 *
 * @example
 *
 * randRole()
 *
 * @example
 *
 * randRole({ length: 10 })
 *
 */
export function randRole<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
