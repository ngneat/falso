import { fake, FakeOptions } from './core/core';
import { randSequence } from './sequence';

/**
 * Generate a random bitcoin-address.
 *
 * @category finance
 *
 * @example
 *
 * randBitcoinAddress()
 *
 * @example
 *
 * randBitcoinAddress({ length: 10 })
 *
 */
export function randBitcoinAddress<Options extends FakeOptions>(
  options?: Options
) {
  return fake(() => randSequence({ size: 33 }), options);
}
