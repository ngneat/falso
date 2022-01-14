import { FakeOptions, fake } from './core/core';
import { data } from './job-type.json';

/**
 * Generate a random job-type.
 *
 * @category TBD
 *
 * @example
 *
 * jobType()
 *
 * @example
 *
 * jobType({ length: 10 })
 *
 */
export function jobType<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
