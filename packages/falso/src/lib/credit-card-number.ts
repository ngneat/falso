import { fake, FakeOptions, getRandomInRange, randElement } from './core/core';
import { rand } from './rand';
import { data } from './credit-card-number.json';

export interface CreditCardNumberOptions extends FakeOptions {
  issuer?: Issuer;
}

const issuers = [
  'American Express',
  'UnionPay',
  'Diners Club',
  'Discover Card',
  'RuPay',
  'JCB',
  'Maestro',
  'Dankort',
  'Mastercard',
  'Visa',
  'Visa Electron',
  'UATP',
];

export type Issuer = typeof issuers[number];

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
 * randCreditCardNumber({ issuer: 'Visa' })
 *
 * @example
 *
 * randCreditCardNumber({ length: 10 })
 *
 */
export function randCreditCardNumber<
  Options extends CreditCardNumberOptions = never
>(options?: Options) {
  const issuer: Issuer | string = options?.issuer ?? rand(issuers);
  const formats = data.find((card) => card.issuer === issuer)?.formats;
  const fallBackFormat = ['#### #### #### ####'];

  const factory: () => string = () => {
    return randElement(formats || fallBackFormat).replace(/#/g, () => {
      return getRandomInRange({ min: 0, max: 9 }).toString();
    });
  };

  return fake(factory, options);
}
