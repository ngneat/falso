import { FakeOptions, fake } from './core/core';
import { data } from './frequency.json';

/**
 * Generate a random adverb for definite or indefinite frequency.
 *
 * @category text
 *
 * @example
 *
 * randFrequency()
 *
 * @example
 *
 * randFrequency({ length: 10 })
 *
 */
export function randFrequency<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
