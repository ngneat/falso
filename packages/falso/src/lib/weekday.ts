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
 *
 * @automaticallyGeneratedExamples
 */

export function randWeekday<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
