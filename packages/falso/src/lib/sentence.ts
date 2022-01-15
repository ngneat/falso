import { FakeOptions, fake } from './core/core';
import { data } from './sentence.json';

/**
 * Generate a random sentence.
 *
 * @category TBD
 *
 * @example
 *
 * randSentence()
 *
 * @example
 *
 * randSentence({ length: 10 })
 *
 */
export function randSentence<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
