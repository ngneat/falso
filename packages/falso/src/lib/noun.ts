import { FakeOptions, fake } from './core/core';
import { data } from './noun.json';

/**
 * Generate a random noun.
 *
 * @category TBD
 *
 * @example
 *
 * noun()
 *
 * @example
 *
 * noun({ length: 10 })
 *
 */
export function noun<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
