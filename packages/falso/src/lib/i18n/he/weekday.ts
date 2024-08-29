import { FakeOptions, fake } from '../../core/core';
import { data } from './weekday.i18n.json';

/**
 * Generate a random weekday.
 *
 * @category date
 *
 * @example
 *
 * randWeekday()
 *
 * @example
 *
 * randWeekday({ length: 10 })
 *
 */
export function randWeekday<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
