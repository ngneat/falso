import { FakeOptions, fake } from './core/core';
import { data } from './product-name.json';

/**
 * Generate a random product name.
 *
 * @category commerce
 *
 * @example
 *
 * randProductName()
 *
 * @example
 *
 * randProductName({ length: 10 })
 *
 * @example
 *
 * randProductName({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randProductName<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
