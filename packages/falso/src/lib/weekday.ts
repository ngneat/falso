import { fake, FakeOptions } from './core/core';
import { data } from './weekday.json';

/**
 * Generate a random weekday.
 *
 * @category TBD
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
export function randWeekday<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
