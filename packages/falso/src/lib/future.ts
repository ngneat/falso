import { randBetween } from './between';
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
 * randFuture()
 *
 * @example
 *
 * randFuture({ length: 10 })
 *
 * @example
 *
 * future({ years: 10 })
 *
 */
export function randFuture<Options extends FutureOptions>(options?: Options) {
  const years = options?.years ?? 1;

  if (years < 0) {
    throw new Error('years must be positive, use past() instead');
  }

  const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;
  const from = new Date();
  const to = new Date(from.getTime() + yearsInMilliseconds);
  return fake(() => randBetween({ from, to }), options);
}
