import { FakeOptions, fake } from './core/core';
import { data } from './bs.json';

/**
 * Generate a random bs.
 *
 * @category TBD
 *
 * @example
 *
 * bs()
 *
 * @example
 *
 * bs({ length: 10 })
 *
 */
export function bs<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
