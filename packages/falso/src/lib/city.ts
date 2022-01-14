import { FakeOptions, fake } from './core/core';
import { data } from './city.json';

/**
 * Generate a random city.
 *
 * @category TBD
 *
 * @example
 *
 * city()
 *
 * @example
 *
 * city({ length: 10 })
 *
 */
export function city<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
