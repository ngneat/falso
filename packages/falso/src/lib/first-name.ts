import { FakeOptions, fake } from './core/core';
import { data } from './first-name.json';

/**
 * Generate a random first name.
 *
 * @category person
 *
 * @example
 *
 * randFirstName()
 *
 * @example
 *
 * randFirstName({ length: 10 })
 *
 */
export function randFirstName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
