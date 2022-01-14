import { FakeOptions, fake } from './core/core';
import { data } from './locale.json';

/**
 * Generate a random locale.
 *
 * @category TBD
 *
 * @example
 *
 * locale()
 *
 * @example
 *
 * locale({ length: 10 })
 *
 */
export function locale<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
