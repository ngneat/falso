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
 * @example
 *
 * randPronoun({ length: 10 })
 *
 * @example
 *
 * randPronoun({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randPronoun<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
