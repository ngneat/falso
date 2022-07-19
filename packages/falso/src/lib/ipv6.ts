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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 621d:c533:5688:73b8:24fe:a5ca:2ba6:6555
 * eb2e:13a3:a403:2dc5:a016:1f14:be4c:7b2a
 * 09e4:b9bf:8d18:e6fb:cfdd:34b5:4341:c58d
 */

export function randIpv6<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => {
    return Array.from({ length: 8 }, () => {
      return Array.from({ length: 4 }, () => randHexaDecimal()).join('');
    }).join(':');
  }, options);
}
