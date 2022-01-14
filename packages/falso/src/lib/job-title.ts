import { FakeOptions, fake } from './core/core';
import { data } from './job-title.json';

/**
 * Generate a random job-title.
 *
 * @category TBD
 *
 * @example
 *
 * jobTitle()
 *
 * @example
 *
 * jobTitle({ length: 10 })
 *
 */
export function jobTitle<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
