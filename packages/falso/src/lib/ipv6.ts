import { FakeOptions, fake } from './core/core';
import { data } from './ipv6.json';

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
  return fake(data, options);
}
