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
 * @example
 * BiBwVceNYUIzZiIM3iT5Pfa11H9eXIeBN
 * 4LWPPHhYOB0OIJg8gMamYBCkVWCe96TBn
 * RDdJ4ZMgtiT6KnSmAAncSlpgr2DlOMV8V
 */

export function randBitcoinAddress<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => randSequence({ size: 33 }), options);
}
