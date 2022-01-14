import { FakeOptions, fake } from './core/core';
import { data } from './catch-phrase.json';

/**
 * Generate a random catch-phrase.
 *
 * @category TBD
 *
 * @example
 *
 * catchPhrase()
 *
 * @example
 *
 * catchPhrase({ length: 10 })
 *
 */
export function catchPhrase<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
