import { FakeOptions, fake } from './core/core';
import { data } from './job-descriptor.json';

/**
 * Generate a random job descriptor.
 *
 * @category jobs
 *
 * @example
 *
 * randJobDescriptor()
 *
 * @example
 *
 * randJobDescriptor({ length: 10 })
 *
 * @example
 *
 * randJobDescriptor({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randJobDescriptor<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
