import { FakeOptions, fake } from './core/core';
import { data } from './priority.json';

/**
 * Generate a random priority.
 *
 * @category general
 *
 * @example
 *
 * randPriority()
 *
 * @example
 *
 * randPriority({ length: 10 })
 *
 */
export function randPriority<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
