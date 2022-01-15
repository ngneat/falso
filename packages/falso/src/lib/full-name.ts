import { FakeOptions, fake } from './core/core';
import { data } from './full-name.json';

/**
 * Generate a random full name.
 *
 * @category Address
 *
 * @example
 *
 * randFullName()
 *
 * @example
 *
 * randFullName({ length: 10 })
 *
 */
export function randFullName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
