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
  }
>(options?: Options) {
  let card = rand(data);

  if (options?.issuer) {
    const issuerCard = data.find((card) => {
      return card.issuer === options.issuer;
    });

    if (issuerCard) card = issuerCard;
  }

  const minNumb = 0;
  const maxNumb = 9;
  const format = rand(card.formats);
  const noOfCards = options?.length || 1;

  let cardsArray = Array.from({ length: noOfCards }, (_, index) =>
    format.replace(/#/g, () => {
      return (
        '' + (Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb)
      );
    })
  ) as any;

  return noOfCards == 1 ? cardsArray[0] : cardsArray;
}
