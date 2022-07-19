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
 *
 * @automaticallyGeneratedExamples
 */

export function randPronoun<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
