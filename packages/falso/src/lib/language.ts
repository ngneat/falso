import { fake, FakeOptions } from './core/core';
import { data as languages } from './language.json';
import { data as languageCodes } from './language-code.json';

interface LanguageOptions extends FakeOptions {
  code?: boolean;
}

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
 * randLanguage({ code: true }) // default is false
 *
 * @example
 *
 * randLanguage({ length: 10 })
 *
 * @example
 *
 * randLanguage({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randLanguage<Options extends LanguageOptions = never>(
  options?: Options
) {
  return fake(options?.code ? languageCodes : languages, options);
}
