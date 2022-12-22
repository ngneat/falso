import { FakeOptions, fake } from '../../core/core';
import { data } from './city.i18n.json';

/**
 * Generate a random city.
 *
 * @category Address
 *
 * @example
 *
 * randCity()
 *
 * @example
 *
 * randCity({ length: 10 })
 *
 */
export function randCity<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
