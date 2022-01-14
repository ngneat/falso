import { FakeOptions, fake } from './core/core';
import { data } from './bear.json';

/**
 * Generate a random bear.
 *
 * @category TBD
 *
 * @example
 *
 * bear()
 *
 * @example
 *
 * bear({ length: 10 })
 *
 */
export function bear<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
