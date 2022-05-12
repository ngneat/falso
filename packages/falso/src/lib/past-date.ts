import { randBetweenDate } from './between-date';
import { fake, FakeOptions } from './core/core';
import { dateIsUnique } from './core/unique-validators';

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
 * randPastDate({ years: 2 }) // default is 1
 *
 * @example
 *
 * randPastDate({ length: 10 })
 *
 * @example
 *
 * randPastDate({ length: 10, priority: 'unique' }) // default is 'length'
 *
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

  return fake(() => randBetweenDate({ from, to }), options, {
    uniqueComparer: dateIsUnique,
  });
}
