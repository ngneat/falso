import { FakeOptions, fake } from './core/core';
import { data } from './word.json';

/**
 * Generate a random word.
 *
 * @category TBD
 *
 * @example
 *
 * word()
 *
 * @example
 *
 * word({ length: 10 })
 *
 */
export function word<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
