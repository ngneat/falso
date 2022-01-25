import { FakeOptions, fake } from './core/core';
import { data } from './ethereum-address.json';

/**
 * Generate a random ethereum address.
 *
 * @category Finance
 *
 * @example
 *
 * randEthereumAddress()
 *
 * @example
 *
 * randEthereumAddress({ length: 10 })
 *
 */
export function randEthereumAddress<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
