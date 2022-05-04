import { fake, FakeOptions } from './core/core';
import { randNumber } from './number';

function generator() {
  return randNumber({min:0, max:15}).toString(16);
}

/**
 * Generate a random hexa decimal.
 *
 * @category system
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
export function randHexaDecimal<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(generator, options);
}
