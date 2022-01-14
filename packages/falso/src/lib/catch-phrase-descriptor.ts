import { FakeOptions, fake } from './core/core';
import { data } from './catch-phrase-descriptor.json';

/**
 * Generate a random catch-phrase-descriptor.
 *
 * @category TBD
 *
 * @example
 *
 * catchPhraseDescriptor()
 *
 * @example
 *
 * catchPhraseDescriptor({ length: 10 })
 *
 */
export function catchPhraseDescriptor<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
