import { randBetweenDate } from './between-date';
import { fake, FakeOptions } from './core/core';
import { dateIsUnique } from './core/unique-validators';

interface RecentOptions extends FakeOptions {
  days?: number;
}

/**
 * Generate a random recent date.
 *
 * @category date
 *
 * @example
 *
 * randRecentDate()
 *
 * @example
 *
 * randRecentDate({ days: 10 }) // default is 1
 *
 * @example
 *
 * randRecentDate({ length: 10 })
 *
 * @example
 *
 * randRecentDate({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randRecentDate<Options extends RecentOptions = never>(
  options?: Options
) {
  const days = options?.days ?? 1;

  if (days < 1) {
    throw new Error('days must be positive, use soon() instead');
  }

  const daysInMilliseconds = days * 24 * 60 * 60 * 1000;
  const to = new Date();
  const from = new Date(to.getTime() - daysInMilliseconds);

  return fake(() => randBetweenDate({ from, to }), options, {
    uniqueComparer: dateIsUnique,
  });
}
