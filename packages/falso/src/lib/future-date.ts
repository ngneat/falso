import { randBetweenDate } from './between-date';
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
 *
 * @automaticallyGeneratedExamples
 * @example
 * Fri Mar 10 2023 19:14:56 GMT+0100 (Central European Standard Time)
 * Sun Jun 04 2023 16:20:23 GMT+0200 (Central European Summer Time)
 * Sun Jul 16 2023 23:09:32 GMT+0200 (Central European Summer Time)
 */

export function randFutureDate<Options extends FutureOptions = never>(
  options?: Options
) {
  const years = options?.years ?? 1;

  if (years <= 0) {
    throw new Error('Years must be positive, use past() instead');
  }

  const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;
  const from = new Date();
  const to = new Date(from.getTime() + yearsInMilliseconds);
  return fake(() => randBetweenDate({ from, to }), options);
}
