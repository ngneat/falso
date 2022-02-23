import { fake, FakeOptions, getRandomInRange, randElement } from './core/core';
import { rand } from './rand';
import { data } from './credit-card-number.json';

export interface CreditCardNumberOptions extends FakeOptions {
  issuer?: Issuer;
}

export type Issuer =
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
  const issuer: Issuer | string = options?.issuer ?? rand(data).issuer;
  const formats = data.find((card) => card.issuer === issuer)?.formats;

  if (!formats) {
    throw new Error('Unable to generate card number for this issuer');
  }

  const factory: () => string = () => {
    return randElement(formats).replace(/#/g, () => {
      return getRandomInRange({ min: 0, max: 9 }).toString();
    });
  };

  return fake(factory, options);
}
