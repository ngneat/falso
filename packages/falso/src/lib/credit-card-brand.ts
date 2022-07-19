import { fake, FakeOptions } from './core/core';
import { data } from './credit-card-brand.json';

/**
 * Generate a random credit card brand.
 *
 * @category Finance
 *
 * @example
 *
 * randCreditCardBrand()
 *
 * @example
 *
 * randCreditCardBrand({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'American Express'
 * 'T-Union'
 * 'UnionPay'
 */

export function randCreditCardBrand<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
