import { FakeOptions, fake } from './core/core';
import { data } from './ethereum-address.json';

/**
 * Generate a random ethereum-address.
 *
 * @category TBD
 *
 * @example
 *
 * ethereumAddress()
 *
 * @example
 *
 * ethereumAddress({ length: 10 })
 *
 */
export function ethereumAddress<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
