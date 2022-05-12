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
import { objectIsUnique } from './core/unique-validators';

export interface CreditCardOptions extends FakeOptions {
  fullName?: string;
  brand?: Brand;
}

export interface CreditCard {
  ccv: string;
  brand: string;
  number: string;
  account: string;
  fullName: string;
  type: 'Credit' | 'Debit';
  validFrom: string;
  untilEnd: string;
}

/**
 * Generate a random credit card.
 *
 * @category finance, entities
 *
 * @example
 *
 * randCreditCard()
 *
 * @example
 *
 * randCreditCard({ fullName: 'Mr Ryan Smee' })
 *
 * @example
 *
 * randCreditCard({ brand: 'Visa' })
 *
 * @example
 *
 * randCreditCard({ length: 10 })
 *
 * @example
 *
 * randCreditCard({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randCreditCard<Options extends CreditCardOptions = never>(
  options?: Options
) {
  const factory: () => CreditCard = () => {
    const fullName =
      options?.fullName ??
      `${randPersonTitle()} ${randFullName({ withAccents: false })}`;
    const brand = options?.brand ?? (randCreditCardBrand() as Brand);

    const dateOptions: Intl.DateTimeFormatOptions = {
      month: 'numeric',
      year: '2-digit',
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
      fullName,
      brand,
      validFrom,
      untilEnd,
      ccv: randCreditCardCVV(),
      number: randCreditCardNumber({ brand }),
      account: randAccount(),
      type: rand(['Credit', 'Debit']),
    };
  };

  return fake(factory, options, { uniqueComparer: checkUnique });
}

const checkUnique: (card: CreditCard, cards: CreditCard[]) => boolean = (
  card: CreditCard,
  cards: CreditCard[]
) => objectIsUnique(card, cards, ['number']);
