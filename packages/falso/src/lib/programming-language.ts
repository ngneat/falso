import { FakeOptions, fake } from './core/core';
import { data } from './programming-language.json';

/**
 * Generate a random programming-language.
 *
 * @category TBD
 *
 * @example
 *
 * programmingLanguage()
 *
 * @example
 *
 * programmingLanguage({ length: 10 })
 *
 */
export function programmingLanguage<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
