import { FakeOptions, fake } from './core/core';
import { randomNumber } from './random-number';

export function creditCardNumber<Options extends FakeOptions>(
  options?: Options
) {
  return fake(() => {
    let cardNumber = '';

    for (let i = 0; i < randomNumber({ min: 12, max: 19 }); i++) {
      cardNumber += randomNumber({ min: 0, max: 9 });
    }

    return cardNumber;
  }, options);
}
