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
 * @example
 * 45-89-7f-20-d3-bf
 * fc-e6-d6-46-3b-5c
 * 96-74-a8-61-9d-52
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
