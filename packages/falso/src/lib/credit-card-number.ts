import { fake, FakeOptions, getRandomInRange, randElement } from './core/core';
import { rand } from './rand';
import { data } from './credit-card-number.json';

export interface CreditCardNumberOptions extends FakeOptions {
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
 * @example
 *
 * randCreditCardNumber({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randCreditCardNumber<
  Options extends CreditCardNumberOptions = never
>(options?: Options) {
  const brand: Brand | string = options?.brand ?? rand(Object.keys(data));

  const formats = data.find((card) => card.brand === brand)?.formats;
  const fallBackFormat = ['#### #### #### ####'];

  const factory: () => string = () => {
    return randElement(formats || fallBackFormat).replace(/#/g, () => {
      return getRandomInRange({ min: 0, max: 9 }).toString();
    });
  };

  return fake(factory, options);
}
