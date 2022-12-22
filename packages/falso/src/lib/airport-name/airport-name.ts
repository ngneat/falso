import { FakeOptions, fake } from '../core/core';
import { data } from '../airport/airport.json';
import { rand } from '../rand';

/**
 * Generate a random airport name.
 *
 * @category flight
 *
 * @example
 *
 * randAirportName()
 *
 * @example
 *
 * randAirportName({ length: 10 })
 *
 */
export function randAirportName<Options extends FakeOptions = never>(
  options?: Options
) {
  const factory: () => string = () => {
    return rand(data.map(({ name }) => name));
  };

  return fake(factory, options);
}
