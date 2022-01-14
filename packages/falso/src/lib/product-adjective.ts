import { FakeOptions, fake } from './core/core';
import { data } from './product-adjective.json';

/**
 * Generate a random product-adjective.
 *
 * @category TBD
 *
 * @example
 *
 * productAdjective()
 *
 * @example
 *
 * productAdjective({ length: 10 })
 *
 */
export function productAdjective<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
