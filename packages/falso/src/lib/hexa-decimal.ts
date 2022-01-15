import { fake, FakeOptions } from './core/core';
import { randBoolean } from './boolean';
import { randNumber } from './number';

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

function generator() {
  const char = randBoolean()
    ? digits[randNumber({ min: 0, max: 9 })]
    : letters[randNumber({ min: 0, max: 5 })];

  return `0x${char}`;
}

/**
 * Generate a random hexa decimal.
 *
 * @category System
 *
 * @example
 *
 * randHexaDecimal()
 *
 * @example
 *
 * randHexaDecimal({ length: 10 })
 *
 */
export function randHexaDecimal<Options extends FakeOptions>(
  options?: Options
) {
  return fake(generator, options);
}
