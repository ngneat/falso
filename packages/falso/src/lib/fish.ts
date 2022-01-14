import { FakeOptions, fake } from './core/core';
import { data } from './fish.json';

/**
 * Generate a random fish.
 *
 * @category TBD
 *
 * @example
 *
 * fish()
 *
 * @example
 *
 * fish({ length: 10 })
 *
 */
export function fish<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
