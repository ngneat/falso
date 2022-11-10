import { FakeOptions, fake } from './core/core';
import { data } from './airport.json';
import { rand } from './rand';

/**
 * Generate a random airport code.
 *
 * @category flight
 *
 * @example
 *
 * randAirportCode()
 *
 * @example
 *
 * randAirportCode({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randAirportCode<Options extends FakeOptions = never>(
  options?: Options
) {
  const factory: () => string = () => {
    return rand(data.map(({ code }) => code));
  };

  return fake(factory, options);
}
