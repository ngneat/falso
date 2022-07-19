import { fake, FakeOptions, getRandomInRange } from './core/core';

/**
 * Generate a random credit card CVV.
 *
 * @category Finance
 *
 * @example
 *
 * randCreditCardCVV()
 *
 * @example
 *
 * randCreditCardCVV({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randCreditCardCVV<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(
    () => getRandomInRange({ min: 100, max: 999 }).toString(),
    options
  );
}
