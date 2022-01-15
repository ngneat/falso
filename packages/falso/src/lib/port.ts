import { FakeOptions, fake } from './core/core';
import { data } from './port.json';

/**
 * Generate a random port.
 *
 * @category internet
 *
 * @example
 *
 * randPort()
 *
 * @example
 *
 * randPort({ length: 10 })
 *
 */
export function randPort<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
