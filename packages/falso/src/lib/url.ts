import { FakeOptions, fake } from './core/core';
import { data } from './url.json';

/**
 * Generate a random url.
 *
 * @category url
 *
 * @example
 *
 * randUrl()
 *
 * @example
 *
 * randUrl({ length: 10 })
 *
 */
export function randUrl<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
