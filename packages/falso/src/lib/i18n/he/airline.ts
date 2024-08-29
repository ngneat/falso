import { FakeOptions, fake } from '../../core/core';
import { data } from './airline.i18n.json';

/**
 * Generate a random airline.
 *
 * @category flight
 *
 * @example
 *
 * randAirline()
 *
 * @example
 *
 * randAirline({ length: 10 })
 *
 */
export function randAirline<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
