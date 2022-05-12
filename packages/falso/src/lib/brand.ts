import { FakeOptions, fake } from './core/core';
import { data } from './brand.json';

/**
 * Generate a random brand.
 *
 * @category company
 *
 * @example
 *
 * randBrand()
 *
 * @example
 *
 * randBrand({ length: 10 })
 *
 * @example
 *
 * randBrand({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randBrand<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
