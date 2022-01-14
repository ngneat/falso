import { FakeOptions, fake } from './core/core';
import { data } from './adjective.json';

/**
 * Generate a random adjective.
 *
 * @category TBD
 *
 * @example
 *
 * adjective()
 *
 * @example
 *
 * adjective({ length: 10 })
 *
 */
export function adjective<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
