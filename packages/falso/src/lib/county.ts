import { FakeOptions, fake } from './core/core';
import { data } from './county.json';

/**
 * Generate a random county.
 *
 * @category Address
 *
 * @example
 *
 * randCounty()
 *
 * @example
 *
 * randCounty({ length: 10 })
 *
 * @example
 *
 * randCounty({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randCounty<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
