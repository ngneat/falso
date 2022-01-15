import { fake, FakeOptions } from './core/core';
import { data } from './credit-card-issuer.json';

export function randCreditCardIssuer<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
