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
 * randLanguage({ length: 10 })
 *
 * @example
 *
 * randLanguage({ code: true }) // default is false
 *
 */
export function randLanguage<Options extends LanguageOptions = never>(
  options?: Options
) {
  return fake(options?.code ? languageCodes : languages, options);
}
