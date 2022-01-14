import { fake, FakeOptions } from './core/core';
import { randomSequence } from './random-sequence';

/**
 * Generate a random bitcoin-address.
 *
 * @category TBD
 *
 * @example
 *
 * bitcoinAddress()
 *
 * @example
 *
 * bitcoinAddress({ length: 10 })
 *
 */
export function bitcoinAddress<Options extends FakeOptions>(options?: Options) {
  return fake(() => randomSequence({ size: 33 }), options);
}
