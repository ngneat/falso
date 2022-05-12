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
 * @example
 *
 * randEthereumAddress({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randEthereumAddress<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
