import { randBetweenDate } from './between-date';
import { fake, FakeOptions } from './core/core';

interface SoonOptions extends FakeOptions {
  days?: number;
}

/**
 * Generate a random soon.
 *
 * @category date
 *
 * @example
 *
 * randSoonDate()
 *
 * @example
 *
 * randSoonDate({ days: 5 }) // default is 1
 *
 * @example
 *
 * randSoonDate({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randSoonDate<Options extends SoonOptions = never>(
  options?: Options
) {
  const days = options?.days ?? 1;

  if (days < 1) {
    throw new Error('days must be positive, use recent() instead');
  }

  const daysInMilliseconds = days * 24 * 60 * 60 * 1000;
  const from = new Date();
  const to = new Date(from.getTime() + daysInMilliseconds);
  return fake(() => randBetweenDate({ from, to }), options);
}
