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
 *
 * @automaticallyGeneratedExamples
 */

export function randProductMaterial<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
