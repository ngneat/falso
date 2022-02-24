import { fake, FakeOptions } from './core/core';
import { randCreditCardCVV } from './credit-card-cvv';
import { randCreditCardBrand } from './credit-card-brand';
import { Brand, randCreditCardNumber } from './credit-card-number';
import { randAccount } from './account';
import { randFullName } from './full-name';
import { rand } from './rand';
import { randPastDate } from './past-date';
import { randFutureDate } from './future-date';
import { randPersonTitle } from './person-title';

export interface CreditCardOptions extends FakeOptions {
  brand?: Brand;
}

export interface CreditCard {
  ccv: string;
  brand: string;
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
    const brand = options?.brand ?? (randCreditCardBrand() as Brand);

    const title = randPersonTitle();
    const fullName = randFullName({ withAccents: false });
    const name = `${title} ${fullName}`;
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
      brand,
      validFrom,
      untilEnd,
      ccv: randCreditCardCVV(),
      number: randCreditCardNumber({ brand }),
      account: randAccount(),
      type: rand(['Credit', 'Debit']),
    };
  };

  return fake(factory, options);
}
