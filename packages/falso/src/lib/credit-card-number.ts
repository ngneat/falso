import { FakeOptions, fake } from './core/core';
import { rand } from './rand';
import { data } from './credit-card-number.json';

type Issuer =
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
 * @category Finance
 *
 * @example
 *
 * randCreditCardNumber()
 *
 * @example
 *
 * randCreditCardNumber({ issuer: 'Visa'})
 *
 * @example
 *
 * randCreditCardNumber({ length: 10 })
 *
 */

export function randCreditCardNumber<
  Options extends FakeOptions & {
    issuer?: Issuer;
  } = never
>(options?: Options) {
  let formats = data.map(({ formats }) => formats).flat();

  if (options?.issuer) {
    formats =
      data.find((card) => {
        return card.issuer === options.issuer;
      })?.formats || [];
  }

  const minNumb = 0;
  const maxNumb = 9;

  let cardsArray = Array.from({ length: options?.length || 1 }, (_, index) => {
    return rand(formats).replace(/#/g, () => {
      return (
        '' + (Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb)
      );
    });
  }) as any;

  return fake(cardsArray, options);
}
