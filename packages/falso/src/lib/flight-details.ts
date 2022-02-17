import { FakeOptions, fake, getRandomInRange } from './core/core';
import { randCity } from './city';
import { randFutureDate } from './future-date';
import { rand } from './rand';
import { randAirline } from './airline';
import { Airline, randFlightNumber } from './flight-number';
import { randFullName } from './full-name';

function generateSeatNumber(): string {
  return `${getRandomInRange({ min: 1, max: 33 })}${rand([
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ])}`;
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
      seat: generateSeatNumber(),
      flightLength:
        getRandomInRange({ min: 1, max: 8 }) +
        rand<number>([0, 0.25, 0.5, 0.75]),
    };
  };

  return fake(factory, options);
}
