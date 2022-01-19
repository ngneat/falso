import { fake, FakeOptions } from '../../lib/core/core';
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
export function randAbbreviation<O extends FakeOptions>(options?: O) {
  return fake(data, options);
}
