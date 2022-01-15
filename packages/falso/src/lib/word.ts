import { FakeOptions, fake } from './core/core';
import { data } from './word.json';

/**
 * Generate a random word.
 *
 * @category TBD
 *
 * @example
 *
 * randWord()
 *
 * @example
 *
 * randWord({ length: 10 })
 *
 */
export function randWord<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
