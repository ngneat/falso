import { FakeOptions, fake } from './core/core';
import { data } from './locale.json';

/**
 * Generate a random locale.
 *
 * @category address
 *
 * @example
 *
 * randLocale()
 *
 * @example
 *
 * randLocale({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randLocale<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
