import { FakeOptions, fake } from './core/core';
import { data } from './cetacean.json';

/**
 * Generate a random cetacean.
 *
 * @category TBD
 *
 * @example
 *
 * cetacean()
 *
 * @example
 *
 * cetacean({ length: 10 })
 *
 */
export function cetacean<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
