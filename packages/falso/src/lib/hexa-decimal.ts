import { fake, FakeOptions } from './core/core';
import { randBoolean } from './boolean';

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

function generator() {
  return '' + (randBoolean() ? fake(digits) : fake(letters));
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
export function randHexaDecimal<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(generator, options);
}
