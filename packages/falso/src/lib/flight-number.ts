import { fake, FakeOptions, getRandomInRange } from './core/core';
import { rand } from './rand';
import { data } from './airline.json';

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

interface FlightNumberMetadata {
  prefix: string;
  suffixMin?: number;
  suffixMax?: number;
}

const flightNumberInfo: Record<Airline, FlightNumberMetadata> = {
  RyanAir: { prefix: 'FR' },
  'British Airways': { prefix: 'BA', suffixMin: 100, suffixMax: 999 },
  Iberia: { prefix: 'IB' },
  Jet2: { prefix: 'LS' },
  EasyJet: { prefix: 'EZY', suffixMin: 100, suffixMax: 999 },
  Emirates: { prefix: 'EK', suffixMin: 10, suffixMax: 99 },
  'American Airlines': { prefix: 'AA' },
  JetBlue: { prefix: 'B', suffixMin: 100, suffixMax: 999 },
  'Air Europa': { prefix: 'UX' },
  'Delta Air Lines': { prefix: 'DL' },
  'United Airlines': { prefix: 'UA' },
  'Virgin Atlantic': { prefix: 'VS' },
  'Thai Airways': { prefix: 'TG' },
  'Qatar Airways': { prefix: 'QR' },
};

function generateStandardFlightNumber({
  prefix,
  suffixMin = 1_000,
  suffixMax = 9_999,
}: {
  prefix: string;
  suffixMin?: number;
  suffixMax?: number;
}): string {
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
  const airline = options?.airline ?? (rand(data) as Airline);

  const factory: () => string = () => {
    if (flightNumberInfo[airline]) {
      return generateStandardFlightNumber(flightNumberInfo[airline]);
    }

    return getRandomInRange({ min: 10_000, max: 99_999 }).toString();
  };

  return fake(factory, options);
}
