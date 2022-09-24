import { FakeOptions, fake } from './core/core';
import { data } from './phrase.json';

/**
 * Generate a random phrase.
 *
 * @category text
 *
 * @example
 *
 * randPhrase()
 *
 * @example
 *
 * randPhrase({ length: 10 })
 *
 * @example
 *
 * randPhrase({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randPhrase<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
