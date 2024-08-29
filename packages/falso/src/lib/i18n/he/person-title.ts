import { FakeOptions, fake } from '../../core/core';
import { data } from './person-title.i18n.json';

/**
 * Generate a random person title.
 *
 * @category person
 *
 * @example
 *
 * randPersonTitle()
 *
 * @example
 *
 * randPersonTitle({ length: 10 })
 *
 */
export function randPersonTitle<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
