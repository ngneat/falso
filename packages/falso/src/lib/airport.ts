import { FakeOptions, fake } from './core/core';
import { data } from './airport.json';

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
 *
 * @automaticallyGeneratedExamples
 * @example
 * {
  name: 'Hartsfield–Jackson Atlanta International Airport',
  code: 'ATL',
  city: 'Atlanta',
  country: 'United States'
}
 * {
  name: 'Los Angeles International Airport',
  code: 'LAX',
  city: 'Los Angeles',
  country: 'United States'
}
 * {
  name: "O'Hare International Airport",
  code: 'ORD',
  city: 'Chicago',
  country: 'United States'
}
 */

export function randAirport<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
