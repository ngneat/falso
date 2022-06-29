import { FakeOptions, fake } from './core/core';
import { data } from './state-abbr.json';

/**
 * Generate a random state abbr.
 *
 * @category address
 *
 * @example
 *
 * randStateAbbr()
 *
 * @example
 *
 * randStateAbbr({ length: 10 })
 *
 * @example
 *
 * randStateAbbr({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randStateAbbr<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
