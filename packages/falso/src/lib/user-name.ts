import { FakeOptions, fake } from './core/core';
import { data } from './user-name.json';

/**
 * Generate a random user name.
 *
 * @category person
 *
 * @example
 *
 * randUserName()
 *
 * @example
 *
 * randUserName({ length: 10 })
 *
 */
export function randUserName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
