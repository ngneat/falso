import { FakeOptions, fake } from './core/core';
import { data } from './airline.json';

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
 *
 * @automaticallyGeneratedExamples
 */

export function randAirline<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
