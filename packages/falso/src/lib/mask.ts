import { fake, FakeOptions, getRandomInRange } from './core/core';

/**
 * Generate a random mask.
 *
 * @category TBD
 *
 * @example
 *
 * mask()
 *
 * @example
 *
 * mask({ length: 10 })
 *
 */
export function mask<Options extends FakeOptions>(options?: Options) {
  return fake(
    () => getRandomInRange({ min: 1000, max: 9999 }).toString(),
    options
  );
}
