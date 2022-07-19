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
 *
 * @automaticallyGeneratedExamples
 * @example
 * '0x958aa9ddbd62f989dec2fd1468bf436aebeb8be6'
 * '0x9a7a3607dc4617deff6d4f9ca5d8c0beba0cffc5'
 * '0xf5dcc57cb74623d2b3bfa6be9d96902f4bacb0b4'
 */

export function randEthereumAddress<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
