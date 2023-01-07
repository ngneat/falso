import { fake, FakeOptions, getRandomInRange, randElement } from './core/core';
import { data } from './credit-card-number.json';
import { randCreditCardBrand } from './credit-card-brand';

interface CreditCardNumberOptions extends FakeOptions {
  brand?: Brand;
}

export type Brand =
  | 'American Express'
  | 'UnionPay'
  | 'Diners Club'
  | 'Discover Card'
  | 'RuPay'
  | 'JCB'
  | 'Maestro'
  | 'Dankort'
  | 'Mastercard'
  | 'Visa'
  | 'Visa Electron'
  | 'UATP';

/**
 * Generate a random credit card number.
 *
 * @category finance
 *
 * @example
 *
 * randCreditCardNumber()
 *
 * @example
 *
 * randCreditCardNumber({ brand: 'Visa' })
 *
 * @example
 *
 * randCreditCardNumber({ length: 10 })
 *
 */
export function randCreditCardNumber<
  Options extends CreditCardNumberOptions = never
>(options?: Options) {
  const brand = options?.brand ?? randCreditCardBrand();

  const formats = data.find((card) => card.brand === brand)?.formats;
  const fallBackFormat = ['#### #### #### ####'];

  const factory: () => string = () => {
    return randElement(formats || fallBackFormat).replace(/#/g, () => {
      return getRandomInRange({ min: 0, max: 9 }).toString();
    });
  };

  return fake(factory, options);
}
