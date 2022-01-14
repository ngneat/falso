import { fake, FakeOptions } from './core/core';
import { data } from './weekday.json';

/**
 * Generate a random weekday.
 *
 * @category TBD
 *
 * @example
 *
 * weekday()
 *
 * @example
 *
 * weekday({ length: 10 })
 *
 */
export function weekday<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
