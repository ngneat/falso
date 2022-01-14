import { FakeOptions, fake } from './core/core';
import { data } from './state-abbr.json';

/**
 * Generate a random state-abbr.
 *
 * @category TBD
 *
 * @example
 *
 * stateAbbr()
 *
 * @example
 *
 * stateAbbr({ length: 10 })
 *
 */
export function stateAbbr<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
