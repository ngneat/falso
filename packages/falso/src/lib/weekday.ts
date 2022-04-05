import { fake, FakeOptions } from './core/core';
import { data } from './weekday.json';

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
 * @example
 *
 * randWeekday({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randWeekday<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
