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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Python'
 * 'Java'
 * 'JavaScript'
 */

export function randProgrammingLanguage<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
