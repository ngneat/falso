import { FakeOptions, fake } from './core/core';
import { data } from './frequency.json';

/**
 * Generate a random adverb for definite or indefinite frequency.
 *
 * @category date
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
export function randFrequency<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
