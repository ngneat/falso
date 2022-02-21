import { FakeOptions, fake, getRandomInRange } from './core/core';
import { rand } from './rand';
import * as airlines from './airline.json';

export type Airline =
  | 'RyanAir'
  | 'British Airways'
  | 'Iberia'
  | 'EasyJet'
  | 'Jet2'
  | 'Emirates'
  | 'American Airlines'
  | 'JetBlue'
  | 'Air Europa'
  | 'Delta Air Lines'
  | 'United Airlines'
  | 'Thai Airways'
  | 'Qatar Airways'
  | 'Virgin Atlantic';

export interface FlightNumberOptions extends FakeOptions {
  airline?: Airline;
}

function generateStandardFlightNumber(
  prefix: string,
  suffixMin: number,
  suffixMax: number
): string {
  return `${prefix}${getRandomInRange({ min: suffixMin, max: suffixMax })}`;
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
  const airline = options?.airline ?? (rand(airlines.data) as Airline);

  const factory: () => string = () => {
    switch (airline) {
      case 'RyanAir':
        return generateStandardFlightNumber('FR', 1_000, 9_999);
      case 'British Airways':
        return generateStandardFlightNumber('BA', 100, 999);
      case 'Iberia':
        return generateStandardFlightNumber('IB', 1_000, 9_999);
      case 'Jet2':
        return generateStandardFlightNumber('LS', 1_000, 9_999);
      case 'EasyJet':
        return generateStandardFlightNumber('EZY', 100, 999);
      case 'Emirates':
        return generateStandardFlightNumber('EK', 10, 99);
      case 'American Airlines':
        return generateStandardFlightNumber('AA', 1_000, 9_999);
      case 'JetBlue':
        return generateStandardFlightNumber('B', 100, 999);
      case 'Air Europa':
        return generateStandardFlightNumber('UX', 1_000, 9_999);
      case 'Delta Air Lines':
        return generateStandardFlightNumber('DL', 1_000, 9_999);
      case 'United Airlines':
        return generateStandardFlightNumber('UA', 1_000, 9_999);
      case 'Virgin Atlantic':
        return generateStandardFlightNumber('VS', 1_000, 9_999);
      case 'Thai Airways':
        return generateStandardFlightNumber('TG', 1_000, 9_999);
      case 'Qatar Airways':
        return generateStandardFlightNumber('QR', 1_000, 9_999);
      default:
        return getRandomInRange({ min: 10_000, max: 99_999 }).toString();
    }
  };

  return fake(factory, options);
}
