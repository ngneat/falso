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
 * @example
 *
 * randMac({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
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
