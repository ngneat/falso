import { FakeOptions, fake } from './core/core';
import { data } from './product-description.json';

/**
 * Generate a random product-description.
 *
 * @category TBD
 *
 * @example
 *
 * productDescription()
 *
 * @example
 *
 * productDescription({ length: 10 })
 *
 */
export function productDescription<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
