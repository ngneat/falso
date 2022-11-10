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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Antiques'
 * 'Appliances'
 * 'Automotive Parts & Accessories'
 */

export function randProductCategory<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
