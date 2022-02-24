import { fake, FakeOptions } from './core/core';
import { randCreditCardCVV } from './credit-card-cvv';
import { randCreditCardIssuer } from './credit-card-issuer';
import { Issuer, randCreditCardNumber } from './credit-card-number';
import { randAccount } from './account';
import { randFullName } from './full-name';
import { rand } from './rand';
import { randPastDate } from './past-date';
import { randFutureDate } from './future-date';
import { randPersonTitle } from './person-title';

export interface CreditCardOptions extends FakeOptions {
  issuer?: Issuer;
}

export interface CreditCard {
  ccv: string;
  issuer: string;
  number: string;
  account: string;
  name: string;
  type: 'Credit' | 'Debit';
  validFrom: string;
  untilEnd: string;
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
export function randCreditCard<Options extends CreditCardOptions = never>(
  options?: Options
) {
  const factory: () => CreditCard = () => {
    const title = randPersonTitle();
    const fullName = randFullName({ withAccents: false });
    const name = `${title} ${fullName}`;
    const issuer = options?.issuer ?? randCreditCardIssuer();
    const dateOptions: Intl.DateTimeFormatOptions = {
      month: 'numeric',
      year: 'numeric',
    };
    const validFrom = randPastDate({ years: 1 }).toLocaleDateString(
      'en-GB',
      dateOptions
    );
    const untilEnd = randFutureDate({ years: 2 }).toLocaleDateString(
      'en-GB',
      dateOptions
    );

    return {
      name,
      issuer,
      validFrom,
      untilEnd,
      ccv: randCreditCardCVV(),
      number: randCreditCardNumber({ issuer }),
      account: randAccount(),
      type: rand(['Credit', 'Debit']),
    };
  };

  return fake(factory, options);
}
