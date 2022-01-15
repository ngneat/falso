import { FakeOptions, fake } from './core/core';
import { data } from './protocol.json';

/**
 * Generate a random protocol.
 *
 * @category internet
 *
 * @example
 *
 * randProtocol()
 *
 * @example
 *
 * randProtocol({ length: 10 })
 *
 */
export function randProtocol<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
