import { randBetweenDate } from './between-date';
import { fake, FakeOptions } from './core/core';
import { dateIsUnique } from './core/unique-validators';

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
 * randFutureDate({ years: 10 }) // default is 1
 *
 * @example
 *
 * randFutureDate({ length: 10 })
 *
 * @example
 *
 * randFutureDate({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
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
  const factory: () => Date = () => randBetweenDate({ from, to });

  return fake(factory, options, dateIsUnique);
}
