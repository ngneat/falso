import { FakeOptions, fake } from './core/core';
import { data } from './product-material.json';

/**
 * Generate a random product material.
 *
 * @category commerce
 *
 * @example
 *
 * randProductMaterial()
 *
 * @example
 *
 * randProductMaterial({ length: 10 })
 *
 * @example
 *
 * randProductMaterial({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randProductMaterial<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
