import { FakeOptions, fake } from './core/core';
import { data } from './catch-phrase.json';

/**
 * Generate a random catch phrase.
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
 * @example
 *
 * randCatchPhrase({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randCatchPhrase<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
