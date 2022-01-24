import { FakeOptions, fake } from './core/core';
import { data } from './job-descriptor.json';

/**
 * Generate a random job descriptor.
 *
 * @category Jobs
 *
 * @example
 *
 * randJobDescriptor()
 *
 * @example
 *
 * randJobDescriptor({ length: 10 })
 *
 */
export function randJobDescriptor<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
