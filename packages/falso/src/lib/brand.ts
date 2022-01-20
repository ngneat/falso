import { FakeOptions, fake } from './core/core';
import { data } from './brand.json';

/**
 * Generate a random brand.
 *
 * @category company
 *
 * @example
 *
 * randBrand()
 *
 * @example
 *
 * randBrand({ length: 10 })
 *
 */
export function randBrand<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
