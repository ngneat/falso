import { between } from './between';
import { fake, FakeOptions } from './core/core';

interface SoonOptions extends FakeOptions {
  days?: number;
}

/**
 * Generate a random soon.
 *
 * @category TBD
 *
 * @example
 *
 * soon()
 *
 * @example
 *
 * soon({ length: 10 })
 *
 */
export function soon<Options extends SoonOptions>(options?: Options) {
  const days = options?.days ?? 1;

  if (days < 1) {
    throw new Error('days must be positive, use recent() instead');
  }

  const daysInMilliseconds = days * 24 * 60 * 60 * 1000;
  const from = new Date();
  const to = new Date(from.getTime() + daysInMilliseconds);
  return fake(() => between({ from, to }), options);
}
