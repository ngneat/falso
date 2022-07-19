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
 *
 * @automaticallyGeneratedExamples
 */

export function randBitcoinAddress<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => randSequence({ size: 33 }), options);
}
