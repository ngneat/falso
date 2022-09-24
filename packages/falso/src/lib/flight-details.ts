import { fake, FakeOptions, getRandomInRange } from './core/core';
import { randFutureDate } from './future-date';
import { randAirline } from './airline';
import { Airline, randFlightNumber } from './flight-number';
import { randFullName } from './full-name';
import { randSeatNumber } from './seat-number';
import { Airport, randAirport } from './airport';
import { objectIsUnique } from './core/unique-validators';

export interface FlightDetailsOptions extends FakeOptions {
  airline?: Airline;
  passenger?: string;
}

export interface FlightDetails {
  passenger: string;
  airline: string;
  flightNumber: string;
  origin: Airport;
  destination: Airport;
  date: string;
  seat: string;
  flightLength: number;
}

function generateFlightLength(): number {
  return (
    Math.ceil(getRandomInRange({ min: 1, max: 9, fraction: 2 }) / 0.25) * 0.25
  );
}

/**
 * Generate a random flight details.
 *
 * @category flight, entities
 *
 * @example
 *
 * randFlightDetails()
 *
 * @example
 *
 * randFlightDetails({ passenger: 'Ryan Smee' })
 *
 * @example
 *
 * randFlightDetails({ airline: 'RyanAir' })
 *
 * @example
 *
 * randFlightDetails({ length: 10 })
 *
 * @example
 *
 * randFlightDetails({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randFlightDetails<Options extends FlightDetailsOptions = never>(
  options?: Options
) {
  const factory: () => FlightDetails = () => {
    const airline = options?.airline ?? (randAirline() as Airline);
    const passenger = options?.passenger ?? randFullName();

    const [origin, destination] = randAirport({ length: 2 });

    return {
      passenger,
      airline,
      flightNumber: randFlightNumber({ airline: airline }),
      origin,
      destination,
      date: randFutureDate().toISOString(),
      seat: randSeatNumber(),
      flightLength: generateFlightLength(),
    };
  };

  return fake(factory, options, { uniqueComparer: checkUnique });
}

function checkUnique(flight: FlightDetails, flights: FlightDetails[]): boolean {
  return objectIsUnique(flight, flights, ['passenger', 'flightNumber', 'date']);
}
