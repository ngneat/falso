import { FakeOptions, fake } from '../../core/core';
import { data } from './brand.18n.json';

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
export function randBrand<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
