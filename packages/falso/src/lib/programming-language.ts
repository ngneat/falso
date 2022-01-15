import { FakeOptions, fake } from './core/core';
import { data } from './programming-language.json';

/**
 * Generate a random programming language.
 *
 * @category code
 *
 * @example
 *
 * randProgrammingLanguage()
 *
 * @example
 *
 * randProgrammingLanguage({ length: 10 })
 *
 */
export function randProgrammingLanguage<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
