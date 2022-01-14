import { FakeOptions, fake } from './core/core';
import { data } from './city-suffix.json';

/**
 * Generate a random city-suffix.
 *
 * @category TBD
 *
 * @example
 *
 * citySuffix()
 *
 * @example
 *
 * citySuffix({ length: 10 })
 *
 */
export function citySuffix<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
