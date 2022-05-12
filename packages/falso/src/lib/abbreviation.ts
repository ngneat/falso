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
 * @example
 *
 * randAbbreviation({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randAbbreviation<O extends FakeOptions = never>(options?: O) {
  return fake(data, options);
}
