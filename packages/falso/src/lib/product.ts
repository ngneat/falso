import { FakeOptions, fake } from './core/core';
import { data } from './product.json';

/**
 * Generate a random product.
 *
 * @category Commerce
 *
 * @example
 *
 * randProduct()
 *
 * @example
 *
 * randProduct({ length: 10 })
 *
 */
export function randProduct<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
