import { FakeOptions, fake } from './core/core';
import { data } from './ip.json';

/**
 * Generate a random ip.
 *
 * @category internet
 *
 * @example
 *
 * randIp()
 *
 * @example
 *
 * randIp({ length: 10 })
 *
 */
export function randIp<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
