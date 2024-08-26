import { FakeOptions, fake } from '../../core/core';
import { data } from './pronoun.i18n.json';

/**
 * Generate a random pronoun.
 *
 * @category person
 *
 * @example
 *
 * randPronoun()
 *
 * @example
 *
 * randPronoun({ length: 10 })
 *
 */
export function randPronoun<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
