import { FakeOptions, fake } from './core/core';
import { data } from './product-material.json';

/**
 * Generate a random product-material.
 *
 * @category TBD
 *
 * @example
 *
 * randProductMaterial()
 *
 * @example
 *
 * randProductMaterial({ length: 10 })
 *
 */
export function randProductMaterial<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
