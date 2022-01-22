import { FakeOptions, fake } from './core/core';
import { data } from './pronoun.json';

/**
 * Generate a random pronoun.
 *
 * @category person
 *
 * @example
 *
 * randPronoun()
 *
 */
export function randPronoun<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
