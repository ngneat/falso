import { FakeOptions, fake } from './core/core';
import { data } from './bs-noun.json';

/**
 * Generate a random bs-noun.
 *
 * @category TBD
 *
 * @example
 *
 * bsNoun()
 *
 * @example
 *
 * bsNoun({ length: 10 })
 *
 */
export function bsNoun<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
