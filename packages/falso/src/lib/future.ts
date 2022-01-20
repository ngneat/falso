import { randBetweenDate } from './between';
import { fake, FakeOptions } from './core/core';

interface FutureOptions extends FakeOptions {
  years?: number;
}

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
export function randFutureDate<Options extends FutureOptions>(
  options?: Options
) {
  const years = options?.years ?? 1;

  if (years < 0) {
    throw new Error('years must be positive, use past() instead');
  }

  const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;
  const from = new Date();
  const to = new Date(from.getTime() + yearsInMilliseconds);
  return fake(() => randBetweenDate({ from, to }), options);
}
