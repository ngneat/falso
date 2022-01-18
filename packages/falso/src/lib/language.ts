import { FakeOptions, fake } from './core/core';
import { data } from './language.json';

/**
 * Generate a random language.
 *
 * @category person
 *
 * @example
 *
 * randLanguage()
 *
 * @example
 *
 * randLanguage({ length: 10 })
 *
 */
export function randLanguage<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
