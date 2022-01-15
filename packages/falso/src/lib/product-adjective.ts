import { FakeOptions, fake } from './core/core';
import { data } from './product-adjective.json';

/**
 * Generate a random product adjective.
 *
 * @category Commerce
 *
 * @example
 *
 * randProductAdjective()
 *
 * @example
 *
 * randProductAdjective({ length: 10 })
 *
 */
export function randProductAdjective<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
