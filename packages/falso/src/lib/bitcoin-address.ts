import { fake, FakeOptions } from './core/core';
import { randomSequence } from './sequence';

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
  return fake(() => randomSequence({ size: 33 }), options);
}
