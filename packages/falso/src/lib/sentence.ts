import { FakeOptions, fake } from './core/core';
import { data } from './sentence.json';

/**
 * Generate a random sentence.
 *
 * @category TBD
 *
 * @example
 *
 * sentence()
 *
 * @example
 *
 * sentence({ length: 10 })
 *
 */
export function sentence<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
