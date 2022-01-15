import { randBetweenDate } from './between';
import { fake, FakeOptions } from './core/core';

interface PastOptions extends FakeOptions {
  years: number;
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
 * randPastDate({ years: 2 })
 *
 * @example
 *
 * randPastDate({ length: 10 })
 *
 */
export function randPastDate<Options extends PastOptions>(options?: Options) {
  const years = options?.years ?? 1;

  if (years < 0) {
    throw new Error('years must be positive, use future() instead');
  }

  const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;
  const to = new Date();
  const from = new Date(to.getTime() - yearsInMilliseconds);

  return fake(() => randBetweenDate({ from, to }), options);
}
