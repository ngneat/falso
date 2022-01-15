import { fake, FakeOptions } from './core/core';
import { randomNumber } from './random-number';
import { randomBoolean } from './random-boolean';

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

function generator() {
  const char = randomBoolean()
    ? digits[randomNumber({ min: 0, max: 9 })]
    : letters[randomNumber({ min: 0, max: 5 })];

  return `0x${char}`;
}

export function datatypeHexaDecimal<Options extends FakeOptions>(
  options?: Options
) {
  return fake(generator, options);
}
