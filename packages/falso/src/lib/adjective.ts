import { FakeOptions, fake } from './core/core';
import { data } from './adjective.json';

/**
 * Generate a random adjective.
 *
 * @category text
 *
 * @example
 *
 * randAdjective()
 *
 * @example
 *
 * randAdjective({ length: 10 })
 *
 */
export function randAdjective<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
