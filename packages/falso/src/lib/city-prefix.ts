import { FakeOptions, fake } from './core/core';
import { data } from './city-prefix.json';

/**
 * Generate a random city-prefix.
 *
 * @category TBD
 *
 * @example
 *
 * cityPrefix()
 *
 * @example
 *
 * cityPrefix({ length: 10 })
 *
 */
export function cityPrefix<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
