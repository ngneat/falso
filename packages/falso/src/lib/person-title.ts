import { FakeOptions, fake } from './core/core';
import { data } from './person-title.json';

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
 * @example
 *
 * randPersonTitle({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randPersonTitle<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
