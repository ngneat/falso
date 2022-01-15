import { fake, FakeOptions } from './core/core';
import { randHexaDecimal } from './hexa-decimal';

/**
 * Generate a random ipv6.
 *
 * @category internet
 *
 * @example
 *
 * randIpv6()
 *
 * @example
 *
 * randIpv6({ length: 10 })
 *
 */
export function randIpv6<Options extends FakeOptions>(options?: Options) {
  return fake(() => {
    return Array.from({ length: 8 }, () => {
      return Array.from({ length: 4 }, () => randHexaDecimal()).join('');
    }).join(':');
  }, options);
}
