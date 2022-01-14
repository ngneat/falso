import { FakeOptions, fake } from './core/core';
import { data } from './bs-buzz.json';

/**
 * Generate a random bs-buzz.
 *
 * @category TBD
 *
 * @example
 *
 * bsBuzz()
 *
 * @example
 *
 * bsBuzz({ length: 10 })
 *
 */
export function bsBuzz<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
