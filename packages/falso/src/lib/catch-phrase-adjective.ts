import { FakeOptions, fake } from './core/core';
import { data } from './catch-phrase-adjective.json';

/**
 * Generate a random catch-phrase-adjective.
 *
 * @category TBD
 *
 * @example
 *
 * catchPhraseAdjective()
 *
 * @example
 *
 * catchPhraseAdjective({ length: 10 })
 *
 */
export function catchPhraseAdjective<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
