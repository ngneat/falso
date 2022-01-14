import { FakeOptions, fake } from './core/core';
import { data } from './product-name.json';

/**
 * Generate a random product-name.
 *
 * @category TBD
 *
 * @example
 *
 * productName()
 *
 * @example
 *
 * productName({ length: 10 })
 *
 */
export function productName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
