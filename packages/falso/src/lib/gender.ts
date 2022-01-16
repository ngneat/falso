import { FakeOptions, fake } from './core/core';
import { data } from './gender.json';

/**
 * Generate a random gender.
 *
 * @category person
 *
 * @example
 *
 * randGender()
 *
 * @example
 *
 * randGender({ length: 10 })
 *
 */
export function randGender<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
