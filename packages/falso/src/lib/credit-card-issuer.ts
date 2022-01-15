import { fake, FakeOptions } from './core/core';
import { data } from './credit-card-issuer.json';

/**
 * Generate a random credit card issuer.
 *
 * @category Finance
 *
 * @example
 *
 * randCreditCardIssuer()
 *
 * @example
 *
 * randCreditCardIssuer({ length: 10 })
 *
 */
export function randCreditCardIssuer<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
