import { FakeOptions, fake } from './core/core';
import { data } from './product-material.json';

/**
 * Generate a random product-material.
 *
 * @category TBD
 *
 * @example
 *
 * productMaterial()
 *
 * @example
 *
 * productMaterial({ length: 10 })
 *
 */
export function productMaterial<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
