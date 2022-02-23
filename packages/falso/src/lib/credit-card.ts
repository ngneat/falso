import { FakeOptions, fake } from './core/core';
import { randCreditCardCVV } from './credit-card-cvv';
import { randCreditCardIssuer } from './credit-card-issuer';
import { randCreditCardNumber } from './credit-card-number';
import { randAccount } from './account';
import { randFullName } from './full-name';

export interface CreditCard {
  ccv: string;
  issuer: string;
  number: string;
  account: string;
  name: string;
  type: string;
}

/**
 * Generate a random credit card.
 *
 * @category finance, entity
 *
 * @example
 *
 * randCreditCard()
 *
 * @example
 *
 * randCreditCard({ length: 10 })
 *
 */
export function randCreditCard<Options extends FakeOptions = never>(
  options?: Options
) {
  const factory: () => CreditCard = () => {
    return {
      ccv: randCreditCardCVV(),
      issuer: randCreditCardIssuer(),
      number: randCreditCardNumber(),
      account: randAccount(),
      name: randFullName({ withAccents: false }),
      type: 'credit',
    };
  };

  return fake(factory, options);
}
