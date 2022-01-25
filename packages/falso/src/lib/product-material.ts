import { FakeOptions, fake } from './core/core';
import { data } from './product-material.json';

/**
 * Generate a random product material.
 *
 * @category Commerce
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
export function randProductMaterial<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
