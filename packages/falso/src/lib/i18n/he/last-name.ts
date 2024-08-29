import { FakeOptions, fake } from '../../core/core';
import { data } from './last-name.i18n.json';

/**
 * Generate a random last name.
 *
 * @category person
 *
 * @example
 *
 * randLastName()
 *
 * @example
 *
 * randLastName({ length: 10 })
 *
 */
export function randLastName<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
