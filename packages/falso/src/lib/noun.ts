import { FakeOptions, fake } from './core/core';
import { data } from './noun.json';

/**
 * Generate a random noun.
 *
 * @category TBD
 *
 * @example
 *
 * randNoun()
 *
 * @example
 *
 * randNoun({ length: 10 })
 *
 */
export function randNoun<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
