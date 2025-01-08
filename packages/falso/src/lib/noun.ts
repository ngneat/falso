import { FakeOptions, fake } from './core/core';
import { data } from './noun.json';

/**
 * Generate a random noun.
 *
 * @category text
 *
 * @example
 *
 * randNoun()
 *
 * @example
 *
 * randNoun({ length: 10 })
 *
 */
export function randNoun<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
