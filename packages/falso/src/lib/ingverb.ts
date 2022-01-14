import { FakeOptions, fake } from './core/core';
import { data } from './ingverb.json';

/**
 * Generate a random ingverb.
 *
 * @category TBD
 *
 * @example
 *
 * ingverb()
 *
 * @example
 *
 * ingverb({ length: 10 })
 *
 */
export function ingverb<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
