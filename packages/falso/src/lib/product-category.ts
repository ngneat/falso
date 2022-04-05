import { FakeOptions, fake } from './core/core';
import { data } from './product-category.json';

/**
 * Generate a random product category.
 *
 * @category Commerce
 *
 * @example
 *
 * randProductCategory()
 *
 * @example
 *
 * randProductCategory({ length: 10 })
 *
 * @example
 *
 * randProductCategory({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randProductCategory<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
