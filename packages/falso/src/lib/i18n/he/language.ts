import { FakeOptions, fake } from '../../core/core';
import { data } from './language.i18n.json';

/**
 * Generate a random language.
 *
 * @category address
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
export function randLanguage<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
