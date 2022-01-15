import { FakeOptions, fake } from './core/core';
import { data } from './catch-phrase.json';

/**
 * Generate a random catch-phrase.
 *
 * @category text
 *
 * @example
 *
 * randCatchPhrase()
 *
 * @example
 *
 * randCatchPhrase({ length: 10 })
 *
 */
export function randCatchPhrase<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
