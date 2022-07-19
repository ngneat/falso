import { fake, FakeOptions } from './core/core';
import { randHexaDecimal } from './hexa-decimal';

/**
 * Generate a random mac address.
 *
 * @category system
 *
 * @example
 *
 * randMac()
 *
 * @example
 *
 * randMac({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randMac<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(
    () =>
      Array.from(
        { length: 6 },
        () => randHexaDecimal() + randHexaDecimal()
      ).join('-'),
    options
  );
}
