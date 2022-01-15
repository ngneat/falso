import { FakeOptions, fake } from './core/core';
import { data } from './zip-code.json';

/**
 * Generate a random zip code.
 *
 * @category address
 *
 * @example
 *
 * randZipCode()
 *
 * @example
 *
 * randZipCode({ length: 10 })
 *
 */
export function randZipCode<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
