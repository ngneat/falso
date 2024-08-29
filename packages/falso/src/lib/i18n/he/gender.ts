import { FakeOptions, fake } from '../../core/core';
import { data } from './gender.i18n.json';

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
export function randGender<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
