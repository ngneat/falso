import { FakeOptions, fake } from './core/core';
import { data } from './catch-phrase-noun.json';

/**
 * Generate a random catch-phrase-noun.
 *
 * @category TBD
 *
 * @example
 *
 * catchPhraseNoun()
 *
 * @example
 *
 * catchPhraseNoun({ length: 10 })
 *
 */
export function catchPhraseNoun<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
