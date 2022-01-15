import { fake, FakeOptions, getRandomInRange } from './core/core';

/**
 * Generate a random mask.
 *
 * @category Finance
 *
 * @example
 *
 * randMask()
 *
 * @example
 *
 * randMask({ length: 10 })
 *
 */
export function randMask<Options extends FakeOptions>(options?: Options) {
  return fake(
    () => getRandomInRange({ min: 1000, max: 9999 }).toString(),
    options
  );
}
