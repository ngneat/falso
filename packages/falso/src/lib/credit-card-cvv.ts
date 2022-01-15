import { fake, FakeOptions, getRandomInRange } from './core/core';

/**
 * Generate a random credit card CVV.
 *
 * @category Finance
 *
 * @example
 *
 * creditCardCVV()
 *
 * @example
 *
 * creditCardCVV({ length: 10 })
 *
 */
export function creditCardCVV<Options extends FakeOptions>(options?: Options) {
  return fake(
    () => getRandomInRange({ min: 100, max: 999 }).toString(),
    options
  );
}
