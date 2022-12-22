import { FakeOptions, fake } from '../../core/core';
import { data } from './state-abbr.i18n.json';

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
 */
export function randStateAbbr<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
