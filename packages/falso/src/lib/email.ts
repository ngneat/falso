import { FakeOptions, fake } from './core/core';
import { data } from './email.json';

/**
 * Generate a random email.
 *
 * @category Person
 *
 * @example
 *
 * randEmail()
 *
 * @example
 *
 * randEmail({ length: 10 })
 *
 */
export function randEmail<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
