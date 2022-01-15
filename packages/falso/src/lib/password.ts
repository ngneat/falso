import { FakeOptions, fake } from './core/core';
import { data } from './password.json';

/**
 * Generate a random password.
 *
 * @category person
 *
 * @example
 *
 * randPassword()
 *
 * @example
 *
 * randPassword({ length: 10 })
 *
 */
export function randPassword<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
