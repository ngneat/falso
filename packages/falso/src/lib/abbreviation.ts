import { fake, FakeOptions } from './core/core';
import { data } from './abbreviation.json';

/**
 * Generate a random abbreviation.
 *
 * @category TBD
 *
 * @example
 *
 * abbreviation()
 *
 * @example
 *
 * abbreviation({ length: 10 })
 *
 */
export function abbreviation<O extends FakeOptions>(options?: O) {
  return fake(data, options);
}
