import { randBetweenDate } from './between';
import { fake, FakeOptions } from './core/core';

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
 */
export function randRecentDate<Options extends RecentOptions>(
  options?: Options
) {
  const days = options?.days ?? 1;

  if (days < 1) {
    throw new Error('days must be positive, use soon() instead');
  }

  const daysInMilliseconds = days * 24 * 60 * 60 * 1000;
  const to = new Date();
  const from = new Date(to.getTime() - daysInMilliseconds);

  return fake(() => randBetweenDate({ from, to }), options);
}
