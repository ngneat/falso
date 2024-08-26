import { FakeOptions, fake } from '../../core/core';
import { data } from './airport.i18n.json';

export interface Airport {
  name: string;
  code: string;
  city: string;
  country: string;
}

/**
 * Generate a random airport.
 *
 * @category flight
 *
 * @example
 *
 * randAirport()
 *
 * @example
 *
 * randAirport({ length: 10 })
 *
 */
export function randAirport<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
