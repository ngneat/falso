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
 * @example
 *
 * randBitcoinAddress({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randBitcoinAddress<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => randSequence({ size: 33 }), options);
}
