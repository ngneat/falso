import { FakeOptions, fake } from './core/core';
import { data } from './department.json';

/**
 * Generate a random department.
 *
 * @category TBD
 *
 * @example
 *
 * department()
 *
 * @example
 *
 * department({ length: 10 })
 *
 */
export function department<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
