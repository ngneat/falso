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
 *
 * @automaticallyGeneratedExamples
 */

export function randPhrase<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
