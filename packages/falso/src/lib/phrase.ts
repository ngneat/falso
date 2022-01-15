import { FakeOptions, fake } from './core/core';
import { data } from './phrase.json';

/**
 * Generate a random phrase.
 *
 * @category TBD
 *
 * @example
 *
 * randPhrase()
 *
 * @example
 *
 * randPhrase({ length: 10 })
 *
 */
export function randPhrase<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
