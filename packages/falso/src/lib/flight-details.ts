import { FakeOptions, fake, getRandomInRange } from './core/core';
import { randCity } from './city';
import { randFutureDate } from './future-date';
import { randAirline } from './airline';
import { Airline, randFlightNumber } from './flight-number';
import { randFullName } from './full-name';
import { randSeatNumber } from './seat-number';

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
 * randFlightDetails({ length: 10 })
 *
 */
export function randFlightDetails<Options extends FakeOptions = never>(
  options?: Options
) {
  const factory = () => {
    const airline = randAirline() as Airline;

    return {
      passenger: randFullName(),
      airline,
      flightNumber: randFlightNumber({ airline: airline }),
      from: randCity(),
      to: randCity(),
      date: randFutureDate(),
      seat: randSeatNumber(),
      flightLength: generateFlightLength(),
    };
  };

  return fake(factory, options);
}
