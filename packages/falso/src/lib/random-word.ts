import { FakeOptions, fake } from './core/core';
import { data } from './random-word.json';

/**
 * Generate a random random-word.
 *
 * @category TBD
 *
 * @example
 *
 * randomWord()
 *
 * @example
 *
 * randomWord({ length: 10 })
 *
 */
export function randomWord<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
