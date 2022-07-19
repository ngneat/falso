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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 35336
 * 52484
 * 56847
 */

export function randPort<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => randNumber({ min: 0, max: 65_535 }), options);
}
