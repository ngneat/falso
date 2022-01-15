import { FakeOptions, fake } from './core/core';
import { randNumber } from './number';

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
 * randCreditCardNumber({ length: 10 })
 *
 */
export function randCreditCardNumber<Options extends FakeOptions>(
  options?: Options
) {
  return fake(() => {
    let cardNumber = '';

    for (let i = 0; i < randNumber({ min: 12, max: 19 }); i++) {
      cardNumber += randNumber({ min: 0, max: 9 });
    }

    return cardNumber;
  }, options);
}
