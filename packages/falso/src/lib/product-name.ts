import { FakeOptions, fake } from './core/core';
import { data } from './product-name.json';

/**
 * Generate a random product-name.
 *
 * @category TBD
 *
 * @example
 *
 * randProductName()
 *
 * @example
 *
 * randProductName({ length: 10 })
 *
 */
export function randProductName<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
