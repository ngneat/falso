import { randBetweenDate } from './between-date';
import { fake, FakeOptions } from './core/core';

interface FutureOptions extends FakeOptions {
  years?: number;
}
const millisecondsInYear = 365 * 24 * 60 * 60 * 1000;

/**
 * Generate a random future.
 *
 * @category date
 *
 * @example
 *
 * randFutureDate()
 *
 * @example
 *
 * randFutureDate({ length: 10 })
 *
 * @example
 *
 * randFutureDate({ years: 10 }) // default is 1
 *
 */
export function randFutureDate<Options extends FutureOptions = never>(
  options?: Options
) {
  const years = options?.years ?? 1;

  if (years <= 0) {
    throw new Error('Years must be positive, use past() instead');
  }

  const yearsInMilliseconds = years * millisecondsInYear;
  const from = new Date();
  const to = new Date(from.getTime() + yearsInMilliseconds);
  return fake(() => randBetweenDate({ from, to }), options);
}
