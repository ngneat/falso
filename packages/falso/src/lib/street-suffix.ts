import { FakeOptions, fake } from './core/core';
import { data } from './street-suffix.json';

/**
 * Generate a random street-suffix.
 *
 * @category TBD
 *
 * @example
 *
 * streetSuffix()
 *
 * @example
 *
 * streetSuffix({ length: 10 })
 *
 */
export function streetSuffix<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
