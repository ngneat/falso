import { FakeOptions, fake } from './core/core';
import { data } from './city.json';

/**
 * Generate a random city.
 *
 * @category Address
 *
 * @example
 *
 * randCity()
 *
 * @example
 *
 * randCity({ length: 10 })
 *
 * @example
 *
 * randCity({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randCity<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
