import { FakeOptions, fake } from './core/core';
import { data } from './airport.json';
import { rand } from './rand';

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
 * @example
 *
 * randAirportName({ length: 10, priority: 'unique' }) // default priority is 'length'
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
