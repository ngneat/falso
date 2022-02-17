import { FakeOptions, fake, getRandomInRange } from './core/core';
import { rand } from './rand';
import * as airlines from './airline.json';

export type Airline =
  | 'RyanAir'
  | 'British Airways'
  | 'Iberia'
  | 'EasyJet'
  | 'Jet2';

export interface FlightNumberOptions extends FakeOptions {
  airline?: Airline;
}

function generateRyanAir(): string {
  return `FR${getRandomInRange({ min: 1_000, max: 9_999 })}`;
}

function generateBritishAirways(): string {
  return `BA${getRandomInRange({ min: 100, max: 999 })}`;
}

function generateIberia(): string {
  return `IB${getRandomInRange({ min: 1_000, max: 9_999 })}`;
}

function generateJet2(): string {
  return `LS${getRandomInRange({ min: 1_000, max: 9_999 })}`;
}

function generateEasyJet(): string {
  return `EZY${getRandomInRange({ min: 100, max: 999 })}`;
}

/**
 * Generate a random flight number.
 *
 * @category flight
 *
 * @example
 *
 * randFlightNumber()
 *
 * @example
 *
 * randFlightNumber({ airline: 'RyanAir' })
 *
 * @example
 *
 * randFlightNumber({ length: 10 })
 *
 */
export function randFlightNumber<Options extends FlightNumberOptions = never>(
  options?: Options
) {
  const airline = options?.airline ?? rand(airlines.data);

  const factory = () => {
    switch (airline) {
      case 'RyanAir':
        return generateRyanAir();
      case 'British Airways':
        return generateBritishAirways();
      case 'Iberia':
        return generateIberia();
      case 'Jet2':
        return generateJet2();
      case 'EasyJet':
        return generateEasyJet();
      default:
        return getRandomInRange({ min: 10_000, max: 99_999 }).toString();
    }
  };

  return fake(factory, options);
}
