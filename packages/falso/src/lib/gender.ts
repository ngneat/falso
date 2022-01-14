import { FakeOptions, fake } from './core/core';
import { data } from './gender.json';

/**
 * Generate a random gender.
 *
 * @category TBD
 *
 * @example
 *
 * gender()
 *
 * @example
 *
 * gender({ length: 10 })
 *
 */
export function gender<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
