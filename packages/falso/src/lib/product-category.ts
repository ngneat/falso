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
 */
export function randProductCategory<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
