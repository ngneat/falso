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
 * @example
 *
 * randProgrammingLanguage({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randProgrammingLanguage<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
