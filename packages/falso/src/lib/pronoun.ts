import { FakeOptions, fake } from './core/core';
import { data } from './pronoun.json';

/**
 * Generate a random pronoun.
 *
 * @category text
 *
 * @example
 *
 * pronoun()
 *
 */
export function pronoun<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
