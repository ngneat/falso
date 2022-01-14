import { FakeOptions, fake } from './core/core';
import { data } from './job-descriptor.json';

/**
 * Generate a random job-descriptor.
 *
 * @category TBD
 *
 * @example
 *
 * jobDescriptor()
 *
 * @example
 *
 * jobDescriptor({ length: 10 })
 *
 */
export function jobDescriptor<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
