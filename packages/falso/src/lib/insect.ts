import { FakeOptions, fake } from './core/core';
import { data } from './insect.json';

/**
 * Generate a random insect.
 *
 * @category TBD
 *
 * @example
 *
 * insect()
 *
 * @example
 *
 * insect({ length: 10 })
 *
 */
export function insect<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
