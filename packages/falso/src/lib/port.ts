import { FakeOptions, fake } from './core/core';
import { randNumber } from './number';

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
  return fake(() => randNumber({ min: 0, max: 65_353 }), options);
}
