import { FakeOptions, fake } from './core/core';
import { data } from './verb.json';

/**
 * Generate a random verb.
 *
 * @category TBD
 *
 * @example
 *
 * verb()
 *
 * @example
 *
 * verb({ length: 10 })
 *
 */
export function verb<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
