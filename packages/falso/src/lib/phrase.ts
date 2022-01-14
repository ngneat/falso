import { FakeOptions, fake } from './core/core';
import { data } from './phrase.json';

/**
 * Generate a random phrase.
 *
 * @category TBD
 *
 * @example
 *
 * phrase()
 *
 * @example
 *
 * phrase({ length: 10 })
 *
 */
export function phrase<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
