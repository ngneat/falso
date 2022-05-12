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
 * randWeekday({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randWeekday<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
