import { randBetweenDate } from './between-date';
import { fake, FakeOptions } from './core/core';

interface PastOptions extends FakeOptions {
  years?: number;
}

/**
 * Generate a random past date.
 *
 * @category date
 *
 * @example
 *
 * randPastDate()
 *
 * @example
 *
 * randPastDate({ length: 10 })
 *
 * @example
 *
 * randPastDate({ years: 2 }) // default is 1
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * Sun May 01 2022 04:45:01 GMT+0200 (Central European Summer Time)
 * Wed Mar 02 2022 06:23:07 GMT+0100 (Central European Standard Time)
 * Mon Dec 27 2021 15:33:39 GMT+0100 (Central European Standard Time)
 */

export function randPastDate<Options extends PastOptions = never>(
  options?: Options
) {
  const years = options?.years ?? 1;

  if (years <= 0) {
    throw new Error('Years must be positive, use future() instead');
  }

  const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;
  const to = new Date();
  const from = new Date(to.getTime() - yearsInMilliseconds);

  return fake(() => randBetweenDate({ from, to }), options);
}
