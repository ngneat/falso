import { FakeOptions, fake } from './core/core';
import { data } from './street-name.json';

/**
 * Generate a random street name.
 *
 * @category address
 *
 * @example
 *
 * randStreetName()
 *
 * @example
 *
 * randStreetName({ length: 10 })
 *
 * @example
 *
 * randStreetName({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randStreetName<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
