import { FakeOptions, fake } from './core/core';
import { data } from './product.json';

/**
 * Generate a random product.
 *
 * @category TBD
 *
 * @example
 *
 * product()
 *
 * @example
 *
 * product({ length: 10 })
 *
 */
export function product<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
