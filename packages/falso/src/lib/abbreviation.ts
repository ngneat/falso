import { fake, FakeOptions } from './core/core';
import { data } from './abbreviation.json';

/**
 * Generate a random abbreviation.
 *
 * @category text
 *
 * @example
 *
 * randAbbreviation()
 *
 * @example
 *
 * randAbbreviation({ length: 10 })
 *
 */
export function randAbbreviation<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
