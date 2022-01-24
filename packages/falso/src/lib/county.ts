import { FakeOptions, fake } from './core/core';
import { data } from './county.json';

/**
 * Generate a random county.
 *
 * @category Address
 *
 * @example
 *
 * randCounty()
 *
 * @example
 *
 * randCounty({ length: 10 })
 *
 */
export function randCounty<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
