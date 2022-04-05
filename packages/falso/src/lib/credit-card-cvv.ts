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
 * @example
 *
 * randCreditCardCVV({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randCreditCardCVV<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(
    () => getRandomInRange({ min: 100, max: 999 }).toString(),
    options
  );
}
